"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "contador:value";
const HISTORY_KEY = "contador:history";

export default function Contador() {
  const [value, setValue] = useState(0);
  const [history, setHistory] = useState<number[]>([]);

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

  function inc() {
    if (value < 10) setValue(value + 1);
  }

  function dec() {
    if (value > 0) setValue(value - 1);
  }

  function reset() {
    setValue(0);
  }

  let color = "text-black";
  if (value >= 0 && value <= 3) color = "text-red-500";
  if (value >= 4 && value <= 7) color = "text-yellow-500";
  if (value >= 8 && value <= 10) color = "text-green-500";

  return (
    <div className="p-4 space-y-4">
      <h1 className={`text-4xl font-bold ${color}`}>{value}</h1>

      <div className="flex gap-3">
        <button className="px-4 py-2 bg-gray-200" onClick={dec}>-</button>
        <button className="px-4 py-2 bg-gray-200" onClick={inc}>+</button>
        <button className="px-4 py-2 bg-gray-200" onClick={reset}>Reset</button>
      </div>

      <h2 className="text-xl font-bold">Histórico</h2>
      <ul className="list-disc ml-4">
        {history.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  );
}
