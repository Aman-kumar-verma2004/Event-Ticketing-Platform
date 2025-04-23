const Event = require('../models/Event');

const createEvent = async (req, res) => {
  const { title, description, date } = req.body;
  try {
    const event = await Event.create({ title, description, date, creator: req.user.id });
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create event', error: err.message });
  }
};

const getUserEvents = async (req, res) => {
  try {
    const events = await Event.find({ creator: req.user.id });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch events', error: err.message });
  }
};

const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch event', error: err.message });
  }
};

module.exports = {
  createEvent,
  getUserEvents,
  getEventById,
};
