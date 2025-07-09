// src/components/CartItem.jsx
import React from "react";
import { useCart } from "../../context/CartContext"; // ✅ Import the context

const CartItem = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="flex gap-4 bg-white p-4 rounded-xl shadow-sm items-center">
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{item.title}</h3>
        <div className="text-sm text-gray-500">
          <span className="text-red-500 font-bold">${item.price}</span>
          {item.oldPrice && (
            <span className="line-through ml-2 text-gray-400">
              ${item.oldPrice}
            </span>
          )}
        </div>

        {/* Quantity Controls */}
        <div className="mt-2 flex items-center gap-3">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="px-2 py-1 rounded bg-gray-200 text-gray-700 text-sm"
          >
            -
          </button>
          <span className="text-gray-700">{item.quantity}</span>
          <button
            onClick={() => increaseQuantity(item.id)}
            className="px-2 py-1 rounded bg-gray-200 text-gray-700 text-sm"
          >
            +
          </button>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 text-sm hover:underline"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
