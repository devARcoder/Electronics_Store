import React from 'react'
import { leftSideData } from '../../data/data'
import { rightSideData } from '../../data/data'
import { centerData } from '../../data/data'
const BestDealing = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-3 bg-gray-100">
        <div className="left grid grid-cols-2 gap-2 cursor-pointer rounded-xl">
            {leftSideData.map((left,index)=> (
                <div className=" space-y-3 bg-white px-2 py-3 hover:shadow-xl" key={index}>
                    <h1 className='text-gray-500 text-sm hover:text-yellow-400'>{left.brand}</h1>
                    <h1 className='line-clamp-1 text-blue-600 text-md font-bold hover:text-yellow-400'>{left.title}</h1>
                    <img className='w-36 h-36 sm:w-64 sm:h-64 md:w-32 md:h-32 object-cover' src={left.image} alt="" />
                    <div className="cart flex justify-between items-center pr-4">
                        <h1 className='text-gray-700 text-lg sm:text-xl md:text-sm'>{left.price}</h1>
                        <p>cart</p>
                    </div>
                </div>
            ))}
        </div>

        <div className="center flex flex-col items-center">
            {centerData.map((center,i)=> (
                <div className="bg-white" key={i}>
                    <h1>{center.brand}</h1>
                    <h1>{center.title}</h1>
                    <img className='w-80 object-cover' src={center.image} alt="" />

                </div>
            ))}
        </div>

        <div className="right grid grid-cols-2 gap-2">
            {rightSideData.map((right,indx)=> (
                <div className="border space-y-3 bg-white" key={indx}>
                    <h1>{right.brand}</h1>
                    <h1>{right.title}</h1>
                    <img className='w-40 border' src={right.image} alt="" />
                    <div className="cart flex justify-between items-center pr-4">
                        <h1>{right.price}</h1>
                        <p>cart</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default BestDealing
