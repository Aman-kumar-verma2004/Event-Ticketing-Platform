import QRCode from 'qrcode.react'

const TicketQR = ({ ticketId }) => {
  return (
    <div className="text-center mt-4">
      <h3 className="font-semibold mb-2">Scan this ticket at event gate</h3>
      <QRCode value={ticketId} size={200} />
    </div>
  )
}

export default TicketQR
