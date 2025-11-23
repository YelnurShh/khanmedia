'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-bold text-gray-800">
          KhanMedia
        </Link>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none transition-transform duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900 text-lg">Главная</Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900 text-lg">О нас</Link>
          <Link href="/projects" className="text-gray-600 hover:text-gray-900 text-lg">Проекты</Link>
          <Link href="/motionDesign" className="text-gray-600 hover:text-gray-900 text-lg">Моушен Дизайн</Link>
        </nav>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col items-center px-4 py-4 space-y-4 bg-white">
          <Link href="/" className="text-gray-600 hover:text-gray-900 text-lg">Главная</Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900 text-lg">О нас</Link>
          <Link href="/projects" className="text-gray-600 hover:text-gray-900 text-lg">Проекты</Link>
          <Link href="/motionDesign" className="text-gray-600 hover:text-gray-900 text-lg">Моушен Дизайн</Link>
        </nav>
      </div>
    </header>
  );
}
