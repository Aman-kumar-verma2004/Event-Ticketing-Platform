import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, logout } = useAuth()

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Eventify</h1>
      <div className="space-x-4">
        {user && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/create-event">Create Event</Link>
            <Link to="/my-tickets">My Tickets</Link>
            <button onClick={logout} className="bg-white text-blue-600 px-3 py-1 rounded">Logout</button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
