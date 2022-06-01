import '../public/index.css'
import React, { useState } from 'react'
//import { NewTodoIcon } from './NewTodoIcon'

export function BottomMenu() {
  const [todo, setTodo] = useState('')

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
        placeholder='Add a task'
        onChange={(e) => {
          setTodo(e.target.value)
        }}
        value={todo}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setTodo('')
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
