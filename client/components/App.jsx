import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import axios from 'axios';

function App() {

  return (
    <div className="container">
      <br />
      <div className="jumbotron">
        <h1 className="display-4">Send Message</h1>
        <br />
        <input id="name" className="form-control" placeholder="Name" />
          <br />
          <textarea id="message" className="form-control" placeholder="Your Message Here" />

          <br />
          <button id="send" className="btn btn-success">Send</button>
      </div>
        <div id="messages" />

      </div>

  )
}

export default App;