import React from 'react';
import { offerCardItems } from '../../data/data';

const OfferProducts = () => {
  return (
    <div className="w-full py-14 bg-white">
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 w-fit mx-auto">
        {offerCardItems.map((item, index) => (
          <div
            key={index}
            className="relative w-64 bg-gray-200 text-white rounded-lg overflow-hidden group flex items-center justify-center"
          >
            {/* Overlay */}
            <div
              className="
                absolute inset-0 bg-zinc-50 opacity-0 
                translate-y-full 
                group-hover:opacity-50 group-hover:translate-y-0 
                transition-all duration-500 ease-in-out
                rounded-lg pointer-events-none
              "
            ></div>

            {/* Card content */}
            <div className="relative px-3 py-4 text-black flex items-center justify-center space-x-3">
              <div className="img">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              </div>
              <div className="headings space-y-1">
                <h3 className="text-xs font-bold mb-1">{item.title}</h3>
                <p className="font-bold text-green-400 text-xl">OFF {item.discount}</p>
                <button className='bg-yellow-400 text-black px-1.5 py-1 rounded-md text-xs'>Shop Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferProducts;
