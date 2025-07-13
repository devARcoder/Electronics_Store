import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, HeadsetIcon } from "../../assets/svg";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const [isFindOpen1, setIsFindOpen1] = useState(false);
  const [isFindOpen2, setIsFindOpen2] = useState(false);
  const [isFindOpen3, setIsFindOpen3] = useState(false);
  const [isFindOpen4, setIsFindOpen4] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 bg-gray-100 pt-16 px-4 space-y-3 md:space-y-0 pb-6 md:px-20">
      {/* Info Section */}
      <div className="info space-y-10">
        <h1 className="text-gray-800 text-5xl font-bold">electro</h1>
        <div className="cntct flex items-center space-x-4">
          <HeadsetIcon size={56} className="text-yellow-400" />
          <div className="head">
            <p className="text-gray-600">Got questions? Call us 24/7</p>
            <h1 className="text-gray-800 text-lg">+923070925248</h1>
          </div>
        </div>
        <div className="contactInfo">
          <h1 className=" font-bold text-gray-800">Contact Info</h1>
          <p className="text-sm text-gray-600">
            Hangu to Thall Main Road, Peshawar, Pakistan
          </p>
        </div>
      </div>

      
      <div className="space-y-4 md:flex md:space-x-6 ">
        <div className="find">
          <div
            onClick={() => setIsFindOpen1((prev) => !prev)}
            className="head flex justify-between items-center cursor-pointer md:cursor-default"
          >
            <h1 className="font-bold text-gray-800 text-lg">Find In Fast</h1>
            <div className="md:hidden">
              {!isFindOpen1 ? <ChevronDownIcon /> : <ChevronUpIcon />}
            </div>
          </div>
          <div
            className={`text-gray-600 space-y-3 text-sm mt-5 ${
              isFindOpen1 ? "block" : "hidden"
            } md:block`}
          >
            <h1>Accessories</h1>
            <h1>Gaming</h1>
            <h1>Laptops & Computer</h1>
            <h1>Mac Computers</h1>
            <h1>PC Computers</h1>
            <h1>Ultrabooks</h1>
          </div>
        </div>

        
        <div className="info">
          <div
            onClick={() => setIsFindOpen2((prev) => !prev)}
            className="head flex justify-between items-center cursor-pointer md:cursor-default"
          >
            <h1 className="font-bold text-gray-800 text-lg">Information</h1>
            <div className="md:hidden">
              {!isFindOpen2 ? <ChevronDownIcon /> : <ChevronUpIcon />}
            </div>
          </div>
          <div
            className={`text-gray-600 space-y-3 text-sm mt-5  ${
              isFindOpen2 ? "block" : "hidden"
            } md:block`}
          >
            <h1>
            <Link to="/about">About Us</Link>
            </h1>
            <h1>
              <Link to="/contact">Contact Us</Link>
              </h1>
            <h1>
              <Link to="/collections">All Collections</Link>
              </h1>
            <h1>
              <Link to="/terms">Privacy Policy</Link>
              </h1>
            <h1>
              <Link to="/terms">Terms & Conditions</Link>
              </h1>
          </div>
        </div>

        
        <div className="customer">
          <div
            onClick={() => setIsFindOpen3((prev) => !prev)}
            className="head flex justify-between items-center cursor-pointer md:cursor-default"
          >
            <h1 className="font-bold text-gray-800 text-lg">Customer Care</h1>
            <div className="md:hidden">
              {!isFindOpen3 ? <ChevronDownIcon /> : <ChevronUpIcon />}
            </div>
          </div>
          <div
            className={`text-gray-600 space-y-3 text-sm mt-5 ${
              isFindOpen3 ? "block" : "hidden"
            } md:block`}
          >
            <h1>
              <Link to="/contact">Contact Us</Link>
              </h1>
            <h1><Link to="/wishlist">Wishlist</Link></h1>
            <h1><Link to="/cart">Shopping Cart</Link></h1>
            <h1>Shipping & Return</h1>
            <h1><Link to="/faqs">FAQs</Link></h1>
          </div>
        </div>

        
        <div className="spotLight">
          <div
            onClick={() => setIsFindOpen4((prev) => !prev)}
            className="head flex justify-between items-center cursor-pointer md:cursor-default"
          >
            <h1 className="font-bold text-gray-800 text-lg">
              In The Spotlight
            </h1>
            <div className="md:hidden">
              {!isFindOpen4 ? <ChevronDownIcon /> : <ChevronUpIcon />}
            </div>
          </div>
          <div
            className={`text-gray-600 space-y-3 text-sm mt-5 ${
              isFindOpen4 ? "block" : "hidden"
            } md:block`}
          >
            <h1>Electronics</h1>
            <h1>Toys</h1>
            <h1>Video Games</h1>
            <h1>Home Products</h1>
            <h1>Clothing</h1>
            <h1>Sports & Outdoors</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
