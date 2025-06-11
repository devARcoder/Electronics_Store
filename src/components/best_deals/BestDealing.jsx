import React from 'react'
import { leftSideData } from '../../data/data'
import { rightSideData } from '../../data/data'
import { centerData } from '../../data/data'
const BestDealing = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-3  bg-gray-100">
        <div className="left grid grid-cols-2 gap-1">
            {leftSideData.map((left,index)=> (
                <div className=" space-y-3 bg-white px-3 py-3 cursor-pointer hover:shadow-xl" key={index}>
                    <h1 className='text-gray-500 text-sm hover:text-yellow-400'>{left.brand}</h1>
                    <h1 className='line-clamp-1 text-blue-600 text-md font-bold hover:text-yellow-400'>{left.title}</h1>
                    <img className='w-36 h-36 sm:w-64 sm:h-64 md:w-32 md:h-32 object-cover' src={left.image} alt="" />
                    <div className="cart flex justify-between items-center pr-4">
                        <h1 className='text-gray-700 text-lg sm:text-xl md:text-sm'>{left.price}</h1>
                        <p>{left.soldOut ? "" : (
                            <p className='hidden'>Cart</p>
                        )}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className="center flex flex-col items-center my-1 mx-0 md:my-0 md:mx-1">
            {centerData.map((center,i)=> (
                <div className="bg-white w-full px-3 pt-3 pb-3 md:pb-10 space-y-3 cursor-pointer" key={i}>
                    <h1 className='text-gray-500 text-md hover:text-yellow-400'>{center.brand}</h1>
                    <h1 className='line-clamp-1 text-blue-600 text-md font-bold hover:text-yellow-400'>{center.title}</h1>
                    <img className='w-80 sm:w-full md:w-[20rem] object-cover' src={center.image} alt="" />
                    <div className="imgs flex space-x-2">
                        <img className='border border-gray-200 w-16' src="/images/deal1.webp" alt="" />
                        <img className='border border-gray-200 w-16' src="/images/deal1-2.webp" alt="" />
                        <img className='border border-gray-200 w-16' src="/images/deal1-3.webp" alt="" />
                    </div>
                    <div className="cart flex space-x-4 items-center pr-4 pt-3">
                        <h1 className='text-red-600 text-xl sm:text-xl md:text-sm'>{center.price}</h1>
                        <h1 className='line-through text-gray-400 text-lg sm:text-xl md:text-sm'>{center.oldPrice}</h1>
                        <p>{center.soldOut ? "" : (
                            <p className='hidden md: text-2xl'>Cart</p>
                        )}</p>
                    </div>

                </div>
            ))}
        </div>

        <div className="right grid grid-cols-2 gap-1">
            {rightSideData.map((right,indx)=> (
                <div className=" space-y-3 bg-white px-3 py-3 cursor-pointer hover:shadow-md" key={indx}>
                    <h1 className='text-gray-500 text-sm hover:text-yellow-400'>{right.brand}</h1>
                    <h1 className='line-clamp-1 text-blue-600 text-md font-bold hover:text-yellow-400'>{right.title}</h1>
                    <img className='w-36 h-36 sm:w-64 sm:h-64 md:w-32 md:h-32 object-cover' src={right.image} alt="" />
                    <div className="cart flex justify-between items-center pr-4">
                        <h1 className='text-gray-700 text-lg sm:text-xl md:text-sm'>{right.price}</h1>
                        <p>{right.soldOut ? "" : (
                            <p className='hidden'>Cart</p>
                        )}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default BestDealing
