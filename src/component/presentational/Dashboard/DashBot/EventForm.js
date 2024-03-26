import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EventForm = ({ onCloseButtonClick, onSubmit }) => {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      console.log("Form Data:", formData);
      const response = await axios.post('/api/postevent', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        console.log("Event Sent Successfully");
        onCloseButtonClick(false);
        navigate('/dashboard');
      } else {
        console.error('Event Sending failed');
      }
    } catch (error) {
      console.error('Error during Event Form Submission:', error);
    }
  };



  return (
    <div>
        <form onSubmit={handleSubmit} className='eventform'>
      <div className="formhead">
      <h2>Please Enter below Details:-</h2>
      <h2 className='Close' onClick={() => onCloseButtonClick(false)} >X</h2>
      </div>
      
      <label>
        Event Name:
        <input type="text" name="name"  placeholder="Enter Event Name" onChange={handleChange} required />
      </label>
      <label>
        Category:
        <input type="text" name="category" placeholder='Enter Category Name' onChange={handleChange} required />
      </label>
      <label>
        Location:
        <input type="text" name="location" placeholder='Enter Location Name' onChange={handleChange} required />
      </label>
      <label>
        Date:
        <input type="date" name="date" placeholder='Enter Date' onChange={handleChange} required />
      </label>
      <label>
        Start Time:
        <input type="time" name="startTime" placeholder="Enter Start Time" onChange={handleChange} required />
      </label>
      <label>
        End Time:
        <input type="time" name="endTime" placeholder="Enter End Time" onChange={handleChange} required />
      </label>
      <label>
        Description:
        <textarea name="description" placeholder='Enter Description' onChange={handleChange} required />
      </label>
      <label>
        Attendees:
        <input type="number" name="attendees"  onChange={handleChange}  />
      </label>
      <button type="submit">Submit</button>
    </form>
      
    </div>
  );
};

export default EventForm;
