import React from 'react';
import { sellingData } from '../../data/data';
import { Link } from 'react-router-dom';

const BestSelling = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 my-3">
      {sellingData.map((sellItem, index) => (
        <Link to={`/product/${sellItem.id}`} key={index}>
          <div className="flex flex-row items-center cursor-pointer border-gray-200 border-b border-r hover:shadow-xl my-3 md:my-5">
            <div className="img pl-3">
              <img className="w-32 transition-transform duration-300 hover:scale-105" src={sellItem.image} alt={sellItem.title} />
            </div>
            <div className="headings space-y-12 px-3 py-3">
              <div className="topHead">
                <h1 className="text-gray-500 text-sm hover:text-yellow-400">{sellItem.brand}</h1>
                <h1 className="line-clamp-1 text-blue-600 text-md font-bold hover:text-yellow-400">
                  {sellItem.title}
                </h1>
              </div>
              <div className="flex space-x-2 items-center">
                <h1 className="text-gray-700 text-lg sm:text-xl md:text-xl">{sellItem.price}</h1>
                {sellItem.oldPrice && (
                  <h1 className="line-through text-gray-400 text-lg sm:text-lg md:text-lg">
                    {sellItem.oldPrice}
                  </h1>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BestSelling;
