import Projeto from "@/components/Projeto/Projeto";

export default function DescricaoProjetos() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Nesta disciplina desenvolvi vários projetos de front-end. Pode ver mais
        exemplos na minha página de projetos em:
        <a
          href="https://github.com/GoncaloGoncalves22405201/GoncaloGoncalves22405201.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline ml-1"
        >
          GitHub Pages
        </a>
        .
      </p>
      <Projeto
        nome="Loja Online"
        url="https://github.com/GoncaloGoncalves22405201/GoncaloGoncalves22405201.github.io"
      />
      <Projeto
        nome="Site com JS Interativo"
        url="https://github.com/GoncaloGoncalves22405201/GoncaloGoncalves22405201.github.io"
      />
    </div>
  );
}

// ==========================================
// POSSÍVEIS MODIFICAÇÕES DO PROFESSOR:
// ==========================================

// 1. ADICIONAR ARRAY DE PROJETOS (antes do return):
// const projetos = [
//   {
//     id: 1,
//     nome: "Loja Online",
//     url: "https://github.com/...",
//     descricao: "E-commerce completo",
//     tecnologias: ["React", "Next.js", "Tailwind"],
//     imagem: "/loja.png",
//     destaque: true
//   },
//   {
//     id: 2,
//     nome: "Site com JS Interativo",
//     url: "https://github.com/...",
//     descricao: "Website interativo",
//     tecnologias: ["JavaScript", "HTML", "CSS"],
//     imagem: "/site.png",
//     destaque: false
//   }
// ];

// 2. ADICIONAR ESTADOS PARA FILTROS (depois dos projetos):
// const [filtro, setFiltro] = useState("todos");
// const [pesquisa, setPesquisa] = useState("");

// 3. ADICIONAR BARRA DE PESQUISA (depois do parágrafo introdutório):
// <input
//   type="text"
//   placeholder="Pesquisar projetos..."
//   value={pesquisa}
//   onChange={(e) => setPesquisa(e.target.value)}
//   className="w-full p-2 border rounded mt-4"
// />

// 4. ADICIONAR FILTROS POR TECNOLOGIA (depois da pesquisa):
// <div className="flex gap-2 mt-3">
//   <button onClick={() => setFiltro("todos")} className="px-3 py-1 bg-gray-200 rounded">Todos</button>
//   <button onClick={() => setFiltro("React")} className="px-3 py-1 bg-gray-200 rounded">React</button>
//   <button onClick={() => setFiltro("JavaScript")} className="px-3 py-1 bg-gray-200 rounded">JavaScript</button>
// </div>

// 5. ADICIONAR ESTATÍSTICAS (depois dos filtros):
// <div className="grid grid-cols-3 gap-4 mt-4">
//   <div className="p-4 bg-blue-100 rounded text-center">
//     <p className="text-2xl font-bold">{projetos.length}</p>
//     <p className="text-sm">Projetos</p>
//   </div>
//   <div className="p-4 bg-green-100 rounded text-center">
//     <p className="text-2xl font-bold">5</p>
//     <p className="text-sm">Tecnologias</p>
//   </div>
//   <div className="p-4 bg-yellow-100 rounded text-center">
//     <p className="text-2xl font-bold">100+</p>
//     <p className="text-sm">Commits</p>
//   </div>
// </div>

// 6. ADICIONAR SEÇÃO DE PROJETOS EM DESTAQUE (antes dos projetos normais):
// <div className="mt-6">
//   <h3 className="text-xl font-bold mb-3">Projetos em Destaque</h3>
//   {projetos.filter(p => p.destaque).map(p => (
//     <div key={p.id} className="border rounded p-4 bg-gradient-to-r from-blue-50 to-purple-50 mb-3">
//       <h4 className="font-bold text-lg">{p.nome}</h4>
//       <p className="text-sm text-gray-600">{p.descricao}</p>
//     </div>
//   ))}
// </div>

// 7. SUBSTITUIR OS COMPONENTES <Projeto> POR GRID COM IMAGENS:
// <div className="grid grid-cols-2 gap-4 mt-4">
//   {projetos.map(p => (
//     <div key={p.id} className="border rounded overflow-hidden shadow">
//       <img src={p.imagem} alt={p.nome} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h4 className="font-bold">{p.nome}</h4>
//         <p className="text-sm text-gray-600 mt-2">{p.descricao}</p>
//         <div className="flex gap-2 mt-3 flex-wrap">
//           {p.tecnologias.map(tech => (
//             <span key={tech} className="text-xs bg-gray-200 px-2 py-1 rounded">{tech}</span>
//           ))}
//         </div>
//         <a href={p.url} target="_blank" rel="noopener noreferrer" 
//            className="block mt-3 text-blue-500 hover:underline">
//           Ver projeto →
//         </a>
//       </div>
//     </div>
//   ))}
// </div>

// 8. ADICIONAR BOTÃO "CARREGAR MAIS" (depois dos projetos):
// <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//   Carregar Mais Projetos
// </button>

// 9. ADICIONAR CALL TO ACTION (no final):
// <div className="mt-8 p-6 bg-blue-50 rounded text-center">
//   <h3 className="text-xl font-bold mb-2">Quer colaborar?</h3>
//   <p className="mb-4">Entre em contato para discutir projetos!</p>
//   <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
//     Entrar em Contato
//   </button>
// </div>

// 10. ADICIONAR TIMELINE (alternativa ao grid):
// <div className="mt-6 space-y-4">
//   {projetos.map((p, i) => (
//     <div key={p.id} className="flex gap-4 border-l-2 border-blue-500 pl-4">
//       <div className="w-20 text-sm text-gray-500">2024-0{i+1}</div>
//       <div className="flex-1">
//         <h4 className="font-bold">{p.nome}</h4>
//         <p className="text-sm text-gray-600">{p.descricao}</p>
//       </div>
//     </div>
//   ))}
// </div>

// ==========================================
// NOTAS IMPORTANTES:
// - Para usar qualquer modificação, descomente o código
// - Se adicionar estados, precisa importar: import { useState } from "react";
// - Se usar "use client", adicione no topo: "use client";
// - Ajuste os caminhos das imagens conforme necessário
// ==========================================