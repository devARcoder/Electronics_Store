import React from 'react'
import { aboutDetails } from '../../data/data'
const AboutDetails = () => {
  return (
    <div className='grid grid-cols-1 gp-5 px-4 pt-14 md:pt-18 md:grid-cols-2 space-y-10 md:px-24 md:gap-10 '>
      {aboutDetails.map((detail, i) => (
        <div className="flex flex-col space-y-4 md:text-center md:px-12" key={i}>
            <h1 className='text-gray-800 font-semibold'>{detail.title}</h1>
            <p className='text-gray-500'>{detail.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default AboutDetails
