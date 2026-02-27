'use client'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = ({ phoneNumber = '+971503855165', message = 'Hello, I would like to inquire about your services.' }) => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-xl group"
      title="Chat with us on WhatsApp"
      aria-label="Open WhatsApp chat">
      <FaWhatsapp className="text-2xl group-hover:animate-bounce" />
    </button>
  )
}

export default WhatsAppButton
