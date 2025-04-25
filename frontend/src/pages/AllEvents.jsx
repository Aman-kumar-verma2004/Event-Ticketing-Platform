import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const AllEvents = () => {
  const [events, setEvents] = useState([])
  const [enrolledEvents, setEnrolledEvents] = useState([])
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const fetchEvents = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/events/all')
      const data = await res.json()
      setEvents(data)
    } catch (err) {
      console.error('Error fetching events:', err)
    }
  }

  const fetchEnrolledEvents = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/tickets/my-events', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      const data = await res.json()
      setEnrolledEvents(data)
    } catch (err) {
      console.error('Error fetching enrolled events:', err)
    }
  }

  // Initial fetch
  useEffect(() => {
    fetchEvents()
    if (user) {
      fetchEnrolledEvents()
    }
  }, [user])

  // Re-fetch if redirected after event creation
  useEffect(() => {
    if (location.state?.newEvent) {
      fetchEvents()
      if (user) fetchEnrolledEvents()
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

  const handleEnroll = async (eventId) => {
    if (!user) {
      alert('Please login to enroll in this event.')
      return navigate('/login')
    }

    try {
      const res = await fetch(`http://localhost:5000/api/tickets/generate/${eventId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })

      const data = await res.json()

      if (res.ok) {
        alert('Ticket generated successfully!')
        setEnrolledEvents(prev => [...prev, eventId]) // Update enrolled state
        navigate('/my-ticket')
      } else {
        alert(data.message || 'Enrollment failed.')
      }
    } catch (err) {
      console.error(err)
      alert('Something went wrong.')
    }
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length > 0 ? (
          events.map(event => (
            <div key={event._id} className="border rounded-lg shadow p-4 bg-white hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-blue-700">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{event.description}</p>
              <p className="text-sm text-gray-500 mb-3">📅 {new Date(event.date).toLocaleDateString()}</p>
              {enrolledEvents.includes(event._id) ? (
                <span className="text-green-600 font-medium">✅ Enrolled</span>
              ) : (
                <button
                  onClick={() => handleEnroll(event._id)}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                >
                  Enroll
                </button>
              )}
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">No events found.</p>
        )}
      </div>
    </div>
  )
}

export default AllEvents
