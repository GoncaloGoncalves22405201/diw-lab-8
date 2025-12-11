"use client";
import useSWR from "swr";
import { useParams, useRouter } from "next/navigation";
import { Product } from "@/app/models/interfaces";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

const API = "https://deisishop.pythonanywhere.com";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type CartItem = { product: Product; qty: number };

export default function ProdutoDetalhePage() {
  const { id } = useParams();
  const router = useRouter();

  const { data: produto, error, isLoading } = useSWR<Product>(
    `${API}/products/${id}`,
    fetcher
  );

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
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <div className="flex flex-col items-center gap-4">
            <img
              src={imageUrl}
              alt={produto.title}
              className="h-64 object-contain"
            />

            <h1 className="text-3xl font-bold text-center">{produto.title}</h1>
            
            <p className="text-2xl font-bold text-green-600">{produto.price}€</p>
            
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              {produto.category}
            </span>

            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-xl">⭐</span>
              <span className="font-semibold">{produto.rating.rate}</span>
              <span className="text-gray-500">({produto.rating.count} avaliações)</span>
            </div>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-3">Descrição</h2>
            <p className="text-gray-700 leading-relaxed">{produto.description}</p>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={() => router.push("/produtos")}
              className="flex-1 bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded text-center font-semibold transition-colors"
            >
              Voltar
            </button>
            
            <button
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded font-semibold transition-colors"
              onClick={() => addToCart(produto)}
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}