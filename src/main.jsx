import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import BrowserRouter
import './index.css';
import App from './App.jsx';
import { WishlistProvider } from './context/WishlistContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
    <CartProvider>
    <WishlistProvider>
      <App />
    </WishlistProvider>
    </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
