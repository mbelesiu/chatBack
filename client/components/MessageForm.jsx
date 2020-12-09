import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';

function MessageForm({ sendMessage }) {
  const [name, setName] = useState();
  const [message, setMessage] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage({
      'name': name,
      'message': message
    });
  }



  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <textarea
        name="message"
        type="text"
        value={message}
        placeholder="Your Message Here"
        onChange={(e) => setMessage(e.target.value)}
      />

      <br />
      <button className="btn btn-success">Send</button>
    </form>
  )

}

export default MessageForm;