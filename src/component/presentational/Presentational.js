import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import HeroContainer from './HeroContainer';
import Dashboard from './Dashboard/Dashboard'; 
import './Header/Header.css';
import './Style.css';
import Login from './Registration/Login';
import Signup from './Registration/Signup';
import { UserCont } from './Dashboard/context/UserContext';
import { EventProvider } from './Dashboard/context/EventMangementContext';
import { useLoginStatus } from './Dashboard/context/LoginContext';
import { RefreshProvider} from './Dashboard/context/RefreshContext';
import { DashNav } from './Dashboard/context/DashNavContext';
const Presentational = () => {


  const {loggedIn, setLoggedIn} = useLoginStatus();


  return (
    <RefreshProvider>
    <DashNav>
    <UserCont>
    <EventProvider>
    <Router>
      <div className='Presentation'>
        <Header />
        <Routes>
        <Route exact path="/" element={<HeroContainer loggedin={loggedIn} />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/registration" element={<Signup/>} />
        <Route exact path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route exact path="/user" element={<HeroContainer loggedin={true} />} />
        </Routes>
      </div>
    </Router> 
    </EventProvider>  
    </UserCont>
    </DashNav>
    </RefreshProvider>

  );
};

export default Presentational;
