import React, { useState } from 'react';

const SellersTab = ({ className }) => {
  const featureTab = ["Top 20", "Phones & Tablets", "Laptops & Computers", "Video Cameras"];
  const [active, setActive] = useState("Top 20");

  return (
    <div className={`overflow-x-auto whitespace-nowrap no-scrollbar ${className}`}>
        <div className="heading">
            <h1>Bestsellers</h1>
        </div>
      {featureTab.map((label, i) => (
        <button
          key={i}
          onClick={() => setActive(label)}
          className={`inline-block px-2 py-1 text-md transition whitespace-nowrap ${
            active === label ? "text-gray-500 font-semibold border-2 border-yellow-400 rounded-full" : "text-gray-500 hover:border-2 hover:border-yellow-400 hover:rounded-full"
          }`}
        >
          {label}
        </button>
      ))}
      
    </div>
    
  );
};

export default SellersTab;
