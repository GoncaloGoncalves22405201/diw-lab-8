import Caracteristica from "@/components/Caracteristica/Caracteristica";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Buscar de uma API externa
// 2. Adicionar filtros/categorias
// 3. Adicionar search functionality
// 4. Adicionar paginação
// 5. Adicionar sorting options
// 6. Adicionar grid/list view toggle
// 7. Adicionar favoritos/bookmarks
// 8. Adicionar loading skeleton
// 9. Adicionar animations
// 10. Adicionar statistics (total, por categoria, etc)

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

// MODIFICAÇÃO POSSÍVEL: Tornar client component para interatividade
// "use client";
// import { useState } from "react";

export default function CaracteristicasPage() {
  // MODIFICAÇÃO POSSÍVEL: Adicionar estado para filtros
  // const [searchTerm, setSearchTerm] = useState("");
  // const [filter, setFilter] = useState("all");
  
  // MODIFICAÇÃO POSSÍVEL: Filtrar características
  // const filteredCaracteristicas = caracteristicas.filter(c => 
  //   c.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <>
      <h2>Características do React e Next.js</h2>
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar search bar
      <div className="my-4">
        <input
          type="text"
          placeholder="Pesquisar características..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar estatísticas
      <p className="text-sm text-gray-600 mb-4">
        Total de características: {caracteristicas.length}
      </p>
      */}
      
      <ul className="mt-4">
        {caracteristicas.map((caracteristica, index) => (
          <Caracteristica
            key={index}
            caracteristica={caracteristica}
            index={index}
          />
        ))}
      </ul>
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar empty state
      {filteredCaracteristicas.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          Nenhuma característica encontrada
        </p>
      )}
      */}
    </>
  );
}