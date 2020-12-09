const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/chat-back';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));
const db = mongoose.connection;

module.exports = db;