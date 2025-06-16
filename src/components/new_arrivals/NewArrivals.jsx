import React from "react";
import { newArrivalsData } from "../../data/data";
const NewArrivals = () => {
  return (
    <>
    {/* flex-shrink-0 */}
    <div className="flex overflow-x-auto no-scrollbar gap-4 mx-4 md:mx-26 mb-6">
        {newArrivalsData.map((arrival, i)=> (
            <div className="flex-shrink-0 w-[50%] md:w-[22%] border-r border-gray-200" key={i}>
                <h1 className="text-gray-500 text-sm hover:text-yellow-400">{arrival.brand}</h1>
                <h1 className='line-clamp-1 text-blue-600 text-md font-bold hover:text-yellow-400'>{arrival.title}</h1>

                <img src={arrival.image} alt={arrival.title} />

                <div className="flex space-x-2">
                    <h1 className="text-gray-700 text-md sm:text-xl md:text-xl">{arrival.price}</h1>
                    <h1 className="line-through text-gray-400 text-md sm:text-lg md:text-lg">{arrival.oldPrice}</h1>
                </div>
            </div>
        ))}
    </div>
    </>
  );
};

export default NewArrivals;
