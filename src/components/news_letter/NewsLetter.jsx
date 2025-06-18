import React from 'react'
import { NavigationIcon } from '../../assets/svg'
import Input from '../shared/common/Input'
import { Button } from '../shared/imports'

const NewsLetter = () => {
  return (
    <div className='bg-yellow-400 flex flex-col justify-normal md:flex-row md:justify-between md:items-center px-8 py-4 space-y-4 md:space-y-0 md:px-24 mt-6'>
       <div className="headings flex items-center space-x-2 md:mt-2">
        <NavigationIcon className='text-gray-800' size={32}/>
        <h1 className='text-xl text-gray-800'>Sign up to Newsletter</h1>
       </div>
       <div className="hidden md:inline-block md:pt-2">
        <p className='text-gray-800'>...and receive <span className='font-bold'>$20 coupon for first shopping</span> </p>
       </div>
       <div className="space-y-4 md:space-y-0 md:flex">

       <Input placeholder='Enter your email' className='bg-white text-gray-700 w-full rounded-full md:rounded-r-lg border-none focus:outline-none focus:border-none placeholder-gray-400 px-2 py-2 md:w-96'/>
       <Button name="Subcribe" className="bg-gray-800 text-white rounded-full md:rounded-l-lg py-2 w-full md:w-24 cursor-pointer"/>
       </div>
    </div>
  )
}

export default NewsLetter
