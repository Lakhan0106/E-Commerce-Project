import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded shadow p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-2"
      />
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-gray-500">₹{product.price}</p>
      <p className="text-sm text-green-600">{product.discount}% Off</p>
      {!product.inStock && <p className="text-red-500">Out of Stock</p>}
    </div>
  );
};

export default ProductCard;









// import React from 'react';
// import './ProductCard.css';

// const ProductCard = ({ product }) => {
//   if (!product) return null; // Safe check to prevent crash

//   const {
//     imageUrl,
//     brand,
//     title,
//     discountedPrice,
//     price,
//     discountPersent,
//   } = product;

//   return (
//     <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
//       <div className='h-[20rem]'>
//         <img
//           className='h-full w-full object-cover object-left-top'
//           src={imageUrl}
//           alt={title}
//         />
//       </div>
//       <div className='textPart bg-white p-3'>
//         <div>
//           <p className='font-bold opacity-60'>{brand}</p>
//           <p>{title}</p>
//         </div>
//         <div className='flex items-center space-x-2'>
//           <p className='font-semibold opacity-60'>₹{discountedPrice}</p>
//           <p className='line-through opacity-40'>₹{price}</p>
//           <p className='text-green-600 font-semibold'>{discountPersent}% off</p>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default ProductCard;


