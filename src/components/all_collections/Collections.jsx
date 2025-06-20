import React from 'react'
import { collections } from '../../data/data'
const Collections = () => {
  return (
    <div className='grid grid-cols-2 gap-5 md:grid-cols-6 px-4'>
      {collections.map((collection, i)=>(
        <div className="" key={i}>
          <img src={collection.img} alt={collection.name} />
          <h1>{collection.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default Collections
