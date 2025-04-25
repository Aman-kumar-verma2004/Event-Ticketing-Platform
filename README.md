Event Ticketing System with QR Code Verification

A full-stack event management and ticketing platform where users can:

- View and enroll in events
- Generate QR code-based tickets
- Scan and verify tickets at the entry gate
- Organize events and manage attendees

Built using the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS for styling.

Features

🔓 Public Features:
- View all upcoming events (All Events page)
- User Registration and Login

🔐 Authenticated Features:
- Create Events (Title, Description, Date)
- Generate Tickets (with unique QR code)
- View My Tickets (QR Code + Event Info)
- QR Code Scan & Ticket Validation
- Dashboard showing user's created events

📷 QR Integration:
- QR code generated using `react-qr-code`
- QR contains either ticket ID or validation link
- Validation page verifies scanned ticket in real-time
- Tickets marked as “used” after validation

Tech Stack

Frontend:
- React.js + Vite
- Tailwind CSS
- React Router DOM
- React QR Code (`react-qr-code`)
- Axios or fetch API

Backend:
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- UUID for unique ticket IDs

How to Run

1. Clone the repo
2. Navigate to `/backend` and run:
   npm install
   npm run dev

3. Navigate to `/frontend` and run:
   npm install
   npm run dev

4. Create a `.env` file in `/backend` with:
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key



Author

Built by RANGER 🚀 (aka Aman Kumar Verma)
