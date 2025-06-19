import React from 'react'
import { aboutBanners } from '../../data/data'
const AboutBanners = () => {
  return (
    <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
      {aboutBanners.map((banner, i) => (
        <div className="" key={i}>
            <img src={banner.img} alt="" />
            <h1>{banner.title}</h1>
            <p>{banner.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default AboutBanners
