const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  ticketId: {
    type: String,
    required: true,
    unique: true
  },
  used: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

module.exports = mongoose.model('Ticket', ticketSchema)
