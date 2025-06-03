import React from 'react';
import { CallIcon, GlobeIcon, MailIcon, MapPinIcon, UserIcon } from '../assets/svg';

const TopBar = () => {
  return (
    <div className="hidden md:flex justify-between items-center py-3 px-20 border-b border-gray-500">
      {/* Left Side */}
      <div className="flex items-center space-x-2 text-sm">
        <CallIcon size={16} className="text-yellow-500" />
        <p className="border-r border-black pr-3">+923070925248</p>
        <MailIcon size={16} className="text-yellow-500" />
        <p>devarcoder@gmail.com</p>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-2 text-sm">
        <MapPinIcon size={16} />
        <p className="border-r border-black pr-3">Thall Main Road</p>
        <UserIcon size={16} />
        <p className="border-r border-black pr-3">Sign in or Register</p>
        <GlobeIcon size={16} />
      </div>
    </div>
  );
};

export default TopBar;
