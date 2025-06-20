import React from 'react'
import { allCollections } from '../../data/data'
const Collections = () => {
  return (
    <>
    <div className='grid grid-col-2 gap-5 md:grid-cols-4'>
      {allCollections.map((collection, i)=> (
        <div className="" key={i}>
            <img src={collection.img} alt="" />
        </div>
      ))}
    </div>
    </>
  )
}

export default Collections
