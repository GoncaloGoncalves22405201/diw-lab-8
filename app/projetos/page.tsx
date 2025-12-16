import DescricaoProjetos from "@/components/DescricaoProjetos/DescricaoProjetos";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar grid de projetos com cards visuais
// 2. Adicionar filtros por tecnologia/categoria
// 3. Adicionar search functionality
// 4. Adicionar projetos featured/destacados
// 5. Adicionar timeline de projetos
// 6. Adicionar tags/labels para cada projeto
// 7. Adicionar live preview dos projetos
// 8. Adicionar statistics (total projetos, linguagens, etc)
// 9. Adicionar sorting options (data, popularidade)
// 10. Adicionar modal com detalhes completos

export default function ProjetosPage() {
  return (
    <>
      <h2>Meus Projetos</h2>
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar introdução
      <p className="text-gray-600 mb-4">
        Aqui estão alguns dos projetos que desenvolvi durante a disciplina.
        Cada projeto explora diferentes aspectos do desenvolvimento web moderno.
      </p>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar estatísticas
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-blue-100 rounded text-center">
          <p className="text-3xl font-bold">10</p>
          <p className="text-sm">Projetos</p>
        </div>
        <div className="p-4 bg-green-100 rounded text-center">
          <p className="text-3xl font-bold">5</p>
          <p className="text-sm">Tecnologias</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded text-center">
          <p className="text-3xl font-bold">100+</p>
          <p className="text-sm">Commits</p>
        </div>
      </div>
      */}
      
      <DescricaoProjetos />
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar call-to-action
      <div className="mt-8 p-6 bg-gray-100 rounded text-center">
        <h3 className="text-xl font-bold mb-2">Quer ver mais?</h3>
        <p className="mb-4">Visite meu GitHub para explorar todos os projetos</p>
        <a 
          href="https://github.com/..." 
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Ver GitHub
        </a>
      </div>
      */}
    </>
  );
}