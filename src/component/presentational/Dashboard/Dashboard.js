import React from 'react';
import './Dashboard.css';
import Sidenav from './Dashnav/Sidenav';
import Dash from './Dash';

const Dashboard = () => {
  return (
    <div className='main-dash'>
       <div className="dashboard">
         <Sidenav />
          <Dash />
       </div>
    </div>
  )
}

export default Dashboard