import data from "@/app/data/deishop.json";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProdutoPage({ params }: Props) {
  const { id } = await params;
  const produto = data.produtos.find((p) => p.id === Number(id));

  if (!produto) {
    return (
      <div className="p-8">
        <h2>Produto não encontrado</h2>
        <Link href="/produtos" className="text-blue-500 underline">
          Voltar aos produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4 p-6 flex flex-col items-center">
      <div className="text-8xl">{produto.emoji}</div>
      <h1 className="text-3xl font-bold">{produto.nome}</h1>
      <p className="text-xl">{produto.preco}€</p>
      <p className="text-gray-600">{produto.categoria}</p>

      <Link
        href="/produtos"
        className="mt-4 bg-gray-400 text-white px-4 py-2 rounded"
      >
        Voltar
      </Link>
    </div>
  );
}
