"use client";
import { useEffect, useState } from "react";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar diferentes formatos (12h/24h)
// 2. Adicionar data completa
// 3. Adicionar diferentes fusos horários
// 4. Adicionar relógio analógico visual
// 5. Adicionar alarme
// 6. Adicionar timer/cronômetro
// 7. Adicionar temas/skins
// 8. Adicionar animações
// 9. Adicionar sons (tick-tock)
// 10. Adicionar world clocks

// MODIFICAÇÃO POSSÍVEL: Props para configuração
// interface RelogioProps {
//   format?: "12h" | "24h";
//   showDate?: boolean;
//   showSeconds?: boolean;
//   timezone?: string;
//   theme?: "light" | "dark" | "neon";
// }

export default function Relogio() {
  const [time, setTime] = useState("");
  
  // MODIFICAÇÃO POSSÍVEL: Estados adicionais
  // const [date, setDate] = useState("");
  // const [format, setFormat] = useState<"12h" | "24h">("24h");
  // const [showDate, setShowDate] = useState(false);

  useEffect(() => {
    function update() {
      const d = new Date();
      const h = String(d.getHours()).padStart(2, "0");
      const m = String(d.getMinutes()).padStart(2, "0");
      const s = String(d.getSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
      
      // MODIFICAÇÃO POSSÍVEL: Formato 12h
      // if (format === "12h") {
      //   const hours = d.getHours();
      //   const ampm = hours >= 12 ? "PM" : "AM";
      //   const h12 = hours % 12 || 12;
      //   setTime(`${String(h12).padStart(2, "0")}:${m}:${s} ${ampm}`);
      // }
      
      // MODIFICAÇÃO POSSÍVEL: Data
      // setDate(d.toLocaleDateString("pt-PT", {
      //   weekday: "long",
      //   year: "numeric",
      //   month: "long",
      //   day: "numeric",
      // }));
    }
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);
  
  // MODIFICAÇÃO POSSÍVEL: Diferentes estilos baseados na hora
  // const getTimeOfDay = () => {
  //   const hour = new Date().getHours();
  //   if (hour >= 6 && hour < 12) return "morning";
  //   if (hour >= 12 && hour < 18) return "afternoon";
  //   if (hour >= 18 && hour < 22) return "evening";
  //   return "night";
  // };
  
  // MODIFICAÇÃO POSSÍVEL: Cores baseadas na hora
  // const timeOfDay = getTimeOfDay();
  // const bgColors = {
  //   morning: "bg-yellow-100",
  //   afternoon: "bg-blue-100",
  //   evening: "bg-orange-100",
  //   night: "bg-indigo-900 text-white",
  // };

  return (
    <div 
      className="text-4xl font-bold"
      // MODIFICAÇÃO POSSÍVEL: Cores dinâmicas
      // className={`text-4xl font-bold ${bgColors[timeOfDay]} p-6 rounded-lg`}
    >
      {/* MODIFICAÇÃO POSSÍVEL: Mostrar data
      {showDate && (
        <div className="text-sm font-normal mb-2">
          {date}
        </div>
      )}
      */}
      
      {time}
      
      {/* MODIFICAÇÃO POSSÍVEL: Relógio analógico
      <div className="mt-4 relative w-48 h-48 mx-auto">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="48" fill="white" stroke="black" strokeWidth="2" />
          {/* Hour markers * /}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const x1 = 50 + 40 * Math.cos(angle);
            const y1 = 50 + 40 * Math.sin(angle);
            const x2 = 50 + 45 * Math.cos(angle);
            const y2 = 50 + 45 * Math.sin(angle);
            return (
              <line 
                key={i} 
                x1={x1} 
                y1={y1} 
                x2={x2} 
                y2={y2} 
                stroke="black" 
                strokeWidth="2" 
              />
            );
          })}
          {/* Hour hand * /}
          <line 
            x1="50" 
            y1="50" 
            x2={50 + 25 * Math.cos((hours * 30 - 90) * (Math.PI / 180))} 
            y2={50 + 25 * Math.sin((hours * 30 - 90) * (Math.PI / 180))} 
            stroke="black" 
            strokeWidth="4" 
          />
          {/* Minute hand * /}
          <line 
            x1="50" 
            y1="50" 
            x2={50 + 35 * Math.cos((minutes * 6 - 90) * (Math.PI / 180))} 
            y2={50 + 35 * Math.sin((minutes * 6 - 90) * (Math.PI / 180))} 
            stroke="black" 
            strokeWidth="3" 
          />
          {/* Second hand * /}
          <line 
            x1="50" 
            y1="50" 
            x2={50 + 40 * Math.cos((seconds * 6 - 90) * (Math.PI / 180))} 
            y2={50 + 40 * Math.sin((seconds * 6 - 90) * (Math.PI / 180))} 
            stroke="red" 
            strokeWidth="1" 
          />
          <circle cx="50" cy="50" r="3" fill="black" />
        </svg>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Controles
      <div className="mt-4 flex gap-2 text-sm justify-center">
        <button 
          onClick={() => setFormat(format === "12h" ? "24h" : "12h")}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          {format === "12h" ? "24h" : "12h"}
        </button>
        <button 
          onClick={() => setShowDate(!showDate)}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          {showDate ? "Ocultar" : "Mostrar"} Data
        </button>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Múltiplos fusos horários
      <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-xs text-gray-500">Lisboa</p>
          <p>{new Date().toLocaleTimeString("pt-PT")}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Nova York</p>
          <p>{new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" })}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Tóquio</p>
          <p>{new Date().toLocaleTimeString("ja-JP", { timeZone: "Asia/Tokyo" })}</p>
        </div>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Mensagem baseada na hora
      <p className="text-sm font-normal mt-4">
        {timeOfDay === "morning" && "☀️ Bom dia!"}
        {timeOfDay === "afternoon" && "🌤️ Boa tarde!"}
        {timeOfDay === "evening" && "🌅 Boa noite!"}
        {timeOfDay === "night" && "🌙 Boa noite!"}
      </p>
      */}
    </div>
  );
}