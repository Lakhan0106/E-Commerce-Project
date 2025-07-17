import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

import man1 from '../../../women/clothing/man1.jpg';
import man2 from '../../../women/clothing/man2.jpg';
import man3 from '../../../women/clothing/man3.jpg';
import man4 from '../../../women/clothing/man4.jpg';
import man5 from '../../../women/clothing/man5.jpg';
import man6 from '../../../women/clothing/man6.jpg';
import man7 from '../../../women/clothing/man7.jpg';
import man8 from '../../../women/clothing/man8.jpg';
import man9 from '../../../women/clothing/man9.jpg';
import man10 from '../../../women/clothing/man10.jpg';
import man11 from '../../../women/clothing/man11.jpg';
import man12 from '../../../women/clothing/man12.jpg';

const HomeSectionCarousel = ({sectionName}) => {
  const carouselRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const products = [
    { img: man1, title: 'Fashion One', description: 'Cotton Shirt' },
    { img: man2, title: 'Urban Style', description: 'Casual Fit Tee' },
    { img: man3, title: 'Smart Casual', description: 'Stylish Kurta' },
    { img: man4, title: 'Ethnic Edge', description: 'Printed Kurta' },
    { img: man5, title: 'Winter Wear', description: 'Wool Sweater' },
    { img: man6, title: 'Denim Days', description: 'Blue Jeans' },
    { img: man7, title: 'Classy Man', description: 'Formal Shirt' },
    { img: man8, title: 'Street Vibe', description: 'Hooded Jacket' },
    { img: man9, title: 'Light Layer', description: 'Linen Shirt' },
    { img: man10, title: 'Everyday Fit', description: 'Printed T-Shirt' },
    { img: man11, title: 'Bold Look', description: 'Leather Jacket' },
    { img: man12, title: 'Fresh Fit', description: 'Light Cotton Shirt' },
  ];

  const items = products.map((product, i) => (
    <HomeSectionCard
      key={i}
      img={product.img}
      title={product.title}
      description={product.description}
    />
  ));

  return (
    <div className="relative">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <AliceCarousel
        items={items}
        responsive={responsive}
        disableDotsControls
        autoPlay={false}
        controlsStrategy="responsive"
        ref={carouselRef}
        onSlideChanged={(e) => setActiveIndex(e.item)}
        activeIndex={activeIndex}
      />

      {activeIndex !== 0 && (
        <button
          className="absolute top-[40%] left-2 z-10 bg-white p-2 shadow-md rounded-full"
          onClick={() => carouselRef.current?.slidePrev()}
        >
          ◀
        </button>
      )}

      {activeIndex !== items.length - 5 && (
        <button
          className="absolute top-[40%] right-2 z-10 bg-white p-2 shadow-md rounded-full"
          onClick={() => carouselRef.current?.slideNext()}
        >
          ▶
        </button>
      )}
    </div>
  );
};

export default HomeSectionCarousel;
