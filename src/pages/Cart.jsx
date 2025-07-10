// src/pages/Cart.jsx
import React from "react";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart } = useCart(); // ✅ Correct context value

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10 text-center">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {cart.length > 0 ? (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            // <p className="text-gray-500">Your cart is empty.</p>
            <img className="md:pl-20" src="/images/emptycart.png" alt="" />
          )}
        </div>

        <CartSummary cartItems={cart} /> {/* ✅ Now sending correct prop */}
      </div>
    </div>
  );
};

export default Cart;
