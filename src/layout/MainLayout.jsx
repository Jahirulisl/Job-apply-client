import React from 'react';
import { Outlet } from 'react-router-dom';
import Nabebar from '../pagyes/Home/Saherd/Nabebar';

const MainLayout = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Nabebar></Nabebar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;