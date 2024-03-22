import React from 'react';

const EventList = ({ EventData}) => {

  console.log("Eventlist",EventData);


  return (
    <div>
      {/* <h2>Events</h2> */}
      <ul className='eventlist'>

        <li className='eventitem'>
          <h2>Name: {EventData.name}</h2>
          <p>Category:{EventData.category}</p>
          <p>Location: Event Location</p>
          <p>Date: Event Date</p>
          <p>Time: State Time - End Time</p>
          <p>Description: Description</p>
          <p>Attendees: 100</p>
          <p>Joined: Joined People </p>
          <p>Organizer: Organizer</p>
          <button>Join</button>
        </li>

      </ul>
    </div>
  );
};

export default EventList;
