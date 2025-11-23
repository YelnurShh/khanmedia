'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Home() {
  const projects = [
    {
      name: 'Otbasy',
      link: '/projects/alpha',
      image1: '/projects/otbasy.jpg',
      image2: '/projects/otbasy2.jpg',
    },
    {
      name: 'Changan',
      link: '/projects/beta',
      image1: '/projects/changan.jpg',
      image2: '/projects/changan2.jpg',
    },
    {
      name: 'Citadel',
      link: '/projects/gamma',
      image1: '/projects/cita.jpg',
      image2: '/projects/cita2.jpg',
    },
    {
      name: 'AYU BURGER',
      link: '/projects/delta',
      image1: '/projects/ayu.jpg',
      image2: '/projects/ayu2.jpg',
    },
    {
      name: 'NUR BOLASHAK',
      link: '/projects/nur',
      image1: '/projects/nur.jpg',
      image2: '/projects/nur2.jpg',
    },
    {
      name: "THE GENTLEMEN'S",
      link: '/projects/get',
      image1: '/projects/get.jpg',
      image2: '/projects/get2.jpg',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <main className="flex-grow p-8 sm:p-20">
        {/* Жоғарғы мәтіндер */}
        <h2 className="text-5xl font-bold mb-4">Привет!</h2>
        <h2 className="text-3xl font-bold mb-4">Добро пожаловать в нашу студию!</h2>
        <p className="text-lg sm:text-xl max-w-4xl leading-relaxed mb-12">
          Мы лучшая казахскоязычная дизайн-студия на рынке. <br />
          Мы верим в силу бренда и в то, что он повлияет на успех бизнеса.
        </p>

        {/* Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer space-y-3">
              <Link href={project.link}>
                <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={project.image1}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:opacity-0 transition-opacity duration-500"
                    priority
                  />
                  <Image
                    src={project.image2}
                    alt={`${project.name} hover`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-0 group-hover:opacity-100 absolute top-0 left-0 transition-opacity duration-500"
                    priority
                  />
                </div>
              </Link>

              <Link
                href={project.link}
                className="text-xl font-medium hover:text-gray-500 transition-colors duration-300 block"
              >
                {project.name}
              </Link>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}
