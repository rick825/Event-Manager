import React, { useState } from 'react';
import './Dash.css'
import Dashnav from './Dashnav/Dashnav';
import DashBot from './DashBot/DashBot';
import EventForm from './DashBot/EventForm';
import { RefreshProvider } from './context/RefreshContext';
import { DashNav } from './context/DashNavContext';


const Dash = () => {

  const [showEventForm, setShowEventForm] = useState(false);

  const handleButtonClick = (value) =>{
    setShowEventForm(value);
  }

  const handleFormSubmit = (Data) =>{
    console.log("Submitted Data: ",Data);
    setShowEventForm(false);
  }

  return (
    <RefreshProvider>
      <DashNav>
        
    <div className='dash'>
      <div className="dashtop">
          <Dashnav onAddButtonClick = {()=>handleButtonClick(true)}/>
      </div>
      <div className="dashbot">
        <DashBot />
        {showEventForm && <EventForm onCloseButtonClick={()=>handleButtonClick(false)} onSubmit={handleFormSubmit}/>}
      </div>
    </div>
    </DashNav>
    </RefreshProvider>
  )
}

export default Dash