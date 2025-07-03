import React from 'react'
import { allCollections } from '../../data/data'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import AllProducts from '../all_Products/AllProducts'
import CompaniesBrand from '../company_brands/CompaniesBrand'
import NewsLetter from '../news_letter/NewsLetter'
const Collections = () => {
  return (
    <>
    <div className="px-4 py-6 md:px-24">
    <div className='flex items-center text-gray-500 py-6 space-x-1'>
      <Link className='text-[15px] hover:text-yellow-400' to="/">Home</Link>
      <ChevronRight size={18} color='gray'/>
      <Link className='text-[15px] hover:text-yellow-400' to="/collections">All Collections</Link>

    </div>
    <h1 className='text-3xl text-gray-800'>Collections</h1>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 py-6'>
      {allCollections.map((collection, i)=> (
        <div className="flex flex-col items-center text-center hover:shadow-lg hover:border hover:border-gray-100 transform px-3 py-7 border-b border-gray-200" key={i}>
            <img className=' h-32 w-32 transition-transform duration-300 hover:scale-105' src={collection.img} alt="" />
            <h1 className='text-gray-500 text-lg'>{collection.name}</h1>
        </div>
      ))}
    </div>
    </div>
    <AllProducts/>
    <CompaniesBrand/>
    <NewsLetter/>
    </>
  )
}

export default Collections
