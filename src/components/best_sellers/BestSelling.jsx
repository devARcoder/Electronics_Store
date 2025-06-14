import React from 'react'
import { sellingData } from '../../data/data'
const BestSelling = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-3'>
      {sellingData.map((sellItem, index)=> (
        <div className="flex flex-row items-center border" key={index}>
          <div className="img">
            <img className='w-32' src={sellItem.image} alt={sellItem.title} />
          </div>
          <div className="headings space-y-12 px-2 py-3">
            <div className="topHead">
              <h1>{sellItem.brand}</h1>
          <h1>{sellItem.title}</h1>
            </div>
          <h1>{sellItem.price}</h1>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BestSelling
