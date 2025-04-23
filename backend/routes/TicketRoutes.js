const express = require('express');
const { generateTicket, validateTicket, getUserTickets } = require('../controller/ticketController');
const { protect } = require('../middlewares/authMiddlewares');

const router = express.Router();

router.use(protect);
router.post('/generate/:id', generateTicket);
router.get('/validate/:ticketId', validateTicket);
router.get('/my', getUserTickets);

module.exports = router;
