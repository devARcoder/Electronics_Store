import React, { useState } from 'react';
import Heading from '../shared/common/Heading';

const SellersTab = ({ className }) => {
  const featureTab = ["Top 20", "Phones & Tablets", "Laptops & Computers", "Video Cameras"];
  const [active, setActive] = useState("Top 20");

  return (
    <>
    <Heading className="mt-6 pb-4 md:hidden" name="Featured Products" />
    <div className='border-b-3 border-yellow-400 w-24 h-1 md:hidden'></div>
      <hr className='mb-0 text-gray-400 md:hidden'/>
    <div className=' overflow-x-auto whitespace-nowrap no-scrollbar'>
    
        
    <div className={`overflow-x-auto whitespace-nowrap no-scrollbar ${className}`}>
        <Heading className="hidden md:inline-block" name="Featured Products"/>
        
      {featureTab.map((label, i) => (
        <button
          key={i}
          onClick={() => setActive(label)}
          className={`inline-block px-3 py-0.5 text-[16px]  transition whitespace-nowrap ${
            active === label ? "text-gray-700 font-semibold border-2 border-yellow-400 rounded-full" : "text-gray-700 hover:border-2 hover:border-yellow-400 hover:rounded-full"
          }`}
        >
          {label}
        </button>
      ))}
      
    </div>
    </div>
    </>
  );
};

export default SellersTab;
