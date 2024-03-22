import React from 'react';
import { Link} from "react-router-dom"
import dash from '../../../../img/icon/dash.png';
import profile from '../../../../img/icon/profile.png';
import home from '../../../../img/icon/home.png';
import about from '../../../../img/icon/about.png';
import contact from '../../../../img/icon/contact.png';
import settings from '../../../../img/icon/settings.png';
import logout from '../../../../img/icon/logout.png';
import help from '../../../../img/icon/help.png';

const Sidenav = () => {
  return (
    <div className="sidenav">
    <div className="head">
       <h2>Event Manager</h2>
    </div>
    <div className="dashmainnav navsec">
       <hr />
       <ul>
           <li className="navitem"><img src={dash} alt="" /><Link to="/dashboard" className="navlink">Dashboard</Link></li> 
           <li className="navitem"><img src={profile} alt="" /><Link to="/profile" className="navlink">Profile</Link></li>
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
           <li className="navitem"><img src={logout} alt="" /><Link to="/logout" className="navlink">Logout</Link></li> 
           <li className="navitem"><img src={help} alt="" /><Link to="/help" className="navlink">Help</Link></li>
        </ul>
    </div>
</div>
  )
}

export default Sidenav