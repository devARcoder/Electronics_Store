import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact'; // (Optional, if you're adding it)
import Collections from '../components/collections/Collections';
import ItemDetails from '../components/featured/ItemsDetails';
import ScrollToTop from '../components/ScrollToTop';
const Main = () => {
  return (
    <main className="min-h-screen">
      <ScrollToTop />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default Main;
