import React, { useState } from 'react';
import Dashbotmain from './Dashbotmain';
import FilterOptions from './FilterOptions';

const Dashfilter = ({EventData}) => {
 

  return (
    <>
      
        <div className='dashfil'>
          <FilterOptions  />
        </div>
    
      <div className="dashbotmain">
        <Dashbotmain EventData={{EventData}}/>
      </div>
    </>
  );
};

export default Dashfilter;
