import { useEffect, useState } from 'react'
import TicketQR from '../components/TicketQR'

const MyTickets = () => {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    const fetchTickets = async () => {
      const res = await fetch('http://localhost:5000/api/tickets/my')
      const data = await res.json()
      setTickets(data)
    }
    fetchTickets()
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Tickets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tickets.map(ticket => (
          <div key={ticket._id} className="border p-4 rounded">
            <p>Event: {ticket.eventId.title}</p>
            <TicketQR ticketId={ticket.ticketId} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyTickets
