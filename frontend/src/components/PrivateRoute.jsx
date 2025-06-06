import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return <div className="text-center py-10">Loading...</div>
  }

  return user ? children : <Navigate to="/" />
}

export default PrivateRoute
