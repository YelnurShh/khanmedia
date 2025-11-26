import ProjectSwiper from '@/components/ProjectSwiper';

export default function AboutPage() {

  return (
    <main className="max-w-7xl mx-auto px-4 py-20">
      {/* Таныстыру бөлімі */}
      <section className="mb-16">
        <div className="max-w-2xl text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            О нас
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Всем привет, наша команда — это символ креативной ярости. У нас самые уникальные проекты и идеи. Поэтому вы смело можете доверить нам реализацию своих крутых задумок!
          </p>
        </div>
      </section>

      {/* Свайпер бөлімі */}
      <section className="mb-20">
        <ProjectSwiper
  images={[
    '/projects/otbasy.jpg',
    '/projects/changan.jpg',
    '/projects/cita.jpg',
    '/projects/ayu.jpg',
    '/projects/nur.jpg',
    '/projects/get.jpg',
  ]}
  links={[
    '/projects/alpha',
    '/projects/beta',
    '/projects/gamma',
    '/projects/delta',
    '/projects/nur',
    '/projects/get',
  ]}
/>

      </section>

      {/* Статистика */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <p className="text-4xl font-bold text-gray-800">5</p>
          <p className="text-lg text-gray-600 mt-2">лет опыта</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-gray-800">1000+</p>
          <p className="text-lg text-gray-600 mt-2">проекты</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-gray-800">50+</p>
          <p className="text-lg text-gray-600 mt-2">моушен дизайнов</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-gray-800">300+</p>
          <p className="text-lg text-gray-600 mt-2">брендинг</p>
        </div>
      </section>
    </main>
  );
}
