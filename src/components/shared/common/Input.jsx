import React from 'react'

const Input = ({placeholder, className}) => {
  return (
    <>
      <input type="text" placeholder={placeholder} className={className} />
    </>
  )
}

export default Input
