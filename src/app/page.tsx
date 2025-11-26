'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      name: 'OTBASY',
      link: '/projects/alpha',
      image1: '/projects/otbasy.jpg',
      image2: '/projects/otbasy2.jpg',
    },
    {
      name: 'CHANGAN',
      link: '/projects/beta',
      image1: '/projects/changan.jpg',
      image2: '/projects/changan2.jpg',
    },
    {
      name: 'CITADEL',
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
      <main className="flex-grow px-6 sm:px-12 lg:px-20 py-16">

        {/* Жоғарғы мәтіндер */}
        <div className="mb-20 space-y-4">
          <h2 className="text-6xl sm:text-7xl font-bold tracking-tight">Привет!</h2>
          <h2 className="text-3xl sm:text-4xl font-semibold opacity-90">
            Добро пожаловать в нашу студию!
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl leading-relaxed text-gray-700">
            Мы лучшая казахскоязычная дизайн-студия на рынке. <br />
            Мы верим в силу бренда и в то, что он повлияет на успех бизнеса.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer space-y-4">
              <Link href={project.link}>
                <div className="relative w-full h-72 overflow-hidden rounded-xl shadow-lg">

                  {/* Main image */}
                  <Image
                    src={project.image1}
                    alt={project.name}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:opacity-0"
                  />

                  {/* Hover image */}
                  <Image
                    src={project.image2}
                    alt={`${project.name} hover`}
                    fill
                    className="object-cover opacity-0 transition duration-700 ease-out absolute top-0 left-0 group-hover:opacity-100 group-hover:scale-110"
                  />

                </div>
              </Link>

              {/* Project Name */}
              <Link
                href={project.link}
                className="text-2xl font-semibold tracking-wide hover:text-gray-600 transition"
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
