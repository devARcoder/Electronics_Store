import React from 'react'
import { companiesBrand } from '../../data/data'
const CompaniesBrand = () => {
  return (
    <div className='flex justify-between items-center border-b border-t border-gray-200 py-2 px-3 mx-4 md:mx-24 my-9'>
      {companiesBrand.map((brand, i)=> (
        <div key={i}>
            <img src={brand.image} alt="" />
        </div>
      ))}
    </div>
  )
}

export default CompaniesBrand
