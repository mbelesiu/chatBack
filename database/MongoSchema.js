const mongoose = require('mongoose');
const db = require('./index.js');


const chatBack = new mongoose.Schema({
  name: String,
  message: String
},
{
  timestamps: true,
});

const Messages = mongoose.model('Messages', chatBack);

module.exports = Messages;