import React from 'react'
import { aboutDetails } from '../../data/data'
const AboutDetails = () => {
  return (
    <div className='grid grid-cols-1 gp-5 px-4 py-8 md:grid-cols-2'>
      {aboutDetails.map((detail, i) => (
        <div className="" key={i}>
            <h1>{detail.title}</h1>
            <p>{detail.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default AboutDetails
