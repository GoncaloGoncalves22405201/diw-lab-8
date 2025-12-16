import data from "@/app/data/deishop.json";
import Link from "next/link";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Buscar categorias de uma API em vez de JSON local
// 2. Adicionar contador de produtos por categoria
// 3. Adicionar imagens de background para cada categoria
// 4. Adicionar hover effects animados
// 5. Adicionar filtros/search
// 6. Adicionar categorias em destaque
// 7. Adicionar breadcrumbs
// 8. Adicionar loading state
// 9. Adicionar error handling
// 10. Adicionar skeleton loading

// MODIFICAÇÃO POSSÍVEL: Tornar client component para fetch dinâmico
// "use client";
// import useSWR from "swr";

export default function CategoriasPage() {
  // MODIFICAÇÃO POSSÍVEL: Fetch de API
  // const { data, error, isLoading } = useSWR('/api/categorias', fetcher);
  
  // MODIFICAÇÃO POSSÍVEL: Loading state
  // if (isLoading) return <div>Carregando...</div>;
  
  // MODIFICAÇÃO POSSÍVEL: Error state
  // if (error) return <div>Erro ao carregar categorias</div>;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Categorias</h1>
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar descrição
      <p className="text-gray-600">
        Explore nossos produtos por categoria
      </p>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar contador total
      <p className="text-sm text-gray-500">
        {data.categorias.length} categorias disponíveis
      </p>
      */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.categorias.map((c) => (
          <Link
            key={c.nome}
            href={`/categorias/${c.nome}`}
            className="border p-4 rounded bg-white shadow text-center text-xl flex flex-col items-center gap-2 hover:shadow-lg transition-shadow"
            // MODIFICAÇÃO POSSÍVEL: Adicionar hover effect com scale
            // className="... hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl">{c.emoji}</div>
            {c.nome}
            
            {/* MODIFICAÇÃO POSSÍVEL: Adicionar contador de produtos
            <span className="text-sm text-gray-500">
              {c.productCount} produtos
            </span>
            */}
          </Link>
        ))}
      </div>
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar empty state
      {data.categorias.length === 0 && (
        <p className="text-center text-gray-500">
          Nenhuma categoria disponível
        </p>
      )}
      */}
    </div>
  );
}