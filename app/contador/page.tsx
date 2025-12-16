import Contador from "@/components/Contador/Contador";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar múltiplos contadores na mesma página
// 2. Adicionar configurações (min, max, step)
// 3. Adicionar preset values
// 4. Adicionar export/import de histórico
// 5. Adicionar gráfico do histórico
// 6. Adicionar comparação entre múltiplos contadores
// 7. Adicionar modo dark/light
// 8. Adicionar sons/haptic feedback
// 9. Adicionar keyboard shortcuts
// 10. Adicionar timer/countdown mode

export default function ContadorPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contador</h1>
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar instruções
      <p className="text-gray-600 mb-4">
        Use os botões para incrementar, decrementar ou resetar o contador.
        O histórico de valores é salvo automaticamente.
      </p>
      */}
      
      <Contador />
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar múltiplos contadores
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Contador 2</h2>
        <Contador />
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar configurações
      <div className="mt-8 p-4 border rounded">
        <h3 className="font-bold mb-2">Configurações</h3>
        <label className="block">
          Valor máximo:
          <input type="number" className="ml-2 border p-1" />
        </label>
      </div>
      */}
    </div>
  );
}