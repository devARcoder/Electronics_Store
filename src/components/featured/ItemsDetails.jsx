import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { featuredItems } from "../../data/data";
import {
  ChevronRight,
  FacebookIcon,
  ShoppingCart,
  Star,
  TwitterIcon,
} from "lucide-react";
import CountDownOffer from "./CountDownOffer";
import AvailableInStock from "./AvailableInStock";

const ItemDetails = () => {
  const [userRating, setUserRating] = useState(3);
  const { id } = useParams();
  const item = featuredItems.find((item) => item.id === id);

  if (!item) return <h2 className="text-center py-20">Item not found!</h2>;

  const countdownEnd = new Date();
  countdownEnd.setDate(countdownEnd.getDate() + 1);
  countdownEnd.setHours(countdownEnd.getHours() + 7); // 1 hour from now
  return (
    <>
      <div className="px-4">
        <div className="flex items-center text-gray-500 py-6 space-x-1">
          <Link className="text-[15px] hover:text-yellow-400" to="/">
            Home
          </Link>
          <ChevronRight size={18} color="gray" />
          <Link className="text-[15px] hover:text-yellow-400" to="/collections">
            All Collections
          </Link>
          <ChevronRight size={18} color="gray" />
          <Link className="text-[15px] hover:text-yellow-400" to="/collections">
            Laptops & Mobiles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-54">
          <div className="relative  pr-10">
              {item.discount && (
                <p className="absolute bg-yellow-300 inline-block px-1 py-1 rounded-full text-[15px]">
                  {item.discount}
                </p>
              )}
              <img
                src={item.image}
                alt={item.title}
                className=" object-cover rounded-xl ml-3"
              />
            </div>
          <div className="sm:flex w-full">
            
            <div className="flex flex-col space-y-4">
              <div className="">
                <p className="text-gray-500 text-sm">{item.type}</p>
                <h1 className="text-3xl text-gray-600">{item.title}</h1>
              </div>

              <div className="flex space-x-1 items-center">
                {[1, 2, 3, 4, 5].map((star) => {
                  const isFilled = star <= userRating;
                  return (
                    <Star
                      key={star}
                      onClick={() => setUserRating(star)} // optional: click to rate
                      color={isFilled ? "yellow" : "gray"}
                      fill={isFilled ? "yellow" : "none"}
                      className="w-4 h-4 cursor-pointer transition-all"
                    />
                  );
                })}
                <p className="text-sm text-gray-500">7 reviews</p>
              </div>

              <div className="socialIcons flex space-x-2">
                <p className="flex bg-blue-900 text-white items-center w-fit px-1 py-1">
                  <FacebookIcon className="w-5 h-5" fill="white" color="none" />{" "}
                  Share
                </p>
                <p className="flex bg-blue-600 text-white items-center w-fit px-1 py-1">
                  <TwitterIcon className="w-5 h-5" fill="white" color="none" />{" "}
                  Tweet
                </p>
              </div>

              <h1>Product SKU: code</h1>

              <hr className="text-gray-500 " />
              <div className="px-4">
                <ul className="list-disc text-gray-500">
                  <li>Accept SIM card and call</li>
                  <li>Take photos</li>
                  <li>Make calling instead of mobile phone</li>
                  <li>Sync music play and sync control music</li>
                  <li>Sync Facebook,Twitter,email and calendar</li>
                </ul>
              </div>

              <hr className="text-gray-500 " />

              <div className="pt-2 pb-7 space-y-3">
                <h1 className="font-bold text-gray-600">
                  HURRY UP! OFFER ENDS IN
                </h1>
                <CountDownOffer targetTime={countdownEnd} />
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
                  <span className="font-bold">Thursday, 26 June</span> Order
                  until{" "}
                  <span className="font-bold text-yellow-400">
                    14:00 tomorrow
                  </span>
                </p>
              </div>
            </div>
          </div>
          <AvailableInStock />
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
