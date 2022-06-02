import * as React from 'react'
import '../public/index.css'
import { useCallback, useState, useRef } from 'react'
import { BottomMenu } from './BottomMenu'
import { Chat } from './ChattingBox'

/*
1. client가 메세지를 엔터할 때마다, 서버로 보낸다.
2. server에서는 메시지를 client들에게 보낸다.

*/

//이렇게 빼도 되나요?
const socket = new WebSocket(`ws://${window.location.host}`)

export default function App() {
  const [text, setText] = React.useState({})
  const [flag, setFlag] = React.useState(false)
  const [chats, setChats] = React.useState([{ id: 0, t: 'welcome' }])

  let lastId = 1

  const onSend = useCallback((textNow: string) => {
    if (textNow.length === 0) {
      return
    }
    const newText = { text: textNow }
    setText(newText)
  }, [])

  React.useEffect(() => {
    if (!flag) {
      //const socket = new WebSocket(`ws://${window.location.host}`)

      //connection opened
      socket.addEventListener('open', () => {
        console.log('open socket')
      })

      //server에서 message 받아옴.
      socket.addEventListener('message', (e) => {
        const newChat = { id: lastId++, t: e.data }
        setChats((_chats) => [..._chats, newChat])
      })

      socket.addEventListener('close', (e) => {
        console.log('someone out')
      })
      setFlag(true)
    } else {
      socket.send(JSON.stringify(text))
    }
  }, [text])

  return (
    //전체 배경
    <div className='wrapper'>
      {/*대화창이 있는 배경 */}
      <div className='textBoxWrapper'>
        {chats.map((chat) => {
          return <Chat key={chat.id} chat={chat.t} />
        })}
      </div>
      <BottomMenu onSend={onSend} />
    </div>
  )
}
