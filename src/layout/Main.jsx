import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact'; // (Optional, if you're adding it)
import Collections from '../components/collections/Collections';
// import ItemDetails from '../components/featured/ItemsDetails';
import ScrollToTop from '../components/shared/ScrollToTop';
import StoreLocation from '../pages/StoreLocation';
import FAQs from '../pages/FAQs'
import TermsCondition from '../pages/TermsCondition'
import Features from '../pages/Features';
import ProductDetails from '../components/shared/ProductDetails';
import Wishlist from '../components/shared/Wishlist';
import Cart from '../pages/Cart';

const Main = () => {
  return (
    <main className="min-h-screen">
      <ScrollToTop />
      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        {/* <Route path="/item/:id" element={<ItemDetails />} /> */}
        
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/store-locator" element={<StoreLocation/>} />
        <Route path="/faqs" element={<FAQs/>} />
        <Route path="/terms" element={<TermsCondition/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </main>
  );
};

export default Main;
