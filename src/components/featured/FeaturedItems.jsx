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
      <div className="grid grid-cols-2 gap-4">
        
        {featuredItems.map((item, indx)=>(
            <div key={indx}>
                <p>{item.type}</p>
                <h1>{item.title}</h1>
                <img src={item.image} alt="" />
            </div>
        ))}
      </div>
        </div>
    </>
  )
}

export default FeaturedItems
