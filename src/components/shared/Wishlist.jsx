import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Facebook,
  Linkedin,
  Mail,
  LinkIcon,
  Expand,
  X,
} from "lucide-react";
import { Button } from "./imports";

const socialData = [
  { icon: <Facebook />, Link: "https://www.facebook.com" },
  { icon: <Linkedin />, Link: "https://www.linkedin.com" },
  { icon: <Mail />, Link: "mailto:example@email.com" },
  { icon: <LinkIcon />, Link: "https://www.google.com" },
];

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
    localStorage.removeItem(`arrival_time_${id}`); // remove stored arrival time too
  };

  // ✅ Random arrival time generator
  const getRandomArrival = (id) => {
    const key = `arrival_time_${id}`;
    const cached = localStorage.getItem(key);
    if (cached) return cached;

    const days = Math.floor(Math.random() * 5) + 1; // 1 to 5 days
    const hours = Math.floor(Math.random() * 12) + 1; // 1 to 12 hours
    const timeStr = `${days} day${days > 1 ? "s" : ""}, ${hours} hour${hours > 1 ? "s" : ""}`;
    localStorage.setItem(key, timeStr);
    return timeStr;
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 text-2xl">
        No items in wishlist.
      </div>
    );
  }

  return (
    <div className="px-4 py-4">
      {/* Breadcrumb */}
      <div className="flex items-center text-gray-500 py-6 space-x-1">
        <Link className="text-[15px] hover:text-yellow-400" to="/">
          Home
        </Link>
        <ChevronRight size={18} color="gray" />
        <Link className="text-[15px] hover:text-yellow-300" to="/wishlist">
          Wishlist
        </Link>
      </div>

      {/* Title and Socials */}
      <div className="flex flex-col items-center justify-center space-y-2 pt-4 pb-8">
        <h1 className="text-3xl text-gray-700">My Wishlist</h1>
        <div className="socials flex space-x-3">
          {socialData.map((data, i) => (
            <a key={i} href={data.Link} target="_blank" rel="noopener noreferrer">
              <p className="border p-2 rounded-full hover:bg-gray-100">{data.icon}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Wishlist Items */}
      <div className="grid grid-cols-1">
        {wishlistItems.map((item) => (
          <div
            className="flex flex-row items-center sm:justify-between space-x-5 py-3 my-2 px-3 shadow-md rounded-md border border-gray-300"
            key={item.id}
          >
            {/* Product Image */}
            <div className="img">
              <img className="sm:w-full sm:h-36" src={item.image} alt={item.title} />
            </div>

            {/* Stock Status */}
            <div className="stocks hidden sm:block">
              <h1 className="text-sm font-semibold text-gray-600">Stock Status</h1>
              {item.isSoldOut ? (
                <div>
                  <p className="text-red-600 font-semibold">Not Available</p>
                  <p className="text-sm text-yellow-500 mt-1">
                    🚚 Available again in {getRandomArrival(item.id)}
                  </p>
                </div>
              ) : (
                <span className="text-green-600 font-semibold">In Stock</span>
              )}
            </div>

            {/* Product Details */}
            <div className="details space-y-1 text-center w-52">
              <h1 className="text-md truncate font-bold">{item.title}</h1>
              <h1 className="text-xl font-bold line-through text-gray-400">{item.price}</h1>
              <h1 className="text-xl font-bold text-green-600">{item.newPrice}</h1>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 justify-center mt-3">
                <Link to={`/product/${item.id}`} className="text-lg text-blue-600 cursor-pointer">
                  <Expand />
                </Link>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-lg text-red-600 cursor-pointer"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <Button
                name={item.isSoldOut ? "Out of Stock" : "Add to Cart"}
                disabled={item.isSoldOut}
                className={`w-full py-2 rounded-full font-bold ${
                  item.isSoldOut
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-yellow-400 text-white"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
