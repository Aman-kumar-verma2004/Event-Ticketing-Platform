import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const VerifyTicketPage = () => {
  const { ticketId } = useParams()
  const [status, setStatus] = useState('Verifying ticket...')
  const [event, setEvent] = useState(null)

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/tickets/validate/${ticketId}`)
        const data = await res.json()

        if (res.ok) {
          setEvent(data.event)
          setStatus(`✅ Ticket Verified for "${data.event.title}"`)
        } else {
          setStatus(`❌ ${data.message}`)
        }
      } catch (err) {
        console.error(err)
        setStatus('❌ Failed to verify ticket.')
      }
    }

    verify()
  }, [ticketId])

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">QR Ticket Validation</h1>
      <p className="text-lg mb-2">{status}</p>
      {event && (
        <div className="mt-4 text-sm text-gray-600">
          <p>Event: {event.title}</p>
          <p>Date: {new Date(event.date).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  )
}

export default VerifyTicketPage
