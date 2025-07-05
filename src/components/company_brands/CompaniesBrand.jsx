import React from 'react'
import { companiesBrand } from '../../data/data'
const CompaniesBrand = () => {
  return (
    <div className='flex justify-between items-center border-b border-t border-gray-200 py-6 sm:py-2 sm:px-3 mx-4 md:mx-24 my-9'>
      {companiesBrand.map((brand, i)=> (
        <div key={i}>
            <a
          key={i}
          href={brand.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className='cursor-pointer' src={brand.image} alt="" /></a>
        </div>
      ))}
    </div>
  )
}

export default CompaniesBrand
