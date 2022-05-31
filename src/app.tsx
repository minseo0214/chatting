import * as React from 'react'

export default function App() {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    const socket = new WebSocket(`ws://${window.location.host}`)

    socket.addEventListener('open', () => {
      //연결이 수립된 이후에만 데이터 전송
      socket.send(JSON.stringify({ a: 1 }))
      socket.addEventListener('message', (e) => {})
    })
  }, [])

  return <div onClick={() => setCount((prev) => prev + 1)}>{count}</div>
}
