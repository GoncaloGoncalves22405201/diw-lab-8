import Relogio from "@/components/Relogio/Relogio";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar múltiplos relógios (diferentes fusos horários)
// 2. Adicionar formato 12h/24h toggle
// 3. Adicionar alarme/timer
// 4. Adicionar cronômetro
// 5. Adicionar data completa
// 6. Adicionar diferentes temas/skins
// 7. Adicionar relógio analógico
// 8. Adicionar world clock
// 9. Adicionar stopwatch
// 10. Adicionar countdown timer

export default function RelogioPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Relógio</h1>
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar descrição
      <p className="text-gray-600">
        Relógio digital atualizado em tempo real
      </p>
      */}
      
      <Relogio />
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar mais informações
      <div className="mt-6 p-4 bg-gray-100 rounded">
        <h3 className="font-bold mb-2">Informações</h3>
        <ul className="text-sm space-y-1">
          <li>• Fuso horário: Europe/Lisbon</li>
          <li>• Formato: 24 horas</li>
          <li>• Atualização: 1 segundo</li>
        </ul>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar relógios de outros fusos
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Outros Fusos Horários</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded">
            <p className="text-sm text-gray-600">Nova York</p>
            <Relogio timezone="America/New_York" />
          </div>
          <div className="p-4 border rounded">
            <p className="text-sm text-gray-600">Tóquio</p>
            <Relogio timezone="Asia/Tokyo" />
          </div>
        </div>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar controles
      <div className="mt-6 flex gap-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Formato 12h
        </button>
        <button className="px-4 py-2 bg-gray-300 rounded">
          Mostrar Data
        </button>
        <button className="px-4 py-2 bg-gray-300 rounded">
          Tema Escuro
        </button>
      </div>
      */}
    </div>
  );
}