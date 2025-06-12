import React from 'react'
import SellersTab from './SellersTab'

const Sellers = () => {
  return (
    <div className='px-4 my-4'>
        
      <SellersTab className="flex space-x-3 pt-3 md:pt-8 pb-3"/>
      {/* <hr className='hidden text-gray-400 mb-3'/> */}
      <div className='hidden md:inline-block md:border-b-3 border-yellow-400 w-24 h-1'></div>
      <hr className='md:mb-4 text-gray-400'/>
    </div>
  )
}

export default Sellers
