import React from 'react'
import Heading from '../shared/common/Heading'
import NewArrivals from './NewArrivals'
const Arrivals = () => {
  return (
    <>
    <div className='px-4 py-8 md:px-24'>
      

    <Heading name="New Arrivals" className="my-2"/>
    <div className="border-b-3 border-yellow-400 w-28"></div>
    
    <hr className='text-gray-200'/>
    </div>
    <NewArrivals/>
    </>
  )
}

export default Arrivals
