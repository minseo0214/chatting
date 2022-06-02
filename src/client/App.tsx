import * as React from 'react'
import { useCallback } from 'react'

import { Nickname } from './Nickname'
import { MessageToClient, MessageToServer } from '../shared/types'
import { BottomMenu } from './BottomMenu'
import { Chat } from './Chat'

export default function App() {
  const [chats, setChats] = React.useState<MessageToClient[]>([])
  const [socket, setSocket] = React.useState<WebSocket>()
  const [name, setName] = React.useState<string>('')

  const onSend = useCallback(
    (textToSend: string) => {
      if (textToSend.length === 0) {
        return
      }

      const msgToServer: MessageToServer = {
        name: name,
        text: textToSend,
      }
      socket?.send(JSON.stringify(msgToServer))
    },
    [name, socket]
  )

  const onName = useCallback(
    (nameSave: string) => {
      setName(nameSave)
      console.log(name)
    },
    [name]
  )

  React.useEffect(() => {
    const _socket = new WebSocket(`ws://${window.location.host}`)
    setSocket(_socket)

    //server에서 message 받아옴.
    _socket.addEventListener('message', (e) => {
      const newChat: MessageToClient = JSON.parse(e.data)
      setChats((_chats) => [..._chats, newChat])
    })
  }, [])

  return (
    //전체 배경
    <div className='wrapper'>
      {/*Nickname 받기 */}
      {name === '' ? (
        <Nickname onName={onName} />
      ) : (
        <div className='nickname'>{name}</div>
      )}
      {/*대화창이 있는 배경 */}
      <div className='textBoxWrapper'>
        {chats.map((chat) => {
          return (
            <Chat
              key={chat.id}
              chat={chat.text}
              myName={name}
              name={chat.name}
              time={chat.time}
            />
          )
        })}
      </div>
      <BottomMenu onSend={onSend} />
    </div>
  )
}
