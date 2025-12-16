"use client";
import useSWR from "swr";
import { useParams, useRouter } from "next/navigation";
import { Product } from "@/app/models/interfaces";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar galeria de imagens (múltiplas fotos do produto)
// 2. Adicionar zoom na imagem ao hover
// 3. Adicionar seletor de quantidade antes de adicionar ao carrinho
// 4. Adicionar produtos relacionados/similares
// 5. Adicionar reviews/avaliações de clientes
// 6. Adicionar perguntas e respostas
// 7. Adicionar botão de "Adicionar aos favoritos"
// 8. Adicionar informações de stock
// 9. Adicionar guia de tamanhos (se aplicável)
// 10. Adicionar breadcrumbs de navegação
// 11. Adicionar share buttons (redes sociais)
// 12. Adicionar histórico de preços
// 13. Adicionar notificação quando voltar ao stock
// 14. Adicionar comparação com produtos similares
// 15. Adicionar vídeo do produto

const API = "https://deisishop.pythonanywhere.com";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type CartItem = { product: Product; qty: number };

export default function ProdutoDetalhePage() {
  const { id } = useParams();
  const router = useRouter();
  
  // MODIFICAÇÃO POSSÍVEL: Estados adicionais
  // const [quantity, setQuantity] = useState(1);
  // const [selectedImage, setSelectedImage] = useState(0);
  // const [isFavorite, setIsFavorite] = useState(false);
  // const [showReviews, setShowReviews] = useState(false);

  const { data: produto, error, isLoading } = useSWR<Product>(
    `${API}/products/${id}`,
    fetcher
  );
  
  // MODIFICAÇÃO POSSÍVEL: Fetch de produtos relacionados
  // const { data: relatedProducts } = useSWR<Product[]>(
  //   produto ? `${API}/products?category=${produto.category}` : null,
  //   fetcher
  // );

  const addToCart = (p: Product) => {
    const saved = localStorage.getItem("cart");
    const cart: CartItem[] = saved ? JSON.parse(saved) : [];

    const existing = cart.find((item) => item.product.id === p.id);
    
    let newCart: CartItem[];
    
    if (existing) {
      newCart = cart.map((item) =>
        item.product.id === p.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    } else {
      newCart = [...cart, { product: p, qty: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success("✅ Adicionado ao carrinho!");
  };
  
  // MODIFICAÇÃO POSSÍVEL: Adicionar com quantidade customizada
  // const addToCartWithQuantity = (p: Product, qty: number) => {
  //   const saved = localStorage.getItem("cart");
  //   const cart: CartItem[] = saved ? JSON.parse(saved) : [];
  //   const existing = cart.find((item) => item.product.id === p.id);
  //   
  //   let newCart: CartItem[];
  //   if (existing) {
  //     newCart = cart.map((item) =>
  //       item.product.id === p.id ? { ...item, qty: item.qty + qty } : item
  //     );
  //   } else {
  //     newCart = [...cart, { product: p, qty }];
  //   }
  //   localStorage.setItem("cart", JSON.stringify(newCart));
  //   toast.success(`✅ ${qty}x ${p.title} adicionado ao carrinho!`);
  // };
  
  // MODIFICAÇÃO POSSÍVEL: Adicionar aos favoritos
  // const toggleFavorite = () => {
  //   setIsFavorite(!isFavorite);
  //   const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  //   if (isFavorite) {
  //     const newFavorites = favorites.filter((id: number) => id !== produto?.id);
  //     localStorage.setItem("favorites", JSON.stringify(newFavorites));
  //     toast.info("Removido dos favoritos");
  //   } else {
  //     localStorage.setItem("favorites", JSON.stringify([...favorites, produto?.id]));
  //     toast.success("Adicionado aos favoritos!");
  //   }
  // };

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner className="h-10 w-10" />
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Erro ao carregar produto
          </h2>
          <p className="text-gray-600 mb-6">
            Ocorreu um erro ao carregar o produto.
          </p>
          <button
            onClick={() => router.push("/produtos")}
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
          >
            Voltar aos produtos
          </button>
        </div>
      </div>
    );

  if (!produto)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Produto não encontrado
          </h2>
          <p className="text-gray-600 mb-6">
            O produto que procura não existe ou foi removido.
          </p>
          <button
            onClick={() => router.push("/produtos")}
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
          >
            Voltar aos produtos
          </button>
        </div>
      </div>
    );

  const imageUrl = produto.image.startsWith('http') 
    ? produto.image 
    : `${API}${produto.image}`;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto p-6">
        {/* MODIFICAÇÃO POSSÍVEL: Breadcrumbs
        <nav className="mb-4 text-sm">
          <Link href="/" className="text-blue-500 hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/produtos" className="text-blue-500 hover:underline">Produtos</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">{produto.category}</span>
          <span className="mx-2">/</span>
          <span>{produto.title}</span>
        </nav>
        */}
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <div className="flex flex-col items-center gap-4">
            {/* MODIFICAÇÃO POSSÍVEL: Galeria de imagens
            <div className="relative w-full">
              <img
                src={produto.images?.[selectedImage] || imageUrl}
                alt={produto.title}
                className="h-64 object-contain mx-auto"
              />
              {produto.images && produto.images.length > 1 && (
                <div className="flex gap-2 justify-center mt-4">
                  {produto.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-16 h-16 border-2 rounded overflow-hidden ${
                        i === selectedImage ? "border-blue-500" : "border-gray-200"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            */}
            
            <img
              src={imageUrl}
              alt={produto.title}
              className="h-64 object-contain"
            />

            <h1 className="text-3xl font-bold text-center">{produto.title}</h1>
            
            {/* MODIFICAÇÃO POSSÍVEL: Badge de desconto
            {produto.discount && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                -{produto.discount}% OFF
              </span>
            )}
            */}
            
            {/* MODIFICAÇÃO POSSÍVEL: Preço com desconto
            <div className="flex items-center gap-2">
              {produto.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  {produto.originalPrice}€
                </span>
              )}
              <p className="text-2xl font-bold text-green-600">{produto.price}€</p>
            </div>
            */}
            
            <p className="text-2xl font-bold text-green-600">{produto.price}€</p>
            
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              {produto.category}
            </span>

            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-xl">⭐</span>
              <span className="font-semibold">{produto.rating.rate}</span>
              <span className="text-gray-500">({produto.rating.count} avaliações)</span>
            </div>
            
            {/* MODIFICAÇÃO POSSÍVEL: Informação de stock
            <div className="flex items-center gap-2">
              {produto.inStock ? (
                <>
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Em stock</span>
                </>
              ) : (
                <>
                  <span className="text-red-600">✗</span>
                  <span className="text-sm">Esgotado</span>
                  <button className="text-blue-500 text-sm hover:underline ml-2">
                    Notificar quando disponível
                  </button>
                </>
              )}
            </div>
            */}
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-3">Descrição</h2>
            <p className="text-gray-700 leading-relaxed">{produto.description}</p>
          </div>
          
          {/* MODIFICAÇÃO POSSÍVEL: Características do produto
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-3">Características</h2>
            <ul className="space-y-2">
              {produto.features?.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          */}
          
          {/* MODIFICAÇÃO POSSÍVEL: Especificações técnicas
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-3">Especificações</h2>
            <table className="w-full">
              <tbody>
                {produto.specifications?.map((spec, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-2 font-semibold">{spec.name}</td>
                    <td className="py-2">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          */}
          
          {/* MODIFICAÇÃO POSSÍVEL: Seletor de quantidade
          <div className="border-t pt-6">
            <div className="flex items-center gap-4">
              <label className="font-semibold">Quantidade:</label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          */}

          <div className="flex gap-4 pt-4">
            <button
              onClick={() => router.push("/produtos")}
              className="flex-1 bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded text-center font-semibold transition-colors"
            >
              Voltar
            </button>
            
            {/* MODIFICAÇÃO POSSÍVEL: Botão de favoritos
            <button
              onClick={toggleFavorite}
              className="px-6 py-3 border-2 rounded font-semibold transition-colors hover:bg-gray-50"
            >
              {isFavorite ? "❤️ Nos Favoritos" : "🤍 Adicionar aos Favoritos"}
            </button>
            */}
            
            <button
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded font-semibold transition-colors"
              onClick={() => addToCart(produto)}
              // onClick={() => addToCartWithQuantity(produto, quantity)} // Com quantidade
            >
              Adicionar ao carrinho
            </button>
          </div>
          
          {/* MODIFICAÇÃO POSSÍVEL: Informações de entrega
          <div className="border-t pt-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-2">🚚</div>
                <p className="font-semibold text-sm">Entrega Rápida</p>
                <p className="text-xs text-gray-600">2-3 dias úteis</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">↩️</div>
                <p className="font-semibold text-sm">Devolução Grátis</p>
                <p className="text-xs text-gray-600">Até 30 dias</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🔒</div>
                <p className="font-semibold text-sm">Pagamento Seguro</p>
                <p className="text-xs text-gray-600">100% protegido</p>
              </div>
            </div>
          </div>
          */}
        </div>
        
        {/* MODIFICAÇÃO POSSÍVEL: Produtos relacionados
        {relatedProducts && relatedProducts.length > 1 && (
          <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Produtos Relacionados</h2>
            <div className="grid grid-cols-4 gap-4">
              {relatedProducts
                .filter(p => p.id !== produto.id)
                .slice(0, 4)
                .map(p => (
                  <Link key={p.id} href={`/produtos/${p.id}`}>
                    <div className="border p-4 rounded hover:shadow-lg transition-shadow">
                      <img src={p.image} alt={p.title} className="h-32 object-contain mx-auto" />
                      <p className="text-sm mt-2">{p.title}</p>
                      <p className="font-bold">{p.price}€</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        )}
        */}
        
        {/* MODIFICAÇÃO POSSÍVEL: Reviews section
        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Avaliações de Clientes</h2>
            <button
              onClick={() => setShowReviews(!showReviews)}
              className="text-blue-500 hover:underline"
            >
              {showReviews ? "Ocultar" : "Ver todas"}
            </button>
          </div>
          {showReviews && (
            <div className="space-y-4">
              {produto.reviews?.map((review, i) => (
                <div key={i} className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold">{review.author}</span>
                    <span className="text-yellow-500">{"⭐".repeat(review.rating)}</span>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        */}
      </div>
    </div>
  );
}