import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import Input from '../components/shared/common/Input'
import ContactBanner from '../components/contact/ContactBanner'
import AllProducts from '../components/all_Products/AllProducts'
const Contact = () => {
  return (
    <div className='px-4 py-2'>
      <div className='flex items-center text-gray-500 py-6 space-x-1'>
      <Link className='text-[15px] hover:text-yellow-400' to="/">Home</Link>
      <ChevronRight size={18} color='gray'/>
      <Link className='text-[15px] hover:text-yellow-300' to="/collections">Contact Us</Link>

    </div>
    <div className="">
      <h1 className='border-b-2 border-yellow-400 text-xl text-gray-700 font-semibold w-44 pb-3'>Leave A Message</h1>
      <hr className='text-gray-300'/>
      <p className='text-gray-600 py-3'>If you have any questions please send us a message using the adjacent form and we will get back to you as soon as possible</p>

    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 ">

    <div className="form flex flex-col space-y-3 mt-5 md:pt-20 md:space-y-6">
      <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4 md:items-center md:justify-center md:w-full">
        
      <Input placeholder="Name" type="text" className="border border-gray-200 py-3 px-3 rounded-full md:w-1/2"/>
      
      <Input placeholder="Email" type="email" className="border border-gray-200 py-3 px-3 rounded-full md:w-1/2"/>
      </div>
      
      <Input placeholder="Phone Number" type="phone" className="border border-gray-200 py-3 px-3 rounded-full"/>
      
      <textarea placeholder='Message' name="" id="" rows={5} className='border border-gray-200 py-3 px-3 rounded-2xl'></textarea>
    </div>
    <ContactBanner/>
    </div>
    <AllProducts/>
    </div>
  )
}

export default Contact
