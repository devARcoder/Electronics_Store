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
import { giftCardItems } from "../../data/data";

const Sidebar = ({ isOpen, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const { wishlist } = useWishlist();

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const SidebarNavigation = [
    { Label: "Home", to: "/" },
    { Label: "Collections", to: "/collections" },
    
    {
      Label: "Gift Cards",
      dropdown: "giftcards",
    },
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
      } flex flex-col`}
    >
      {/* Header */}
      <div className="flex justify-between items-center bg-yellow-300 px-4 pt-5 pb-5">
        <button onClick={onClose}>
          <CloseIcon size={32} strokeWidth={3} />
        </button>
        <Link onClick={onClose} to="/"><h1 className="text-gray-700 font-bold text-2xl">AR elctro store</h1></Link>

        <Link to="/wishlist" onClick={onClose}>
          <div className="relative">
            <HeartIcon size={28} className="cursor-pointer" />
            {wishlist.length > 0 ? (
              <span className="bg-gray-700 text-white px-1.5 py-0.5 text-sm rounded-full absolute top-7 right-1 translate-x-1/2 -translate-y-1/2 font-semibold md:bg-yellow-300 md:text-black">
                {wishlist.length}
              </span>
            ) : (
              <span className="bg-gray-700 text-white px-1.5 py-0.5 text-sm rounded-full absolute top-7 right-1 translate-x-1/2 -translate-y-1/2 font-semibold md:bg-yellow-300 md:text-black">0</span>
            )}
          </div>
        </Link>
      </div>

      {/* Scrollable navigation */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col pb-6">
          {SidebarNavigation.map((item, index) => (
            <div key={index}>
              {Array.isArray(item.dropdown) ? (
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
              ) : item.dropdown === "giftcards" ? (
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
                    <div className="bg-gray-50 px-4 pb-4 flex flex-col gap-3">
                      {giftCardItems.slice(0, 4).map((card, i) => (
                        <Link
                          key={i}
                          to="/giftcards"
                          onClick={onClose}
                          className="flex items-center gap-3 bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-all"
                        >
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                          />
                          <div className="flex flex-col justify-between text-sm">
                            <span className="font-semibold text-gray-800">
                              {card.title}
                            </span>
                            <div className="text-gray-600 text-xs">
                              <span className="text-red-500 font-bold">
                                {card.price}
                              </span>
                              {card.oldPrice && (
                                <span className="line-through ml-1 text-gray-400">
                                  {card.oldPrice}
                                </span>
                              )}
                              {card.discount && (
                                <span className="ml-2 text-yellow-500 font-semibold">
                                  {card.discount}
                                </span>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.to}
                  onClick={onClose}
                  className="flex justify-between items-center text-gray-600 px-5 py-3 text-sm hover:text-black transition-all"
                >
                  <span>{item.Label}</span>
                  <ForwardArrowIcon size={20} />
                </Link>
              )}
              <hr className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
