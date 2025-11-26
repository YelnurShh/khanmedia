// app/projects/[slug]/page.tsx
import Image from "next/image";

type ProjectData = {
  name: string;
  category: string;
  description: string;
  images: string[]; // can include both local paths (e.g. /projects/otbasy.jpg) and remote URLs and .mp4 files
  team: string[];
};

const projects: Record<string, ProjectData> = {
  alpha: {
    name: "OTBASY",
    category: "Motion and Graphic design",
    description:
      "Бұл жоба клиенттің брендін жаңғырту үшін жасалған моушен-дизайн және анимацияны қамтиды.",
    images: ["/projects/otbasy.jpg", "/projects/otbasy2.jpg"],
    team: ["Айжан", "Ерлан", "Марат"],
  },

  beta: {
    name: "CHANGAN",
    category: "Motion and Graphic design",
    description:
      "VFX технологиялары арқылы түсірілім материалдарын толықтыру және жақсарту жобасы.",
    images: [
      "/projects/changan.jpg",
      "/projects/changan2.jpg",
      "/projects/changan3.jpg",
      "/projects/changan4.jpg",
      "/projects/changan5.jpg",
      "/projects/changan6.jpg",
      "/projects/changan7.jpg",
    ],
    team: ["Жанар", "Тимур"],
  },

  gamma: {
    name: "CITADEL",
    category: "Брендинг",
    description:
      "Брендтің визуалды айдентикасын құру, логотип, түстер палитрасы және бренд-гайд.",
    images: [
      "/projects/cita_v.mp4", 
      "/projects/cita.jpg",
      "/projects/cita2.jpg",
      "/projects/cita3.jpg",
      "/projects/cita4.jpg",
      "/projects/cita5.jpg",
      "/projects/cita6.jpg",
      "/projects/cita7.jpg",
      "/projects/cita8.jpg",
      "/projects/cita9.jpg",
      "/projects/cita10.jpg",
      "/projects/cita11.jpg",
      "/projects/cita12.jpg",
      "/projects/cita13.mp4",
    ],
    team: ["Айбек", "Сауле", "Арман"],
  },

  delta: {
    name: "AYU BURGER",
    category: "Графика",
    description:
      "Графикалық иллюстрациялар, инфографика және визуалды материалдар дайындау.",
    images: [
      "/projects/ayu.jpg",
      "/projects/ayu2.jpg",
      "/projects/ayu3.jpg",
      "/projects/ayu4.jpg",
      "/projects/ayu5.jpg",
      "/projects/ayu6.jpg",
      "/projects/ayu7.jpg",
      "/projects/ayu8.jpg",
      "/projects/ayu9.jpg",
    ],
    team: ["Дина", "Болат"],
  },

  "nur": {
    name: "NUR BOLASHAK",
    category: "Графика",
    description:
      "Графикалық иллюстрациялар, инфографика және визуалды материалдар дайындау.",
    images: [
      '/projects/nur.jpg',
      '/projects/nur2.jpg',
      '/projects/nur3.png',
      '/projects/nur4.png',
      '/projects/nur5.png',
      '/projects/nur6.png',
      '/projects/nur7.png',
      '/projects/nur8.png',
      '/projects/nur9.png',
      '/projects/nur10.png',
      '/projects/nur11.png',
      '/projects/nur12.png',
      '/projects/nur13.png',
      '/projects/nur14.png',
      '/projects/nur15.png',
      '/projects/nur16.png',
      '/projects/nur17.png',
      '/projects/nur18.png',
      '/projects/nur19.png',
    ],
    team: ["Дина", "Болат"],
  },

  "get": {
    name: "THE GENTLEMEN'S",
    category: "Моушен дизайн",
    description:
      "Бұл жоба клиенттің брендін жаңғырту үшін жасалған моушен-дизайн және анимацияны қамтиды.",
    images: [
      '/projects/get.jpg',
      '/projects/get2.jpg',
      '/projects/get3.png',
      '/projects/get4.png',
      '/projects/get5.png',
      '/projects/get6.png',
      '/projects/get7.jpg',
      '/projects/get8.jpg',
    ],
    team: ["Айжан", "Ерлан", "Марат"],
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return <div className="p-8 text-red-500">Проект табылмады</div>;
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Заголовок и короткое описание */}
      <div className="flex flex-wrap items-center justify-between gap-6 mb-4">
        <h1 className="text-4xl font-bold">{project.name}</h1>
        <p className="text-lg leading-relaxed max-w-2xl">{project.description}</p>
      </div>

      <p className="text-gray-600 mb-6">{project.category}</p>

      {/* Суреттер / видеолар (order preserved). Каждый элемент в aspect-video (16:9) */}
      <div className="flex flex-col gap-6 mb-8">
        {project.images.map((src, index) => {
          const lower = src.toLowerCase();
          const isVideo = lower.endsWith(".mp4") || lower.endsWith(".webm") || lower.endsWith(".ogg");

          return (
            <div
              key={index}
              className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md bg-gray-100"
            >
              {isVideo ? (
                <video
                  src={src}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  // Если хочешь автоплей — добавь autoPlay muted loop (muted требуется для autoplay в браузерах)
                  // autoPlay muted loop
                />
              ) : (
                <Image
                  src={src}
                  alt={`${project.name} image ${index + 1}`}
                  fill
                  className="object-cover"
                  // Если используешь внешние домены (например images.unsplash.com),
                  // не забудь добавить их в next.config.js -> images.domains
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Команда */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Команда</h2>
        <div className="space-y-1 text-lg text-gray-800">
          {project.team.map((member, index) => (
            <p key={index}>{member}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
