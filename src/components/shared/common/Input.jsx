import React from 'react'

const Input = ({type, placeholder, className}) => {
  return (
    <>
      <input type={`"text" ${type}`} placeholder={placeholder} className={className} />
    </>
  )
}

export default Input
