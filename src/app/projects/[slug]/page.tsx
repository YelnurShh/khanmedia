// app/projects/[slug]/page.tsx
import Image from "next/image";

type ProjectData = {
  name: string;
  category: string;
  description: string;
  images: string[];
  team: string[];
};

const projects: Record<string, ProjectData> = {
  alpha: {
    name: "Project Alpha",
    category: "Моушен дизайн",
    description:
      "Бұл жоба клиенттің брендін жаңғырту үшін жасалған моушен-дизайн және анимацияны қамтиды.",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
    ],
    team: ["Айжан", "Ерлан", "Марат"],
  },
  
  beta: {
    name: "Project Beta",
    category: "VFX",
    description:
      "VFX технологиялары арқылы түсірілім материалдарын толықтыру және жақсарту жобасы.",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1537498425277-c283d32ef9db",
    ],
    team: ["Жанар", "Тимур"],
  },
  gamma: {
    name: "Project Gamma",
    category: "Брендинг",
    description:
      "Брендтің визуалды айдентикасын құру, логотип, түстер палитрасы және бренд-гайд.",
    images: [
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    ],
    team: ["Айбек", "Сауле", "Арман"],
  },
  delta: {
    name: "Project Delta",
    category: "Графика",
    description:
      "Графикалық иллюстрациялар, инфографика және визуалды материалдар дайындау.",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    ],
    team: ["Дина", "Болат"],
  },

  "1688-jana-post": {
    name: "1688 | Jana post",
    category: "Моушен дизайн",
    description:
      "Бұл жоба клиенттің брендін жаңғырту үшін жасалған моушен-дизайн және анимацияны қамтиды.",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
    ],
    team: ["Айжан", "Ерлан", "Марат"],
  },
  "agriculture-expo": {
    name: "Agriculture Expo",
    category: "VFX",
    description:
      "VFX технологиялары арқылы түсірілім материалдарын толықтыру және жақсарту жобасы.",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1537498425277-c283d32ef9db",
    ],
    team: ["Жанар", "Тимур"],
  },
  "modern-office": {
    name: "Modern Office Interior",
    category: "Брендинг",
    description:
      "Брендтің визуалды айдентикасын құру, логотип, түстер палитрасы және бренд-гайд.",
    images: [
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    ],
    team: ["Айбек", "Сауле", "Арман"],
  },
  "city-lights": {
    name: "City Lights Photography",
    category: "Графика",
    description:
      "Графикалық иллюстрациялар, инфографика және визуалды материалдар дайындау.",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    ],
    team: ["Дина", "Болат"],
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ⬅️ params-ты await ету керек
  const project = projects[slug];

  if (!project) {
    return <div className="p-8 text-red-500">Проект табылмады</div>;
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Атауы мен секциясы бір қатарда */}
<div className="flex flex-wrap items-center justify-between">
  <h1 className="text-4xl font-bold">{project.name}</h1>
  <p className="text-lg leading-relaxed  max-w-2xl">{project.description}</p>
  
</div>

{/* Сипаттама */}

<p className="text-gray-600 mb-6">{project.category}</p>


      {/* Суреттер бірінің астында */}
      <div className="flex flex-col gap-6 mb-8">
        {project.images.map((src, index) => (
          <div key={index} className="relative w-full h-[400px]">
            <Image
              src={src}
              alt={`${project.name} image ${index + 1}`}
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>



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
