import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  featuredItems,
  leftSideData,
  centerData,
  rightSideData,
  sellingData,
} from '../../data/data';

const ProductDetails = () => {
  const { id } = useParams();

  const allProducts = [
    ...featuredItems,
    ...leftSideData,
    ...centerData,
    ...rightSideData,
    ...sellingData,
  ];

  const product = allProducts.find((item) => item.id === id);

  useEffect(() => {
    document.title = product
      ? `${product.title} | AR Electronics`
      : 'Product Not Found | AR Electronics';
  }, [product]);

  if (!product) {
    return (
      <div className="text-center mt-20 text-red-600 font-bold text-2xl">
        Product Not Found
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success(`${product.title} added to cart`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Image Section */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-w-md mx-auto rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
        />
        {product.discount && (
          <div className="absolute top-4 left-4 bg-yellow-400 text-sm font-bold px-3 py-1 rounded-full shadow">
            {product.discount} OFF
          </div>
        )}
        {product.sold && (
          <div className="absolute top-4 right-4 bg-gray-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            Sold Out
          </div>
        )}
      </div>

      {/* Details Section */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-blue-700">{product.title}</h1>
        <p className="text-sm text-gray-500">
          {product.brand || product.type}
        </p>

        <div className="flex items-center space-x-4 text-lg font-semibold">
          <span className="text-red-600">{product.price}</span>
          {product.oldPrice && (
            <span className="line-through text-gray-400">{product.oldPrice}</span>
          )}
        </div>

        <p className="text-gray-600 text-sm">
          This is a sample product description. Add more product details here if needed.
        </p>

        <button
          disabled={product.sold}
          onClick={handleAddToCart}
          className={`px-6 py-3 rounded-lg font-bold text-white transition duration-300 ${
            product.sold
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-yellow-500 hover:bg-yellow-600'
          }`}
        >
          {product.sold ? 'Sold Out' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
