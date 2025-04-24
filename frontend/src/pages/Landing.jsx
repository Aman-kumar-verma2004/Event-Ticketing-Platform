import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, QrCode, ScanLine, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const Landing = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 text-center px-4">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Smart Event Ticketing Platform</h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Create events, generate QR code tickets, and verify entries seamlessly — all from one platform.
          </p>
          <Link to="/register" className="bg-white text-blue-600 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition">
            Get Started for Free
          </Link>
        </motion.div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white text-center px-4">
        <h2 className="text-2xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <Sparkles className="mx-auto text-blue-600 mb-2" size={32} />
            <h3 className="font-semibold text-lg">1. Create Event</h3>
            <p className="text-sm text-gray-600 mt-1">Add event details with ease and manage dates effortlessly.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <QrCode className="mx-auto text-blue-600 mb-2" size={32} />
            <h3 className="font-semibold text-lg">2. Generate QR Tickets</h3>
            <p className="text-sm text-gray-600 mt-1">Instant QR codes for each user — secure and unique.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <ScanLine className="mx-auto text-blue-600 mb-2" size={32} />
            <h3 className="font-semibold text-lg">3. Scan & Verify</h3>
            <p className="text-sm text-gray-600 mt-1">Scan tickets at entry using your camera and validate instantly.</p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-100 text-center px-4">
        <h2 className="text-2xl font-bold mb-6">Perfect For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-white rounded-xl shadow-lg">
            <Users className="mx-auto text-blue-500 mb-2" />
            <p>College Fests</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-white rounded-xl shadow-lg">
            <Users className="mx-auto text-blue-500 mb-2" />
            <p>Meetups & Seminars</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-white rounded-xl shadow-lg">
            <Users className="mx-auto text-blue-500 mb-2" />
            <p>Private Events</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-blue-600 text-white text-center text-sm">
        &copy; {new Date().getFullYear()} Eventify. Built with 💙 by RANGER.
      </footer>
    </div>
  )
}

export default Landing
