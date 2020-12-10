const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http')
const socketIo = require('socket.io')

const app = express();
const Messages = require('../database/MongoSchema.js');
const PORT = 3000;
const server = http.createServer(app);
const io = socketIo(server);



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
  message.save((err) => {
    if (err) {
      res.sendStatus(500)
    }
    io.emit('message', req.body);
    res.sendStatus(200);

  })
})

io.on('connection', () => {
  console.log('User connected')
});

server.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
})