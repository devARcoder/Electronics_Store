import React from 'react';
import { CallIcon, GlobeIcon, MailIcon, MapPinIcon, UserIcon } from '../../assets/svg';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="hidden md:flex justify-between items-center py-3 px-20 border-b border-gray-500">
      {/* Left Side */}
      <div className="flex items-center space-x-2 text-sm">
        <CallIcon size={16} className="text-yellow-500 cursor-pointer" />
        <p className="border-r border-black pr-3 cursor-pointer">+923070925248</p>
        <MailIcon size={16} className="text-yellow-500 cursor-pointer" />
        <p className='cursor-pointer'>devarcoder@gmail.com</p>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-2 text-sm">
        <MapPinIcon size={16} className='cursor-pointer' />
        <p className="border-r border-black pr-3 cursor-pointer">Thall Main Road</p>
        <UserIcon size={16} className='cursor-pointer' />
        <p className="border-r border-black pr-3">
          <Link to="/signin">
          <span className='cursor-pointer font-bold text-yellow-400'>Login</span></Link> or <Link><span className='cursor-pointer font-bold text-yellow-400'>Register</span>
          </Link></p>
        <GlobeIcon size={16} className='cursor-pointer' />
      </div>
    </div>
  );
};

export default TopBar;
