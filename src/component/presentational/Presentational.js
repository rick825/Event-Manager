import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import HeroContainer from './HeroContainer';
import Dashboard from './Dashboard/Dashboard'; 
import './Header/Header.css';
import './Style.css';
import Login from './Registration/Login';
import Signup from './Registration/Signup';

const Presentational = () => {


  const [loggedin, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className='Presentation'>
        <Header />
        <Routes>
        <Route exact path="/" element={<HeroContainer loggedin={loggedin} />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/registration" element={<Signup/>} />
        <Route exact path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route exact path="/user" element={<HeroContainer loggedin={true} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Presentational;
