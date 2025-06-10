import React from "react";
import { products } from "../../data/data";


const ProductCard = ({ product }) => (
  <div className={` p-4 shadow-sm bg-white flex flex-col justify-between ${product.highlight ? 'md:col-span-2 row-span-2' : ''}`}>
    <div>
      <p className="text-sm text-gray-500">{product.brand}</p>
      <h3 className="text-blue-700 font-semibold truncate">{product.title}</h3>
      <div className="text-center text-5xl mt-3">
        <img src={product.image} alt={product.title} />
      </div>
    </div>
    <div className="mt-4">
      {product.soldOut ? (
        <p className="text-gray-500 text-lg font-semibold">Sold out</p>
      ) : (
        <p className="text-lg font-semibold text-black">
          {product.price}
          {product.oldPrice && (
            <span className="ml-2 text-sm line-through text-gray-400">{product.oldPrice}</span>
          )}
        </p>
      )}
    </div>
  </div>
);

const ProductGrid = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
