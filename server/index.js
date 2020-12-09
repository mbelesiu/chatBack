const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const Messages = require('../database/MongoSchema.js');
const PORT = 3000;
const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/api/messages', (req, res) => {
  Messages.find({}, (err, messages) => {
    res.send(messages)
  })
});

app.post('/api/messages', (req, res) => {
  const message = new Messages(req.body);
  message.save((err)=>{
    err ? res.sendStatus(500) : res.sendStatus(200);
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
})