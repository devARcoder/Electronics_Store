import React, { useState } from 'react';

const DealsTab = ({ className }) => {
  const featureTab = ["Best Deals", "TV & Video", "Camera", "Audio", "Cell Phones", "GPS & Navi"];
  const [active, setActive] = useState("Best Deals");

  return (
    <div className={`overflow-x-auto whitespace-nowrap no-scrollbar ${className}`}>
      {featureTab.map((label, i) => (
        <button
          key={i}
          onClick={() => setActive(label)}
          className={`inline-block px-2 py-1 text-md mx-2 transition whitespace-nowrap ${
            active === label ? "text-black font-semibold border-2 border-yellow-400 rounded-full" : "text-black hover:border-2 hover:border-yellow-400 hover:rounded-full font-semibold"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default DealsTab;
