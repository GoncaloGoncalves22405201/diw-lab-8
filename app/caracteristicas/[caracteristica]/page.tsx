import Link from "next/link";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Buscar características de uma API em vez de array hardcoded
// 2. Adicionar metadata dinâmica para SEO
// 3. Adicionar breadcrumbs
// 4. Adicionar botões de navegação (anterior/próximo)
// 5. Adicionar imagens/ícones para cada característica
// 6. Adicionar animações de transição
// 7. Adicionar share buttons
// 8. Adicionar comments section
// 9. Adicionar related characteristics
// 10. Adicionar analytics tracking

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

// MODIFICAÇÃO POSSÍVEL: Adicionar generateMetadata para SEO dinâmico
// export async function generateMetadata({ params }: CaracteristicaPageProps): Promise<Metadata> {
//   const { caracteristica } = await params;
//   const index = parseInt(caracteristica);
//   const item = caracteristicas[index];
//   return {
//     title: `Característica: ${item}`,
//     description: item,
//   };
// }

// MODIFICAÇÃO POSSÍVEL: Adicionar generateStaticParams para SSG
// export async function generateStaticParams() {
//   return caracteristicas.map((_, index) => ({
//     caracteristica: index.toString(),
//   }));
// }

export default async function CaracteristicaPage({ params }: CaracteristicaPageProps) {
  const { caracteristica } = await params;
  const index = parseInt(caracteristica);
  const item = caracteristicas[index];

  // MODIFICAÇÃO POSSÍVEL: Validar se index é número válido
  // if (isNaN(index)) {
  //   return <div>ID inválido</div>;
  // }

  if (!item) {
    // MODIFICAÇÃO POSSÍVEL: Página 404 customizada
    // notFound(); // Next.js 13+ built-in
    return (
      <div className="p-8">
        <h2>Característica não encontrada</h2>
        <Link href="/caracteristicas" className="text-blue-500 underline">
          Voltar às características
        </Link>
      </div>
    );
  }

  // MODIFICAÇÃO POSSÍVEL: Adicionar navegação anterior/próximo
  // const hasPrevious = index > 0;
  // const hasNext = index < caracteristicas.length - 1;

  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Característica #{index + 1}</h2>
        <p className="text-lg text-gray-700">{item}</p>
        
        {/* MODIFICAÇÃO POSSÍVEL: Adicionar mais detalhes
        <div className="mt-4 text-sm text-gray-500">
          <p>Categoria: Frontend</p>
          <p>Dificuldade: Intermediário</p>
        </div>
        */}
      </div>
      
      {/* MODIFICAÇÃO POSSÍVEL: Botões de navegação
      <div className="flex gap-4 mt-6">
        {hasPrevious && (
          <Link href={`/caracteristicas/${index - 1}`} className="bg-gray-300 px-4 py-2 rounded">
            ← Anterior
          </Link>
        )}
        {hasNext && (
          <Link href={`/caracteristicas/${index + 1}`} className="bg-gray-300 px-4 py-2 rounded">
            Próximo →
          </Link>
        )}
      </div>
      */}
      
      <Link
        href="/caracteristicas"
        className="mt-6 inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Voltar
      </Link>
    </div>
  );
}