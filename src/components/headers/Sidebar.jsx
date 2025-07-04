import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CloseIcon,
  ForwardArrowIcon,
  HeartIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "../../assets/svg";
import { useWishlist } from "../../context/WishlistContext";
const Sidebar = ({ isOpen, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };
   const { wishlist } = useWishlist();

  const SidebarNavigation = [
    { Label: "Home", to: "/" },
    { Label: "Collections", to: "/collections" },
    {
      Label: "Catalog",
      dropdown: [
        { label: "Mobiles", to: "/catalog/mobiles" },
        { label: "Ipad", to: "/catalog/ipad" },
        { label: "Laptops", to: "/catalog/laptops" },
        { label: "Electronics", to: "/catalog/electronics" },
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
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center bg-yellow-300 px-4 pt-5 pb-5">
        <button
          className="text-gray-700 font-bold cursor-pointer"
          onClick={onClose}
        >
          <CloseIcon size={32} strokeWidth={3} />
        </button>

        <Link to="/wishlist" onClick={onClose}>
        <div className="relative">
          <HeartIcon
            size={28}
            className="cursor-pointer"
            
          />
          {wishlist.length > 0 && (
            <span className="bg-gray-700 text-white px-1.5 py-0.5 text-sm rounded-full absolute top-7 right-1 translate-x-1/2 -translate-y-1/2 font-semibold md:bg-yellow-300 md:text-black ">
                  {wishlist.length}
                </span>
              )}
        </div>
              </Link>
      </div>

      <div className="flex flex-col">
        {SidebarNavigation.map((item, index) => (
          <div key={index}>
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
