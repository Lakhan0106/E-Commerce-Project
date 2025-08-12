import React from 'react';

const HomeSectionCard = ({ product }) => {
  if (!product) {
    return null; // or return a loading placeholder
  }

  {product.map((item) => (
  <HomeSectionCard key={item.id} product={item} />  // ✅ Pass product prop
))}

  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden'>
      <div className='h-[13rem] w-[10rem]'>
        <img
          className='object-cover object-top w-full h-full'
          src={product.imageUrl || '/placeholder.jpg'} // fallback image
          alt={product.title || 'Product'}
        />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>
          {product.title || 'Untitled'}
        </h3>
        <p className='mt-2 text-sm text-gray-500'>
          {product.description || 'No description available.'}
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
