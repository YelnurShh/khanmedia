'use client';

import { useState } from 'react';
import Image from 'next/image';

const categories = [
  { id: 'all', title: 'Все проекты' },
  { id: 'motion', title: 'Моушен дизайн' },
  { id: 'vfx', title: 'VFX' },
  { id: 'branding', title: 'Брендинг' },
  { id: 'graphics', title: 'Графика' },
];

const imagesByCategory: { [key: string]: string[] } = {
  all: [
    'https://images.unsplash.com/photo-1605460375648-278bcbd579a6',
    'https://images.unsplash.com/photo-1506765515384-028b60a970df',
    'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  ],
  motion: [
    'https://images.unsplash.com/photo-1605460375648-278bcbd579a6',
  ],
  vfx: [
    'https://images.unsplash.com/photo-1506765515384-028b60a970df',
  ],
  branding: [
    'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e',
  ],
  graphics: [
    'https://images.unsplash.com/photo-1612837017391-3e82eaaf31dc',
  ],
};

export default function ProjectCategoryTabs() {
  const [activeCategory, setActiveCategory] = useState('all');
  const images = imagesByCategory[activeCategory];

  return (
    <div>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow"
          >
            <Image
              src={src}
              alt={`Проект ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-auto object-cover transition duration-300 group-hover:brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-lg font-semibold text-center px-4">
                Проект {index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
