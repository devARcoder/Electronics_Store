import React from 'react'
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import News from '../components/NewsFeature/News';
import AboutNews from '../components/NewsFeature/AboutNews';
import AllProducts from '../components/all_Products/AllProducts';
const Features = () => {
  return (
    <>
    <div className='px-4 py-4 md:px-24'>
      <div className='flex items-center text-gray-500 py-6 space-x-1'>
        <Link className='text-[15px] hover:text-yellow-400' to="/">Home</Link>
        <ChevronRight size={18} color='gray' />
        <Link className='text-[15px] hover:text-yellow-300' to="/features">News</Link>
      </div>
      <div className="flex flex-row">
      <News/>
      <AboutNews/>
      </div>
    </div>
    <AllProducts/>
    </>
  )
}

export default Features
