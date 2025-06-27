import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import Input from '../components/shared/common/Input'
const Contact = () => {
  return (
    <div className='px-4 py-2'>
      <div className='flex items-center text-gray-500 py-6 space-x-1'>
      <Link className='text-[15px] hover:text-yellow-400' to="/">Home</Link>
      <ChevronRight size={18} color='gray'/>
      <Link className='text-[15px] hover:text-yellow-300' to="/collections">All Collections</Link>

    </div>
    <div className="">
      <h1 className='border-b-2 border-yellow-400 text-xl text-gray-700 font-semibold w-44 pb-3'>Leave A Message</h1>
      <hr className='text-gray-300'/>
      <p className='text-gray-600 py-3'>If you have any questions please send us a message using the adjacent form and we will get back to you as soon as possible</p>
    </div>
    <div className="form flex flex-col space-y-2 mt-5">
      <label htmlFor="Name" className='font-bold text-gray-700 pt-3'>Name</label>
      <Input type="text" className="border border-gray-200 py-3 px-3 rounded-full"/>
      <label htmlFor="Name" className='font-bold text-gray-700 pt-3'>Email</label>
      <Input type="email" className="border border-gray-200 py-3 px-3 rounded-full"/>
      <label htmlFor="Name" className='font-bold text-gray-700 pt-3'>Phone Number</label>
      <Input type="phone" className="border border-gray-200 py-3 px-3 rounded-full"/>
      <label htmlFor="Name" className='font-bold text-gray-700 pt-3'>Message</label>
      <textarea name="" id="" rows={7} className='border border-gray-200 py-3 px-3 rounded-2xl'></textarea>
    </div>
    </div>
  )
}

export default Contact
