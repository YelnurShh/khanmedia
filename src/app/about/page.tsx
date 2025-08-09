import ProjectSwiper from '@/components/ProjectSwiper';

export default function AboutPage() {
  const projectImages = [
    'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
  ];

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
        <ProjectSwiper images={projectImages} />
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
