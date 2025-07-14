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

import Button from '../shared/common/Button'
import AllProducts from "../all_Products/AllProducts";
import CompaniesBrand from "../company_brands/CompaniesBrand";
import NewsLetter from "../news_letter/NewsLetter";
import { useCart } from "../../context/CartContext"; // ✅ Import Cart Context
import toast from "react-hot-toast";

const socialData = [
  { icon: <Facebook />, Link: "https://www.facebook.com" },
  { icon: <Linkedin />, Link: "https://www.linkedin.com" },
  { icon: <Mail />, Link: "mailto:example@email.com" },
  { icon: <LinkIcon />, Link: "https://www.google.com" },
];

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(data);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    localStorage.removeItem(`arrival_time_${id}`);
  };

  const getRandomArrival = (id) => {
    const key = `arrival_time_${id}`;
    const cached = localStorage.getItem(key);
    if (cached) return cached;

    const days = Math.floor(Math.random() * 5) + 1;
    const hours = Math.floor(Math.random() * 12) + 1;
    const timeStr = `${days} day${days > 1 ? "s" : ""}, ${hours} hour${hours > 1 ? "s" : ""}`;
    localStorage.setItem(key, timeStr);
    return timeStr;
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <img src="/images/emptywishlist.png" alt="" />
        </div>

        <div className="side2 flex flex-col items-center space-y-3 font-medium">
          <h1 className="text-3xl font-bold text-gray-700">Your wishlist is empty</h1>
          <p className="text-gray-500">Create your first wishlist request</p>
          <Link to="/">
          <Button name="Create new wish" className="border  bg-yellow-400 text-white px-8 py-3 rounded-lg cursor-pointer transition duration-300 hover:bg-yellow-500"/>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="px-4 py-4 md:px-24">
        <div className="flex items-center text-gray-500 py-6 space-x-1">
          <Link className="text-[15px] hover:text-yellow-400" to="/">
            Home
          </Link>
          <ChevronRight size={18} color="gray" />
          <Link className="text-[15px] hover:text-yellow-300" to="/wishlist">
            Wishlist
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center space-y-2 pt-4 pb-8">
          <h1 className="text-3xl text-gray-700">My Wishlist</h1>
          <div className="socials flex space-x-3 py-3">
            {socialData.map((data, i) => (
              <a key={i} href={data.Link} target="_blank" rel="noopener noreferrer">
                <p className="border p-2 rounded-full hover:bg-gray-100">{data.icon}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-between px-6 text-gray-600 md:px-20 font-bold border-b border-t border-gray-300 mb-3 py-3 md:text-lg">
          <h1>Product</h1>
          <h1 className="hidden sm:inline-block">Stock Status</h1>
          <h1>Product Details</h1>
        </div>

        <div className="grid grid-cols-1">
          {wishlistItems.map((item) => (
            <div
              className="flex flex-row items-center sm:justify-between space-x-5 py-3 my-2 px-3 border-b border-gray-300"
              key={item.id}
            >
              <div className="img">
                <img
                  className="w-full h-20 sm:w-full sm:h-36 md:w-full md:h-52"
                  src={item.image}
                  alt={item.title}
                />
                <div className="stocks sm:hidden">
                  {item.isSoldOut ? (
                    <div className="text-center">
                      <p className="text-sm text-yellow-500 mt-1 w-26 font-semibold">
                        Available again in{" "}
                        <span className="text-green-600 font-bold">{getRandomArrival(item.id)}</span>
                      </p>
                    </div>
                  ) : (
                    <div className="text-yellow-500 font-semibold text-center pt-3">
                      Available <span className="text-green-600 font-bold">In Stock</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="stocks hidden sm:block py-7">
                {item.isSoldOut ? (
                  <p className="text-sm md:text-lg text-yellow-500 mt-1 w-26 md:w-full font-semibold">
                    Available again in{" "}
                    <span className="text-green-600 font-bold">{getRandomArrival(item.id)}</span>
                  </p>
                ) : (
                  <span className="text-yellow-500 w-26 font-semibold">
                    Available <span className="text-green-600 font-bold">In Stock</span>
                  </span>
                )}
              </div>

              <div className="details space-y-1 text-center w-52 pl-7 py-4 md:w-76">
                <h1 className="text-md truncate font-bold">{item.title}</h1>
                <h1 className="text-xl font-bold text-green-600">{item.newPrice}</h1>

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

                <button
                  onClick={() => {
                    if (!item.isSoldOut) {
                      addToCart({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.newPrice,
                        oldPrice: item.price,
                        quantity: 1,
                      });
                      toast.success(`${item.title} added to cart`);
                    }
                  }}
                  disabled={item.isSoldOut}
                  className={`w-full py-2 rounded-full font-bold ${
                    item.isSoldOut
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-yellow-400 text-white hover:bg-yellow-500 transition duration-200"
                  }`}
                >
                  {item.isSoldOut ? "Out of Stock" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AllProducts />
      <CompaniesBrand />
      <NewsLetter />
    </>
  );
};

export default Wishlist;
