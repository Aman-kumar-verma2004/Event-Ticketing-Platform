// import { Link, NavLink, useNavigate } from 'react-router-dom'
// import { useAuth } from '../context/AuthContext'

// const Navbar = () => {
//   const { user, logout } = useAuth()
//   const navigate = useNavigate()

//   const handleLogout = () => {
//     logout()
//     navigate('/login')
//   }

//   return (
//     <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
//       <Link to="/" className="text-xl font-bold">
//         Eventify
//       </Link>

//       <div className="space-x-4">
//         {user ? (
//           <>
//             <NavLink
//               to="/dashboard"
//               className={({ isActive }) =>
//                 isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-300'
//               }
//             >
//               Dashboard
//             </NavLink>
//             <NavLink
//               to="/create-event"
//               className={({ isActive }) =>
//                 isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-300'
//               }
//             >
//               Create Event
//             </NavLink>
//             <NavLink
//               to="/my-ticket"
//               className={({ isActive }) =>
//                 isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-300'
//               }
//             >
//               My Tickets
//             </NavLink>
//             <button
//               onClick={handleLogout}
//               className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-blue-100 transition"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <NavLink
//               to="/login"
//               className={({ isActive }) =>
//                 isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-300'
//               }
//             >
//               Login
//             </NavLink>
//             <NavLink
//               to="/register"
//               className={({ isActive }) =>
//                 isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-300'
//               }
//             >
//               Register
//             </NavLink>
//           </>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar


import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        Eventify
      </Link>

      <div className="space-x-4">
        {user ? (
          <>
            <NavLink
              to="/create-event"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-300'
              }
            >
              Create Event
            </NavLink>
            <NavLink
              to="/my-ticket"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-300'
              }
            >
              My Tickets
            </NavLink>
            <button
              onClick={handleLogout}
              className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-blue-100 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
          <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold ' : 'hover:text-gray-300'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/all-events"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold ' : 'hover:text-gray-300'
              }
            >
              All Events
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-300'
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-300'
              }
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar

