import React from 'react'

const Input = ({type, placeholder, className, value, onChange,}) => {
  return (
    <>
      <input value={value}
      onChange={onChange} type={`"text" ${type}`} placeholder={placeholder} className={className} />
    </>
  )
}

export default Input
