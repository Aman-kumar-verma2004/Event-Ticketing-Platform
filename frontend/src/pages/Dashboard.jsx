import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
  const [myEvents, setMyEvents] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    const fetchMyEvents = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/events', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })

        const data = await res.json()
        setMyEvents(data)
      } catch (err) {
        console.error('Failed to load your events:', err)
      }
    }

    fetchMyEvents()
  }, [])

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">My Created Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myEvents.length > 0 ? (
          myEvents.map((event) => (
            <div key={event._id} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-blue-700">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{event.description}</p>
              <p className="text-sm text-gray-500">📅 {new Date(event.date).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">You haven't created any events yet.</p>
        )}
      </div>
    </div>
  )
}

export default Dashboard
