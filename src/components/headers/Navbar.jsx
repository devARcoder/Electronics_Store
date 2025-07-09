import { useState } from "react";
import {
  HeartIcon,
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "../../assets/svg";
import { Sidebar, TopBar, SearchBar } from "../shared/imports";
import DiskBar from "./DiskBar";
import { XIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext"; // ✅ Import useWishlist

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { wishlist, loading } = useWishlist(); // ✅ Access wishlist from context

  if (loading) return null;
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  

  return (
    <>
      <TopBar />
      <div
        className="flex justify-between items-center 
        bg-yellow-300 px-3 pt-4 pb-4 
        md:px-20 md:pt-8 md:pb-6 
        md:bg-white 
        fixed top-0 w-full z-50 
        md:relative"
      >
        <div className="left flex items-center space-x-4">
          <MenuIcon
            className="text-gray-700 mt-3 cursor-pointer md:hidden"
            onClick={toggleSidebar}
          />
          <Link to="/">
            <h1 className="text-4xl font-bold text-gray-700">electro</h1>
          </Link>
        </div>

        <div className="hidden md:block w-full max-w-xl">
          <SearchBar />
        </div>

        <div className="right flex items-center space-x-3 md:space-x-6">
          {!isSearchOpen ? (
            <SearchIcon className="md:hidden" onClick={toggleSearch} />
          ) : (
            <XIcon
              className="md:hidden w-7 h-7 text-gray-700 cursor-pointer"
              onClick={toggleSearch}
            />
          )}

          <UserIcon className="md:hidden" />

          {/* Wishlist Button */}
          <Link to="/wishlist">
            <div className="hidden md:inline-block md:relative">
              <HeartIcon size={28} />
              {wishlist.length > 0 ? (
                <span className="bg-gray-700 text-white px-1.5 py-0.5 text-sm rounded-full absolute top-7 right-1 translate-x-1/2 -translate-y-1/2 font-semibold md:bg-yellow-300 md:text-black ">
                  {wishlist.length}
                </span>
              ) : (
                <span className="bg-gray-700 text-white px-1.5 py-0.5 text-sm rounded-full absolute top-7 right-1 translate-x-1/2 -translate-y-1/2 font-semibold md:bg-yellow-300 md:text-black ">
                  {wishlist.length}
                </span>
              )}
            </div>
          </Link>

          {/* Shopping Cart Button (Static Count Placeholder) */}
          <div className="relative">
            <ShoppingBagIcon />
            <span className="bg-gray-700 text-white px-1 py-0.5 text-sm rounded-full absolute top-7 right-1 translate-x-1/2 -translate-y-1/2 font-semibold md:bg-yellow-300 md:text-black">
              16
            </span>
          </div>

          <p className="hidden md:inline-block font-bold text-gray-700">
            $0.00
          </p>
        </div>
      </div>

      {/* Mobile Search Input */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white px-4 mt-18 ${
          isSearchOpen ? "max-h-28 py-2" : "max-h-0 py-0"
        }`}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none"
          />
          <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <DiskBar />
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default Navbar;
