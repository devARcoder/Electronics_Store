import React, { useState } from 'react';

const SellersTab = ({ className }) => {
  const featureTab = ["Top 20", "Phones & Tablets", "Laptops & Computers", "Video Cameras"];
  const [active, setActive] = useState("Top 20");

  return (
    <div className='flex flex-col justify-normal items-start overflow-x-auto whitespace-nowrap no-scrollbar'>
    <div className="heading border-b-2 border-yellow-400 w-24">
            <h1 className='text-xl text-gray-700 pt-8 pb-5'>Bestsellers</h1>
        </div>
        
    <div className={`overflow-x-auto whitespace-nowrap no-scrollbar ${className}`}>
        
        
      {featureTab.map((label, i) => (
        <button
          key={i}
          onClick={() => setActive(label)}
          className={`inline-block px-3 py-0.5 text-[16px] transition whitespace-nowrap ${
            active === label ? "text-gray-700 font-semibold border-2 border-yellow-400 rounded-full" : "text-gray-700 hover:border-2 hover:border-yellow-400 hover:rounded-full"
          }`}
        >
          {label}
        </button>
      ))}
      
    </div>
    </div>
    
  );
};

export default SellersTab;
