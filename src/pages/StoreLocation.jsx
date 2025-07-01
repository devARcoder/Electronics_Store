import React, {useState} from 'react'
import MyMap from '../components/store_location/MyMap'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'


const countries = [
  { code: "PK", name: "Pakistan" },
  { code: "IN", name: "India" },
  { code: "US", name: "United States" },
  { code: "UK", name: "United Kingdom" },
  { code: "AU", name: "Australia" },
];

const StoreLocation = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  return (
    <div className='px-4 py-4 '>
      <div className='flex items-center text-gray-500 py-6 space-x-1'>
            <Link className='text-[15px] hover:text-yellow-400' to="/">Home</Link>
            <ChevronRight size={18} color='gray'/>
            <Link className='text-[15px] hover:text-yellow-300' to="">Store Location</Link>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <h1 className='text-3xl text-gray-700'>Store location</h1>
            <p className='text-gray-500'>Visit us and discover everything</p>
          </div>
          <div className="pt-6">
            <div className="text">
              <h1>Find Store Location</h1>
      <label className="block font-medium text-gray-700 mb-2">
        Country
      </label>
      <select
        value={selectedCountry}
        onChange={handleChange}
        className="block w-full p-2 border border-gray-300 rounded-full text-gray-700 focus:outline-none "
      >
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      
    </div>
          </div>
      <MyMap/>
    </div>
  )
}

export default StoreLocation
