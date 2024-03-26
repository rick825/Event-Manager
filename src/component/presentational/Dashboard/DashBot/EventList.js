import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const EventList = () => {
  
  const [events, setEventList] = useState([]);

  console.log("Eventlist",events);

  useEffect(() => {
   
    axios.get('/api/getevents')  
      .then(response => {
        console.log(response.data);
        setEventList(response.data);
      })
      .catch(error => {
        console.error('Error fetching event list:', error);
      });
  }, []);

  return (
    <div>
      <h2>Explore Events</h2>
      <ul className='eventlist'>
                {events.map(event => (
                    <li className='eventitem' key={event._id}>
                        <h2>Name: {event.name}</h2>
                        <p>Category: {event.category}</p>
                        <p>Location: {event.location}</p>
                        <p>Date: {event.date}</p>
                        <p>Time: {event.startTime} - {event.endTime}</p>
                        <p>Description: {event.description}</p>
                        <p>Attendees: {event.attendees}</p>
                        <p>Joined: {event.joined}</p>
                        <p>Organizer: {event.organizer}</p>
                        <button>Join</button>
                    </li>
                ))}
            </ul>
    </div>
  );
};

export default EventList;
