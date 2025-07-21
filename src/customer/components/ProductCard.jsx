// ProductCard.jsx

import React from 'react';
import './ProductCard.css'; // ✅ Correct CSS import

const ProductCard = () => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img
          className='h-full w-full object-cover object-left-top'
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/top/5/x/4/l-1-print-thundercreation-original-imahe3c8suzgqphz.jpeg?q=70"
          alt=''
        />
      </div>
      <div className='textPart bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>ThunderCreation</p>
          <p>Casual Cap Sleeves Printed Women Black Top</p>
        </div>
        <div className='flex items-center space-x-2'>
          <p className='font-semibold opacity-60'>₹269</p>
          <p className='line-through opacity-40'>₹1999</p>
          <p className='text-green-600 font-semibold'>70% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
