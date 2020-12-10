import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import axios from 'axios';
import openSocket from 'socket.io-client';
import Messages from './Messages.jsx';
import MessageForm from './MessageForm.jsx';

function App() {

  const [messages, setMessages] = useState([])

  const socket = openSocket('http://localhost:3000');
  socket.on('message', (message) => {
    let tempMessages = messages;
    // console.log(`before unshift ${tempMessages}`);
    tempMessages.unshift(message);
    // console.log(`After unshit ${tempMessages}`);
    setMessages(tempMessages);
  })

  const getMessage = () => {
    axios.get('/api/messages')
      .then(({ data }) => {
        // console.log(data);
        data.reverse();
        setMessages(data);
      })
      .catch((err) => console.log(err))

  }

  const sendMessage = (data) => {
    axios.post('/api/messages', data)
      .then(() => (getMessage()))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getMessage();
  }, [])

  return (
    <div className="container">
      <br />
      <div className="jumbotron">
        <h1 className="display-4">Send Message</h1>
        <br />
        <MessageForm sendMessage={sendMessage} />
      </div>
      <Messages messages={messages} />

    </div>

  )
}

export default App;