// POSSÍVEIS MODIFICAÇÕES:
// 1. Tornar client component com interatividade
// 2. Adicionar animações
// 3. Adicionar exemplos de código
// 4. Adicionar toggle para mostrar/ocultar código
// 5. Adicionar mais exemplos de JSX
// 6. Adicionar syntax highlighting
// 7. Adicionar editor interativo
// 8. Adicionar playground de JSX
// 9. Adicionar explicação step-by-step
// 10. Adicionar quiz/exercícios

// MODIFICAÇÃO POSSÍVEL: Tornar client component
// "use client";
// import { useState } from "react";

export default function MagiaDoJSX() {
  const magia = <strong>HTML dentro de JavaScript!</strong>
  const tecnologias = "React e Next.js"
  
  // MODIFICAÇÃO POSSÍVEL: Estado para mostrar código
  // const [showCode, setShowCode] = useState(false);
  
  // MODIFICAÇÃO POSSÍVEL: Múltiplos exemplos
  // const exemplos = [
  //   { titulo: "Variáveis em JSX", codigo: "const nome = 'João'; <p>Olá {nome}!</p>" },
  //   { titulo: "Expressões", codigo: "<p>{2 + 2}</p>" },
  //   { titulo: "Condicionais", codigo: "{isLoggedIn ? <Dashboard /> : <Login />}" },
  // ];

  return (
    <div className="bg-blue-300 p-3 m-3 rounded-xl">
      <p>Este é o meu componente MagiaDoJSX.</p>
      <p>Um componente é uma função que retorna JSX - {magia}.</p>
      <p>OS componentes são usados em {tecnologias}</p>
      
      {/* MODIFICAÇÃO POSSÍVEL: Botão para mostrar código
      <button 
        onClick={() => setShowCode(!showCode)}
        className="mt-3 px-4 py-2 bg-white rounded hover:bg-gray-100"
      >
        {showCode ? "Ocultar" : "Mostrar"} Código
      </button>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Mostrar código fonte
      {showCode && (
        <pre className="mt-3 p-4 bg-gray-800 text-white rounded overflow-x-auto text-sm">
          <code>{`
const MagiaDoJSX = () => {
  const magia = <strong>HTML dentro de JavaScript!</strong>
  const tecnologias = "React e Next.js"
  
  return (
    <div>
      <p>Um componente é uma função que retorna JSX - {magia}.</p>
      <p>OS componentes são usados em {tecnologias}</p>
    </div>
  )
}
          `}</code>
        </pre>
      )}
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Exemplos interativos
      <div className="mt-4 space-y-3">
        <h3 className="font-bold">Exemplos de JSX:</h3>
        {exemplos.map((ex, i) => (
          <div key={i} className="p-3 bg-white rounded">
            <h4 className="font-semibold text-sm mb-2">{ex.titulo}</h4>
            <code className="text-xs bg-gray-100 p-2 rounded block">
              {ex.codigo}
            </code>
          </div>
        ))}
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Características do JSX
      <div className="mt-4 p-3 bg-white rounded">
        <h3 className="font-bold mb-2">Características do JSX:</h3>
        <ul className="text-sm space-y-1">
          <li>✅ Sintaxe familiar semelhante ao HTML</li>
          <li>✅ Expressões JavaScript entre chaves {}</li>
          <li>✅ Componentes podem ser usados como tags</li>
          <li>✅ Props passadas como atributos</li>
        </ul>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Comparação HTML vs JSX
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="p-3 bg-red-100 rounded">
          <h4 className="font-bold text-sm mb-2">HTML:</h4>
          <code className="text-xs">
            {`<div class="container">
  <p>Hello World</p>
</div>`}
          </code>
        </div>
        <div className="p-3 bg-green-100 rounded">
          <h4 className="font-bold text-sm mb-2">JSX:</h4>
          <code className="text-xs">
            {`<div className="container">
  <p>Hello {name}</p>
</div>`}
          </code>
        </div>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Quiz
      <div className="mt-4 p-3 bg-yellow-100 rounded">
        <h3 className="font-bold mb-2">🎯 Quiz Rápido</h3>
        <p className="text-sm mb-2">O que é JSX?</p>
        <div className="space-y-1">
          <button className="block w-full text-left p-2 bg-white rounded hover:bg-gray-100 text-sm">
            A) Uma linguagem de programação
          </button>
          <button className="block w-full text-left p-2 bg-white rounded hover:bg-gray-100 text-sm">
            B) Sintaxe que combina HTML e JavaScript ✓
          </button>
          <button className="block w-full text-left p-2 bg-white rounded hover:bg-gray-100 text-sm">
            C) Uma framework
          </button>
        </div>
      </div>
      */}
    </div>
  )
}