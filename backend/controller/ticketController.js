const Ticket = require('../models/Ticket');
const { v4: uuidv4 } = require('uuid');

const generateTicket = async (req, res) => {
  const { id: eventId } = req.params;
  const userId = req.user.id;
  const ticketId = uuidv4();

  try {
    const ticket = await Ticket.create({ ticketId, eventId, userId });
    res.json({ ticketId });
  } catch (err) {
    res.status(500).json({ message: 'Failed to generate ticket', error: err.message });
  }
};

const getUserTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ userId: req.user.id }).populate('eventId');
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch tickets', error: err.message });
  }
};

const validateTicket = async (req, res) => {
  const { ticketId } = req.params;

  try {
    const ticket = await Ticket.findOne({ ticketId });

    if (!ticket) return res.status(404).json({ message: 'Invalid ticket' });
    if (ticket.isUsed) return res.status(400).json({ message: 'Ticket already used' });

    ticket.isUsed = true;
    await ticket.save();

    res.json({ message: 'Ticket validated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Ticket validation failed', error: err.message });
  }
};

module.exports = {
  generateTicket,
  getUserTickets,
  validateTicket,
};
