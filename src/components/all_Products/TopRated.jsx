import React from "react";
import Heading from "../shared/common/Heading";
import { topRatedProducts } from "../../data/data";

const TopRated = () => {
  return (
    <>
      <div className="toprated">
        <Heading name="Top Rated Products" className="my-2" />
        <div className="border-b-2 border-yellow-400 w-28 rounded-full"></div>
        <hr className="text-gray-200" />
        <div className=" mt-8 space-y-10">
          {topRatedProducts.map((top, i) => (
            <div className="flex space-x-2" key={i}>
              <div className="img">
                <img className="w-24 md:w-20" src={top.image} alt={top.title} />
              </div>
              <div className="headings">
                <h1 className="line-clamp-1 text-blue-600 text-sm md:text-sm font-bold hover:text-yellow-400">
                  {top.title}
                </h1>
                <div className="prices flex space-x-2">
                  <h1 className="text-red-400 text-md sm:text-xl md:text-md">
                    {top.price}
                  </h1>
                  <h1 className="line-through text-gray-400 text-md sm:text-lg">
                    {top.oldPrice}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopRated;
