import React from 'react';
import Hero from '../componets/Hero';
import LatestCollection from '../componets/LatestCollection';
import BestSeller from '../componets/BestSeller';
import { OurPolicy } from '../componets/OurPolicy';
import NewsLetterBox from '../componets/NewsLetterBox';

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
      </div>
  );
};

export default Home;
