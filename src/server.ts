import Koa from 'koa'
// import KoaRouter from 'koa-router'
import websockify from 'koa-websocket'
import KoaStatic from 'koa-static'

const app = websockify(new Koa())
const port = 3000
const clients: any = []
// const route = new KoaRouter()

app.ws.use((ctx) => {
  clients.push(ctx)

  ctx.websocket.on('message', (msgBuf) => {
    const msg: { text: string } = JSON.parse(msgBuf.toString())
    console.log(clients.length)
    // TODO: 여기에서의 ctx는 지금 이 클로저 내의 한 개의 ctx에만 해당하기 때문에, 클라이언트 전부에게 보낼 수가 없다. 어떻게 해야 할까?
    for (const c of clients) {
      c.websocket.send(msg.text)
    }
  })
})

app.use(KoaStatic('./public'))

app.listen(port, () => {
  console.log('server start:' + port)
})
