// src/components/SearchBarWrapper.jsx

import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar'; 

const SearchBarWrapper = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > 100 && currentScrollPos > prevScrollPos) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`w-full transition-all duration-300 z-50 ${
        isSticky ? 'fixed top-0 left-0 bg-white shadow-md py-2' : 'relative'
      }`}
    >
      <SearchBar />
    </div>
  );
};

export default SearchBarWrapper;
