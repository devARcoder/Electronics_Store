import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem("lastOrder");
    if (savedOrder) {
      const parsedOrder = JSON.parse(savedOrder);
      setOrder(parsedOrder);
      localStorage.setItem("totalBill", parsedOrder.total);
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
    <>
    <div className="shadow-2xl rounded-2xl mx-12 my-6 sm:mx-30 sm:my-10 md:mx-90 md:my-8 p-4 bg-gradient-to-t from-gray-100 to-white">
      <div className="img flex flex-col items-center border-b border-white text-center py-4">
        <img className="w-24 h-24 object-cover" src="/images/greenTick.png" alt="" />
        <h1 className="text-2xl font-bold pt-4">Payment Successful!</h1>
        <p className="text-gray-600 text-lg font-semibold ">We have received your membership request.</p>
      </div>

      <div className="py-5">
        <h1 className="text-center text-xl font-semibold text-gray-600">{order.date}</h1>

        <hr className="text-white my-5"/>
        <div className="space-y-4 font-medium text-gray-800 px-6 sm:px-10 md:px-30">
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold">Status:</span>
            <span className=""><img className="w-10 h-10 object-cover pr-1" src="/images/greenTick.png" alt="" /></span>
          </div>
          <div className="flex justify-between">
            <span className="text-xl font-semibold">Subtotal:</span>
            <span className="text-lg">${order.subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xl font-semibold">Tax:</span>
            <span className="text-lg">${order.tax}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xl font-semibold">Shipping:</span>
            <span className="text-lg">{order.shipping === "0.00" ? "Free" : `$${order.shipping}`}</span>
          </div>
          <hr className="text-white my-3"/>
          <div className="flex justify-between text-lg font-bold pt-2">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-lg font-bold">${order.total}</span>
          </div>
        </div>

        

        
      </div>
    </div>

    <Link to="/" className="flex items-center justify-center mb-8 "><button className="border rounded-xl bg-green-600 text-white px-6 py-4 transform transition-all duration-500 hover:bg-green-700 animate-bounce">🛍 Want Shopping</button></Link>
    </>
  );
};

export default PaymentSuccess;
