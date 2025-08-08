'use client';
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20 py-8 px-4 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <p className="font-semibold text-gray-800">&copy; 2024 Khan Media | Design + Motion Design</p>
          <p>Политика конфиденциальности</p>
        </div>
        <div className="flex flex-col sm:items-start text-gray-600">
          <p>Контакты</p>
          <p>+7 777 353 13 76</p>
          <p>
            <a href="mailto:yelnurshakhar@gmail.com" className="hover:underline">
              yelnurshakhar@gmail.com
            </a>
          </p>

          <div className="flex space-x-4 mt-2">
            {/* Telegram icon */}
            <a
              href="https://t.me/Khanburkit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 text-xl"
            >
              <FaTelegramPlane />
            </a>

            {/* Instagram icon */}
            <a
              href="https://instagram.com/khanburkit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 text-xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
