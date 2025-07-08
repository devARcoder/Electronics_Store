import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Chrome, Expand, Facebook, Linkedin, LinkIcon, Mail, Twitter, X } from "lucide-react";

const socialData = [
  {icon: <Facebook/>, Link: "wwww.facebook.com"},
  {icon: <Linkedin/>, Link: "wwww.linkedin.com"},
  {icon: <Twetter/>, Link: "wwww.twetter.com"},
  {icon: <Mail/>, Link: "wwww.mail.com"},
  {icon: <LinkIcon/>, Link: "wwww.facebook.com"},
  {icon: <Chrome/>, Link: "wwww.chrome.com"},
]
import { Button } from "./imports";
const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(data);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 text-2xl">
        No items in wishlist.
      </div>
    );
  }

  return (
    <>
      <div className="px-4 py-4">
        <div className="flex items-center text-gray-500 py-6 space-x-1">
          <Link className="text-[15px] hover:text-yellow-400" to="/">
            Home
          </Link>
          <ChevronRight size={18} color="gray" />
          <Link className="text-[15px] hover:text-yellow-300" to="/wishlist">
            Wishlist
          </Link>
        </div>

        {/* Title */}
        <div className="flex flex-col items-center justify-center space-y-2 pt-4 pb-8">

          <h1 className="text-3xl text-gray-700">My Wishlist</h1>
          <div className="socials flex space-x-3">
            {socialData.map((data, i)=> (
              <div className="" key={i}>
                <p className="border p-2 rounded-full">
                  waitinggggg
                </p>
              </div>
            ))}
            <span className="border p-2 rounded-full">
              <Facebook size={24} className=" " />
              </span>
            <span className="border p-2 rounded-full">
              <Linkedin size={24} className=" " />
              </span>
            <span className="border p-2 rounded-full">
              <Twitter size={24} className=" " />
              </span>
            <span className="border p-2 rounded-full">
              <Mail size={24} className=" " />
              </span>
            <span className="border p-2 rounded-full">
              <LinkIcon size={24} className=" " />
              </span>
            <span className="border p-2 rounded-full">
              <Chrome size={24} className=" " />
              </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-">
          {wishlistItems.map((item) => (
            <div
              className="flex flex-row items-center space-x-5 py-3 my-2 px-3 shadow-md rounded-md border border-gray-300 sm:flex-col"
              key={item.id}
            >
              <div className="img">
                <img className="w-24 h-24 sm:w-full sm:h-32" src={item.image} alt="" />
              </div>
              <div className="details space-y-1 text-center w-52">
                <h1 className="text-md truncate font-bold ">{item.title}</h1>
                <h1 className="text-xl font-bold">{item.price}</h1>
                <h1 className="text-xl font-bold">{item.newPrice}</h1>
                <div className="flex items-center space-x-3 justify-center mt-3">
                  <Link
                    to={`/product/${item.id}`}
                    className="text-lg text-blue-600 cursor-pointer "
                  >
                    <Expand/>
                  </Link>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="text-lg text-red-600 cursor-pointer"
                  >
                    <X className="w-8 h-8"/>
                  </button>
                </div>
                <Button
                  name="Add to Cart"
                  className="bg-yellow-400 text-white w-full py-2 rounded-full font-bold"
                />
              </div>
              {/* expand icon */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
