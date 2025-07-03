import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  featuredItems,
  sellingData,
  newArrivalsData,
  leftSideData,
  rightSideData,
} from '../../data/data';

const ProductDetails = () => {
  const { id } = useParams();

  const allProducts = [
    ...featuredItems,
    ...sellingData,
    ...newArrivalsData,
    ...leftSideData,
    ...rightSideData,
  ];

  const product = allProducts.find((item) => item.id === id);

  useEffect(() => {
    if (product) {
      document.title = `${product.title} | Your Store`;
    } else {
      document.title = 'Product Not Found | Your Store';
    }
  }, [product]);

  if (!product) {
    return (
      <div className="text-center py-20 text-red-500 font-bold text-2xl">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-5">
      <img src={product.image} alt={product.title} className="w-full max-w-md mx-auto" />
      <h1 className="text-3xl font-bold mt-5 text-blue-700">{product.title}</h1>
      <h2 className="text-gray-500 text-md my-2">{product.brand}</h2>
      <p className="text-red-500 text-2xl font-semibold">{product.price}</p>
      {product.oldPrice && (
        <p className="text-gray-400 line-through">{product.oldPrice}</p>
      )}
    </div>
  );
};

export default ProductDetails;
