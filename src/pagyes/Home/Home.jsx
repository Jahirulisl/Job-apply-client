import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import { div } from 'motion/react-client';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HotJobs></HotJobs>
    </div>
  );
};

export default Home;