"use client";
import { Product } from "@/app/models/interfaces";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar imagens múltiplas com carousel
// 2. Adicionar zoom na imagem
// 3. Adicionar seletor de quantidade
// 4. Adicionar variantes (tamanho, cor, etc)
// 5. Adicionar wishlist button
// 6. Adicionar share functionality
// 7. Adicionar reviews/ratings detalhados
// 8. Adicionar perguntas e respostas
// 9. Adicionar produtos relacionados
// 10. Adicionar informações de envio

interface Props {
  product: Product;
  // MODIFICAÇÃO POSSÍVEL: Props adicionais
  // onAddToCart?: (quantity: number) => void;
  // onAddToWishlist?: () => void;
  // relatedProducts?: Product[];
  // reviews?: Review[];
}

export default function ProdutoDetalhesCard({ product }: Props) {
  // MODIFICAÇÃO POSSÍVEL: Estados locais
  // const [quantity, setQuantity] = useState(1);
  // const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  // const [isInWishlist, setIsInWishlist] = useState(false);
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const [showAllReviews, setShowAllReviews] = useState(false);

  return (
    <div className="border p-4 rounded-lg bg-white shadow flex flex-col gap-2">
      {/* MODIFICAÇÃO POSSÍVEL: Image gallery
      <div className="relative">
        <img 
          src={product.images?.[currentImageIndex] || product.image} 
          alt={product.title} 
          className="h-40 object-contain mx-auto"
        />
        
        {product.images && product.images.length > 1 && (
          <>
            <button
              onClick={() => setCurrentImageIndex((i) => (i - 1 + product.images.length) % product.images.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow"
            >
              ←
            </button>
            <button
              onClick={() => setCurrentImageIndex((i) => (i + 1) % product.images.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow"
            >
              →
            </button>
            
            <div className="flex gap-2 mt-2 justify-center">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`w-2 h-2 rounded-full ${
                    i === currentImageIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      */}
      
      <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
      
      {/* MODIFICAÇÃO POSSÍVEL: Badges
      <div className="flex gap-2">
        {product.isNew && (
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
            NOVO
          </span>
        )}
        {product.discount && (
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
            -{product.discount}%
          </span>
        )}
        {product.isBestseller && (
          <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">
            🔥 Mais Vendido
          </span>
        )}
      </div>
      */}
      
      <h2 className="text-xl font-bold">{product.title}</h2>
      
      {/* MODIFICAÇÃO POSSÍVEL: SKU e availability
      <div className="flex gap-4 text-sm text-gray-600">
        <span>SKU: {product.sku}</span>
        {product.inStock ? (
          <span className="text-green-600">✓ Em stock</span>
        ) : (
          <span className="text-red-600">✗ Esgotado</span>
        )}
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Preço com desconto
      <div className="flex items-center gap-2">
        {product.originalPrice && (
          <span className="text-gray-500 line-through">
            {product.originalPrice}€
          </span>
        )}
        <span className="text-2xl font-bold text-green-600">
          {product.price}€
        </span>
        {product.discount && (
          <span className="text-sm text-red-600">
            Poupa {(product.originalPrice - product.price).toFixed(2)}€
          </span>
        )}
      </div>
      */}
      
      <p className="text-lg">{product.price}€</p>
      
      <p className="text-sm text-gray-600">{product.category}</p>
      
      {/* MODIFICAÇÃO POSSÍVEL: Rating detalhado
      <div className="flex items-center gap-3">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= Math.round(product.rating.rate) ? "text-yellow-500" : "text-gray-300"}
            >
              ⭐
            </span>
          ))}
        </div>
        <span className="text-sm">{product.rating.rate}</span>
        <span className="text-sm text-gray-500">({product.rating.count} avaliações)</span>
        <button className="text-sm text-blue-500 hover:underline">
          Ver todas
        </button>
      </div>
      */}
      
      <p className="text-gray-700">{product.description}</p>
      
      {/* MODIFICAÇÃO POSSÍVEL: Key features
      {product.features && (
        <div>
          <h3 className="font-semibold mb-2">Características Principais:</h3>
          <ul className="list-disc ml-5 text-sm space-y-1">
            {product.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Specifications table
      {product.specifications && (
        <div>
          <h3 className="font-semibold mb-2">Especificações Técnicas:</h3>
          <table className="w-full text-sm">
            <tbody>
              {product.specifications.map((spec, i) => (
                <tr key={i} className="border-b">
                  <td className="py-2 font-semibold">{spec.name}</td>
                  <td className="py-2">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Variants selector
      {product.variants && (
        <div>
          <h3 className="font-semibold mb-2">Opções:</h3>
          <div className="flex gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant.id)}
                className={`px-4 py-2 border rounded ${
                  selectedVariant === variant.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>
      )}
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Quantity selector
      <div className="flex items-center gap-4">
        <span className="font-semibold">Quantidade:</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-16 text-center border rounded"
          />
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>
      */}
      
      <p className="text-yellow-500">⭐ {product.rating.rate} ({product.rating.count})</p>
      
      {/* MODIFICAÇÃO POSSÍVEL: Action buttons
      <div className="flex gap-2">
        <button
          onClick={() => onAddToCart?.(quantity)}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold"
        >
          🛒 Adicionar ao Carrinho
        </button>
        <button
          onClick={() => {
            setIsInWishlist(!isInWishlist);
            onAddToWishlist?.();
          }}
          className="px-4 bg-gray-200 hover:bg-gray-300 rounded"
        >
          {isInWishlist ? "❤️" : "🤍"}
        </button>
        <button className="px-4 bg-gray-200 hover:bg-gray-300 rounded">
          🔗
        </button>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Delivery & return info
      <div className="bg-gray-50 p-4 rounded space-y-2 text-sm">
        <div className="flex items-start gap-2">
          <span>🚚</span>
          <div>
            <p className="font-semibold">Entrega Rápida</p>
            <p className="text-gray-600">Receba em 2-3 dias úteis</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span>↩️</span>
          <div>
            <p className="font-semibold">Devolução Grátis</p>
            <p className="text-gray-600">Até 30 dias após a compra</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span>🔒</span>
          <div>
            <p className="font-semibold">Compra Segura</p>
            <p className="text-gray-600">Pagamento 100% seguro</p>
          </div>
        </div>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Customer reviews section
      {reviews && reviews.length > 0 && (
        <div>
          <h3 className="font-semibold mb-3">Avaliações de Clientes</h3>
          <div className="space-y-3">
            {reviews.slice(0, showAllReviews ? reviews.length : 3).map((review) => (
              <div key={review.id} className="border p-3 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold">{review.author}</span>
                  <span className="text-yellow-500">
                    {"⭐".repeat(review.rating)}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
          {reviews.length > 3 && (
            <button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="mt-2 text-sm text-blue-500 hover:underline"
            >
              {showAllReviews ? "Ver menos" : `Ver todas (${reviews.length})`}
            </button>
          )}
        </div>
      )}
      */}
    </div>
  );
}