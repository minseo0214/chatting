import Koa from 'koa'
import websockify from 'koa-websocket'
import KoaStatic from 'koa-static'

import { MessageToClient, MessageToServer } from '../shared/types'

const app = websockify(new Koa())
const port = 3000
const clients: websockify.MiddlewareContext<Koa.DefaultState>[] = []

let lastChatId = 0

app.ws.use((ctx) => {
  clients.push(ctx)

  ctx.websocket.on('message', (msgBuf) => {
    const msg: MessageToServer = JSON.parse(msgBuf.toString())
    const msgToClient: MessageToClient = {
      id: lastChatId++,
      name: msg.name,
      text: msg.text,
      time: new Date().toISOString(),
    }

    for (const c of clients) {
      c.websocket.send(JSON.stringify(msgToClient))
    }
  })

  ctx.websocket.on('close', () => {
    const closedIndex = clients.findIndex((c) => {
      return c === ctx
    })
    if (closedIndex != -1) clients.splice(closedIndex, 1)
  })
})

app.use(KoaStatic('./public'))

app.listen(port, () => {
  console.log('server start:' + port)
})
