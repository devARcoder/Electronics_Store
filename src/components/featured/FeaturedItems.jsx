import React from 'react';
import { featuredItems } from '../../data/data';
import FeatureTab from './FeatureTab'
import { Link } from 'react-router-dom';


const FeaturedItems = () => {
  return (
    <>
    <FeatureTab className="flex justify-between items-center px-10 sm:px-44 py-5 md:hidden"/>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-center">
        
        <div className="flex flex-col justify-center items-center border-2 border-yellow-400 rounded-2xl mx-4 py-6 md:py-2 cursor-pointer">
          <div className="flex justify-between items-center space-x-16 pt-6 md:pt-0 px-4 md:px-0 sm:space-x-64">
            <h1 className="text-3xl">Special Offer</h1>
            <div className="bg-yellow-400 text-black px-5 py-3 rounded-full text-2xl">
              <p className="text-gray-600">Save</p>
              <p>36%</p>
            </div>
          </div>
          <img src="/images/game-1.webp" alt="" className="object-cover" />
          <h1 className="text-blue-500 font-bold text-lg hover:text-yellow-400">Black Fashion Zapda</h1>
          <div className="prices flex items-center space-x-2 text-3xl text-red-500">
            <p>$350.00</p>
            <p className="text-2xl text-gray-400 line-through">$550.00</p>
          </div>
        </div>

        <div className="h-[1px] w-full bg-gray-300 mt-6 mb-0 md:hidden"></div>

        
        <div className="mx-6 md:mx-0 my-0 md:my-0 space-y-6 w-full px-4">
          <FeatureTab className='hidden md:flex justify-between items-center md:px-40 py-3'/>
          {
            // ✅ Group items into rows of 4
            Array.from({ length: Math.ceil(featuredItems.length / 4) }, (_, i) => {
              const group = featuredItems.slice(i * 4, i * 4 + 4);
              return (
                <div
                  className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 cursor-pointer p-4 rounded-xl"
                  key={i}
                >
                  {group.map((item) => (
  <Link to={`/item/${item.id}`} key={item.id} className="block">
    <div className="relative z-20 py-3 px-1 sm:px-3 hover:shadow-md">
      <p className="text-gray-500 text-sm hover:text-yellow-400">{item.type}</p>
      <h1 className="line-clamp-1 text-blue-600 text-md font-bold hover:text-yellow-400">
        {item.title}
      </h1>

      <div className="relative my-5">
        {item.discount && (
          <div className="absolute bg-yellow-400 text-gray-600 rounded-full text-xs px-2 py-1 font-semibold">
            {item.discount}
          </div>
        )}
        {!item.sold ? (
          <img
            className="w-36 h-36 sm:w-64 sm:h-64 md:w-32 md:h-32 object-cover"
            src={item.image}
            alt={item.title}
          />
        ) : (
          <img
            className="w-36 h-36 sm:w-64 sm:h-64 md:w-32 md:h-32 object-cover grayscale"
            src={item.image}
            alt={item.title}
          />
        )}
      </div>

      <div className="flex space-x-2 items-center">
        {item.price ? (
          <p className="text-red-500 text-lg sm:text-xl md:text-sm">{item.price}</p>
        ) : (
          <p className="text-gray-500 font-semibold text-lg sm:text-xl md:text-sm">Sold out</p>
        )}
        {item.oldPrice && (
          <p className="line-through text-gray-400 text-md sm:text-xl md:text-sm">
            {item.oldPrice}
          </p>
        )}
      </div>
    </div>
  </Link>
))}

                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
};

export default FeaturedItems;
