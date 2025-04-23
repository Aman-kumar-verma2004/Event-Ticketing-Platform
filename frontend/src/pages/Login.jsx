import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()
    if (res.ok) {
      login(data.user)
      navigate('/dashboard')
    } else {
      alert(data.message)
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow w-96" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input type="email" className="w-full mb-3 p-2 border" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" className="w-full mb-3 p-2 border" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        <button className="bg-blue-600 text-white px-4 py-2 w-full">Login</button>
      </form>
    </div>
  )
}

export default Login
