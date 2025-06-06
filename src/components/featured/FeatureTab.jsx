import React, { useState } from 'react';
// commit
const FeatureTab = () => {
  const featureTab = ["Featured", "On Sale", "Top Rated"];
  const [active, setActive] = useState("Featured");

  return (
    <div className="flex justify-between items-center px-12 py-6">
      {featureTab.map((label, i) => (
        <button
          key={i}
          onClick={() => setActive(label)}
          className={`text-xl transition ${
            active === label ? "text-yellow-500 font-bold underline  underline-offset-4" : "text-gray-700"
          }`}
        >
          {label}
        </button>
        
      ))}
      
    </div>
  );
};

export default FeatureTab;
