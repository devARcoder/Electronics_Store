import React from 'react'
import { featuredItems } from '../../data/data'

const FeaturedItems = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">

    <div className="flex flex-col justify-center items-center border-2 border-yellow-400 rounded-2xl mx-4 py-6">
        <div className="flex justify-between items-center space-x-16 pt-6 px-4 sm:space-x-64">
            <h1 className='text-3xl'>Special Offer</h1>
            <div className="bg-yellow-400 text-black px-5 py-3 rounded-full text-2xl">
                <p className='text-gray-600'>Save</p>
                <p>36%</p>
            </div>
        </div>
            <img src="/images/game-1.webp" alt="" className='object-cover' />
            <h1 className='text-blue-500 font-bold text-lg'>Black Fashion Zapda</h1>
            <div className="prices flex items-center space-x-2 text-3xl text-red-500">
                <p>$350.00</p>
                <p className='text-2xl text-gray-400 line-through'>$550.00</p>
            </div>
            
        </div>
        
      <div className="mx-6 my-4 md:my-0 space-y-3 md:space-y-0">
  {Array.from({ length: Math.ceil(featuredItems.length / 2) }, (_, i) => {
    const first = featuredItems[i * 2];
    const second = featuredItems[i * 2 + 1];

    return (
      <div className="relative grid grid-cols-2 gap-10 md:gap-20 cursor-pointer" key={i}>
        {/* Vertical Line Between 2 Cards */}
        <div className="absolute top-12 bottom-16 left-1/2 w-[1px] bg-gray-300 z-10" />

        {[first, second].map(
          (item, indx) =>
            item && (
              <div className="relative z-20 my-2 py-3" key={indx}>
                {/* Horizontal Line at bottom of each card */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300 md:hidden" />

                <p className="text-gray-500 text-sm hover:text-yellow-400">{item.type}</p>
                <h1 className="line-clamp-1 text-blue-600 text-md font-bold hover:text-yellow-400">
                  {item.title}
                </h1>

                <div className="relative my-5">
                  {item.discount && (
                    <div className="absolute bg-yellow-400 text-black rounded-full text-xs w-8 py-2 px-1 font-semibold">
                      <p>{item.discount}</p>
                    </div>
                  )}
                  <img className="w-36 h-36" src={item.image} alt={item.title} />
                </div>

                <div className="flex space-x-2">
                  {item.price ? (
                    <p className="text-red-500 text-xl">{item.price}</p>
                  ) : (
                    <p className="text-xl text-gray-500 font-semibold">Sold out</p>
                  )}
                  <p className="line-through text-gray-400 text-xl">{item.oldPrice}</p>
                </div>
              </div>
            )
        )}
      </div>
    );
  })}
</div>


        </div>
    </>
  )
}

export default FeaturedItems
