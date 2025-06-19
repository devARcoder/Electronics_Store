import React, { useState } from "react";
import { Link } from "react-router-dom";
import { giftCardItems } from "../../data/data";
import { ChevronDown, ChevronUp } from "lucide-react";

const catalogItems = [
  { label: "Mobiles", to: "/catalog/mobiles" },
  { label: "Ipad", to: "/catalog/ipad" },
  { label: "Laptops", to: "/catalog/laptops" },
  { label: "Electronics", to: "/catalog/electronics" },
];

const DiskBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const navigation = [
    { label: "Home", to: "/" },
    { label: "Catalog", dropdown: "catalog" },
    { label: "Gift Cards", dropdown: "giftcards" },
    { label: "Features", to: "/features" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
    { label: "More", dropdown: "more" },
  ];

  return (
    <div className="relative hidden md:flex justify-center gap-6 bg-white py-4 shadow">
      {navigation.map((item, index) => {
        const isDropdown = item.dropdown !== undefined;
        const isOpen = openDropdown === item.dropdown;

        return (
          <div key={index} className="relative">
            {item.to ? (
              <Link
                to={item.to}
                className="text-gray-700 px-4 py-2 text-sm hover:text-black flex items-center gap-1"
              >
                {item.label}
              </Link>
            ) : (
              <button
                className="text-gray-700 px-4 py-2 text-sm hover:text-black flex items-center gap-1"
                onClick={() => toggleDropdown(item.dropdown)}
              >
                {item.label}
                {isDropdown &&
                  (isOpen ? (
                    <ChevronUp size={16} className="mt-0.5" />
                  ) : (
                    <ChevronDown size={16} className="mt-0.5" />
                  ))}
              </button>
            )}

            {isOpen && item.dropdown === "catalog" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-white border border-gray-200 rounded-md shadow-2xl z-20 p-4">
                <ul className="flex flex-col gap-2 text-sm text-gray-700">
                  {catalogItems.map((catalog, i) => (
                    <li key={i}>
                      <Link
                        to={catalog.to}
                        className="hover:bg-gray-100 px-3 py-2 rounded block"
                      >
                        {catalog.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

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
                      <span className="text-red-500 font-bold">
                        {card.price}
                      </span>
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

            {isOpen && item.dropdown === "more" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-white border border-gray-200 rounded-md shadow-2xl z-20 p-4">
                <ul className="flex flex-col gap-2 text-sm text-gray-700">
                  <li className="hover:bg-gray-100 px-3 py-2 rounded cursor-pointer">
                    Store Locator
                  </li>
                  <li className="hover:bg-gray-100 px-3 py-2 rounded cursor-pointer">
                    FAQs
                  </li>
                  <li className="hover:bg-gray-100 px-3 py-2 rounded cursor-pointer">
                    Terms & Conditions
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
