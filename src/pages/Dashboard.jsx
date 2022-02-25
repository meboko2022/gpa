import React from 'react';
import { Home } from '../components/Home';
import { Sidebar } from '../components/Sidebar';
import "../styles/dashstyle.scss"

export const Dashboard = () => {
  return(
      <div className='dashBody'>
          <Sidebar/>
          <Home/>
      </div>
  );
};
