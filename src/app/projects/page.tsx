'use client';

import ProjectCategoryTabs from '@/components/ProjectCategoryTabs';

export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-25">
      <section className="mb-26">
        <h2 className="max-w-3xl text-3xl md:text-1xl  text-start text-gray-800 leading-relaxed">
          Вместе с нашими клиентами мы ищем ответы на важные вопросы: что они делают, как они это делают, для кого и почему?
          Только тогда мы сможем решать сложные бизнес-задачи с помощью креативных идей.
        </h2>
      </section>
      <ProjectCategoryTabs />
    </main>
  );
}
