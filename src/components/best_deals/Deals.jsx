import React from 'react'
import DealsTab from './DealsTab'
import BestDealing from './BestDealing'

const Deals = () => {
  return (
    <>
      <div className="bg-gray-100 mt-6 pb-4 px-3">
        <DealsTab className="flex justify-between space-x-4 sm:justify-center items-center sm:space-x-1 md:space-x-10  px-1 sm:px-4 py-5"/>
        <hr className='bg-gray-100 h-[1px] mx-3 sm:mx-5 md:mx-28 mb-4'/>
      <BestDealing/>
      </div>
    </>
  )
}

export default Deals
