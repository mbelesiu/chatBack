import React from 'react';
import moment from 'moment';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';

function Messages({ messages }) {
  const timeStamp = (date)=>{
    const now = moment(new Date());
    date = moment(date);
    if(now.diff(date, 'days') >= 1){
      return `Posted on ${moment(date).format('DD MMM YYYY [at] HH[:]mm')}`
    }
    return `Posted ${moment(date).fromNow()}`

  }
  return (
    <div>
      {messages.map((message) => (
        <>
          <h6><b>{message.name}</b></h6>
          <p>{message.message}<br /><i>{timeStamp(message.createdAt)}</i></p>
        </>)
      )}
    </div>
  )

}
export default Messages;