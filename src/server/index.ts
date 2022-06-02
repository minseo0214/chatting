import Koa from 'koa'
// import KoaRouter from 'koa-router'
import websockify from 'koa-websocket'
import KoaStatic from 'koa-static'

import { MessageToClient, MessageToServer } from '../shared/types'

const app = websockify(new Koa())
const port = 3000
const clients: websockify.MiddlewareContext<Koa.DefaultState>[] = []
// const route = new KoaRouter()

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

    console.log(clients.length)

    // TODO: 여기에서의 ctx는 지금 이 클로저 내의 한 개의 ctx에만 해당하기 때문에, 클라이언트 전부에게 보낼 수가 없다. 어떻게 해야 할까?
    for (const c of clients) {
      //C가 연결되었는지 확인.
      //if (c.websocket.readyState === c.websocket.CLOSED) continue
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
