import React from "react";
import { newArrivalsData } from "../../data/data";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const allItems = [...newArrivalsData, ...newArrivalsData];

  return (
    <div className="w-full overflow-hidden bg-white py-2">
      <div className="relative w-full overflow-hidden group">
        <div className="marquee-track flex gap-4 group-hover:paused">
          {allItems.map((item, index) => (
            <Link to={`/product/${item.id}`} key={`arrival-${index}`}>
            <div
              className="flex-shrink-0 w-[50vw] md:w-[15vw] border-r border-t border-gray-200 bg-white cursor-pointer hover:shadow-xl px-3 py-3"
              >
              <h1 className="text-gray-500 text-sm hover:text-yellow-400">{item.brand}</h1>
              <h1 className="line-clamp-1 text-blue-600 text-md font-bold hover:text-yellow-400">
                {item.title}
              </h1>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-contain my-2 transition-transform duration-300 hover:scale-105"
              />
              <div className="flex space-x-2">
                <h1 className="text-gray-700 text-md sm:text-xl">{item.price}</h1>
                <h1 className="line-through text-gray-400 text-md sm:text-lg">{item.oldPrice}</h1>
              </div>
            </div>
                </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
