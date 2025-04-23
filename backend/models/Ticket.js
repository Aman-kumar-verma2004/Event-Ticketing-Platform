const mongoose = require( 'mongoose')

const ticketSchema = new mongoose.Schema({
  ticketId: { type: String, required: true, unique: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  isUsed: { type: Boolean, default: false },
})

module.exports =  mongoose.model('Ticket', ticketSchema)
