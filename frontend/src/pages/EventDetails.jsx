import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TicketQR from '../components/TicketQR'

const EventDetails = () => {
  const { id } = useParams()
  const [ticket, setTicket] = useState(null)

  useEffect(() => {
    const generateTicket = async () => {
      const res = await fetch(`http://localhost:5000/api/tickets/generate/${id}`, {
        method: 'POST',
      })
      const data = await res.json()
      setTicket(data.ticketId)
    }
    generateTicket()
  }, [id])

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Your Ticket</h2>
      {ticket ? <TicketQR ticketId={ticket} /> : <p>Generating ticket...</p>}
    </div>
  )
}

export default EventDetails
