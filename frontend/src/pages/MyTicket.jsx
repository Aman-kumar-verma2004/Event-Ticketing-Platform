import { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'


const MyTicket = () => {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/tickets/my', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        const data = await res.json()
        setTickets(data)
      } catch (err) {
        console.error('Failed to fetch tickets:', err)
      }
    }

    fetchTickets()
  }, [])

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">My Tickets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tickets.map(ticket => (
          <div key={ticket._id} className="p-4 border rounded shadow bg-white">
            <h3 className="text-lg font-semibold text-blue-700">{ticket.event.title}</h3>
            <p className="text-sm text-gray-600">{ticket.event.description}</p>
            <p className="text-sm text-gray-500 mb-2">Date: {new Date(ticket.event.date).toLocaleDateString()}</p>
            <QRCode value={`http://localhost:5173/scan/${ticket.ticketId}`} />


          </div>
        ))}
      </div>
    </div>
  )
}

export default MyTicket
