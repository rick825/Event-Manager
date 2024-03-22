import React from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate(); 
    
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
      <form action="/api/login" method="post" class="form">
         <label for="email">Email</label>
         <input type="text" name="email" placeholder="Enter Your Email ID" />
         <label for="password">Password</label>
         <input type="password" name="password" placeholder="Enter Your Password" />
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