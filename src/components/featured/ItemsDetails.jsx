import React from 'react';
import { useParams } from 'react-router-dom';
import { featuredItems } from '../../data/data';

const ItemDetails = () => {
  const { id } = useParams();
  const item = featuredItems.find((item) => item.id === id);

  if (!item) return <h2 className="text-center py-20">Item not found!</h2>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={item.image} alt={item.title} className="w-52 object-cover rounded-xl" />
      <h1 className="text-2xl font-bold text-blue-600 mt-4">{item.title}</h1>
      <p className="text-gray-500 mt-2">{item.type}</p>
      <div className="flex gap-4 items-center mt-3">
        <p className="text-red-500 text-xl">{item.price}</p>
        {item.oldPrice && <p className="line-through text-gray-400">{item.oldPrice}</p>}
      </div>
      {item.discount && (
        <p className="bg-yellow-300 inline-block px-3 py-1 mt-4 rounded-full text-sm font-semibold">
          {item.discount}
        </p>
      )}
      {item.sold && <p className="text-red-500 mt-3 font-bold">This item is sold out</p>}
    </div>
  );
};

export default ItemDetails;
