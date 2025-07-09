import React from 'react'

const Demo = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className='text-2xl'>My Wishlist</h1>
        <div className="flex space-x-3 justify-center items-center py-3">
            <p className='border p-2 rounded-full text-sm'>Facebook</p>
            <p className='border p-2 rounded-full text-sm'>Linkedin</p>
            <p className='border p-2 rounded-full text-sm'>Mailbox</p>
            <p className='border p-2 rounded-full text-sm'>Website</p>
        </div>
      </div>

      {/* <div className="">
        <div className="header flex justify-between items-center px-4 py-3 text-md">
            <h1>Product Name</h1>
            <h1>Stock Status</h1>
            <h1 className=''>Unit price</h1>
        </div>
        <div className="flex justify-between items-center px-4">
            <div className=" border flex flex-col items-center justify-center">
            <img  className='w-full h-20' src="/images/appleTablet.webp" alt="error" />
            <h1 className='w-29 truncate'>Apple Tablets cyber trick</h1>
            </div>
            <div className="flex flex-col items-start justify-center">
                <h1>In stock</h1>
            </div>
            <div className="flex flex-col items-start justify-center">
                <h1>$1279.00</h1>
            </div>
        </div>
        <div className="">

        </div>
        <div className="flex justify-between items-center px-4">
            <div className="w-24 h-28 border flex flex-col items-start">
            <img  className='' src="/images/headphone.png" alt="error" />
            </div>
            <div className="flex flex-col items-start">
                <h1>In stock</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1>$128.98</h1>
            </div>
        </div>
      </div> */}

      <div className="flex justify-between items-center px-3">
        <div className="border-r pr-10">
            <h1>Product</h1>
            <div className="">
                <img className='w-20 h-20' src="/images/appleTablet.webp" alt="" />
            </div>
        </div>


        <div className="border-r pr-4 py-7">
            <h1>Stock Status</h1>
            <div className="">
                in stock
            </div>
        </div>

        <div className=" pr-10">
            <h1>Details</h1>
            <div className="">
                <h1>name</h1>
                <button className='border rounded-md bg-yellow-400 px-3 text-sm text-white font-bold py-1'>Cart</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Demo
