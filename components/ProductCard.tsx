"use client";
import { Product } from "@/app/models/interfaces";
import Link from "next/link";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const imageUrl = product.image.startsWith('http') 
    ? product.image 
    : `https://deisishop.pythonanywhere.com${product.image}`;

  return (
    <div className="border p-4 rounded-lg bg-white shadow flex flex-col items-center gap-2">
      <img 
        src={imageUrl}
        alt={product.title} 
        className="h-32 w-full object-contain"
      />
      
      <h2 className="text-xl font-bold text-center">{product.title}</h2>
      <p className="text-lg font-semibold text-green-600">{product.price}€</p>
      
      <Link 
        href={`/produtos/${product.id}`}
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
      >
        + Info
      </Link>
    </div>
  );
}