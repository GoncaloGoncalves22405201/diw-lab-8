"use client";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { Product } from "@/app/models/interfaces";
import { Spinner } from "@/components/ui/spinner";
import ProductCard from "@/components/ProductCard";
import CartSection from "@/components/CartSection";
import { toast } from "sonner";

type CartItem = { product: Product; qty: number };

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Erro ao carregar produtos");
  return res.json();
};

export default function ProdutosPage() {
  const { data, error, isLoading } = useSWR<Product[]>(
    "https://deisishop.pythonanywhere.com/products",
    fetcher
  );

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (p: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === p.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === p.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { product: p, qty: 1 }];
    });

    toast.success("✅ Adicionado ao carrinho: " + p.title);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const found = prev.find((item) => item.product.id === id);
      if (!found) return prev;

      if (found.qty > 1) {
        return prev.map((item) =>
          item.product.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        );
      }

      return prev.filter((item) => item.product.id !== id);
    });
  };

  const buy = async (student: boolean, coupon: string) => {
    try {
      const res = await fetch("/api/deisishop/buy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          products: cart.flatMap((item) =>
            Array(item.qty).fill(item.product.id)
          ),
          student: student,
          coupon: coupon,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ error: "Erro desconhecido" }));
        toast.error(`❌ ${errorData.error || "Erro ao processar compra"}`);
        return;
      }

      const data = await res.json();
      
      toast.success(
        `🎉 Compra efetuada com sucesso!`,
        {
          description: `Total: ${data.totalCost || total.toFixed(2)}€${data.reference ? ` | Ref: ${data.reference}` : ''}`,
          duration: 5000,
        }
      );
      
      setCart([]);
      
      return data;
      
    } catch (error) {
      console.error("Erro ao comprar:", error);
      toast.error("❌ Erro ao processar compra. Tente novamente.");
    }
  };

  if (isLoading)
    return (
      <div className="flex justify-center p-10">
        <Spinner className="h-10 w-10" />
      </div>
    );

  if (error)
    return (
      <div className="p-10 text-red-500 font-bold">
        Erro ao carregar produtos
      </div>
    );

  const filteredData = data?.filter((p) => {
    const term = search.toLowerCase();
    return (
      p.title.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term)
    );
  });

  let sortedData = [...(filteredData ?? [])];

  if (sort === "name-asc") sortedData.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "name-desc") sortedData.sort((a, b) => b.title.localeCompare(a.title));
  if (sort === "price-asc") sortedData.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") sortedData.sort((a, b) => b.price - a.price);

  const total = cart.reduce((acc, item) => acc + item.product.price * item.qty, 0);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Produtos</h1>

      <div className="flex flex-col gap-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar produtos..."
          className="border rounded p-2"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">Sem ordenação</option>
          <option value="name-asc">Nome (A → Z)</option>
          <option value="name-desc">Nome (Z → A)</option>
          <option value="price-asc">Preço (menor → maior)</option>
          <option value="price-desc">Preço (maior → menor)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sortedData?.map((p) => (
          <div key={p.id}>
            <ProductCard product={p} />

            <button
              className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition-colors"
              onClick={() => addToCart(p)}
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>

      <CartSection cart={cart} removeFromCart={removeFromCart} buy={buy} />
    </div>
  );
}