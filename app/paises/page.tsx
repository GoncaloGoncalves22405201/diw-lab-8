import data from "@/app/data/paises.json";
import Link from "next/link";

export default function Paises() {
  // MODIFICAÇÃO POSSÍVEL: Cores dinâmicas por categoria
  // const categoryColors: Record<string, string> = {
  //   "electronics": "bg-blue-100",
  //   "clothing": "bg-pink-100",
  //   "books": "bg-yellow-100",
  // };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Categorias</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.categorias.map((c) => (
          <Link
            key={c.nome}
            href={`/categorias/${c.nome}`}
            className="border p-4 rounded bg-white shadow text-center text-xl"
            // MODIFICAÇÃO POSSÍVEL: Background dinâmico
            // className={`... ${categoryColors[c.nome.toLowerCase()] || 'bg-white'}`}
          >
            {c.nome}
            
            {/* MODIFICAÇÃO POSSÍVEL: Adicionar descrição
            <p className="text-sm text-gray-600 mt-2">
              {c.description}
            </p>
            */}
          </Link>
        ))}
      </div>
    </div>
  );
}