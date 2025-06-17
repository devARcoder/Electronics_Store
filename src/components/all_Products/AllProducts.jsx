import React from 'react'
import Heading from '../shared/common/Heading'
const AllProducts = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-3 mx-4 my-6'>
      <div className="featured">
        <Heading name="Featured Products" className="my-2"/>
    <div className="border-b-3 border-yellow-400 w-28"></div>
    <hr className='text-gray-200'/>
      </div>
      <div className="onsale">
        <Heading name="Onsale Products" className="my-2"/>
    <div className="border-b-3 border-yellow-400 w-28"></div>
    <hr className='text-gray-200'/>
      </div>
      <div className="toprated">
        <Heading name="Top Rated Products" className="my-2"/>
    <div className="border-b-3 border-yellow-400 w-28"></div>
    <hr className='text-gray-200'/>
      </div>
      <div className="imgbanner">
        <img src="/images/productsBanner.jpg" alt="" />
      </div>
    </div>
  )
}

export default AllProducts
