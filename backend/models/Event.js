const mongoose = require( 'mongoose')

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

module.exports =  mongoose.model('Event', eventSchema)
