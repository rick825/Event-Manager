import React from 'react';
import Presentational from './component/presentational/Presentational'
import './component/presentational/Style.css';
import {LoginProvider} from './component/presentational/Dashboard/context/LoginContext';

function App() {
  return (
    <LoginProvider>
    <div className='container'>
       <Presentational />
    </div>
    </LoginProvider>
  );
}

export default App;
