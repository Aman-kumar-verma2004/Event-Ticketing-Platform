import { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'

const Dashboard = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('http://localhost:5000/api/events')
      const data = await res.json()
      setEvents(data)
    }
    fetchEvents()
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Your Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map(event => <EventCard key={event._id} event={event} />)}
      </div>
    </div>
  )
}

export default Dashboard
