import React, { useState } from 'react';

const EventForm = ({onCloseButtonClick, onSubmit}) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    onSubmit(formData);
  };

  return (
    
    <form onSubmit={handleSubmit} className='eventform'>
      <div className="formhead">
      <h2>Please Enter below Details:-</h2>
      <h2 className='Close' onClick={() => onCloseButtonClick(false)} >X</h2>
      </div>
      
      <label>
        Event Name:
        <input type="text" name="name"  placeholder="Enter Event Name" onChange={handleChange} />
      </label>
      <label>
        Category:
        <input type="text" name="category" placeholder='Enter Category Name' onChange={handleChange} />
      </label>
      <label>
        Location:
        <input type="text" name="location" placeholder='Enter Location Name' onChange={handleChange} />
      </label>
      <label>
        Date:
        <input type="date" name="date" placeholder='Enter Date' onChange={handleChange} />
      </label>
      <label>
        Start Time:
        <input type="time" name="startTime" placeholder="Enter Start Time" onChange={handleChange} />
      </label>
      <label>
        End Time:
        <input type="time" name="endTime" placeholder="Enter End Time" onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" placeholder='Enter Description' onChange={handleChange} />
      </label>
      <label>
        Attendees:
        <input type="number" name="attendees"  onChange={handleChange} />
      </label>
      <label>
        Organizer:
        <input type="text" name="organizer"  onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
