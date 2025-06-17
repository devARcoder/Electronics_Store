import React from 'react'
import Heading from '../shared/common/Heading'
import { onSaleProducts } from '../../data/data'
const OnSale = () => {
  return (
    <>
      <div className="onsale">
        <Heading name="Onsale Products" className="my-2"/>
    <div className="border-b-2 border-yellow-400 w-28 rounded-full"></div>
    <hr className='text-gray-200'/>
    <div className=" mt-8 space-y-10">
    {onSaleProducts.map((sale, i)=> (
        <div className="flex space-x-2" key={i}>
            <div className="img">
                <img className='w-24 md:w-20' src={sale.image} alt={sale.title} />
            </div>
            <div className="headings">
                <h1 className="line-clamp-1 text-blue-600 text-sm font-bold hover:text-yellow-400">{sale.title}</h1>
                <div className="prices flex space-x-2">
                    <h1 className="text-red-400 text-md sm:text-xl">{sale.price}</h1>
                    <h1 className="line-through text-gray-400 text-md sm:text-lg">{sale.oldPrice}</h1>
                </div>
            </div>
        </div>
    ))}
    </div>
      </div>
    </>
  )
}

export default OnSale
