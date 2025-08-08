'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  const phone = '77773531376'; // ← өз нөміріңіз
  const message = encodeURIComponent('Сәлем, мен khanmedia сайтынан жазып тұрмын');
  const whatsappLink = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110 animate-bounce-slow">
        <FaWhatsapp size={28} />
      </div>
    </a>
  );
}
