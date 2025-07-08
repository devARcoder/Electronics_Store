import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Expand, X } from "lucide-react";
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
    // <div className="px-4 py-6 md:px-20">
    //   <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
    //   <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    //     {wishlistItems.map((item) => (
    //       <div key={item.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
    //         <img src={item.image} alt={item.title} className="w-full h-48 object-contain" />
    //         <h2 className="mt-2 font-semibold text-lg">{item.title}</h2>
    //         <p className="text-gray-500">{item.price}</p>
    //         <div className="flex justify-between mt-3">
    //           <Link to={`/product/${item.id}`} className="text-blue-600 hover:underline">View</Link>
    //           <button
    //             onClick={() => removeFromWishlist(item.id)}
    //             className="text-red-600 hover:underline"
    //           >
    //             Remove
    //           </button>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
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
