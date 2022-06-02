import React from 'react'

export function Chat(props: {
  chat: string
  myName: string
  name: string
  time: string
}) {
  console.log(props.myName, props.name)
  return (
    <div
      className='textBox'
      style={{
        background: props.name === props.myName ? 'lightgray' : 'white',
      }}
    >
      {/*계속 그리기*/}
      <div
        className='textBoxNickname'
        style={{
          color: props.name === props.myName ? 'black' : 'lightblue',
        }}
      >
        {props.name + ' | '}
      </div>
      <div className='text'>{props.chat}</div>
      <div className='time'>{props.time}</div>
    </div>
  )
}
