import * as React from 'react'
import '../public/index'

export function SendIcon({ onSend }: { onSend(): void }) {
  return (
    <svg
      className='button'
      viewBox='-5 -5 32 32'
      fill='#000000'
      onClick={onSend}
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M2.01 21L23 12 2.01 3 2 10l15 2-15 2z' />
    </svg>
  )
}
