import React from 'react'
import { HeadsetIcon } from '../../assets/svg'

const FooterSection = () => {
  return (
    <div className='grid grid-cols-1 gap-3  md:grid-cols-5 bg-gray-100 pt-16 px-4'>
      <div className="info space-y-7">
        <h1 className='text-gray-800 text-5xl font-bold'>electro</h1>
        <div className="cntct flex items-center space-x-2">
            <HeadsetIcon size={56} className='text-yellow-400'/>
            <div className="head">
                <p>Got questions? Call us 24/7</p>
                <h1>+923070925248</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSection
