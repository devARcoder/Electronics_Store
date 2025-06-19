import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CloseIcon, ForwardArrowIcon, HeartIcon, ChevronDownIcon, ChevronUpIcon } from '../../assets/svg';

const Sidebar = ({ isOpen, onClose }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // For toggling dropdowns

  const toggleFavourite = () => {
    setIsFavourite(prev => !prev);
  };

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const SidebarNavigation = [
    { Label: "Home", to: "/" },
    {
      Label: "Catalog",
      dropdown: [
        { label: "Men", to: "/catalog/men" },
        { label: "Women", to: "/catalog/women" },
        { label: "Kids", to: "/catalog/kids" },
      ],
    },
    { Label: "Gift Cards", to: "/giftcards" },
    { Label: "About", to: "/about" },
    { Label: "Contact", to: "/contact" },
    {
      Label: "More",
      dropdown: [
        { label: "Store Locator", to: "/store-locator" },
        { label: "FAQs", to: "/faqs" },
        { label: "Terms & Conditions", to: "/terms" },
      ],
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center bg-yellow-300 px-4 pt-5 pb-5">
        <button
          className="text-gray-700 font-bold cursor-pointer"
          onClick={onClose}
        >
          <CloseIcon size={32} strokeWidth={3} />
        </button>

        {/* Heart Icon */}
        <div className="relative">
          <HeartIcon
            size={28}
            className="cursor-pointer"
            fill={isFavourite ? "red" : "none"}
            stroke={isFavourite ? "black" : "currentColor"}
            onClick={toggleFavourite}
          />
          <span className="bg-gray-700 text-white px-1 py-0.5 text-sm rounded-full absolute top-7 right-1 translate-x-1/2 -translate-y-1/2 font-semibold md:bg-yellow-300 md:text-black">
            16
          </span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col">
        {SidebarNavigation.map((item, index) => (
          <div key={index}>
            {/* Dropdown item */}
            {item.dropdown ? (
              <>
                <div
                  onClick={() => toggleDropdown(item.Label)}
                  className="flex justify-between items-center text-gray-600 px-5 py-3 text-sm cursor-pointer hover:text-black"
                >
                  <span>{item.Label}</span>
                  {openDropdown === item.Label ? (
                    <ChevronUpIcon size={20} />
                  ) : (
                    <ChevronDownIcon size={20} />
                  )}
                </div>
                {/* Dropdown Menu */}
                {openDropdown === item.Label && (
                  <div className="pl-4 bg-gray-50 mx-4 mb-3">
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.to}
                        onClick={onClose}
                        className="block py-2 text-sm text-gray-600 hover:text-black"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              // Simple link item
              <>
                <Link
                  to={item.to}
                  onClick={onClose}
                  className="flex justify-between items-center text-gray-600 px-5 py-3 text-sm hover:text-black transition-all"
                >
                  <span>{item.Label}</span>
                  <ForwardArrowIcon size={20} />
                </Link>
              </>
            )}
            <hr className="text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
