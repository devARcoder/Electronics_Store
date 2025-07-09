// src/components/cart/CartSummary.jsx
import React from "react";
import { useCart } from "../../context/CartContext"; // ✅ Import context

const CartSummary = () => {
  const { cartItems } = useCart();

  // ✅ Convert string price to number using parseFloat
  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price); // "99.99" → 99.99
    return sum + (isNaN(price) ? 0 : price);
  }, 0);

  const shippingCost = 0;
  const total = subtotal + shippingCost;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md sticky top-24">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">Summary</h3>

      <div className="flex justify-between mb-2 text-sm text-gray-600">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between mb-2 text-sm text-gray-600">
        <span>Shipping</span>
        <span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
      </div>

      <hr className="my-3" />

      <div className="flex justify-between font-bold text-gray-800 mb-4">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button className="w-full bg-yellow-400 hover:bg-yellow-500 transition-colors text-black py-2 rounded-lg font-medium">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
