import React from 'react'

const Heading = ({name, className}) => {
  return (
    <div className={className}>
      <h1 className=' text-gray-700 text-xl'>{name}</h1>
      
    </div>
  )
}

export default Heading
