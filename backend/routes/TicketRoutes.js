const express = require('express')
const { generateTicket, getUserTickets } = require('../controller/ticketController')
const { protect } = require('../middlewares/authMiddlewares')

const router = express.Router()

router.use(protect)

router.post('/generate/:id', generateTicket)
router.get('/my', getUserTickets)

module.exports = router
