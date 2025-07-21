// Product.jsx

import React from 'react';
import ProductCard from './ProductCard'; // ✅ default import, matches the export above

const Product = () => {
  return (
    <div>
      <ProductCard />
    </div>
  );
};

export default Product;
