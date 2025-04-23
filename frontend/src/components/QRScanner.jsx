import { useState } from 'react'
import QrReader from 'react-qr-reader'

const QRScanner = ({ onScanResult }) => {
  const [error, setError] = useState(null)

  const handleScan = (data) => {
    if (data) onScanResult(data)
  }

  const handleError = (err) => setError(err.message)

  return (
    <div className="w-full">
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}

export default QRScanner
