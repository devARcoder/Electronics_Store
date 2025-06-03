import React, { useState } from 'react';
import { CloseIcon, ForwardArrowIcon, HeartIcon } from '../assets/svg';

const Sidebar = ({ isOpen, onClose }) => {
  const SidebarNavigation = [
    { Label: "Home" },
    { Label: "Catalog" },
    { Label: "Gift Cards" },
    { Label: "Pages" },
    { Label: "Features" },
  ];

  // State to track favorite toggle
  const [isFavourite, setIsFavourite] = useState(false);

  // Toggle favorite state
  const toggleFavourite = () => {
    setIsFavourite(prev => !prev);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center bg-yellow-300 px-3 pt-5 pb-5">
        <button
          className="text-gray-700 font-bold cursor-pointer"
          onClick={onClose}
        >
          <CloseIcon size={32} strokeWidth={3} />
        </button>

        {/* Heart icon with toggle fill */}
        <HeartIcon
          size={28}
          className="cursor-pointer"
          fill={isFavourite ? "red" : "none"}   // toggle fill color
          stroke={isFavourite ? "red" : "currentColor"} // stroke color for red heart
          onClick={toggleFavourite}
        />
      </div>

      <div className="flex flex-col">
        {SidebarNavigation.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center text-gray-600 px-5 py-3 text-sm">
              <p className="cursor-pointer">{item.Label}</p>
              <ForwardArrowIcon />
            </div>
            <hr className="text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
