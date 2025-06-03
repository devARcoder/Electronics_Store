import React, { useState } from 'react';
import { MenuIcon, SearchIcon, ShoppingBagIcon, UserIcon } from '../assets/svg';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <div className='flex justify-between items-center bg-yellow-300 px-3 pt-4 pb-4 relative'>
        <div className="left flex items-center space-x-4">
          <MenuIcon
            className="text-gray-700 mt-3 cursor-pointer"
            onClick={toggleSidebar}
          />
          <h1 className='text-4xl font-bold text-gray-700'>electro</h1>
        </div>
        <div className="right flex items-center space-x-3">
          <SearchIcon />
          <UserIcon />
          <div className="relative">
            <ShoppingBagIcon />
            <span className='bg-gray-700 text-white px-1 py-0.5 text-sm rounded-full absolute top-7 right-1 translate-x-1/2 -translate-y-1/2 font-semibold'>10</span>
          </div>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default Navbar;
