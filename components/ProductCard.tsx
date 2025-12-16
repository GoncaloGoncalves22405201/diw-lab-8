"use client";
import { Product } from "@/app/models/interfaces";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [favorito, setFavorito] = useState(false);

  useEffect(() => {
    const favs = localStorage.getItem("favoritos");
    if (favs) {
      const favArray = JSON.parse(favs);
      setFavorito(favArray.includes(product.id));
    }
  }, [product.id]);

  const toggleFavorito = () => {
    const favs = localStorage.getItem("favoritos");
    let favArray = favs ? JSON.parse(favs) : [];

    if (favorito) {
      favArray = favArray.filter((id: number) => id !== product.id);
    } else {
      favArray.push(product.id);
    }

    localStorage.setItem("favoritos", JSON.stringify(favArray));
    setFavorito(!favorito);
  };

  const imageUrl = product.image.startsWith('http') 
    ? product.image 
    : `https://deisishop.pythonanywhere.com${product.image}`;

  return (
    <div className="border p-4 rounded-lg bg-white shadow flex flex-col items-center gap-2 relative">
      <button
        onClick={toggleFavorito}
        className="absolute top-2 right-2 text-2xl"
      >
        {favorito ? "❤️" : "🤍"}
      </button>

      <img 
        src={imageUrl}
        alt={product.title} 
        className="full object-contain"
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