import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    mobilenumber: '',
    email: '',
    password: '',
    cpassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("Input field name:", name);
  console.log("Input field value:", value);
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form Data:", formData);
      const response = await axios.post('/api/signup', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        console.log("Signup successful");
        navigate('/login');
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  const handleLogin = () => {
    console.log('Login');
    navigate('/login');
  };

  return (

    <div class="loginsec">
        
    <div class="leftlogin logs">
      <div class="llup">
        <h1><span>W</span>elcome,</h1>
        <h2>Kindly <span>Sign Up!!</span></h2>
      </div>
       <div class="lldown">
         <div class="lldown-box">
          <div class="ecchart ecm">
            <div class="ecc1 ecc">

            </div>
            <div class="ecc2 ecc">

            </div>
            <div class="ecc3 ecc">

            </div>
            <div class="ecc4 ecc">

            </div>
            <div class="ecc5 ecc">

            </div>
            <div class="ecc6 ecc">

            </div>
            <div class="ecc7 ecc">

            </div>
            <div class="ecc8 ecc">

            </div>
            <div class="ecc2 ecc">

            </div>
          </div>
         </div>
       </div>
    </div>
    <div class="rightlogin logs signup">
      <form onSubmit={handleSubmit}  method="post" class="form">
         <label for="fname">First Name</label>
         <input type="text" name="fname" placeholder="Enter Your First Name" value={formData.fname} onChange={handleInputChange} required />
         <label for="lname">last Name</label>
         <input type="text" name="lname" placeholder="Enter Your last Name" value={formData.lname} onChange={handleInputChange} required />
         <label for="mobilenumber">Mobile Number</label>
         <input type="number" name="mobilenumber" placeholder="Enter Your Mobile Number" value={formData.mobilenumber} onChange={handleInputChange} required />
         <label for="email">Email</label>
         <input type="text" name="email" placeholder="Enter Your Email ID" value={formData.email} onChange={handleInputChange} required />
         <label for="password">Password</label>
         <input type="password" name="password" placeholder="Enter Your Password" value={formData.password} onChange={handleInputChange} required />
         <label for="cpassword">Confirm Password</label>
         <input type="password" name="cpassword" placeholder="Confirm Your Password" value={formData.cpassword} onChange={handleInputChange} required />
         <div class="alsign">
          <p>Not a User Please <p className='regisbutton' onClick={handleLogin}>Login</p></p>
         </div>
         <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
  )
}

export default Signup