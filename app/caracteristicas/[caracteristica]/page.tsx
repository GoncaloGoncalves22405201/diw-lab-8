import Link from "next/link";

const caracteristicas = [
  "JSX, sintaxe que mistura HTML e JS.",
  "Componentes, funções que retornam JSX.",
  "Componentes Reutilizáveis e Modulares.",
  "Roteamento Automático e APIs.",
  "Hooks: useState, useEffect e useSWR.",
  "Renderização Rápida e SEO Friendly.",
  "TypeScript Seguro e Escalável.",
  "Comunidade Ativa e Popularidade.",
];

interface CaracteristicaPageProps {
  params: Promise<{
    caracteristica: string;
  }>;
}

export default async function CaracteristicaPage({ params }: CaracteristicaPageProps) {
  const { caracteristica } = await params;
  const index = parseInt(caracteristica);
  const item = caracteristicas[index];

  if (!item) {
    return (
      <div className="p-8">
        <h2>Característica não encontrada</h2>
        <Link href="/caracteristicas" className="text-blue-500 underline">
          Voltar às características
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Característica #{index + 1}</h2>
        <p className="text-lg text-gray-700">{item}</p>
      </div>
      <Link
        href="/caracteristicas"
        className="mt-6 inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Voltar
      </Link>
    </div>
  );
}