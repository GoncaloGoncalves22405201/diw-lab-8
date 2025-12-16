import TecnologiaDetailsCard from "@/components/TecnologiaDetailsCard/TecnologiaDetailsCard";
import tecnologias from "@/app/data/tecnologias.json";
import Link from "next/link";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar recursos de aprendizado (links, tutoriais)
// 2. Adicionar projetos relacionados
// 3. Adicionar comments section
// 4. Adicionar rating/review system
// 5. Adicionar comparison com outras tecnologias
// 6. Adicionar roadmap de aprendizado
// 7. Adicionar certificações relacionadas
// 8. Adicionar job opportunities
// 9. Adicionar community/forum links
// 10. Adicionar video tutorials

interface TecnologiaPageProps {
  params: Promise<{ tecnologia: string }>;
}

// MODIFICAÇÃO POSSÍVEL: Adicionar metadata dinâmica
// export async function generateMetadata({ params }: TecnologiaPageProps) {
//   const { tecnologia } = await params;
//   const index = parseInt(tecnologia);
//   const tech = tecnologias[index];
//   return {
//     title: `${tech?.title} - Tecnologias`,
//     description: tech?.description,
//   };
// }

// MODIFICAÇÃO POSSÍVEL: Gerar páginas estáticas
// export async function generateStaticParams() {
//   return tecnologias.map((_, index) => ({
//     tecnologia: index.toString(),
//   }));
// }

export default async function TecnologiaPage({ params }: TecnologiaPageProps) {
  const { tecnologia } = await params;
  const index = parseInt(tecnologia);
  const tech = tecnologias[index];

  // MODIFICAÇÃO POSSÍVEL: Validar número
  // if (isNaN(index)) {
  //   notFound();
  // }

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
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar recursos de aprendizado
      <div className="mt-8 w-full max-w-2xl">
        <h3 className="text-xl font-bold mb-4">Recursos para Aprender</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              📚 Documentação Oficial
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              🎥 Video Tutorial
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              💻 Exemplos de Código
            </a>
          </li>
        </ul>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar tecnologias relacionadas
      <div className="mt-8 w-full max-w-2xl">
        <h3 className="text-xl font-bold mb-4">Tecnologias Relacionadas</h3>
        <div className="flex gap-4">
          <Link href="/tecnologias/0" className="p-4 border rounded hover:shadow">
            React
          </Link>
          <Link href="/tecnologias/1" className="p-4 border rounded hover:shadow">
            TypeScript
          </Link>
        </div>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar prós e contras
      <div className="mt-8 w-full max-w-2xl grid grid-cols-2 gap-4">
        <div className="p-4 bg-green-50 rounded">
          <h4 className="font-bold mb-2">✅ Vantagens</h4>
          <ul className="text-sm space-y-1">
            <li>• Performance</li>
            <li>• Comunidade</li>
            <li>• Documentação</li>
          </ul>
        </div>
        <div className="p-4 bg-red-50 rounded">
          <h4 className="font-bold mb-2">⚠️ Desafios</h4>
          <ul className="text-sm space-y-1">
            <li>• Curva de aprendizado</li>
            <li>• Configuração inicial</li>
          </ul>
        </div>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Navegação anterior/próximo
      <div className="flex gap-4 mt-6">
        {index > 0 && (
          <Link 
            href={`/tecnologias/${index - 1}`}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            ← Anterior
          </Link>
        )}
        {index < tecnologias.length - 1 && (
          <Link 
            href={`/tecnologias/${index + 1}`}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Próximo →
          </Link>
        )}
      </div>
      */}
      
      <Link
        href="/tecnologias"
        className="mt-4 inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Voltar
      </Link>
    </div>
  );
}