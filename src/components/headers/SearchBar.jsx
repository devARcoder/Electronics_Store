import React from 'react';
import { SearchIcon } from '../../assets/svg';

const SearchBar = () => {
  return (
    <div className="hidden md:flex items-center bg-yellow-300 text-black py-0.5 px-0.5 rounded-full w-full max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow px-4 py-2 rounded-l-full outline-none bg-white text-black"
      />
      <button className=" text-black py-2 px-4 rounded-r-full hover:bg-gray-700 hover:text-white transform transition-all cursor-pointer">
        <SearchIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SearchBar;
