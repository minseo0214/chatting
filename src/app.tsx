import * as React from 'react'
import '../public/index.css'
import { useCallback, useState, useRef } from 'react'
import { BottomMenu } from './BottomMenu'
import { Todo } from './ChattingBox'

export default function App() {
  const [count, setCount] = React.useState(0)
  const [text, setText] = React.useState({})
  const cn = useRef(null)

  const onSend = useCallback((textNow: string) => {
    if (textNow.length === 0) {
      return
    }
    const newText = { text: textNow }
    setText(newText)
  }, [])

  React.useEffect(() => {
    const socket = new WebSocket(`ws://${window.location.host}`)

    socket.addEventListener('open', () => {
      //연결이 수립된 이후에만 데이터 전송
      socket.send('hello')
    })

    socket.addEventListener('message', (e) => {
      console.log('server', e.data)
      //socket.send(JSON.stringify(text))
    })
  }, [])

  return (
    //전체 배경
    <div className='background'>
      <div onClick={() => setCount((prev) => prev + 1)}>{count}</div>
      <div className='title'>Chatting Room</div>
      <div className='text'>
        <Todo />
      </div>
      <BottomMenu onSend={onSend} />
    </div>
  )
}
