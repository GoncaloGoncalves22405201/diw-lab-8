"use client";

import { useEffect, useState } from "react";
import { Product } from "@/app/models/interfaces";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";

interface Props {
  params: { id: string };
}

export default function ProdutoPage({ params }: Props) {
  const { id } = params;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`https://deisishop.pythonanywhere.com/products/${id}`);
        if (!res.ok) throw new Error("Produto não encontrado");

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center p-10">
        <Spinner className="h-10 w-10" />
      </div>
    );

  if (!product)
    return (
      <div className="p-8">
        <h2 className="text-xl font-bold">Produto não encontrado</h2>
        <Link href="/produtos" className="text-blue-500 underline">
          Voltar aos produtos
        </Link>
      </div>
    );

  return (
    <div className="space-y-4 p-6 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain"
      />

      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-xl">{product.price}€</p>
      <p className="text-gray-600">{product.category}</p>

      <p className="max-w-xl text-center">{product.description}</p>

      <p className="text-yellow-500">
        ⭐ {product.rating.rate} ({product.rating.count})
      </p>

      <Link
        href="/produtos"
        className="mt-4 bg-gray-400 text-white px-4 py-2 rounded"
      >
        Voltar
      </Link>
    </div>
  );
}
