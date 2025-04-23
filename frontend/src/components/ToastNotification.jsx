const ToastNotification = ({ message, type = 'success' }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500'
  return (
    <div className={`${bgColor} text-white px-4 py-2 rounded mb-2`}>
      {message}
    </div>
  )
}

export default ToastNotification
