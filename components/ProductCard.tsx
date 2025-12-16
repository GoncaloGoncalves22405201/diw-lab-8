"use client";
import { Product } from "@/app/models/interfaces";
import Link from "next/link";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar botão "Adicionar ao Carrinho" direto no card
// 2. Adicionar quick view modal
// 3. Adicionar badge de desconto/promoção
// 4. Adicionar wishlist/favorite button
// 5. Adicionar comparação de produtos
// 6. Adicionar rating visual mais elaborado
// 7. Adicionar imagens múltiplas (carousel)
// 8. Adicionar hover zoom na imagem
// 9. Adicionar stock indicator
// 10. Adicionar share button

interface Props {
  product: Product;
  // MODIFICAÇÃO POSSÍVEL: Props adicionais
  // onAddToCart?: (product: Product) => void;
  // onToggleFavorite?: (id: number) => void;
  // isFavorite?: boolean;
  // discount?: number;
  // inStock?: boolean;
  // showQuickView?: boolean;
}

export default function ProductCard({ product }: Props) {
  // MODIFICAÇÃO POSSÍVEL: Estados locais
  // const [isHovered, setIsHovered] = useState(false);
  // const [showQuickView, setShowQuickView] = useState(false);
  // const [isFavorite, setIsFavorite] = useState(false);
  
  const imageUrl = product.image.startsWith('http') 
    ? product.image 
    : `https://deisishop.pythonanywhere.com${product.image}`;
  
  // MODIFICAÇÃO POSSÍVEL: Calcular desconto
  // const discountPrice = discount ? product.price * (1 - discount / 100) : null;

  return (
    <div 
      className="border p-4 rounded-lg bg-white shadow flex flex-col items-center gap-2"
      // MODIFICAÇÃO POSSÍVEL: Hover effects
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      // className="... hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* MODIFICAÇÃO POSSÍVEL: Badges
      <div className="absolute top-2 left-2 flex flex-col gap-1">
        {discount && (
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
            -{discount}%
          </span>
        )}
        {!inStock && (
          <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded">
            Esgotado
          </span>
        )}
        {product.rating.rate >= 4.5 && (
          <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">
            ⭐ Destaque
          </span>
        )}
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Favorite button
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsFavorite(!isFavorite);
          onToggleFavorite?.(product.id);
        }}
        className="absolute top-2 right-2 text-2xl"
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
      */}
      
      <img 
        src={imageUrl}
        alt={product.title} 
        className="h-32 w-full object-contain"
        // MODIFICAÇÃO POSSÍVEL: Zoom ao hover
        // className={`... transition-transform duration-300 ${isHovered ? "scale-110" : "scale-100"}`}
      />
      
      {/* MODIFICAÇÃO POSSÍVEL: Multiple images carousel
      <div className="flex gap-1 mt-2">
        {product.images?.map((img, i) => (
          <button
            key={i}
            className="w-8 h-8 border rounded overflow-hidden"
            onClick={() => setCurrentImage(img)}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
      */}
      
      <h2 className="text-xl font-bold text-center">{product.title}</h2>
      
      {/* MODIFICAÇÃO POSSÍVEL: Descrição curta
      <p className="text-sm text-gray-600 text-center line-clamp-2">
        {product.description}
      </p>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Categoria badge
      <span className="text-xs bg-gray-200 px-2 py-1 rounded">
        {product.category}
      </span>
      */}
      
      <div className="flex flex-col items-center">
        {/* MODIFICAÇÃO POSSÍVEL: Mostrar preço com desconto
        {discountPrice ? (
          <>
            <p className="text-sm text-gray-500 line-through">{product.price}€</p>
            <p className="text-2xl font-bold text-red-600">{discountPrice.toFixed(2)}€</p>
          </>
        ) : (
          <p className="text-2xl font-bold text-green-600">{product.price}€</p>
        )}
        */}
        
        <p className="text-lg font-semibold text-green-600">{product.price}€</p>
      </div>
      
      {/* MODIFICAÇÃO POSSÍVEL: Rating mais visual
      <div className="flex items-center gap-2">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className={star <= Math.round(product.rating.rate) ? "text-yellow-500" : "text-gray-300"}>
              ⭐
            </span>
          ))}
        </div>
        <span className="text-sm text-gray-500">({product.rating.count})</span>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Stock indicator
      {inStock ? (
        <p className="text-xs text-green-600">✓ Em stock</p>
      ) : (
        <p className="text-xs text-red-600">✗ Esgotado</p>
      )}
      */}
      
      <Link 
        href={`/produtos/${product.id}`}
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
      >
        + Info
      </Link>
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar ao carrinho direto
      <button
        onClick={(e) => {
          e.preventDefault();
          onAddToCart?.(product);
        }}
        className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        disabled={!inStock}
      >
        {inStock ? "🛒 Adicionar ao Carrinho" : "Indisponível"}
      </button>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Quick view
      <button
        onClick={(e) => {
          e.preventDefault();
          setShowQuickView(true);
        }}
        className="mt-2 text-sm text-blue-500 hover:underline"
      >
        👁️ Vista Rápida
      </button>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Share button
      <button className="mt-2 text-sm text-gray-500 hover:text-gray-700">
        🔗 Partilhar
      </button>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Compare checkbox
      <label className="flex items-center gap-2 mt-2 text-sm">
        <input type="checkbox" />
        Comparar
      </label>
      */}
    </div>
  );
}