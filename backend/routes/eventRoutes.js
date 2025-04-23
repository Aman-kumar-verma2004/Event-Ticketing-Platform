const express = require('express');
const { createEvent, getUserEvents, getEventById } = require('../controller/EventController');
const { protect } = require('../middlewares/authMiddlewares');

const router = express.Router();

router.use(protect);
router.post('/', createEvent);
router.get('/', getUserEvents);
router.get('/:id', getEventById);

module.exports = router;
