import React, { useState } from 'react';
import MyMap from '../components/store_location/MyMap';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const countries = [
  { code: "PK", name: "Pakistan" },
  { code: "IN", name: "India" },
  { code: "US", name: "United States" },
];

const countryCities = {
  Pakistan: ["Islamabad", "Lahore", "Karachi", "Peshawar", "Quetta"],
  India: ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Kolkata"],
  "United States": ["New York", "Los Angeles", "Chicago", "Houston", "Miami"],
};

const StoreLocation = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className='px-4 py-4'>
      <div className='flex items-center text-gray-500 py-6 space-x-1'>
        <Link className='text-[15px] hover:text-yellow-400' to="/">Home</Link>
        <ChevronRight size={18} color='gray' />
        <Link className='text-[15px] hover:text-yellow-300' to="">Store Location</Link>
      </div>

      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className='text-3xl text-gray-700'>Store location</h1>
        <p className='text-gray-500'>Visit us and discover everything</p>
      </div>

      <div className="pt-6">
        <div className="text-xl text-gray-700 space-y-4">
          <h1>Find Store Location</h1>

          
          <div>
            <p className='text-[17px]'>Country</p>
            <select
              value={selectedCountry}
              onChange={handleCountryChange}
              className="block w-full px-3 py-3 text-[15px] border border-gray-300 rounded-full text-gray-700 focus:outline-none"
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          {selectedCountry && (
            <div>
              <p className='text-[17px]'>City</p>
              <select
                value={selectedCity}
                onChange={handleCityChange}
                className="block w-full px-3 py-3 text-[15px] border border-gray-300 rounded-full text-gray-700 focus:outline-none"
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
        </div>
      </div>
      <MyMap />
    </div>
  );
};

export default StoreLocation;
