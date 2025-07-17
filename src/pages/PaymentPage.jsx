import React, { useState, useRef } from "react";
import Input from "../components/shared/common/Input";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const yearRef = useRef();
  const cvcRef = useRef();
  const navigate = useNavigate();

  const { cartItems = [], clearCart, getTotalPrice } = useCart();

  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [maskedCard, setMaskedCard] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal =
    typeof getTotalPrice === "function"
      ? getTotalPrice()
      : cartItems.reduce((sum, item) => {
          const price = parseFloat(item.price);
          return sum + (isNaN(price) ? 0 : price);
        }, 0);

  const taxRate = 0.05;
  const tax = subtotal * taxRate;
  const shipping = subtotal > 2000 ? 0 : 10; // ✅ updated logic
  const totalPrice = subtotal + tax + shipping;

  const handleCardChange = (e) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 16);
    setCardNumber(raw);
    const formatted = raw.replace(/(.{4})/g, "$1 ").trim();
    setMaskedCard(formatted);
  };

  const handleMonthChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 2);
    if (value.length === 2) {
      const num = parseInt(value);
      if (num < 1 || num > 12) {
        toast.error("Month must be between 01 and 12");
        return;
      }
      yearRef.current?.focus();
    }
    setMonth(value);
  };

  const handleYearChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 2);
    setYear(value);
    if (value.length === 2) cvcRef.current?.focus();
  };

  const handleCvcChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 3);
    setCvc(value);
  };

  const handlePayNow = () => {
    if (!cardHolder.trim()) {
      toast.error("Please enter card holder name");
      return;
    }
    if (cardNumber.length !== 16) {
      toast.error("Card number must be 16 digits");
      return;
    }
    if (!month || !year || cvc.length !== 3) {
      toast.error("Please fill out expiry and CVC properly");
      return;
    }

    const order = {
      date: new Date().toLocaleString(),
      items: cartItems,
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      shipping: shipping.toFixed(2),
      total: totalPrice.toFixed(2),
    };

    localStorage.setItem("lastOrder", JSON.stringify(order));
    localStorage.setItem("totalBill", order.total);

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate("/payment-success");
    }, 2000);
  };

  return (
    <>
      <h1 className="text-center text-3xl pt-16 pb-8 font-bold text-gray-700 border-b border-gray-300 mx-7 sm:mx-30">
        Payment Details
      </h1>

      <div className="px-4 py-8 md:px-24 flex flex-col justify-center items-center md:flex-row space-y-6 md:space-y-10">
        <div className="text-center md:mt-6">
          <img src="/images/ublcard.png" alt="Card Preview" />
        </div>

        <div className="space-y-4 sm:mx-18 md:mx-20 w-full max-w-md">
          <Input
            type="text"
            placeholder="Card holder Name"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          />

          <input
            type="text"
            placeholder="Card Number"
            value={maskedCard}
            onChange={handleCardChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          />

          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="MM"
              value={month}
              onChange={handleMonthChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="YY"
              value={year}
              onChange={handleYearChange}
              ref={yearRef}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="CVC"
              value={cvc}
              onChange={handleCvcChange}
              ref={cvcRef}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {cartItems.length > 0 && (
            <div className="border-t border-gray-300 pt-4 space-y-2 text-gray-700 font-medium">
              <h2 className="text-lg font-semibold mb-2">Cart Items</h2>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div>{item.title}</div>
                  <div>${parseFloat(item.price).toFixed(2)}</div>
                </div>
              ))}
              <hr className="my-2" />
            </div>
          )}

          <div className="space-y-2 border-t pt-4 text-gray-700 font-medium">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (05%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>

            {/* ✅ Show shipping note if subtotal < 2000 */}
            {subtotal < 2000 && (
              <p className="text-sm text-gray-500 text-right">
                Free shipping on orders above $2000
              </p>
            )}

            <hr className="my-2" />
            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handlePayNow}
            disabled={isProcessing}
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            {isProcessing ? "Processing..." : "Pay Now"}
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
