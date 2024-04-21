import React, { useState } from 'react';
import './Dash.css'
import Dashnav from './Dashnav/Dashnav';
import DashBot from './DashBot/DashBot';
import EventForm from './DashBot/EventForm';



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
   
        
    <div className='dash'>
      <div className="dashtop">
          <Dashnav onAddButtonClick = {()=>handleButtonClick(true)}/>
      </div>
      <div className="dashbot">
        <DashBot />
        {showEventForm && <EventForm onCloseButtonClick={()=>handleButtonClick(false)} onSubmit={handleFormSubmit}/>}
      </div>
    </div>

  )
}

export default Dash