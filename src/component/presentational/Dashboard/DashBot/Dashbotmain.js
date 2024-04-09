import React,{useEffect} from 'react';
import EventList from './EventList';
import MyEvents  from './MyEvents';
import { useDashNav } from '../context/DashNavContext';
import { useUserContext } from '../context/UserContext';
import EventsJoined from './EventsJoined';

const Dashbotmain = ({filteredEvents}) => {

   const { DashNavItem } = useDashNav();
   const { setUserId } = useUserContext();

   useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    console.log("user Id-->", storedUserId);
    if (storedUserId) {
        setUserId(storedUserId);
    }
}, [setUserId]);

    console.log('DashNavItem-->',DashNavItem);

  return (

    <div className='Dashbotcont'>
        {DashNavItem === 'exploreEvents' ? (
                <EventList events={filteredEvents} />
            ) : DashNavItem === 'MyEvents' ? (
                <MyEvents />
            ) : DashNavItem === 'EventsJoined'?(
              <EventsJoined /> 
            ) : null}
    </div>
  )
}

export default Dashbotmain