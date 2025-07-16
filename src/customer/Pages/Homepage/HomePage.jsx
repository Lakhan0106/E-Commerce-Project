import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel.jsx';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel.jsx';

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div>
        <HomeSectionCarousel/>
      </div>
    </div>
  );
};

export default HomePage;