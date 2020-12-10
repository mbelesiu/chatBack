import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';

function Messages({ messages }) {
  console.log(messages)
  return (
    <div>
      {messages.map((message) => (
        <>
          <h6><b>{message.name}</b></h6>
          <p>{message.message}</p>
        </>)
      )}
    </div>
  )

}
export default Messages;