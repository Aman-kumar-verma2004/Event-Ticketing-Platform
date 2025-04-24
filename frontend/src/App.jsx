import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/NavBar"
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import CreateEvent from './pages/CreateEvent'
import EventDetails from './pages/EventDetails'
import ScanTicket from './pages/ScanTicket'
import MyTicket from './pages/MyTicket'
import PrivateRoute from './components/PrivateRoute'
import Landing from './pages/Landing'
import AllEvents from './pages/AllEvents'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all-events" element={<AllEvents />} />

        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />

        <Route path="/create-event" element={
          <PrivateRoute>
            <CreateEvent />
          </PrivateRoute>
        } />

        <Route path="/event/:id" element={
          <PrivateRoute>
            <EventDetails />
          </PrivateRoute>
        } />

        <Route path="/scan" element={
          <PrivateRoute>
            <ScanTicket />
          </PrivateRoute>
        } />

        <Route path="/my-ticket" element={
          <PrivateRoute>
            <MyTicket />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
