import React from 'react';
import './Dashboard.css';
import Sidenav from './Dashnav/Sidenav';
import Dash from './Dash';
import Profile from './Profile/Profile'
import { useUserContext } from './context/UserContext';
import EventInfo from './EventInfo/EventInfo';

const Dashboard = () => {

 const { moreInfo, moreInfoId, profile , UserId } = useUserContext();

  return (
    <div className='main-dash'>
       <div className="dashboard">
         <Sidenav />
         {moreInfo === true ? (<EventInfo id={moreInfoId}/>) : profile === true ? (<Profile />) : <Dash />}
       </div>
    </div>
  )
}

export default Dashboard