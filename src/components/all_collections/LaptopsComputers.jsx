import React from 'react'
import { laptops } from '../../data/data'
const LaptopsComputers = () => {
  return (
    <div>
      {laptops.map((laptop, i)=>(
        <div className="" key={i}>
          <img src={laptop.img} alt="" />
          <h1>{laptop.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default LaptopsComputers
