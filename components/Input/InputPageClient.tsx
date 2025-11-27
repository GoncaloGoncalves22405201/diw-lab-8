"use client";
import { useState } from "react";

export default function InputPageClient() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("React");
  const [tasks, setTasks] = useState<{ id: number; text: string; category: string }[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  function addTask() {
    if (text.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text, category }]);
    setText("");
  }

  function removeTask(id: number) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function startEdit(id: number, current: string) {
    setEditId(id);
    setEditText(current);
  }

  function saveEdit(id: number) {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, text: editText } : t
      )
    );
    setEditId(null);
    setEditText("");
  }

  return (
    <div className="space-y-4">
      <input
        className="border p-2 w-full"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite algo"
      />

      <p className="text-lg font-medium">{text}</p>

      <select
        className="border p-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>React</option>
        <option>Next.js</option>
        <option>Typescript</option>
        <option>CSS</option>
      </select>

      <button className="px-4 py-2 bg-gray-200" onClick={addTask}>
        Adicionar tarefa
      </button>

      <ul className="space-y-2">
        {tasks.map((t) => (
          <li key={t.id} className="border p-3 flex flex-col">
            <span className="font-semibold">{t.category}</span>

            {editId === t.id ? (
              <div className="flex gap-2">
                <input
                  className="border p-1"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button className="px-2 bg-green-200" onClick={() => saveEdit(t.id)}>
                  Guardar
                </button>
              </div>
            ) : (
              <span>{t.text}</span>
            )}

            <div className="flex gap-2 mt-2">
              <button className="px-2 bg-yellow-200" onClick={() => startEdit(t.id, t.text)}>
                Editar
              </button>
              <button className="px-2 bg-red-200" onClick={() => removeTask(t.id)}>
                Apagar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
