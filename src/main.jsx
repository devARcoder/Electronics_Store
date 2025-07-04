import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import BrowserRouter
import './index.css';
import App from './App.jsx';
import { WishlistProvider } from './context/WishlistContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* ✅ Wrap App with BrowserRouter */}
    <WishlistProvider>

      <App />
    </WishlistProvider>
    </BrowserRouter>
  </StrictMode>
);
