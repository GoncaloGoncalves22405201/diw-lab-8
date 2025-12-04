"use client";
import { Product } from "@/app/models/interfaces";


interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border p-4 rounded-lg bg-white shadow flex flex-col items-center gap-2">
      <img src={product.image} alt={product.title} className="h-32 object-contain" />
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p>{product.price}€</p>
    </div>
  );
}
