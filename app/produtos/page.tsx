"use client";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { Product } from "@/app/models/interfaces";
import { Spinner } from "@/components/ui/spinner";
import ProductCard from "@/components/ProductCard";
import CartSection from "@/components/CartSection";
import { toast } from "sonner";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar filtros por categoria (checkboxes)
// 2. Adicionar filtros por faixa de preço (slider)
// 3. Adicionar filtros por rating mínimo
// 4. Adicionar paginação (mostrar X produtos por página)
// 5. Adicionar infinite scroll
// 6. Adicionar modo de visualização (grid/lista)
// 7. Adicionar comparação de produtos
// 8. Adicionar produtos recentemente visualizados
// 9. Adicionar wishlist/favoritos
// 10. Adicionar export de lista de produtos
// 11. Adicionar filtros avançados (marca, disponibilidade)
// 12. Adicionar sugestões de pesquisa (autocomplete)
// 13. Adicionar histórico de pesquisas
// 14. Adicionar produtos em promoção
// 15. Adicionar contadores de resultados

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
  
  // MODIFICAÇÃO POSSÍVEL: Estados adicionais para filtros
  // const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  // const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  // const [minRating, setMinRating] = useState(0);
  // const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(9);
  // const [compareList, setCompareList] = useState<Product[]>([]);

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
  
  // MODIFICAÇÃO POSSÍVEL: Filtros avançados
  // const filteredData = data?.filter((p) => {
  //   const matchesSearch = 
  //     p.title.toLowerCase().includes(search.toLowerCase()) ||
  //     p.category.toLowerCase().includes(search.toLowerCase());
  //   
  //   const matchesCategory = 
  //     selectedCategories.length === 0 || 
  //     selectedCategories.includes(p.category);
  //   
  //   const matchesPrice = 
  //     p.price >= priceRange[0] && 
  //     p.price <= priceRange[1];
  //   
  //   const matchesRating = p.rating.rate >= minRating;
  //   
  //   return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  // });

  let sortedData = [...(filteredData ?? [])];

  if (sort === "name-asc") sortedData.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "name-desc") sortedData.sort((a, b) => b.title.localeCompare(a.title));
  if (sort === "price-asc") sortedData.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") sortedData.sort((a, b) => b.price - a.price);
  // MODIFICAÇÃO POSSÍVEL: Mais opções de sorting
  // if (sort === "rating-desc") sortedData.sort((a, b) => b.rating.rate - a.rating.rate);
  // if (sort === "popular") sortedData.sort((a, b) => b.rating.count - a.rating.count);
  
  // MODIFICAÇÃO POSSÍVEL: Paginação
  // const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  // const paginatedData = sortedData.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );

  const total = cart.reduce((acc, item) => acc + item.product.price * item.qty, 0);
  
  // MODIFICAÇÃO POSSÍVEL: Obter categorias únicas
  // const categories = Array.from(new Set(data?.map(p => p.category) || []));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Produtos</h1>
      
      {/* MODIFICAÇÃO POSSÍVEL: Contador de resultados
      <p className="text-sm text-gray-600">
        {sortedData?.length || 0} produtos encontrados
        {search && ` para "${search}"`}
      </p>
      */}

      <div className="flex flex-col gap-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar produtos..."
          className="border rounded p-2"
        />
        
        {/* MODIFICAÇÃO POSSÍVEL: Sugestões de pesquisa
        {search && searchSuggestions.length > 0 && (
          <div className="border rounded bg-white shadow-lg">
            {searchSuggestions.map((suggestion, i) => (
              <button
                key={i}
                onClick={() => setSearch(suggestion)}
                className="block w-full text-left p-2 hover:bg-gray-100"
              >
                🔍 {suggestion}
              </button>
            ))}
          </div>
        )}
        */}

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
          {/* MODIFICAÇÃO POSSÍVEL: Mais opções
          <option value="rating-desc">Melhor avaliação</option>
          <option value="popular">Mais popular</option>
          <option value="newest">Mais recente</option>
          */}
        </select>
        
        {/* MODIFICAÇÃO POSSÍVEL: Filtros por categoria
        <div className="border rounded p-4">
          <h3 className="font-semibold mb-2">Categorias</h3>
          <div className="space-y-2">
            {categories.map(category => (
              <label key={category} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedCategories([...selectedCategories, category]);
                    } else {
                      setSelectedCategories(selectedCategories.filter(c => c !== category));
                    }
                  }}
                />
                {category}
              </label>
            ))}
          </div>
        </div>
        */}
        
        {/* MODIFICAÇÃO POSSÍVEL: Filtro de preço
        <div className="border rounded p-4">
          <h3 className="font-semibold mb-2">Faixa de Preço</h3>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full"
          />
          <p className="text-sm">0€ - {priceRange[1]}€</p>
        </div>
        */}
        
        {/* MODIFICAÇÃO POSSÍVEL: Filtro de rating
        <div className="border rounded p-4">
          <h3 className="font-semibold mb-2">Avaliação Mínima</h3>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map(rating => (
              <button
                key={rating}
                onClick={() => setMinRating(rating)}
                className={`px-3 py-1 rounded ${
                  minRating === rating ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                {rating}⭐
              </button>
            ))}
          </div>
        </div>
        */}
        
        {/* MODIFICAÇÃO POSSÍVEL: Toggle view mode
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-4 py-2 rounded ${
              viewMode === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            🔲 Grade
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`px-4 py-2 rounded ${
              viewMode === "list" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            ☰ Lista
          </button>
        </div>
        */}
        
        {/* MODIFICAÇÃO POSSÍVEL: Botão limpar filtros
        {(search || selectedCategories.length > 0 || minRating > 0) && (
          <button
            onClick={() => {
              setSearch("");
              setSelectedCategories([]);
              setMinRating(0);
              setPriceRange([0, 1000]);
            }}
            className="text-sm text-blue-500 hover:underline"
          >
            Limpar todos os filtros
          </button>
        )}
        */}
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
            
            {/* MODIFICAÇÃO POSSÍVEL: Botão comparar
            <button
              onClick={() => {
                if (compareList.find(item => item.id === p.id)) {
                  setCompareList(compareList.filter(item => item.id !== p.id));
                } else {
                  setCompareList([...compareList, p]);
                }
              }}
              className="mt-2 w-full text-sm text-blue-500 hover:underline"
            >
              {compareList.find(item => item.id === p.id) ? "✓ Comparando" : "Comparar"}
            </button>
            */}
          </div>
        ))}
      </div>
      
      {/* MODIFICAÇÃO POSSÍVEL: Empty state
      {sortedData?.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500 mb-4">
            Nenhum produto encontrado
          </p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedCategories([]);
              setMinRating(0);
            }}
            className="text-blue-500 hover:underline"
          >
            Limpar filtros
          </button>
        </div>
      )}
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Paginação
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Anterior
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 border rounded ${
                currentPage === page ? "bg-blue-500 text-white" : ""
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Próximo
          </button>
        </div>
      )}
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Comparação de produtos
      {compareList.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold">Comparar Produtos ({compareList.length})</h3>
            <button
              onClick={() => setCompareList([])}
              className="text-red-500 hover:underline"
            >
              Limpar
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto">
            {compareList.map(p => (
              <div key={p.id} className="border p-2 rounded min-w-[200px]">
                <img src={p.image} alt={p.title} className="h-20 object-contain" />
                <p className="text-sm">{p.title}</p>
                <p className="font-bold">{p.price}€</p>
              </div>
            ))}
          </div>
        </div>
      )}
      */}

      <CartSection cart={cart} removeFromCart={removeFromCart} buy={buy} />
    </div>
  );
}