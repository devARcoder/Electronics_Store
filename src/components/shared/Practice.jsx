import React from "react";
import {
  ShoppingCart,
} from "lucide-react";
const Practice = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-32 md:px-24">
      <div className="">
        <img src="/images/ipadgreen.webp" alt="" />
      </div>
      <div className="space-y-3">
        <p>Bulgari</p>
        <h1>Ipad Mini</h1>
        <div className="flex space-x-2">
          <p>Facebook</p>
          <p>Twetter</p>
        </div>
        <p>code: 127h8vm</p>
        <hr className="text-gray-300 mr-8" />
        <div className="">
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Accept SIM card and call</li>
            <li>Take photos</li>
            <li>Make calling instead of mobile phone</li>
            <li>Sync music play and sync control music</li>
            <li>Sync Facebook,Twitter,email and calendar</li>
          </ul>
        </div>
        <hr className="text-gray-300 mr-8" />
        <h1 className="font-bold">Hurry Up! Offer ends in</h1>
        <div className="time flex space-x-2">
          <p className="border border-yellow-400 py-7 px-4">Days</p>
          <p className="border border-yellow-400 py-7 px-4">Hours</p>
          <p className="border border-yellow-400 py-7 px-4">Mints</p>
          <p className="border border-yellow-400 py-7 px-4">Secs</p>
        </div>
        <div className="flex items-center space-x-2 py-3">
          <ShoppingCart
            className="animate-bounce"
            size={52}
            fill="white"
            color="yellow"
          />
          <p className="text-gray-500">
            <span className="font-bold">Other people want this. </span>8 people
            have this in their carts right now.
          </p>
        </div>
        <p className="text-gray-500 pr-5">
          Want it delivered by{" "}
          <span className="font-bold">Thursday, 26 June</span> Order until{" "}
          <span className="font-bold text-yellow-400">14:00 tomorrow</span>
        </p>
      </div>

      <div className="stocks border mt-6 w-[40rem] md:w-[20rem] mx-4">
        <h1 className="border-b border-gray-300 md:text-center px-3 md:mx-10 py-4">Available: In stocks</h1>
        <div className="price flex flex-col justify-center md:items-center px-3">
        <h1 className="text-4xl">$110.00</h1>
        <p className="text-xl line-through text-gray-500">$199.00</p>
        </div>
        <div className="px-4 text-white font-bold space-y-4 py-10">

        <div className="px-6 flex justify-center items-center w-full bg-yellow-400 py-3 rounded-full">
            <ShoppingCart/>
        <button className="flex items-center px-3  "> Add to Cart</button>
        </div>
        <div className="px-6 flex justify-center items-center w-full bg-slate-800 py-3 rounded-full">
        <button className="flex items-center px-3  ">Buy it now</button>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Practice;
