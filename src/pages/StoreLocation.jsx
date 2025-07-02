import React, { useState } from 'react';
import MyMap from '../components/store_location/MyMap';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { MapPinIcon } from '../assets/svg';
import AllProducts from '../components/all_Products/AllProducts';

import { countries, countryCities, cityStores } from '../data/data';

const StoreLocation = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    setLoading(true);
    const value = e.target.value;
    setTimeout(() => {
      setSelectedCity(value);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className='px-4 py-4 md:px-24'>
      {/* Breadcrumb */}
      <div className='flex items-center text-gray-500 py-6 space-x-1'>
        <Link className='text-[15px] hover:text-yellow-400' to="/">Home</Link>
        <ChevronRight size={18} color='gray' />
        <Link className='text-[15px] hover:text-yellow-300' to="">Store Location</Link>
      </div>

      {/* Title */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className='text-3xl text-gray-700'>Store Location</h1>
        <p className='text-gray-500'>Visit us and discover everything</p>
      </div>

      {/* Form + Map */}
      <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-xl text-gray-700 space-y-4 pt-6">
          <h1>Find Store Location</h1>

          {/* Country */}
          <div>
            <p className='text-[17px] mb-3 text-gray-500'>Country</p>
            <select
              value={selectedCountry}
              onChange={handleCountryChange}
              className="block w-full px-3 py-3 text-[15px] border border-gray-300 rounded-full text-gray-500 focus:outline-none"
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* City */}
          {selectedCountry && (
            <div>
              <p className='text-[17px] mb-3 text-gray-500'>City</p>
              <select
                value={selectedCity}
                onChange={handleCityChange}
                className="block w-full px-3 py-3 text-[15px] border border-gray-300 rounded-full text-gray-500 focus:outline-none"
              >
                <option value="">Select City</option>
                {countryCities[selectedCountry]?.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          )}

          <hr className='text-gray-300' />

          {/* Loader */}
          {loading && (
            <div className="flex items-center space-x-2 text-sm text-gray-500 animate-pulse">
              <svg className="h-5 w-5 animate-spin text-yellow-500" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span>Loading store locations...</span>
            </div>
          )}

          {/* Store Addresses */}
          {selectedCity && !loading && cityStores[selectedCity] && (
            <div className="pt-2 space-y-4">
              <h2 className="text-[17px] font-bold text-gray-700">{selectedCity} Branches</h2>
              {cityStores[selectedCity].map((store, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <MapPinIcon className='w-5 h-5 sm:w-6 sm:h-6 text-yellow-500' fill='black' stroke='white' />
                  <p className='text-sm text-gray-600'>{store.address}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Map with markers */}
        <div className="py-6">
          <MyMap storeLocations={cityStores[selectedCity] || []} />
        </div>
      </div>
      <AllProducts/>
    </div>
  );
};

export default StoreLocation;
