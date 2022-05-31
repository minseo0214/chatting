import * as Koa from 'koa'
import * as fs from 'fs'
import * as path from 'path'
import KoaStatic from 'koa-static'
//import WebSocket, { WebbSocketServer } from 'websocket'

// 파일 읽기: fs (import fs from 'fs')
// koa-send, koa-static, koa-serve ...

const app = new Koa()
const port = 3000

app.use(KoaStatic('./public'))

app.listen(port)
console.log('server start:' + port)
