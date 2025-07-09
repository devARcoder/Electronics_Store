import React, { useState } from 'react';
import {
  leftSideData,
  centerData,
  rightSideData,
} from '../../data/data';
import { Link } from 'react-router-dom';

const BestDealing = () => {
  const [mainImage, setMainImage] = useState(centerData[0]?.image);

  const thumbnails = ["/images/deal1.webp", "/images/deal1-2.webp", "/images/deal1-3.webp"];
  const center = centerData[0]; // Only show the first center card

  return (
    <div className="container grid grid-cols-1 md:grid-cols-3 bg-gray-100 sm:mx-3 md:mx-0">
      {/* LEFT SIDE */}
      <div className="left grid grid-cols-2 gap-1">
        {leftSideData.map((left, index) => (
          <Link to={`/product/${left.id}`} key={`left-${index}`}>
            <div className="space-y-3 bg-white px-3 py-3 cursor-pointer hover:shadow-xl">
              <h1 className="text-gray-500 text-sm hover:text-yellow-400">{left.brand}</h1>
              <h1 className="line-clamp-1 text-blue-600 text-md font-bold hover:text-yellow-400">{left.title}</h1>
              <img
                className={`w-36 h-36 sm:w-64 sm:h-64 md:w-32 md:h-32 object-cover transition-transform duration-300 hover:scale-105 ${left.sold ? "grayscale" : ""}`}
                src={left.image}
                alt={left.title}
              />
              <div className="cart flex justify-between items-center pr-4">
                <h1 className="text-gray-700 text-lg">${left.price ? left.price : (
                            <p className="text-gray-500 font-semibold text-lg sm:text-xl md:text-sm">
                              Sold out
                            </p>
                          )}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CENTER SECTION - only 1 card */}
      <div className="center flex justify-center items-center mx-1">
        <Link to={`/product/${center.id}`} className="w-full">
          <div className="bg-white px-4  space-y-4 cursor-pointer hover:shadow-xl text-center">
            <h1 className="text-gray-500 text-md hover:text-yellow-400">{center.brand}</h1>
            <h1 className="text-blue-600 text-lg font-bold hover:text-yellow-400">{center.title}</h1>

            <img
              className="w-full object-cover transition-transform duration-300 hover:scale-105"
              src={mainImage}
              alt={center.title}
            />

            <div className="flex space-x-2">
              {thumbnails.map((thumb, i) => (
                <img
                  key={i}
                  src={thumb}
                  alt=""
                  className="border border-gray-200 w-14 h-14 cursor-pointer transition-transform duration-300 hover:scale-105  hover:border-2 hover:border-b-yellow-400"
                  onClick={(e) => {
                    e.preventDefault();
                    setMainImage(thumb);
                  }}
                />
              ))}
            </div>

            <div className="flex items-center space-x-4 pb-3">
              <h1 className="text-red-600 text-xl">${center.price}</h1>
              <h1 className="line-through text-gray-400 text-lg">${center.oldPrice}</h1>
            </div>
          </div>
        </Link>
      </div>

      {/* RIGHT SIDE */}
      <div className="right grid grid-cols-2 gap-1">
        {rightSideData.map((right, index) => (
          <Link to={`/product/${right.id}`} key={`right-${index}`}>
            <div className="space-y-3 bg-white px-3 py-3 cursor-pointer hover:shadow-md">
              <h1 className="text-gray-500 text-sm hover:text-yellow-400">{right.brand}</h1>
              <h1 className="line-clamp-1 text-blue-600 text-md font-bold hover:text-yellow-400">{right.title}</h1>
              <img
                className={`w-36 h-36 sm:w-64 sm:h-64 md:w-32 md:h-32 object-cover transition-transform duration-300 hover:scale-105 ${right.sold ? "grayscale" : ""}`}
                src={right.image}
                alt={right.title}
              />
              <div className="cart flex justify-between items-center pr-4">
                <h1 className="text-gray-700 text-lg">${right.price ? right.price : (
                            <p className="text-gray-500 font-semibold text-lg sm:text-xl md:text-sm">
                              Sold out
                            </p>
                          )}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestDealing;
