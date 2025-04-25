const Ticket = require('../models/Ticket')
const { v4: uuidv4 } = require('uuid')

exports.generateTicket = async (req, res) => {
  const { id: eventId } = req.params
  const userId = req.user._id

  try {
    // Prevent duplicate ticket for same user & event
    const alreadyExists = await Ticket.findOne({ event: eventId, user: userId })
    if (alreadyExists) {
      return res.status(400).json({ message: 'Ticket already generated for this event' })
    }

    const ticket = await Ticket.create({
      event: eventId,
      user: userId,
      ticketId: uuidv4(),
    })

    res.status(201).json({ ticket })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Failed to generate ticket' })
  }
}

exports.getUserTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.user._id }).populate('event')
    res.json(tickets)
  } catch (err) {
    res.status(500).json({ message: 'Failed to load your tickets' })
  }
}
