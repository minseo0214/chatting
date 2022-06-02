import React, { useState } from 'react'

export function Nickname(props: { onName: (name: string) => void }) {
  const [name, setName] = useState('')

  return (
    <div className='inputWrapper'>
      <input
        className='input'
        placeholder='first, Write NickName and Enter'
        onChange={(e) => {
          setName(e.target.value)
        }}
        value={name}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            props.onName(name)
          }
        }}
      />
    </div>
  )
}
