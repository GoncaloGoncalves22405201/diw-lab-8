import InputPageClient from "@/components/Input/InputPageClient";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar breadcrumbs
// 2. Adicionar instruções de uso
// 3. Adicionar exemplos
// 4. Adicionar video tutorial
// 5. Adicionar FAQ section
// 6. Adicionar feedback form
// 7. Adicionar related features
// 8. Adicionar keyboard shortcuts guide
// 9. Adicionar export/import functionality
// 10. Adicionar statistics dashboard

export default function InputPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Input</h1>
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar descrição
      <p className="text-gray-600">
        Gerencie suas tarefas de forma simples e organizada. 
        Adicione, edite e remova tarefas por categoria.
      </p>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar estatísticas
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-blue-100 rounded">
          <p className="text-sm">Total</p>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="p-4 bg-green-100 rounded">
          <p className="text-sm">Hoje</p>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded">
          <p className="text-sm">Esta Semana</p>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>
      */}
      
      <InputPageClient />
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar dicas
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h3 className="font-bold mb-2">💡 Dicas</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Pressione Enter para adicionar rapidamente</li>
          <li>• Use categorias para organizar melhor</li>
          <li>• O histórico é salvo automaticamente</li>
        </ul>
      </div>
      */}
    </div>
  );
}