import { useState } from 'react'
import QRScanner from '../components/QRScanner'

const ScanTicket = () => {
  const [result, setResult] = useState(null)

  const handleScan = async (ticketId) => {
    const res = await fetch(`http://localhost:5000/api/tickets/validate/${ticketId}`)
    const data = await res.json()
    setResult(data.message)
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Scan Ticket</h2>
      <QRScanner onScanResult={handleScan} />
      {result && <p className="mt-4 text-green-600 font-semibold">{result}</p>}
    </div>
  )
}

export default ScanTicket
