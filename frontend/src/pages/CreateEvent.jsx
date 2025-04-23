import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateEvent = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:5000/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, date }),
    })
    if (res.ok) {
      navigate('/dashboard')
    } else {
      alert('Failed to create event')
    }
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" className="w-full p-2 border" value={title} onChange={e => setTitle(e.target.value)} placeholder="Event Title" required />
        <textarea className="w-full p-2 border" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
        <input type="date" className="w-full p-2 border" value={date} onChange={e => setDate(e.target.value)} required />
        <button className="bg-blue-600 text-white px-4 py-2 w-full">Create Event</button>
      </form>
    </div>
  )
}

export default CreateEvent
