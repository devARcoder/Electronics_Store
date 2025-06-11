import React from 'react'
import { leftSideData } from '../../data/data'
import { rightSideData } from '../../data/data'
import { centerData } from '../../data/data'
const BestDealing = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-3">
        <div className="left grid grid-cols-2 gap-3">
            {leftSideData.map((left,index)=> (
                <div className="" key={index}>
                    <h1>{left.brand}</h1>
                    <h1>{left.title}</h1>
                </div>
            ))}
        </div>

        <div className="center flex flex-col items-center">
            {centerData.map((center,i)=> (
                <div className="" key={i}>
                    <h1>{center.brand}</h1>
                    <h1>{center.title}</h1>
                    <img className='w-80 object-cover' src={center.image} alt="" />

                </div>
            ))}
        </div>

        <div className="right grid grid-cols-2 gap-2">
            {rightSideData.map((right,indx)=> (
                <div className="border space-y-3" key={indx}>
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
