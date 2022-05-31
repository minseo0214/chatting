//dom을 사용해서 html을 꾸민다.
import * as React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

const rootElement = document.getElementById('root')
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}

/*
function sendText() {
  var msg = {
    type: 'message',
    text: document.getElementById('text').value,
    id: clientID,
    date: Date.now(),
  }

  socket.send(JSON.stringify(msg))

  document.getElementById('text').value = ''
}

socket.onmessage = function (event) {
  console.log(event.data)
  var f = document.getElementById('chatbox').contentDocument
  var text = ''
  var msg = JSON.parse(event.data)
  var time = new Date(msg.date)
  var timeStr = time.toLocaleTimeString()
}
*/
