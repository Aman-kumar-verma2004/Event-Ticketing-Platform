import { Link } from 'react-router-dom'

const EventCard = ({ event }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <h3 className="text-lg font-bold">{event.title}</h3>
      <p className="text-sm">{event.description}</p>
      <p className="text-xs text-gray-500 mt-1">Date: {event.date}</p>
      <Link to={`/event/${event._id}`} className="text-blue-600 mt-2 inline-block">View Details</Link>
    </div>
  )
}

export default EventCard
