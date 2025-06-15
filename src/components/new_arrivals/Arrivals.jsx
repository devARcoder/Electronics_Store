import React from 'react'
import Heading from '../shared/common/Heading'
import ArrivalsTab from './ArrivalsTab'
const Arrivals = () => {
  return (
    <div className='px-4 py-4 md:px-24'>
      <div className="">

      <div className="head md:flex justify-between items-center md:pt-6">
        <div className="heading py-3 ">
            <Heading name="New Arrivals"/>
            <div className="border-b-3 border-yellow-400 md:border-none w-24 pt-2"></div>
            <div className="line border-b-1 border-gray-400 md:border-none"></div>
        </div>
        <div className="tabs flex space-x-4">
            <ArrivalsTab className="md:space-x-6"/>
        </div>
      </div>
      <div className="hidden md:inline-block md:border-b md:bg-gray-400 h-[1px] w-full mb-10"></div>
    </div>


    </div>
  )
}

export default Arrivals
