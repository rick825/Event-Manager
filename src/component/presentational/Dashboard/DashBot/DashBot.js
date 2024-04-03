import React from 'react';
import Dashfilter from './Dashfilter'
import Dashbotmain from './Dashbotmain';

const DashBot = () => {
  return <>
    <div>
      <Dashfilter />
    </div>
     <div className="dashbotmain">
        <Dashbotmain />
     </div>
     
  </>
}

export default DashBot