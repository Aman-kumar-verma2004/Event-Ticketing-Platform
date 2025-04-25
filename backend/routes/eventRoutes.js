const express = require('express');
const {
  createEvent,
  getUserEvents,
  getEventById,
} = require('../controller/EventController');
const { protect } = require('../middlewares/authMiddlewares');
const Event = require('../models/Event'); // ✅ Don't forget this import!

const router = express.Router();

// ✅ Public route
router.get('/all', async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch events' });
  }
});

// ✅ Protected routes
router.use(protect);
router.post('/', createEvent);
router.get('/', getUserEvents);
router.get('/:id', getEventById);

module.exports = router;
