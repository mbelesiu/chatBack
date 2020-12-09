import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';

function Messages({ messages }) {

  return messages.length === 0 ? null : (
    <div>
      {messages.map((message) => {
        <>
          <h3>{message.name}</h3>
          <p>{message.message}</p>
        </>
      })}
    </div>
  )

}
export default Messages;