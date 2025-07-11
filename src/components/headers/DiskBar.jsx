import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { giftCardItems } from "../../data/data";
import { ChevronDown, ChevronUp } from "lucide-react";

const DiskBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [clickedDropdown, setClickedDropdown] = useState(null);
  const hoverTimeout = useRef(null);

  const navigation = [
    { label: "Home", to: "/" },
    { label: "Collections", to: "/collections" },
    { label: "Gift Cards", dropdown: "giftcards" },
    { label: "Features", to: "/features" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
    { label: "More", dropdown: "more" },
  ];

  const handleClick = (dropdown) => {
    setClickedDropdown((prev) => (prev === dropdown ? null : dropdown));
    setOpenDropdown(dropdown);
  };

  const handleMouseEnter = (dropdown) => {
    clearTimeout(hoverTimeout.current);
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = (dropdown) => {
    hoverTimeout.current = setTimeout(() => {
      if (clickedDropdown !== dropdown) {
        setOpenDropdown(null);
      }
    }, 150);
  };

  return (
    <div className="relative hidden md:flex justify-center gap-6 bg-white py-4 shadow">
      {navigation.map((item, index) => {
        const isDropdown = !!item.dropdown;
        const isOpen = openDropdown === item.dropdown;

        return (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => isDropdown && handleMouseEnter(item.dropdown)}
            onMouseLeave={() => isDropdown && handleMouseLeave(item.dropdown)}
          >
            {item.to ? (
              <Link
                to={item.to}
                className="text-gray-700 px-4 py-2 text-sm hover:text-black flex items-center gap-1"
              >
                {item.label}
              </Link>
            ) : (
              <button
                type="button"
                className="text-gray-700 px-4 py-2 text-sm hover:text-black flex items-center gap-1"
                onClick={() => handleClick(item.dropdown)}
              >
                {item.label}
                {isOpen ? (
                  <ChevronUp size={16} className="mt-0.5" />
                ) : (
                  <ChevronDown size={16} className="mt-0.5" />
                )}
              </button>
            )}

            {/* Gift Cards Dropdown */}
            {isOpen && item.dropdown === "giftcards" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[940px] bg-white border border-gray-200 rounded-md shadow-2xl z-20 p-6 flex gap-6">
                {giftCardItems.map((card, idx) => (
                  <div
                    key={idx}
                    className="w-1/4 text-center relative p-4 bg-white hover:shadow-lg transition-all"
                  >
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      {card.title}
                    </h4>
                    <div className="relative">
                      {card.discount && (
                        <span className="absolute top-0 left-0 bg-yellow-400 text-[12px] font-bold text-white px-0.5 py-0.5 rounded-full">
                          {card.discount}
                        </span>
                      )}
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-[200px] object-cover rounded-lg"
                      />
                    </div>
                    <div className="mt-3 text-sm text-gray-800">
                      <span className="text-red-500 font-bold">{card.price}</span>
                      {card.oldPrice && (
                        <span className="line-through text-gray-400 ml-1">
                          {card.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* More Dropdown */}
            {isOpen && item.dropdown === "more" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-white border border-gray-200 rounded-md shadow-2xl z-20 p-4">
                <ul className="flex flex-col gap-2 text-sm text-gray-700">
                  <li>
                    <Link
                      to="/store-locator"
                      className="hover:bg-gray-100 px-3 py-2 rounded block"
                    >
                      Store Locator
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faqs"
                      className="hover:bg-gray-100 px-3 py-2 rounded block"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms"
                      className="hover:bg-gray-100 px-3 py-2 rounded block"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DiskBar;
