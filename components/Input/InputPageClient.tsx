"use client";
import { useState } from "react";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar localStorage persistence
// 2. Adicionar filtros por categoria
// 3. Adicionar prioridades nas tarefas
// 4. Adicionar datas/deadlines
// 5. Adicionar search functionality
// 6. Adicionar sorting options
// 7. Adicionar bulk operations (delete all, complete all)
// 8. Adicionar export/import functionality
// 9. Adicionar tags/labels
// 10. Adicionar drag and drop reordering

// MODIFICAÇÃO POSSÍVEL: Interface para task
// interface Task {
//   id: number;
//   text: string;
//   category: string;
//   completed: boolean;
//   priority: "low" | "medium" | "high";
//   dueDate?: Date;
//   tags: string[];
//   createdAt: Date;
// }

export default function InputPageClient() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("React");
  const [tasks, setTasks] = useState<{ id: number; text: string; category: string }[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  
  // MODIFICAÇÃO POSSÍVEL: Estados adicionais
  // const [filter, setFilter] = useState<string>("all");
  // const [sortBy, setSortBy] = useState<"date" | "category" | "name">("date");
  // const [searchTerm, setSearchTerm] = useState("");

  // MODIFICAÇÃO POSSÍVEL: Persistência localStorage
  // useEffect(() => {
  //   const saved = localStorage.getItem("tasks");
  //   if (saved) setTasks(JSON.parse(saved));
  // }, []);
  
  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  function addTask() {
    if (text.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text, category }]);
    setText("");
    
    // MODIFICAÇÃO POSSÍVEL: Notificação
    // toast.success("Tarefa adicionada!");
  }
  
  // MODIFICAÇÃO POSSÍVEL: Adicionar tarefa ao pressionar Enter
  // const handleKeyPress = (e: React.KeyboardEvent) => {
  //   if (e.key === "Enter") {
  //     addTask();
  //   }
  // };

  function removeTask(id: number) {
    setTasks(tasks.filter((t) => t.id !== id));
    
    // MODIFICAÇÃO POSSÍVEL: Confirmação
    // if (confirm("Deseja apagar esta tarefa?")) {
    //   setTasks(tasks.filter((t) => t.id !== id));
    // }
  }
  
  // MODIFICAÇÃO POSSÍVEL: Remover todas as tarefas
  // function removeAllTasks() {
  //   if (confirm("Deseja apagar todas as tarefas?")) {
  //     setTasks([]);
  //   }
  // }

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
  
  // MODIFICAÇÃO POSSÍVEL: Cancelar edição
  // function cancelEdit() {
  //   setEditId(null);
  //   setEditText("");
  // }
  
  // MODIFICAÇÃO POSSÍVEL: Toggle completado
  // function toggleComplete(id: number) {
  //   setTasks(
  //     tasks.map((t) =>
  //       t.id === id ? { ...t, completed: !t.completed } : t
  //     )
  //   );
  // }
  
  // MODIFICAÇÃO POSSÍVEL: Filtrar tarefas
  // const filteredTasks = tasks.filter(t => {
  //   const matchesSearch = t.text.toLowerCase().includes(searchTerm.toLowerCase());
  //   const matchesFilter = filter === "all" || t.category === filter;
  //   const matchesCompleted = filter !== "completed" || t.completed;
  //   const matchesActive = filter !== "active" || !t.completed;
  //   return matchesSearch && matchesFilter && matchesCompleted && matchesActive;
  // });
  
  // MODIFICAÇÃO POSSÍVEL: Ordenar tarefas
  // const sortedTasks = [...filteredTasks].sort((a, b) => {
  //   if (sortBy === "name") return a.text.localeCompare(b.text);
  //   if (sortBy === "category") return a.category.localeCompare(b.category);
  //   if (sortBy === "date") return b.id - a.id;
  //   return 0;
  // });

  return (
    <div className="space-y-4">
      {/* MODIFICAÇÃO POSSÍVEL: Search bar
      <input
        type="search"
        placeholder="Pesquisar tarefas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      */}
      
      <input
        className="border p-2 w-full"
        value={text}
        onChange={(e) => setText(e.target.value)}
        // onKeyPress={handleKeyPress} // Enter to add
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
        {/* MODIFICAÇÃO POSSÍVEL: Categorias dinâmicas
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
        */}
      </select>

      <button className="px-4 py-2 bg-gray-200" onClick={addTask}>
        Adicionar tarefa
      </button>
      
      {/* MODIFICAÇÃO POSSÍVEL: Botões adicionais
      <button className="px-4 py-2 bg-red-200 ml-2" onClick={removeAllTasks}>
        Apagar Todas
      </button>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Filtros
      <div className="flex gap-2 mt-4">
        <button 
          onClick={() => setFilter("all")}
          className={`px-3 py-1 rounded ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Todas ({tasks.length})
        </button>
        <button 
          onClick={() => setFilter("active")}
          className={`px-3 py-1 rounded ${filter === "active" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Ativas ({tasks.filter(t => !t.completed).length})
        </button>
        <button 
          onClick={() => setFilter("completed")}
          className={`px-3 py-1 rounded ${filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Completas ({tasks.filter(t => t.completed).length})
        </button>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Sorting
      <div className="flex gap-2 items-center mt-2">
        <span className="text-sm">Ordenar por:</span>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value as any)}
          className="border p-1 rounded text-sm"
        >
          <option value="date">Data</option>
          <option value="name">Nome</option>
          <option value="category">Categoria</option>
        </select>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Estatísticas
      <div className="grid grid-cols-3 gap-2 mt-4">
        <div className="p-2 bg-blue-100 rounded text-center">
          <p className="text-2xl font-bold">{tasks.length}</p>
          <p className="text-xs">Total</p>
        </div>
        <div className="p-2 bg-green-100 rounded text-center">
          <p className="text-2xl font-bold">{tasks.filter(t => t.completed).length}</p>
          <p className="text-xs">Completas</p>
        </div>
        <div className="p-2 bg-yellow-100 rounded text-center">
          <p className="text-2xl font-bold">{tasks.filter(t => !t.completed).length}</p>
          <p className="text-xs">Pendentes</p>
        </div>
      </div>
      */}

      <ul className="space-y-2">
        {tasks.map((t) => (
          <li key={t.id} className="border p-3 flex flex-col">
            {/* MODIFICAÇÃO POSSÍVEL: Checkbox para completar
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleComplete(t.id)}
              className="mr-2"
            />
            */}
            
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
                {/* MODIFICAÇÃO POSSÍVEL: Botão cancelar
                <button className="px-2 bg-gray-200" onClick={cancelEdit}>
                  Cancelar
                </button>
                */}
              </div>
            ) : (
              <span 
                // MODIFICAÇÃO POSSÍVEL: Riscado se completado
                // className={t.completed ? "line-through text-gray-500" : ""}
              >
                {t.text}
              </span>
            )}

            <div className="flex gap-2 mt-2">
              <button className="px-2 bg-yellow-200" onClick={() => startEdit(t.id, t.text)}>
                Editar
              </button>
              <button className="px-2 bg-red-200" onClick={() => removeTask(t.id)}>
                Apagar
              </button>
              
              {/* MODIFICAÇÃO POSSÍVEL: Botão duplicar
              <button 
                className="px-2 bg-blue-200" 
                onClick={() => setTasks([...tasks, { ...t, id: Date.now() }])}
              >
                Duplicar
              </button>
              */}
            </div>
            
            {/* MODIFICAÇÃO POSSÍVEL: Metadados
            <div className="text-xs text-gray-500 mt-2">
              Criado: {new Date(t.id).toLocaleString()}
            </div>
            */}
          </li>
        ))}
      </ul>
      
      {/* MODIFICAÇÃO POSSÍVEL: Empty state
      {tasks.length === 0 && (
        <div className="text-center text-gray-500 mt-8 p-8 border-2 border-dashed rounded">
          <p className="text-xl mb-2">📝</p>
          <p>Nenhuma tarefa ainda</p>
          <p className="text-sm">Adicione uma tarefa para começar!</p>
        </div>
      )}
      */}
    </div>
  );
}