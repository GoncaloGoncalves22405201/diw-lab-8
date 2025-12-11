"use client";
import { Product } from "@/app/models/interfaces";

interface Props {
  product: Product;
}

export default function ProdutoDetalhesCard({ product }: Props) {
  return (
    <div className="border p-4 rounded-lg bg-white shadow flex flex-col gap-2">
      <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p className="text-lg">{product.price}€</p>
      <p className="text-sm text-gray-600">{product.category}</p>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-yellow-500">⭐ {product.rating.rate} ({product.rating.count})</p>
    </div>
  );
}