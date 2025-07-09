import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  featuredItems,
  leftSideData,
  centerData,
  rightSideData,
  sellingData,
} from "../../data/data";
import {
  ChevronRight,
  FacebookIcon,
  ShoppingCart,
  Star,
  TwitterIcon,
} from "lucide-react";
import CountDownOffer from "./CountDownOffer";
import AllProducts from "../all_Products/AllProducts";
import CompaniesBrand from "../company_brands/CompaniesBrand";
import NewsLetter from "../news_letter/NewsLetter";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext"; // ✅ Import Cart Context

const ProductDetails = () => {
  const [userRating, setUserRating] = useState(3);
  const { id } = useParams();
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart(); // ✅ Access addToCart

  const allProducts = [
    ...featuredItems,
    ...leftSideData,
    ...centerData,
    ...rightSideData,
    ...sellingData,
  ];

  const countdownEnd = new Date();
  countdownEnd.setDate(countdownEnd.getDate() + 1);
  countdownEnd.setHours(countdownEnd.getHours() + 7);

  const product = allProducts.find((item) => item.id === id);

  useEffect(() => {
    document.title = product
      ? `${product.title} | AR Electronics`
      : "Product Not Found | AR Electronics";
  }, [product]);

  if (!product) {
    return (
      <div className="text-center mt-20 text-red-600 font-bold text-2xl">
        Product Not Found
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      oldPrice: product.oldPrice,
      quantity: 1,
    });
    toast.success(`${product.title} added to cart`);
  };

  const handleAddToWishlist = () => {
    addToWishlist({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.oldPrice,
      newPrice: product.price,
      isSoldOut: product.sold,
    });
    toast.success(`${product.title} added to wishlist`);
  };

  return (
    <>
      <div className="px-4 py-4 md:px-24">
        {/* Breadcrumb */}
        <div className="flex items-center text-gray-500 py-6 space-x-1">
          <Link className="text-[15px] hover:text-yellow-400" to="/">
            Home
          </Link>
          <ChevronRight size={18} color="gray" />
          <Link className="text-[15px] hover:text-yellow-400" to="/collections">
            All Collections
          </Link>
          <ChevronRight
            className="hidden sm:inline-block"
            size={18}
            color="gray"
          />
          <Link
            className="hidden sm:inline-block text-[15px] hover:text-yellow-400"
            to="#"
          >
            {product.title} Details
          </Link>
        </div>

        {/* Product Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 mt-6">
          {/* Image Section */}
          <div className="relative pt-24 md:pt-25">
            <img
              className={`${product.sold ? "grayscale" : ""}`}
              src={product.image}
              alt=""
            />
            {product.discount && (
              <div className="absolute top-6 left-0 md:-left-7">
                <img
                  className="rotate-1"
                  src="/images/saleoffbanner.png"
                  alt=""
                />
                <p className="absolute top-2 md:top-4 text-white font-bold left-26 md:left-34 text-3xl md:-left-0">
                  {product.discount} OFF
                </p>
              </div>
            )}
            {product.sold && (
              <div className="absolute -top-26 left-0 md:right-6">
                <img src="/images/bestSeller1.png" alt="Sold Out" />
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="space-y-5 pt-3">
            <div>
              <p className="text-sm text-gray-500">
                {product.brand || product.type}
              </p>
              <h1 className="text-3xl text-gray-600">{product.title}</h1>
            </div>
            <div className="flex space-x-1 items-center">
              {[1, 2, 3, 4, 5].map((star) => {
                const isFilled = star <= userRating;
                return (
                  <Star
                    key={star}
                    onClick={() => setUserRating(star)}
                    color={isFilled ? "yellow" : "gray"}
                    fill={isFilled ? "yellow" : "none"}
                    className="w-4 h-4 cursor-pointer transition-all"
                  />
                );
              })}
              <p className="text-sm text-gray-500">7 reviews</p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-2">
              <p className="flex bg-blue-900 text-white items-center w-fit px-1 py-1">
                <FacebookIcon className="w-5 h-5" fill="white" /> Share
              </p>
              <p className="flex bg-blue-600 text-white items-center w-fit px-1 py-1">
                <TwitterIcon className="w-5 h-5" fill="white" /> Tweet
              </p>
            </div>

            <h1 className="text-gray-500">Product SKU: 836392</h1>
            <hr className="text-gray-300 mr-8" />

            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Accept SIM card and call</li>
              <li>Take photos</li>
              <li>Make calling instead of mobile phone</li>
              <li>Sync music play and control music</li>
              <li>Sync Facebook, Twitter, email and calendar</li>
            </ul>

            <hr className="text-gray-300 mr-8" />
            {product.discount && (
              <>
                <h1 className="font-bold">HURRY UP! OFFER ENDS IN</h1>
                <div className="time flex space-x-2">
                  <CountDownOffer targetTime={countdownEnd} />
                </div>
              </>
            )}

            <div className="flex items-center space-x-2 py-3">
              <ShoppingCart
                className="animate-bounce"
                size={52}
                fill="white"
                color="yellow"
              />
              <p className="text-gray-500">
                <span className="font-bold">Other people want this. </span>8
                people have this in their carts right now.
              </p>
            </div>

            <p className="text-gray-500 pr-5">
              Want it delivered by{" "}
              <span className="font-bold">Thursday, 26 June</span>? Order before{" "}
              <span className="font-bold text-yellow-400">14:00</span>
            </p>
          </div>

          {/* Purchase Section */}
          <div className="stocks border border-gray-300 mt-6 sm:w-[40rem] md:w-[20rem] sm:mx-4 rounded-xl">
            <h1 className="border-b border-gray-300 md:text-center px-3 md:mx-10 py-4 text-center">
              Available:{" "}
              <span
                className={`${
                  product.sold ? "text-red-600" : "text-green-500"
                } font-bold`}
              >
                {product.sold ? "Sold Out" : "In Stock"}
              </span>
            </h1>

            <div className="price flex flex-col justify-center md:items-center px-3 pt-5">
              <h1 className="text-3xl text-center">
                {product.sold ? product.price : `$${product.price}`}
              </h1>
              <p className="text-xl line-through text-gray-500 text-center">
                {product.sold ? product.oldPrice : `$${product.oldPrice}`}
              </p>
            </div>

            {/* Action Buttons */}
            {!product.sold ? (
              <div className="px-4 text-white font-bold space-y-4 py-10">
                <div
                  onClick={handleAddToCart}
                  className="px-6 space-x-3 flex justify-center items-center w-full bg-yellow-400 py-3 rounded-full cursor-pointer"
                >
                  <ShoppingCart className="animate-bounce" />
                  <button className="font-bold text-white">Add to Cart</button>
                </div>

                <div className="px-6 flex justify-center items-center w-full bg-slate-800 py-3 rounded-full">
                  <button className="flex items-center px-3">Buy it now</button>
                </div>

                <div
                  onClick={handleAddToWishlist}
                  className="px-6 flex justify-center items-center w-full bg-green-600 py-3 rounded-full cursor-pointer"
                >
                  <button className="flex items-center px-3 text-white font-semibold">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/images/soldout.png"
                  alt="Sold Out"
                  className="w-32"
                />
                <div
                  onClick={handleAddToWishlist}
                  className="mt-4 flex justify-center items-center bg-green-600 py-3 px-6 rounded-full cursor-pointer"
                >
                  <button className="flex items-center px-3 text-white font-semibold">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Sections */}
      <AllProducts />
      <CompaniesBrand />
      <NewsLetter />
    </>
  );
};

export default ProductDetails;
