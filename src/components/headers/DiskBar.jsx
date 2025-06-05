import React, { useState } from 'react';

const DiskBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigation = [
    { label: 'Home', dropdown: null },
    { label: 'Catalog', dropdown: null },
    { label: 'Gift Cards', dropdown: 'giftcards' },
    { label: 'Pages', dropdown: null },
    { label: 'Features', dropdown: null },
  ];

  const giftCardItems = [
    {
      title: 'Daltex Product Example',
      price: '$200.00',
      oldPrice: '$250.00',
      discount: '20%',
      image: '/images/giftCard1.webp',
    },
    {
      title: 'Donkix Product Sample',
      price: '$60.00',
      oldPrice: '$80.00',
      discount: '25%',
      image: '/images/giftCard2.webp',
    },
    {
      title: 'Faxtex Product Sample',
      price: '$110.00',
      oldPrice: '$199.00',
      discount: '45%',
      image: '/images/giftCard3.webp',
    },
    {
      title: 'Fixair Product Sample',
      price: '$210.00',
      image: '/images/giftCard4.webp',
    },
  ];

  return (
    <div className="relative hidden md:flex justify-center gap-6 bg-white py-4 shadow">
      {navigation.map((item, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => item.dropdown && setOpenDropdown(item.dropdown)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button className="text-gray-700 px-4 py-2 text-sm hover:text-black">
            {item.label}
          </button>

          {/* Gift Cards Dropdown */}
          {openDropdown === 'giftcards' && item.dropdown === 'giftcards' && (
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
                    <span className="text-red-500 font-bold">{card.price}</span>{' '}
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
        </div>
      ))}
    </div>
  );
};

export default DiskBar;
