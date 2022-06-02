import React from 'react'
import '../public/index.css'
import { isWhiteSpaceLike } from 'typescript'

export function Chat(props: { chat: string }) {
  return (
    <div className='textBox'>
      {/*계속 그리는것이 맞나요?*/}
      <div className='text'>{props.chat}</div>
    </div>
  )
}
