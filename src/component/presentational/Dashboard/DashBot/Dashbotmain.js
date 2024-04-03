import React from 'react';
import EventList from './EventList';
import MyEvents  from './MyEvents';
import { useDashNav } from '../context/DashNavContext';

const Dashbotmain = ({filteredEvents}) => {

   const { DashNavItem } = useDashNav();

    console.log('DashNavItem-->',DashNavItem);

  return (

    <div className='Dashbotcont'>
        {DashNavItem === 'exploreEvents' ? (
                <EventList events={filteredEvents} />
            ) : DashNavItem === 'MyEvents' ? (
                <MyEvents />
            ) : null}
    </div>
  )
}

export default Dashbotmain