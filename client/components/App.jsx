import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import axios from 'axios';
import Messages from './Messages.jsx';
import MessageForm from './MessageForm.jsx';

function App() {

  const [messages, setMessages] = useState([])

  const addMessage = () => {

  }

  const getMessage = () => {
    axios.get('/api/messages')
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err))
  }

  const sendMessage = (data) => {
    axios.post('/api/messages', data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="container">
      <br />
      <div className="jumbotron">
        <h1 className="display-4">Send Message</h1>
        <br />
        <MessageForm sendMessage={sendMessage}/>
      </div>
      <Messages messages={messages} />

    </div>

  )
}

export default App;