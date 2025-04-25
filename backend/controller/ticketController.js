const Ticket = require('../models/Ticket')
const { v4: uuidv4 } = require('uuid')

// ✅ 1. Generate Ticket when user enrolls
exports.generateTicket = async (req, res) => {
  const { id: eventId } = req.params
  const userId = req.user._id

  try {
    // Prevent duplicate ticket for the same event and user
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

// ✅ 2. Get all tickets for the logged-in user
exports.getUserTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.user._id }).populate('event')
    res.json(tickets)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Failed to load your tickets' })
  }
}

// ✅ 3. Validate ticket by scanning QR code (no auth required)
exports.validateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findOne({ ticketId: req.params.ticketId }).populate('event')

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' })
    }

    if (ticket.used) {
      return res.status(400).json({ message: 'Ticket already used' })
    }

    ticket.used = true
    await ticket.save()

    res.json({ message: 'Ticket is valid', event: ticket.event })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Failed to validate ticket' })
  }
}
