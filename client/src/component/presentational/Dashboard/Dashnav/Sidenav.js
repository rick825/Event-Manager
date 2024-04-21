import React from 'react';
import axios from 'axios';
import { useNavigate, Link} from "react-router-dom";
import { useUserContext } from '../context/UserContext';
import { useLoginStatus } from '../context/LoginContext';
import dash from '../../../../img/icon/dash.png';
import profileimg from '../../../../img/icon/profile.png';
import home from '../../../../img/icon/home.png';
import about from '../../../../img/icon/about.png';
import contact from '../../../../img/icon/contact.png';
import settings from '../../../../img/icon/settings.png';
import logout from '../../../../img/icon/logout.png';
import help from '../../../../img/icon/help.png';



const Sidenav = () => {

   const { setUserId,setMoreInfo, profile , setProfile } = useUserContext();
   const { setLoggedIn } = useLoginStatus();


   const navigate = useNavigate(); 

   const handleLogout = async () =>{
      try {
         await axios.post('/api/logout');
         localStorage.removeItem('userId');
         setUserId(null);
         setLoggedIn(false);
         navigate('/');
         alert('Logout Successful');
      } catch (error) {
         console.error('Logout failed:', error);
      }
   }

  return (
    <div className="sidenav">
    <div className="head">
       <h2>Event Manager</h2>
    </div>
    <div className="dashmainnav navsec">
       <hr />
       <ul>
           <li className="navitem" onClick={()=>{setMoreInfo(false);setProfile(false);}}><img src={dash} alt="" /><Link to="/dashboard" className="navlink">Dashboard</Link></li> 
           <li className="navitem" onClick={()=>{setProfile(true);setMoreInfo(false);}}><img src={profileimg} alt="" /><Link  className="navlink">Profile</Link></li>
       </ul>
    </div>
    <div className="mainnav navsec">
       <hr />
       <ul>
           <li className="navitem"><img src={home} alt="" /><Link to="/" className="navlink">Home</Link></li> 
           <li className="navitem"><img src={about} alt="" /><Link to="/about" className="navlink">About</Link></li>
           <li className="navitem"><img src={contact} alt="" /><Link to="/contact" className="navlink">Contact</Link></li>
           <li className="navitem"><img src={settings} alt="" /><Link to="/Settings" className="navlink">Settings</Link></li>
       </ul>
    </div>
    <div className="footnav navsec">
        <hr />
        <ul>
           <li className="navitem" onClick={()=>handleLogout()}><img src={logout} alt="" /><Link to="/" className="navlink">Logout</Link></li> 
           <li className="navitem"><img src={help} alt="" /><Link to="/help" className="navlink">Help</Link></li>
        </ul>
    </div>
</div>
  )
}

export default Sidenav