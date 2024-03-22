import React from 'react'
import EventList from './EventList'

const Dashbotmain = ({filteredEvents,EventData}) => {
  return (
    <div className='Dashbotcont'>
      <EventList events={filteredEvents} EventData={EventData}/>
    </div>
  )
}

export default Dashbotmain