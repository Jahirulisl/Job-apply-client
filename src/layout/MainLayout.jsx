import React from 'react';
import { Outlet } from 'react-router-dom';
import Nabebar from '../pagyes/Home/Saherd/Nabebar';
import Footer from '../pagyes/Home/Saherd/Footer';

const MainLayout = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Nabebar></Nabebar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;