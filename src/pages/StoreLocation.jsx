import React, { useState } from 'react';
import MyMap from '../components/store_location/MyMap';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { MapPinIcon } from '../assets/svg';

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

// ✅ Store addresses with coordinates
const cityStores = {
  Islamabad: [
    { address: "G-11 Markaz, Islamabad, Pakistan", lat: 33.6844, lng: 73.0479 },
    { address: "F-6 Super Market, Islamabad, Pakistan", lat: 33.7206, lng: 73.0652 },
  ],
  Lahore: [
    { address: "Gulberg III, Lahore, Pakistan", lat: 31.5204, lng: 74.3587 },
    { address: "DHA Phase 5, Lahore, Pakistan", lat: 31.4622, lng: 74.4110 },
  ],
  Karachi: [
    { address: "Clifton Block 7, Karachi, Pakistan", lat: 24.8138, lng: 67.0304 },
    { address: "North Nazimabad, Karachi, Pakistan", lat: 24.9386, lng: 67.0423 },
  ],
  Peshawar: [
    { address: "University Road, Peshawar, Pakistan", lat: 34.0151, lng: 71.5805 }
  ],
  Quetta: [
    { address: "Jinnah Road, Quetta, Pakistan", lat: 30.1798, lng: 66.9750 }
  ],
  Delhi: [
    { address: "Connaught Place, New Delhi, India", lat: 28.6315, lng: 77.2167 }
  ],
  Mumbai: [
    { address: "Andheri West, Mumbai, India", lat: 19.1360, lng: 72.8296 }
  ],
  Bangalore: [
    { address: "Koramangala, Bangalore, India", lat: 12.9352, lng: 77.6245 }
  ],
  Hyderabad: [
    { address: "Banjara Hills, Hyderabad, India", lat: 17.4239, lng: 78.4294 }
  ],
  Kolkata: [
    { address: "Salt Lake, Kolkata, India", lat: 22.5769, lng: 88.4332 }
  ],
  "New York": [
    { address: "5th Avenue, Manhattan, New York, USA", lat: 40.7759, lng: -73.9654 }
  ],
  "Los Angeles": [
    { address: "Sunset Boulevard, Los Angeles, USA", lat: 34.0983, lng: -118.3267 }
  ],
  Chicago: [
    { address: "Michigan Avenue, Chicago, USA", lat: 41.8916, lng: -87.6244 }
  ],
  Houston: [
    { address: "Westheimer Rd, Houston, USA", lat: 29.7370, lng: -95.4240 }
  ],
  Miami: [
    { address: "Ocean Drive, Miami Beach, USA", lat: 25.7796, lng: -80.1318 }
  ],
};

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
    </div>
  );
};

export default StoreLocation;
