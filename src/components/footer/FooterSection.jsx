import React from 'react'
import { HeadsetIcon } from '../../assets/svg'
import { Facebook, FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'

const FooterSection = () => {
  return (
    <div className='grid grid-cols-1 gap-3  md:grid-cols-5 bg-gray-100 pt-16 px-4 space-y-4 pb-6'>
      <div className="info space-y-7">
        <h1 className='text-gray-800 text-5xl font-bold'>electro</h1>
        <div className="cntct flex items-center space-x-4">
            <HeadsetIcon size={56} className='text-yellow-400'/>
            <div className="head">
                <p className='text-gray-600'>Got questions? Call us 24/7</p>
                <h1 className='text-gray-800 text-lg'>+923070925248</h1>
            </div>
        </div>
        <div className="contactInfo">
        <h1 className=' font-bold text-gray-800'>Contact Info</h1>
        <p className='text-sm text-gray-600'>Hangu to Thall Main Road, Peshawar, Pakistan</p>
      </div>

      <div className="socialIcons flex space-x-4">
        <FacebookIcon className='hover:text-blue-700'/>
        <GithubIcon/>
        <LinkedinIcon/>
        <TwitterIcon/>
        <InstagramIcon/>
      </div>
      </div>

      
    </div>
  )
}

export default FooterSection
