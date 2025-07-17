import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel.jsx';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel.jsx';

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel sectionName={"Men's T-Shirt"}/>
        <HomeSectionCarousel sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel sectionName={"Men's Shirt"}/>
        <HomeSectionCarousel sectionName={"Women's Top"}/>
        <HomeSectionCarousel sectionName={"Women's Dress"}/>
        <HomeSectionCarousel sectionName={"Women's Saree"}/>
      </div>
    </div>
  );
};

export default HomePage;