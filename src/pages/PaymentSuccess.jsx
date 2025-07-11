import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  const [order, setOrder] = useState(null);
  const invoiceRef = useRef();

  useEffect(() => {
    const savedOrder = localStorage.getItem("lastOrder");
    if (savedOrder) {
      const parsedOrder = JSON.parse(savedOrder);
      setOrder(parsedOrder);
      localStorage.setItem("totalBill", parsedOrder.total); // Save total for future reference
    }
  }, []);

  if (!order) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-700">No order found!</h2>
        <Link to="/" className="text-blue-500 underline mt-4 inline-block">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
        🎉 Payment Successful!
      </h1>

      {/* ✅ Invoice Section */}
      <div
        className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
        ref={invoiceRef}
      >
        <p className="text-gray-600 mb-4">Date: {order.date}</p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Order Summary
        </h2>

        <div className="space-y-4">
          {order.items.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 object-cover rounded border"
                />
                <div>
                  <p className="font-medium text-gray-800">{item.title}</p>
                  {item.quantity && (
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  )}
                </div>
              </div>
              <p className="text-gray-700 font-semibold">
                ${parseFloat(item.price).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <hr className="my-6" />

        <div className="space-y-1 font-medium text-gray-700">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${order.subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax:</span>
            <span>${order.tax}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>{order.shipping === "0.00" ? "Free" : `$${order.shipping}`}</span>
          </div>
          <div className="flex justify-between text-lg font-bold pt-2">
            <span>Total:</span>
            <span>${order.total}</span>
          </div>
        </div>
      </div>

      {/* ✅ Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
        <Link
          to="/"
          className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
        >
          Go to Home
        </Link>
       
      </div>
    </div>
  );
};

export default PaymentSuccess;
