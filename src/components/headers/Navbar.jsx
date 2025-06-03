import { useState } from 'react';
import {HeartIcon, MenuIcon, SearchIcon, ShoppingBagIcon, UserIcon } from '../../assets/svg';
import { Sidebar, TopBar, SearchBar } from '../shared/imports';
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
    <TopBar/>
      <div className='flex justify-between items-center bg-yellow-300 px-3 md:px-20 pt-4 pb-4 md:pt-8 md:pb-6 relative md:bg-white'>
        <div className="left flex items-center space-x-4">
          <MenuIcon
            className="text-gray-700 mt-3 cursor-pointer md:hidden"
            onClick={toggleSidebar}
          />
          <h1 className='text-4xl font-bold text-gray-700'>electro</h1>
        </div>
        <SearchBar/>
        <div className="right flex items-center space-x-3 md:space-x-6">
          <SearchIcon className='md:hidden' />
          <UserIcon className='md:hidden' />
          <div className="hidden md:inline-block md:relative">
            <HeartIcon size={28} />
            <span className='bg-gray-700 text-white px-1 py-0.5 text-sm rounded-full absolute top-7 right-1 translate-x-1/2 -translate-y-1/2 font-semibold md:bg-yellow-300 md:text-black'>17</span>
            
          </div>
          <div className="relative">
            <ShoppingBagIcon />
            <span className='bg-gray-700 text-white px-1 py-0.5 text-sm rounded-full absolute top-7 right-1 translate-x-1/2 -translate-y-1/2 font-semibold md:bg-yellow-300 md:text-black'>16</span>
            
          </div>
          <p className='hidden md:inline-block font-bold text-gray-700'>$0.00</p>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default Navbar;
