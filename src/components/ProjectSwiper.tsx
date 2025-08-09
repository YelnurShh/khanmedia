'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';

export default function ProjectSwiper({ images }: { images: string[] }) {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((url, index) => (
          <SwiperSlide key={index}>
            <div className="relative group rounded-xl overflow-hidden shadow-lg">
              <Image
                src={url}
                alt={`Project ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-64 object-cover group-hover:brightness-75 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center opacity-0 group-hover:opacity-100 transition duration-300 py-2">
                Проект {index + 1}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
