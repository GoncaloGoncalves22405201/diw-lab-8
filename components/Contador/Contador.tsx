"use client";
import { useEffect, useState } from "react";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar limite configurável (min/max)
// 2. Adicionar step configurável (incremento)
// 3. Adicionar keyboard shortcuts
// 4. Adicionar sons ao incrementar/decrementar
// 5. Adicionar animações de transição
// 6. Adicionar preset values (quick set)
// 7. Adicionar export/import de histórico
// 8. Adicionar gráfico visual do histórico
// 9. Adicionar statistics (média, max, min)
// 10. Adicionar multiple counters management

const STORAGE_KEY = "contador:value";
const HISTORY_KEY = "contador:history";

// MODIFICAÇÃO POSSÍVEL: Adicionar props para configuração
// interface ContadorProps {
//   min?: number;
//   max?: number;
//   step?: number;
//   initialValue?: number;
//   showHistory?: boolean;
// }

export default function Contador() {
  const [value, setValue] = useState(0);
  const [history, setHistory] = useState<number[]>([]);
  
  // MODIFICAÇÃO POSSÍVEL: Estado para configurações
  // const [showStats, setShowStats] = useState(false);
  // const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const v = localStorage.getItem(STORAGE_KEY);
    const h = localStorage.getItem(HISTORY_KEY);
    if (v) setValue(Number(v));
    if (h) setHistory(JSON.parse(h));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(value));
    const next = [value, ...history];
    setHistory(next);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
  }, [value]);

  // MODIFICAÇÃO POSSÍVEL: Adicionar keyboard shortcuts
  // useEffect(() => {
  //   const handleKeyPress = (e: KeyboardEvent) => {
  //     if (e.key === "ArrowUp") inc();
  //     if (e.key === "ArrowDown") dec();
  //     if (e.key === "r") reset();
  //   };
  //   window.addEventListener("keydown", handleKeyPress);
  //   return () => window.removeEventListener("keydown", handleKeyPress);
  // }, [value]);

  function inc() {
    if (value < 10) setValue(value + 1);
    // MODIFICAÇÃO POSSÍVEL: Tocar som
    // if (soundEnabled) playSound("increment");
  }

  function dec() {
    if (value > 0) setValue(value - 1);
    // MODIFICAÇÃO POSSÍVEL: Tocar som
    // if (soundEnabled) playSound("decrement");
  }

  function reset() {
    setValue(0);
    // MODIFICAÇÃO POSSÍVEL: Confirmar reset
    // if (history.length > 0) {
    //   if (confirm("Tem certeza que deseja resetar?")) {
    //     setValue(0);
    //   }
    // }
  }

  // MODIFICAÇÃO POSSÍVEL: Função para limpar histórico
  // function clearHistory() {
  //   if (confirm("Deseja limpar o histórico?")) {
  //     setHistory([]);
  //     localStorage.removeItem(HISTORY_KEY);
  //   }
  // }

  // MODIFICAÇÃO POSSÍVEL: Calcular estatísticas
  // const stats = {
  //   average: history.length ? (history.reduce((a, b) => a + b, 0) / history.length).toFixed(2) : 0,
  //   max: history.length ? Math.max(...history) : 0,
  //   min: history.length ? Math.min(...history) : 0,
  // };

  let color = "text-black";
  if (value >= 0 && value <= 3) color = "text-red-500";
  if (value >= 4 && value <= 7) color = "text-yellow-500";
  if (value >= 8 && value <= 10) color = "text-green-500";

  return (
    <div className="p-4 space-y-4">
      <h1 className={`text-4xl font-bold ${color}`}>{value}</h1>
      
      {/* MODIFICAÇÃO POSSÍVEL: Barra de progresso visual
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div 
          className={`h-4 rounded-full ${color.replace('text', 'bg')}`}
          style={{ width: `${(value / 10) * 100}%` }}
        />
      </div>
      */}

      <div className="flex gap-3">
        <button className="px-4 py-2 bg-gray-200" onClick={dec}>-</button>
        <button className="px-4 py-2 bg-gray-200" onClick={inc}>+</button>
        <button className="px-4 py-2 bg-gray-200" onClick={reset}>Reset</button>
        
        {/* MODIFICAÇÃO POSSÍVEL: Botões adicionais
        <button className="px-4 py-2 bg-blue-200" onClick={() => setValue(5)}>
          Set 5
        </button>
        <button className="px-4 py-2 bg-blue-200" onClick={() => setValue(10)}>
          Set Max
        </button>
        */}
      </div>
      
      {/* MODIFICAÇÃO POSSÍVEL: Controles adicionais
      <div className="flex gap-2 items-center">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={soundEnabled}
            onChange={(e) => setSoundEnabled(e.target.checked)}
          />
          Sons
        </label>
        <button onClick={() => setShowStats(!showStats)} className="ml-4 text-blue-500">
          {showStats ? "Ocultar" : "Mostrar"} Estatísticas
        </button>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Estatísticas
      {showStats && (
        <div className="p-4 bg-gray-100 rounded">
          <h3 className="font-bold mb-2">Estatísticas</h3>
          <p>Média: {stats.average}</p>
          <p>Máximo: {stats.max}</p>
          <p>Mínimo: {stats.min}</p>
        </div>
      )}
      */}

      <h2 className="text-xl font-bold">Histórico</h2>
      
      {/* MODIFICAÇÃO POSSÍVEL: Botão limpar histórico
      {history.length > 0 && (
        <button 
          onClick={clearHistory}
          className="text-sm text-red-500 hover:underline"
        >
          Limpar Histórico
        </button>
      )}
      */}
      
      <ul className="list-disc ml-4">
        {history.map((v, i) => (
          <li key={i}>
            {v}
            {/* MODIFICAÇÃO POSSÍVEL: Adicionar timestamp
            <span className="text-xs text-gray-500 ml-2">
              {new Date().toLocaleTimeString()}
            </span>
            */}
          </li>
        ))}
      </ul>
      
      {/* MODIFICAÇÃO POSSÍVEL: Gráfico do histórico
      <div className="mt-4">
        <h3 className="font-bold mb-2">Gráfico</h3>
        <div className="flex items-end gap-1 h-32">
          {history.slice(0, 10).reverse().map((v, i) => (
            <div
              key={i}
              className="flex-1 bg-blue-500"
              style={{ height: `${(v / 10) * 100}%` }}
            />
          ))}
        </div>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Keyboard shortcuts guide
      <div className="text-xs text-gray-500 mt-4">
        <p>Atalhos: ↑ incrementar | ↓ decrementar | R resetar</p>
      </div>
      */}
    </div>
  );
}