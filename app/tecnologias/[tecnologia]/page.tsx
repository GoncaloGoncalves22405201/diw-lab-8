import TecnologiaDetailsCard from "@/components/TecnologiaDetailsCard/TecnologiaDetailsCard";
import tecnologias from "@/app/data/tecnologias.json";
import Link from "next/link";

interface TecnologiaPageProps {
  params: Promise<{
    tecnologia: string;
  }>;
}

export default async function TecnologiaPage({ params }: TecnologiaPageProps) {
  const { tecnologia } = await params;
  const index = parseInt(tecnologia);
  const tech = tecnologias[index];

  if (!tech) {
    return (
      <div className="p-8">
        <h2>Tecnologia não encontrada</h2>
        <Link href="/tecnologias" className="text-blue-500 underline">
          Voltar às tecnologias
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8 flex flex-col items-center">
      <TecnologiaDetailsCard
        title={tech.title}
        emoji={tech.emoji}
        description={tech.description}
        rating={tech.rating}
      />
      <Link
        href="/tecnologias"
        className="mt-4 inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Voltar
      </Link>
    </div>
  );
}