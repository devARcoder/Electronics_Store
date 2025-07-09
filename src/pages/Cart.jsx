// src/pages/Cart.jsx
import React from "react";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import { useCart } from "../context/CartContext"; // ✅ Import useCart

const Cart = () => {
  const { cartItems } = useCart(); // ✅ Get live cart items

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>

        <CartSummary cartItems={cartItems} /> {/* ✅ LIVE DATA */}
      </div>
    </div>
  );
};

export default Cart;
