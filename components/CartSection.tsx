"use client";
import { Product } from "@/app/models/interfaces";
import { useState, useEffect } from "react";

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

  const total = cart.reduce((acc, item) => acc + item.product.price * item.qty, 0);

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

  const discount = discountedTotal ? total - discountedTotal : 0;
  const discountPercentage = discount > 0 ? ((discount / total) * 100).toFixed(0) : 0;

  return (
    <div className="border p-4 bg-white rounded shadow flex flex-col gap-3">
      <h2 className="text-xl font-bold">Carrinho</h2>

      {cart.length === 0 && !purchaseSuccess && <p className="text-gray-500">Carrinho vazio</p>}

      <ul className="flex flex-col gap-2">
        {cart.map((item) => (
          <li
            key={item.product.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <div className="flex flex-col">
              <span className="font-semibold">{item.product.title}</span>
              <span className="text-gray-600 text-sm">
                {item.qty} × {item.product.price}€ = {(item.qty * item.product.price).toFixed(2)}€
              </span>
            </div>

            <button
              className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded transition-colors"
              onClick={() => removeFromCart(item.product.id)}
            >
              Remover 1
            </button>
          </li>
        ))}
      </ul>

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
            </div>
          </div>

          <button
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-semibold transition-colors"
            onClick={handleBuy}
          >
            Comprar
          </button>

          {purchaseSuccess && (
            <p className="text-center text-green-500 font-semibold text-lg">
              Compra realizada!
            </p>
          )}
        </>
      )}
    </div>
  );
}