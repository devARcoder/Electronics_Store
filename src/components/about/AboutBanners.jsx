import React from 'react'
import { aboutBanners } from '../../data/data'
const AboutBanners = () => {
  return (
    <div className='grid grid-cols-1 gap-5 md:grid-cols-3 px-4 md:px-24 py-2 md:py-6'>
      {aboutBanners.map((banner, i) => (
        <div className="flex flex-col text-center space-y-2" key={i}>
            <img src={banner.img} alt="" />
            <h1 className='text-xl text-gray-900 font-bold'>{banner.title}</h1>
            <p className='text-gray-600 text-[15px] text-semibold px-2'>{banner.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default AboutBanners
