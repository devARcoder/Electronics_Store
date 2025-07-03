import React from 'react'
import AboutBanners from '../components/about/AboutBanners'
import AllProducts from '../components/all_Products/AllProducts'
import AboutTeams from '../components/about/AboutTeams'
import AboutDetails from '../components/about/AboutDetails'
import NewsLetter from '../components/news_letter/NewsLetter'
import CompaniesBrand from '../components/company_brands/CompaniesBrand'
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <>
    <div className="px-4 py-4 md:px-24">

    <div className='flex items-center text-gray-500 py-6 space-x-1'>
        <Link className='text-[15px] hover:text-yellow-400' to="/">Home</Link>
        <ChevronRight size={18} color='gray' />
        <Link className='text-[15px] hover:text-yellow-300' to="/about">About Store</Link>
      </div>

      {/* Title */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className='text-3xl text-gray-700'>About Store</h1>
        <p className='text-gray-500'>Tech for Every Need. Prices for Every Budget.</p>
      </div>
    </div>
      <AboutBanners/>
      <AboutTeams/>
      <AboutDetails/>
      <AllProducts/>
      <CompaniesBrand/>
      <NewsLetter/>
    </>
  )
}

export default About
