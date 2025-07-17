import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../../context/CartContext";
import { Loader2 } from "lucide-react";

const CartSummary = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [storedTotal, setStoredTotal] = useState(null);

  const subtotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.price);
    const qty = item.quantity || 1;
    return sum + (isNaN(price) ? 0 : price * qty);
  }, 0);

  // ✅ Shipping logic: free if subtotal >= 2000
  const shippingCost = subtotal >= 2000 ? 0 : 10;
  const total = subtotal + shippingCost;

  useEffect(() => {
    localStorage.setItem("totalBill", total.toFixed(2));
    setStoredTotal(total.toFixed(2));
  }, [total]);

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty. Add items before proceeding.");
      return;
    }

    setProcessing(true);
    toast.loading("Processing checkout...", { id: "checkout" });

    setTimeout(() => {
      toast.dismiss("checkout");
      toast.success("Checkout successful! Redirecting to payment...", {
        id: "checkoutSuccess",
        duration: 2000,
      });
      setProcessing(false);
      navigate("/payment");
    }, 2000);
  };

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
        <span>${storedTotal}</span>
      </div>

      <button
        onClick={handleCheckout}
        disabled={processing || cart.length === 0}
        className={`w-full flex justify-center items-center gap-2 transition-colors text-black py-2 rounded-lg font-medium ${
          processing || cart.length === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-yellow-400 hover:bg-yellow-500"
        }`}
      >
        {processing ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing Checkout...
          </>
        ) : (
          "Proceed to Checkout"
        )}
      </button>
    </div>
  );
};

export default CartSummary;
