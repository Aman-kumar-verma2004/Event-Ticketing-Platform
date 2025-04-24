const express = require('express');
const { createEvent, getUserEvents, getEventById } = require('../controller/EventController');
const { protect } = require('../middlewares/authMiddlewares');

const router = express.Router();

router.use(protect);
router.post('/', createEvent);
router.get('/', getUserEvents);
router.get('/:id', getEventById);
// Public route to get all events
router.get('/all', async (req, res) => {
    try {
      const events = await Event.find().sort({ date: 1 }) // upcoming first
      res.json(events)
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch events' })
    }
  })
  

module.exports = router;
