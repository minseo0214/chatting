import '../public/index.css'
import { SendIcon } from './send'
import React, { useState } from 'react'

export function BottomMenu(props: { onSend: (text: string) => void }) {
  const [text, setText] = useState('')

  return (
    <div className='inputWrapper'>
      <input
        className='input'
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
      <SendIcon
        onSend={() => {
          props.onSend(text)
          setText('')
        }}
      />
    </div>
  )
}
