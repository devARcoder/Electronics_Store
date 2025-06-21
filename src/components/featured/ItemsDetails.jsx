import React, {useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import { featuredItems } from '../../data/data';
import { ChevronRight, FacebookIcon, Star, StarHalf, TwitterIcon } from 'lucide-react'
const ItemDetails = () => {
    const [userRating, setUserRating] = useState(3)
  const { id } = useParams();
  const item = featuredItems.find((item) => item.id === id);

  if (!item) return <h2 className="text-center py-20">Item not found!</h2>;

 
  return (
    <>
    <div className='px-4'>
    <div className='flex items-center text-gray-500 py-6 space-x-1'>
      <Link className='text-[15px] hover:text-yellow-400' to="/">Home</Link>
      <ChevronRight size={18} color='gray'/>
      <Link className='text-[15px] hover:text-yellow-400' to="/collections">All Collections</Link>
      <ChevronRight size={18} color='gray'/>
      <Link className='text-[15px] hover:text-yellow-400' to="/collections">Laptops & Mobiles</Link>

    </div>
    <div className="flex">
      <div className="relative">
        {item.discount && (
          <p className="absolute bg-yellow-300 inline-block px-1 py-1 rounded-full text-[12px]">
          {item.discount}
        </p>
      )}
        <img src={item.image} alt={item.title} className="w-52 object-cover rounded-xl ml-3" />
      </div>
      <div className="flex flex-col space-y-3">
        <p className="text-gray-500 mt-2">{item.type}</p>
        <h1 className="text-2xl font-bold text-blue-600">{item.title}</h1>
       
            
            <div className="flex space-x-1 items-center">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= userRating;
        return (
          <Star
            key={star}
            onClick={() => setUserRating(star)} // optional: click to rate
            color={isFilled ? "yellow" : "gray"}
            fill={isFilled ? "yellow" : "none"}
            className="w-4 h-4 cursor-pointer transition-all"
          />
        );
      })}
      <p className='text-sm text-gray-500'>7 reviews</p>
    </div>

    <div className="socialIcons flex space-x-2">
        <p className='flex bg-blue-900 text-white items-center w-fit px-1 py-1'><FacebookIcon className='w-5 h-5' fill='white' color='none'/> Share</p>
        <p className='flex bg-blue-600 text-white items-center w-fit px-1 py-1'><TwitterIcon className='w-5 h-5' fill='white' color='none'/> Tweet</p>
    </div>
    <h1>Product SKU:
4827521</h1>
<hr/>
      <div className="flex gap-4 items-center mt-3">
        <p className="text-red-500 text-xl">{item.price}</p>
        {item.oldPrice && <p className="line-through text-gray-400">{item.oldPrice}</p>}
      </div>
      
      {item.sold && <p className="text-red-500 mt-3 font-bold">This item is sold out</p>}
      </div>
    </div>
      </div>
      </>
  );
};

export default ItemDetails;
