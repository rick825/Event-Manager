import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setLoggedIn }) => {
    const navigate = useNavigate(); 
    
    const [formData, setFormData] = useState({
      email: "", password: ""
    });
    
    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        console.log("Login Form Data:",formData);
        setFormData({
          ...formData,
          [name]:value
        })
    }


    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
           console.log("Login Form Data:",formData);
           const response = await axios.post('/api/login', formData,{
            headers:{
              "Content-Type":"application/json"
            }
           })
           if(response.status === 200){
            console.log("Login Successful");
            setLoggedIn(true);
            navigate('/user');
           } else {
            console.error('Login failed');
          }
        } catch (error) {
           console.log("Error While Login:-->",error);
        }
    }



    const Signup = () =>{
        console.log("Signup");
        navigate('/registration');
    } 

  return (
    <div class="loginsec">
          
    <div class="leftlogin logs">
      <div class="llup">
        <h1><span>W</span>elcome,</h1>
        <h2>Kindly <span>Login!!</span></h2>
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
    <div class="rightlogin logs">
      <form onSubmit={handleSubmit} method="post" class="form">
         <label for="email">Email</label>
         <input type="text" name="email" placeholder="Enter Your Email ID" value={formData.email} onChange={handleInputChange} required/>
         <label for="password">Password</label>
         <input type="password" name="password" placeholder="Enter Your Password" value={formData.password} onChange={handleInputChange} required/>
         <div class="alsign">
          <p>Not a User Please <a className='regisbutton' onClick={Signup}>Sign Up</a></p>
         </div>
         <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
  )
}

export default Login