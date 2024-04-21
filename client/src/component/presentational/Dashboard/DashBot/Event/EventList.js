import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { useRefresh } from '../../context/RefreshContext';
import { useUserContext } from '../../context/UserContext';
import { useEventManagement } from '../../context/EventMangementContext';

const EventList = () => {
  
  const [events, setEventList] = useState([]);
  const { refreshEventList, setRefreshEventList } = useRefresh();
  const { setOrganizedEvents,setJoinedEvents} = useEventManagement();
  const { UserId, setMoreInfoId,  setMoreInfo  } = useUserContext();


  useEffect(() => {
    axios.get('/api/getevents')
      .then(response => {
        setEventList(response.data);
      })
      .catch(error => {
        console.error('Error fetching event list:', error);
      });
  }, [refreshEventList, setRefreshEventList]);


  useEffect(() => {
    handleEventCountUpdate();
  }, [events, UserId, setJoinedEvents,  setOrganizedEvents]);
  
  const handleEventCountUpdate = () => {
    let eventOrganizedCount = 0;
    let eventJoinedCount = 0;
  
    events.forEach(event => {
      console.log("Running for event->",event);
      if (event.organizer === UserId) {
        eventOrganizedCount++;
      }
      event.joined.forEach(user => {
        if (user === UserId) {
          eventJoinedCount++;
        }
      });
    });

    console.log("Total organized events:", eventOrganizedCount);
    console.log("Event joined count for the current user:", eventJoinedCount);
  
    setOrganizedEvents(eventOrganizedCount);
    setJoinedEvents(eventJoinedCount);
  };



  const handleJoin = (eventId) => {
    axios.post(`/api/joinEvent/${eventId}`)
      .then(response => {
        if (response.status === 200) {
          alert(response.data.message);
          setRefreshEventList(true);
        } else {
          console.log("Join unsuccessful");
        }
      })
      .catch(error => {
        alert(error.data.message);
        console.log(error);
      });
  }

  
  const handleMoreInfo = (bool,id) =>{
    console.log("Bool->",bool,"ID->",id);
    setMoreInfo(bool);
    setMoreInfoId(id); 
   
  }
  




  return (
    <div className='eventlistmain'>
      <h3 className='explore'>Explore Events</h3>
      <ul className='eventlist'>   
                {events.map(event => (
                    <li className='eventitem card' key={event._id} >
                         <div className="eventhead">
                         <div className="eventtitle">
                          <h2>{event.name}</h2>
                        </div>
                        <div className='joined'>
                           <img src="data:image/png;base64,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" />
                         <span>{event.joined.length}</span>
                         </div>
                        </div>
                        <div className="eventmid">
                        <p>Category: {event.category}</p>
                        <p>Location: {event.location}</p>
                        <p>Date: {event.date}</p>
                        <p>Time: {event.startTime} - {event.endTime}</p>
                        <p className='desc'>Description: {event.description}</p>
                        <p>Attendees: {event.attendees}</p>
                        <p>Organizer: {event.organizerName}</p>
                        </div>
                        <div className="btn">
                        <button onClick={() => event.organizer === UserId ? '' : handleJoin(event._id)}>
                                       {(event.organizer === UserId ? 'Organized' : (event.joined.includes(UserId) ? 'Joined' : 'Join'))}
                        </button>
                          <button className='moreinfobtn' onClick={()=>handleMoreInfo(true,event._id)}>More Info</button>
                        </div>
                    </li>
                ))}
            </ul>
    </div>
  );
};

export default EventList;
