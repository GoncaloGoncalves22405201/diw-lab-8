import data from "@/app/data/deishop.json";
import Link from "next/link";

export default function CategoriasPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Categorias</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.categorias.map((c) => (
          <Link
            key={c.nome}
            href={`/categorias/${c.nome}`}
            className="border p-4 rounded bg-white shadow text-center text-xl"
          >
            {c.nome}
          </Link>
        ))}
      </div>
    </div>
  );
}
