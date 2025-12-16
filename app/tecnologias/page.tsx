import TecnologiaCard from "@/components/TecnologiaCard/TecnologiaCard";
import tecnologias from "@/app/data/tecnologias.json";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar filtros por categoria (Frontend, Backend, etc)
// 2. Adicionar search functionality
// 3. Adicionar sorting (alfabético, rating, popularidade)
// 4. Adicionar favorites/bookmarks
// 5. Adicionar comparison tool
// 6. Adicionar tech stack builder
// 7. Adicionar roadmap visualization
// 8. Adicionar statistics dashboard
// 9. Adicionar loading skeleton
// 10. Adicionar infinite scroll/pagination

// MODIFICAÇÃO POSSÍVEL: Tornar client component
// "use client";
// import { useState } from "react";

export default function TecnologiasPage() {
  // MODIFICAÇÃO POSSÍVEL: Adicionar estado para filtros
  // const [filter, setFilter] = useState("all");
  // const [sortBy, setSortBy] = useState("name");
  // const [searchTerm, setSearchTerm] = useState("");
  
  // MODIFICAÇÃO POSSÍVEL: Filtrar tecnologias
  // const filteredTecnologias = tecnologias.filter(tech => {
  //   const matchesSearch = tech.title.toLowerCase().includes(searchTerm.toLowerCase());
  //   const matchesFilter = filter === "all" || tech.category === filter;
  //   return matchesSearch && matchesFilter;
  // });
  
  // MODIFICAÇÃO POSSÍVEL: Ordenar tecnologias
  // const sortedTecnologias = [...filteredTecnologias].sort((a, b) => {
  //   if (sortBy === "name") return a.title.localeCompare(b.title);
  //   if (sortBy === "rating") return b.rating - a.rating;
  //   return 0;
  // });

  return (
    <>
      <h2>Tecnologias Exploradas</h2>
      <p>
        Neste componente irá apresentar as tecnologias que aprendeu nesta
        disciplina: HTML, CSS, Tailwind CSS, JavaScript, TypeScript, JSON, API
        RESTful, Swagger, GitHub, Codespaces, GitHub Pages, React.js, Next.js,
        Vercel.
      </p>
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar search bar
      <div className="my-4">
        <input
          type="text"
          placeholder="Pesquisar tecnologias..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar filtros
      <div className="flex gap-2 mb-4">
        <button 
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Todas
        </button>
        <button 
          onClick={() => setFilter("frontend")}
          className={`px-4 py-2 rounded ${filter === "frontend" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Frontend
        </button>
        <button 
          onClick={() => setFilter("backend")}
          className={`px-4 py-2 rounded ${filter === "backend" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Backend
        </button>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar sorting
      <div className="mb-4">
        <label className="mr-2">Ordenar por:</label>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="name">Nome</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar contador
      <p className="text-sm text-gray-600 mb-4">
        Mostrando {tecnologias.length} tecnologias
      </p>
      */}
      
      <div className="flex flex-wrap justify-center mt-4">
        {tecnologias.map((tecnologia, index) => (
          <TecnologiaCard
            key={tecnologia.title}
            title={tecnologia.title}
            emoji={tecnologia.emoji}
            index={index}
          />
        ))}
      </div>
      
      {/* MODIFICAÇÃO POSSÍVEL: Empty state
      {filteredTecnologias.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          Nenhuma tecnologia encontrada
        </p>
      )}
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar call-to-action
      <div className="mt-8 p-6 bg-blue-100 rounded text-center">
        <h3 className="text-xl font-bold mb-2">Quer aprender mais?</h3>
        <p className="mb-4">Explore recursos adicionais e tutoriais</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded">
          Ver Recursos
        </button>
      </div>
      */}
    </>
  );
}