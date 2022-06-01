import '../public/index.css'
import React, { useState } from 'react'
//import { NewTodoIcon } from './NewTodoIcon'

export function BottomMenu(props: { onSend: (text: string) => void }) {
  const [text, setText] = useState('')

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: '20px',
      }}
    >
      <input
        style={{
          height: '64px',
          display: 'flex',
          flexGrow: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '32px',
          borderWidth: 0,
          paddingLeft: '30px',
          fontFamily: 'Spline Sans Mono',
        }}
        placeholder='Write Message and Enter'
        onChange={(e) => {
          setText(e.target.value)
        }}
        value={text}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            props.onSend(text)
            setText('')
          }
        }}
      ></input>

      {/*

      <NewTodoIcon
        onClick={() => {
          onSubmit(todo)
          setTodo('')
        }}
    />*/}
    </div>
  )
}
