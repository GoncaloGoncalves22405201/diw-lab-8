import data from "@/app/data/deishop.json";
import Link from "next/link";

export default function ProdutosPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Produtos</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.produtos.map((p) => (
          <Link
            key={p.id}
            href={`/produtos/${p.id}`}
            className="border p-4 rounded-lg bg-white shadow flex flex-col items-center gap-2"
          >
            <div className="text-6xl">{p.emoji}</div>
            <h2 className="text-xl font-bold">{p.nome}</h2>
            <p>{p.preco}€</p>
            <p className="text-sm text-gray-500">{p.categoria}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
