'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { id: 'all', title: 'Все проекты' },
  { id: 'motion', title: 'Моушен дизайн' },
  { id: 'vfx', title: 'VFX' },
  { id: 'branding', title: 'Брендинг' },
  { id: 'graphics', title: 'Графика' },
];

// Әр суретке сілтеме қостық
const imagesByCategory: { [key: string]: { src: string; url: string; slug: string }[] } = {
  all: [
    { src: '/projects/otbasy.jpg', url: '/projects/alpha', slug: 'alpha' },
    { src: '/projects/changan.jpg', url: '/projects/beta', slug: 'beta' },
    { src: '/projects/cita.jpg', url: '/projects/gamma', slug: 'gamma' },
    { src: '/projects/ayu.jpg', url: '/projects/delta', slug: 'delta' },
    { src: '/projects/nur.jpg', url: '/projects/nur', slug: 'nur' },
    { src: '/projects/get.jpg', url: '/projects/get', slug: 'get' },
  ],
  motion: [
    { src: '/projects/otbasy.jpg', url: '/projects/alpha', slug: 'alpha' },
  ],
  vfx: [
    { src: '/projects/changan.jpg', url: '/projects/beta', slug: 'beta' },
  ],
  branding: [
    { src: '/projects/cita.jpg', url: '/projects/gamma', slug: 'gamma' },
  ],
  graphics: [
    { src: '/projects/ayu.jpg', url: '/projects/delta', slug: 'delta' },
  ],
};


export default function ProjectCategoryTabs() {
  const [activeCategory, setActiveCategory] = useState('all');
  const images = imagesByCategory[activeCategory];

  const projectNames = [
    'OTBASY',
    'CHANGAN',
    'CITADEL',
    'AYU BURGER',
    'NUR BOLASHAK',
    "THE GENTLEMEN'S",
  ];

  return (
    <div>
      {/* Категория батырмалары */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              activeCategory === category.id
                ? 'bg-black text-white border-black'
                : 'bg-white text-gray-800 border-gray-300 hover:border-black'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Суреттер торы */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((item, index) => (
          <Link key={index} href={`/projects/${item.slug}`} className="relative group rounded-lg overflow-hidden shadow">
            <Image
              src={item.src}
              alt={`Проект ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-auto object-cover transition duration-300 group-hover:brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 mt-45">
              <span className="text-white text-lg font-semibold text-center px-4">
                {projectNames[index]}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
