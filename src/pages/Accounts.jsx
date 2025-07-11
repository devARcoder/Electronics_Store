import React from 'react'
import Login from './Login'
import AllProducts from '../components/all_Products/AllProducts'

const Accounts = () => {
  return (
    <>
    <div className='px-4 py-4 md:px-24'>
        <Login/>
    </div>
    <AllProducts/>
    </>
  )
}

export default Accounts
