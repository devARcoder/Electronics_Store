import React from 'react'
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Input from '../components/shared/common/Input';
import { Button } from '../components/shared/imports';
const Login = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className='flex items-center text-gray-500 py-6 space-x-1'>
        <Link className='text-[15px] hover:text-yellow-400' to="/">Home</Link>
        <ChevronRight size={18} color='gray' />
        <Link className='text-[15px] hover:text-yellow-300' to="/accounts">Accounts</Link>
      </div>
      

        
      <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="form space-y-3">
        <div>
        <h1 className='border-b-2 border-yellow-400 text-xl text-gray-700 font-semibold w-24 pb-3'>Login</h1>
        <hr className='text-gray-300 ' />
        <p className='text-gray-600 text-sm pt-3'>Welcome back! Sign in to your account</p>
      </div>
        <div className="flex flex-col space-y-2 mt-2">
            <label className='font-bold text-gray-600 text-[15px]' htmlFor="">Email Address*</label>
            <Input type="email" className="py-3 px-3 border border-gray-300 rounded-full focus:outline-none"/>
        </div>
        <div className="flex flex-col space-y-2 mt-3">
            <label className='font-bold text-gray-600 text-[15px]' htmlFor="">Password*</label>
            <Input type="password" className="py-3 px-3 border border-gray-300 rounded-full focus:outline-none"/>
        </div>
        <div className="flex justify-between items-center">
            <Link to="/" className='text-gray-600 hover:text-yellow-400 transform transition-all duration-300'>Return to Store</Link>
            <Link to="/forgot" className='text-gray-600 hover:text-yellow-400 transform transition-all duration-300'>Forgotten Password?</Link>
        </div>
        <Button name="Login" className="bg-yellow-300 text-gray-700 font-semibold rounded-full w-full px-10 py-3 mt-1 cursor-pointer" />
      </div>

      <div className="side2 border-t border-gray-400 md:border-none mt-12">
        <div className='py-5'>
        <h1 className='border-b-2 border-yellow-400 text-2xl text-gray-700 font-semibold w-58 pb-3'>Create New Account</h1>
        <hr className='text-gray-300 ' />
        <p className='text-gray-500 text-md pt-3'>Create your own Account</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Login
