import * as React from 'react'
import '../public/index.css'
import { useCallback, useState } from 'react'
import { BottomMenu } from './BottomMenu'
import { Todo } from './TodoList'

export default function App() {
  const [count, setCount] = React.useState(0)
  const [text, setText] = React.useState('')

  React.useEffect(() => {
    const socket = new WebSocket(`ws://${window.location.host}`)

    socket.addEventListener('open', () => {
      //연결이 수립된 이후에만 데이터 전송
      socket.send(JSON.stringify({ a: 1 }))
      socket.addEventListener('message', (e) => {})
    })
  }, [])

  //onClick={() => setCount((prev) => prev + 1)}> {count}
  //첫 div에 margin은 그냥 생기나?
  return (
    //전체 배경
    <div className='background'>
      <div className='title'>Todo today</div>
      <div className='text'>
        return <Todo />
      </div>
      <BottomMenu />
    </div>
  )
}
