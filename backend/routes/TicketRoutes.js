const express = require('express')
const { generateTicket, getUserTickets } = require('../controller/ticketController')
const { protect } = require('../middlewares/authMiddlewares')
const Ticket = require('../models/Ticket') // Required for inline validation

const router = express.Router()

// ✅ Public route to validate scanned ticket (no login needed)
router.get('/validate/:ticketId', async (req, res) => {
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
})

// ✅ Protected routes (login required)
router.use(protect)

router.post('/generate/:id', generateTicket)
router.get('/my', getUserTickets)

module.exports = router
