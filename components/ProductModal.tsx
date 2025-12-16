"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Product } from "@/app/models/interfaces";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar carousel de imagens
// 2. Adicionar seletor de quantidade
// 3. Adicionar botão "Adicionar ao Carrinho"
// 4. Adicionar reviews/comentários
// 5. Adicionar produtos relacionados
// 6. Adicionar zoom na imagem
// 7. Adicionar compartilhamento social
// 8. Adicionar especificações técnicas
// 9. Adicionar perguntas frequentes
// 10. Adicionar garantia/políticas de devolução

interface Props {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  // MODIFICAÇÃO POSSÍVEL: Props adicionais
  // onAddToCart?: (product: Product, quantity: number) => void;
  // relatedProducts?: Product[];
}

export default function ProductModal({ product, open, onClose }: Props) {
  // MODIFICAÇÃO POSSÍVEL: Estados locais
  // const [quantity, setQuantity] = useState(1);
  // const [selectedImage, setSelectedImage] = useState(0);
  // const [activeTab, setActiveTab] = useState<"description" | "specs" | "reviews">("description");
  
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent 
        // MODIFICAÇÃO POSSÍVEL: Tamanho customizado
        // className="max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <DialogHeader>
          <DialogTitle>{product.title}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {/* MODIFICAÇÃO POSSÍVEL: Grid layout com imagem e info
          <div className="grid grid-cols-2 gap-6">
            <div>
              {/* Main image * /}
              <img 
                src={product.images?.[selectedImage] || product.image} 
                alt={product.title} 
                className="w-full h-96 object-contain border rounded"
              />
              
              {/* Thumbnail carousel * /}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-2 mt-2">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-20 h-20 border rounded overflow-hidden ${
                        i === selectedImage ? "border-blue-500 border-2" : ""
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div>
              {/* Product info * /}
            </div>
          </div>
          */}
          
          <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
          
          <p className="text-lg font-bold">{product.price}€</p>
          
          {/* MODIFICAÇÃO POSSÍVEL: Preço com descontos
          <div className="flex items-center gap-2">
            {product.discount && (
              <span className="text-gray-500 line-through">{product.price}€</span>
            )}
            <span className="text-2xl font-bold text-green-600">
              {product.discountPrice || product.price}€
            </span>
            {product.discount && (
              <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                -{product.discount}%
              </span>
            )}
          </div>
          */}
          
          <p className="text-sm text-gray-600">{product.category}</p>
          
          {/* MODIFICAÇÃO POSSÍVEL: Stock info
          <div className="flex items-center gap-2">
            {product.inStock ? (
              <>
                <span className="text-green-600">✓</span>
                <span className="text-sm">Em stock ({product.stockQuantity} disponíveis)</span>
              </>
            ) : (
              <>
                <span className="text-red-600">✗</span>
                <span className="text-sm">Esgotado</span>
              </>
            )}
          </div>
          */}
          
          {/* MODIFICAÇÃO POSSÍVEL: Tabs para diferentes seções
          <div className="border-b flex gap-4">
            <button
              onClick={() => setActiveTab("description")}
              className={`pb-2 ${activeTab === "description" ? "border-b-2 border-blue-500 font-semibold" : ""}`}
            >
              Descrição
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`pb-2 ${activeTab === "specs" ? "border-b-2 border-blue-500 font-semibold" : ""}`}
            >
              Especificações
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-2 ${activeTab === "reviews" ? "border-b-2 border-blue-500 font-semibold" : ""}`}
            >
              Avaliações
            </button>
          </div>
          */}
          
          {/* MODIFICAÇÃO POSSÍVEL: Tab content
          {activeTab === "description" && (
            <p>{product.description}</p>
          )}
          
          {activeTab === "specs" && (
            <ul className="space-y-2">
              {product.specifications?.map((spec, i) => (
                <li key={i} className="flex justify-between">
                  <span className="font-semibold">{spec.name}:</span>
                  <span>{spec.value}</span>
                </li>
              ))}
            </ul>
          )}
          
          {activeTab === "reviews" && (
            <div className="space-y-4">
              {product.reviews?.map((review, i) => (
                <div key={i} className="border p-3 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold">{review.author}</span>
                    <span className="text-yellow-500">{"⭐".repeat(review.rating)}</span>
                  </div>
                  <p className="text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
          */}
          
          <p>{product.description}</p>
          
          <p className="text-yellow-500">⭐ {product.rating.rate} ({product.rating.count})</p>
          
          {/* MODIFICAÇÃO POSSÍVEL: Quantity selector
          <div className="flex items-center gap-4">
            <span className="font-semibold">Quantidade:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>
          */}
          
          {/* MODIFICAÇÃO POSSÍVEL: Action buttons
          <div className="flex gap-2">
            <button
              onClick={() => {
                onAddToCart?.(product, quantity);
                onClose();
              }}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded font-semibold"
            >
              🛒 Adicionar ao Carrinho
            </button>
            <button className="px-4 bg-gray-200 hover:bg-gray-300 rounded">
              ❤️
            </button>
            <button className="px-4 bg-gray-200 hover:bg-gray-300 rounded">
              🔗
            </button>
          </div>
          */}
          
          {/* MODIFICAÇÃO POSSÍVEL: Delivery info
          <div className="p-4 bg-gray-50 rounded">
            <h4 className="font-semibold mb-2">📦 Informações de Entrega</h4>
            <ul className="text-sm space-y-1">
              <li>• Entrega em 2-3 dias úteis</li>
              <li>• Portes grátis acima de 50€</li>
              <li>• Devolução grátis até 30 dias</li>
            </ul>
          </div>
          */}
          
          {/* MODIFICAÇÃO POSSÍVEL: Related products
          {relatedProducts && relatedProducts.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3">Produtos Relacionados</h4>
              <div className="grid grid-cols-3 gap-2">
                {relatedProducts.slice(0, 3).map((p) => (
                  <div key={p.id} className="border p-2 rounded text-center">
                    <img src={p.image} alt={p.title} className="h-20 object-contain mx-auto" />
                    <p className="text-xs mt-1">{p.title}</p>
                    <p className="text-sm font-bold">{p.price}€</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          */}
        </div>
      </DialogContent>
    </Dialog>
  );
}