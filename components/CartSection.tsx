"use client";
import { Product } from "@/app/models/interfaces";

type CartItem = { product: Product; qty: number };

interface Props {
  cart: CartItem[];
  removeFromCart: (id: number) => void;
  buy: () => void;
}

export default function CartSection({ cart, removeFromCart, buy }: Props) {
  const total = cart.reduce((acc, item) => acc + item.product.price * item.qty, 0);

  return (
    <div className="border p-4 bg-white rounded shadow flex flex-col gap-3">
      <h2 className="text-xl font-bold">Carrinho</h2>

      {cart.length === 0 && <p>Carrinho vazio</p>}

      <ul className="flex flex-col gap-2">
        {cart.map((item) => (
          <li
            key={item.product.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <div className="flex flex-col">
              <span className="font-semibold">{item.product.title}</span>
              <span className="text-gray-600 text-sm">
                {item.qty} × {item.product.price}€
              </span>
            </div>

            <button
              className="bg-red-400 text-white px-2 py-1 rounded"
              onClick={() => removeFromCart(item.product.id)}
            >
              Remover 1
            </button>
          </li>
        ))}
      </ul>

      <p className="font-bold">Total: {total}€</p>

      {cart.length > 0 && (
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={buy}
        >
          Comprar
        </button>
      )}
    </div>
  );
}
