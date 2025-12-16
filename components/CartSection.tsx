"use client";
import { Product } from "@/app/models/interfaces";
import { useState, useEffect } from "react";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar edição de quantidade diretamente (input numérico)
// 2. Adicionar botão "limpar carrinho completo"
// 3. Adicionar estimativa de tempo de entrega
// 4. Adicionar cálculo de portes de envio baseado no valor
// 5. Adicionar impostos/taxas por região
// 6. Adicionar opção de "guardar para depois" (wishlist)
// 7. Adicionar sugestões de produtos complementares
// 8. Adicionar mini-preview das imagens dos produtos
// 9. Adicionar sistema de cupões sugeridos/automáticos
// 10. Adicionar histórico de compras anteriores

type CartItem = { product: Product; qty: number };

interface Props {
  cart: CartItem[];
  removeFromCart: (id: number) => void;
  buy: (student: boolean, coupon: string) => Promise<any>;
}

export default function CartSection({ cart, removeFromCart, buy }: Props) {
  const [student, setStudent] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discountedTotal, setDiscountedTotal] = useState<number | null>(null);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  
  // MODIFICAÇÃO POSSÍVEL: Estados adicionais
  // const [shippingCost, setShippingCost] = useState(0);
  // const [showCouponSuggestions, setShowCouponSuggestions] = useState(false);
  // const [savedForLater, setSavedForLater] = useState<CartItem[]>([]);

  const total = cart.reduce((acc, item) => acc + item.product.price * item.qty, 0);
  
  // MODIFICAÇÃO POSSÍVEL: Calcular portes
  // useEffect(() => {
  //   if (total > 50) {
  //     setShippingCost(0); // Portes grátis acima de 50€
  //   } else if (total > 0) {
  //     setShippingCost(4.99);
  //   } else {
  //     setShippingCost(0);
  //   }
  // }, [total]);

  useEffect(() => {
    if (cart.length === 0) {
      setDiscountedTotal(null);
      return;
    }

    if (!student && !coupon) {
      setDiscountedTotal(null);
      return;
    }

    let finalTotal = total;
    
    if (student) {
      finalTotal = finalTotal * 0.9;
    }
    
    if (coupon) {
      const couponUpper = coupon.toUpperCase();
      if (couponUpper === "DESCONTO10") {
        finalTotal = finalTotal * 0.9;
      } else if (couponUpper === "DESCONTO20") {
        finalTotal = finalTotal * 0.8;
      } else if (couponUpper === "SAVE20") {
        finalTotal = finalTotal * 0.8;
      } else if (couponUpper === "WELCOME") {
        finalTotal = finalTotal * 0.95;
      }
      // MODIFICAÇÃO POSSÍVEL: Adicionar mais cupões
      // else if (couponUpper === "FRETEGRATIS") {
      //   finalTotal = finalTotal; // Não altera preço mas remove shipping
      //   setShippingCost(0);
      // }
    }

    setDiscountedTotal(finalTotal);
  }, [student, coupon, cart, total]);

  const handleBuy = async () => {
    console.log("🛒 Iniciando compra...");
    console.log("📦 Carrinho:", cart);
    console.log("✅ Estudante:", student);
    console.log("🎟️ Cupão:", coupon);
    
    try {
      const result = await buy(student, coupon);
      
      console.log("📨 Resultado da compra:", result);
      
      setPurchaseSuccess(true);
      setStudent(false);
      setCoupon("");
      setDiscountedTotal(null);
      
      setTimeout(() => {
        setPurchaseSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error("❌ Erro capturado:", error);
      setPurchaseSuccess(true);
      setTimeout(() => {
        setPurchaseSuccess(false);
      }, 5000);
    }
  };
  
  // MODIFICAÇÃO POSSÍVEL: Função para limpar carrinho
  // const clearCart = () => {
  //   if (confirm("Deseja remover todos os items do carrinho?")) {
  //     cart.forEach(item => removeFromCart(item.product.id));
  //   }
  // };
  
  // MODIFICAÇÃO POSSÍVEL: Função para guardar para depois
  // const saveForLater = (item: CartItem) => {
  //   setSavedForLater([...savedForLater, item]);
  //   removeFromCart(item.product.id);
  //   localStorage.setItem("savedForLater", JSON.stringify([...savedForLater, item]));
  // };
  
  // MODIFICAÇÃO POSSÍVEL: Função para alterar quantidade
  // const updateQuantity = (id: number, newQty: number) => {
  //   if (newQty < 1) {
  //     removeFromCart(id);
  //     return;
  //   }
  //   setCart(prev => prev.map(item => 
  //     item.product.id === id ? { ...item, qty: newQty } : item
  //   ));
  // };

  const discount = discountedTotal ? total - discountedTotal : 0;
  const discountPercentage = discount > 0 ? ((discount / total) * 100).toFixed(0) : 0;

  return (
    <div className="border p-4 bg-white rounded shadow flex flex-col gap-3">
      <h2 className="text-xl font-bold">Carrinho</h2>
      
      {/* MODIFICAÇÃO POSSÍVEL: Botão limpar carrinho
      {cart.length > 0 && (
        <button
          onClick={clearCart}
          className="text-sm text-red-500 hover:underline self-end"
        >
          Limpar Carrinho
        </button>
      )}
      */}

      {cart.length === 0 && !purchaseSuccess && <p className="text-gray-500">Carrinho vazio</p>}

      <ul className="flex flex-col gap-2">
        {cart.map((item) => (
          <li
            key={item.product.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            {/* MODIFICAÇÃO POSSÍVEL: Adicionar imagem miniatura
            <img 
              src={item.product.image} 
              alt={item.product.title}
              className="w-12 h-12 object-contain"
            />
            */}
            
            <div className="flex flex-col">
              <span className="font-semibold">{item.product.title}</span>
              <span className="text-gray-600 text-sm">
                {item.qty} × {item.product.price}€ = {(item.qty * item.product.price).toFixed(2)}€
              </span>
            </div>

            {/* MODIFICAÇÃO POSSÍVEL: Input para alterar quantidade
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.product.id, item.qty - 1)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <input
                type="number"
                value={item.qty}
                onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value) || 1)}
                className="w-12 text-center border rounded"
                min="1"
              />
              <button
                onClick={() => updateQuantity(item.product.id, item.qty + 1)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
            */}

            <button
              className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded transition-colors"
              onClick={() => removeFromCart(item.product.id)}
            >
              Remover 1
            </button>
            
            {/* MODIFICAÇÃO POSSÍVEL: Botão guardar para depois
            <button
              onClick={() => saveForLater(item)}
              className="text-sm text-blue-500 hover:underline ml-2"
            >
              Guardar para depois
            </button>
            */}
          </li>
        ))}
      </ul>
      
      {/* MODIFICAÇÃO POSSÍVEL: Produtos guardados para depois
      {savedForLater.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Guardado para depois</h3>
          <ul className="space-y-2">
            {savedForLater.map(item => (
              <li key={item.product.id} className="flex justify-between text-sm">
                <span>{item.product.title}</span>
                <button
                  onClick={() => {
                    addToCart(item.product);
                    setSavedForLater(savedForLater.filter(i => i.product.id !== item.product.id));
                  }}
                  className="text-blue-500 hover:underline"
                >
                  Adicionar ao carrinho
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      */}

      {cart.length > 0 && (
        <>
          <div className="border-t pt-3 mt-2">
            {discountedTotal ? (
              <div className="space-y-1">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span className="line-through">{total.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-green-600 font-semibold">
                  <span>Desconto ({discountPercentage}%):</span>
                  <span>-{discount.toFixed(2)}€</span>
                </div>
                
                {/* MODIFICAÇÃO POSSÍVEL: Mostrar portes de envio
                <div className="flex justify-between text-gray-600">
                  <span>Portes de envio:</span>
                  <span>{shippingCost > 0 ? `${shippingCost.toFixed(2)}€` : "Grátis"}</span>
                </div>
                {total < 50 && total > 0 && (
                  <p className="text-xs text-gray-500">
                    Faltam {(50 - total).toFixed(2)}€ para portes grátis!
                  </p>
                )}
                */}
                
                <div className="flex justify-between text-2xl font-bold text-green-700 pt-2 border-t">
                  <span>Total:</span>
                  <span>{discountedTotal.toFixed(2)}€</span>
                </div>
              </div>
            ) : (
              <p className="text-xl font-bold">Total: {total.toFixed(2)}€</p>
            )}
          </div>

          <div className="border-t pt-3 mt-2 space-y-3">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="student"
                checked={student}
                onChange={(e) => setStudent(e.target.checked)}
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor="student" className="cursor-pointer">
                Estudante DEISI <span className="text-green-600 text-sm">(10% desconto)</span>
              </label>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="coupon" className="text-sm font-semibold">
                Cupão de desconto:
              </label>
              <input
                type="text"
                id="coupon"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                placeholder="Ex: DESCONTO10"
                className="border rounded p-2"
              />
              <span className="text-xs text-gray-500">
                Cupões válidos: DESCONTO10, DESCONTO20, WELCOME
              </span>
              
              {/* MODIFICAÇÃO POSSÍVEL: Sugestões de cupões
              <button
                onClick={() => setShowCouponSuggestions(!showCouponSuggestions)}
                className="text-xs text-blue-500 hover:underline mt-1"
              >
                Ver cupões disponíveis
              </button>
              {showCouponSuggestions && (
                <div className="mt-2 p-2 bg-gray-50 rounded text-xs space-y-1">
                  <button onClick={() => setCoupon("DESCONTO10")} className="block hover:underline">
                    DESCONTO10 - 10% de desconto
                  </button>
                  <button onClick={() => setCoupon("DESCONTO20")} className="block hover:underline">
                    DESCONTO20 - 20% de desconto
                  </button>
                  <button onClick={() => setCoupon("WELCOME")} className="block hover:underline">
                    WELCOME - 5% de desconto
                  </button>
                </div>
              )}
              */}
            </div>
          </div>

          <button
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-semibold transition-colors"
            onClick={handleBuy}
          >
            Comprar
          </button>
          
          {/* MODIFICAÇÃO POSSÍVEL: Mostrar informações de pagamento
          <div className="text-xs text-gray-500 text-center space-y-1">
            <p>🔒 Pagamento 100% seguro</p>
            <p>📦 Entrega em 2-3 dias úteis</p>
            <p>↩️ Devolução grátis até 30 dias</p>
          </div>
          */}

          {purchaseSuccess && (
            <p className="text-center text-green-500 font-semibold text-lg">
              Compra realizada!
            </p>
          )}
        </>
      )}
      
      {/* MODIFICAÇÃO POSSÍVEL: Sugestões de produtos
      {cart.length > 0 && (
        <div className="mt-4 p-4 bg-gray-50 rounded">
          <h3 className="font-semibold mb-2 text-sm">💡 Pode também interessar:</h3>
          <div className="grid grid-cols-2 gap-2">
            {recommendedProducts.map(p => (
              <div key={p.id} className="border p-2 rounded bg-white">
                <img src={p.image} alt={p.title} className="h-16 object-contain mx-auto" />
                <p className="text-xs mt-1">{p.title}</p>
                <p className="text-sm font-bold">{p.price}€</p>
              </div>
            ))}
          </div>
        </div>
      )}
      */}
    </div>
  );
}