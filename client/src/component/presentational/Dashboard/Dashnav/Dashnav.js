import React,{ useState } from 'react';
import { useDashNav } from '../context/DashNavContext';
import { useEventManagement } from '../context/EventMangementContext';

const Dashnav = ({onAddButtonClick}) => {

  const [activeButton, setActiveButton] = useState('exploreEvents');
  const { setDashNavItem } = useDashNav();
  const {organizedEvents, joinedEvents} = useEventManagement();

  const handleButtonClick = (buttonName) => {
    console.log("Button Name-->",buttonName);
    setActiveButton(buttonName);
  };

  const handleDashNav = (navName) =>{
    setDashNavItem(navName);
  }

  return (
    <div className='dashnav'>
        <div className="addbutton">
            <button  onClick={()=>{onAddButtonClick(true); handleButtonClick('addEvent');} } className={activeButton === 'addEvent' ? 'navactive' : ''}> + Add Event</button>
            <button   onClick={() => {handleButtonClick('exploreEvents'); handleDashNav('exploreEvents');}} className={activeButton === 'exploreEvents' ? 'navactive exploreevent' : 'exploreevent'}><img src="data:image/png;base64,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" alt='' /> Explore Events</button>
        </div>
        <div className="navbutton">

            {/* navbutton main */}
            <div onClick={()=>{handleButtonClick('nav1'); handleDashNav('MyEvents');}} className={activeButton === 'nav1'?'nav1 nav-item navactive':'nav1 nav-item'}>
           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHBUlEQVR4nO2aTUwbZx7GLVUKpxBpT6siJbQyMRhIHBygRTGfLoHgQpDl3VUAA3awwXyokYIalTSIHhIWZbva00qlSUGlSpZGhRBDNg4tiZAIORCz0h4QR0wkJG5LLj79Vu94EBg8MCTGOXQe6ZH8/355h5nX88g6nQYNGjRo0KBBgwL0nSQd99F1vJ35Ez7eCIrPx310GHs5olOBE15Sj7czLtW3g2r6eH3CR7/aOXFHmpeUj9tY/NgHMdlGUOTs1eOjViwf+VhX7KGGbdzSvY8rr29lMa0V0rys6FuxG1wcFUzzUqv3siTHXhkdsa+QvhWXvpWwyNN78Z/w8ce9Zp70cE7q2cradlvv5bUu0cjw0JXhhXQPK0Y3f9gZF750LyE5p31nPN3LgIjJvK1z8IGquXKNkp0wZLXwMqsFMluwC7v/OVX9z1n963NC/c+oFL5sDw4558X22uzLeIQ/q4VwVguuA84VdSjZCYPJzYbpMoh/eWHfeUrozjQIfj/NivDl1ZEsckyX+d+O2lnhP32ZPx14bqQfSnbCYG5mw+yCAnkDHj4mNPEYJE5FNsDs4ZjIyWmO3gCzi1nZf+ANEHWCSnbCkNfEfH4z5DZTK+wXE1TOPSQ0N8HK3EMqhC/fhV3k5Dcxt702v5EWyd9MOK/pYLeAXIeSnTAUNNJZ0AifOln6JMZDUPgKnCxLOQ34dsY/dTIgYhKd3HaofAhu1ijZCUNFJ0mWBoKFTrA4CRU14BD3vKClEbulgWURK3SyoHQMWupxFzoJS3kN+Isa9z4GC+uwyPPWouwGVnXvA6VOUkrqCZbUQywW17Ng/Qsf7tWj5BKFJfWsK/VQw+I6bureFxwOjljr6bDWMWetY0PmXFkdPhFT0+P8n0m1XmJMrkU1L7FqreOm2jkaNGjQoEFDnNFZQVJ9LV0NF5lvuMgbmfP1F+lQezw11pBaX8O4XEsc+brhIv2Hdkw6q0hprGaxqQZispqgyNmrR1MNlsYa1hV7xIe3DuXKuz9n0f05uG2suGzYXdUcFWyuotZtY0mOvVK6Aq5qXG4bYTnP33hh76/C+6HZxjnRy2WLfFXetN22Q1CMPDa6vDbwVLHiLt/9MiR8XhshKce2WxHyVjEgYjJVvwzth82eSnbc4Kvkpe8CtFdGFKFvf6Pq2xlW//Ybob/LilBbFQ6R47sQrQi1VeGR/JWEfRUHex3ed12ReSjZcUNXJRtdldBdHRFERgKERgIg+GMgIoh0VpAscjorogWRzkpmJf+FgwsiKtaFoJIdN1w5z8aV81sbEPATCkyCRH9kA760ckzkfFEevQFflDMr+c/HfwNEX0ElO27oLme+uxyufhZRhP7zC5XBcULBcVYWZUXoajl2kdP9WbQidLWcFrk23F0e31tAmle+9QfvtOOGL8vovGaFa1aWrsR4CArftTKWpZyy3YrQNSsDcr2Ix+0huNlTyY7rMXi9lOD1MugpI9RTiqO3gmTBr8qw95SyLGLXy1joVTgGe0px95QSlvJK8fcWvdsx+HUpFnnm2g77cBSjr0pJuVFCsLcEYvFGMQu91r0Vod4SCm+UsK7UIy4sPkTFqNfBkb4iOr4pZu6bYjZkzvUV41O68rt6FJHaV8yYXEu82FfEal8xN9WuQ4MGDRo0aDgg/qEnaTCXrsFc5r/L442g+DyYR8eoUd3x8898UgdzGZdq8yBR/C6X14N59Ktd5y4MfULKXTOLd89CLN4xExQ5uj1wNwfL3bOsK/VIEG+91ZUfMrM4bIbhHFZ+OIv9+wKOCg7lUDuUw5KIDeXwSmmHh8/iGjITlnqY8f+Q+25fhffDsJlz8prWttvD5rdQjEZMdP10BkZMrIwad78MCd9PZwhJOTm7FaGRMwyImMzbo3F6GdoPmzOVbNW4Z+LlfRPcP6OsCN034RA5905HK0L3TuOR/CbC/zoV39fh/SCt2bT1B++0VePBKTYenIJxQ0QQGQoQGn4KMiVB5Mc8kkXOz6eiBZEH2cxK/tPxF0RUrBtBJVs1xrLZGMve2gD/JKHJKRD0T0Y2YNTMMZHzS3b0BoxlMSv5sxK/AWKuoJKtGhOZzD/KhEdZW78RevGQ0IttvxGayMQu5RijFaFHRlokfybhR1mJvQXkuSjZqjFlpHPKCJNGlv4d4yEofFNGlkXOVPpuRWjSyIAUE8zg9qguMQ/BzZlKtvpGepICBoKBdAikEwoYcEzpSRZ8asD+xMCyFDOwoHQMPsnAHTAQFnlPDPhnjId7DD7OwCLPWouy099SMZpOI2XaQPBXA8TkSRYChr0VoV/TKJw2sK7YIwGcPvkOitF/jRyZSaNjJo25Z3o2BOXPPhFT02PGQOozPWNSfRokjHpWn+m5qXadGjRo0KBBgwbd7wr/B50zjO0fc5v7AAAAAElFTkSuQmCC" alt=''/>
              <div className="nav-text">
                <h2>Organized Events</h2>
                 <p>{organizedEvents}</p>
              </div>
            </div>
            {/* end navbutton main */}
            <div onClick={()=>{handleButtonClick('nav2'); handleDashNav('EventsJoined');}} className={activeButton === 'nav2'?'nav2 nav-item navactive':'nav2 nav-item'}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFhElEQVR4nO2Z62+TZRjGX79MCMTI9JMLJDDZoZMhaAA5yjRqJIZoRJFx2GCMkx8chPMUmUpHYDEjERIxEkDQjNLTWNetqz2xLrApMyGMMRQnG/ANkD/gZ+66km3wru/brnU1/SVX2t7PdV/P/T7t236ooqRIkSJFihQpUujEsIe08RvZP34TtyZsggHaSO+EjVSKJ1E5CWfiBionbYAIMiYqJ+FMXkdv1nrI3sDswWtZpcyVNfEkKifhGEpBFO36cOcMO4YlpOWXsD9/DbemloCa1PqH6ok1J7+E3vw1VMqMcTuA6cVUvrQaIkmtX0vvMOTE77thRhG9M4vhlaJH701B1kRq/ZHWY8mZWcxcqcmMSryYswpEqusr6Q15VjB38NrsIub19fdE3CfKnEjzxcyCFSBSW5+/HGPYo6b5K9gXaZ9ocyLNFzOvFYJIbX3JEtIKlmEsKKQ37H2oZfQUFLJPPJH2iTYn0nwx8+ZHIFJGKHGfb9FSECkjlLjPt/gDSAbF7QDefx+SQXE7gKXvgUgZocR9vuXvgkgZocR9vqLFIFJGKHGfr+QdECkjlLjPt34RiNTqiZbW+YaNj98GkVo90dI637DxyVsg0lrX64k1S+seUbP1DRBprev1xJqldY+o2fk6iLTW9XpizdK6R9R8WgAirXW9nliztO4RNXsXgkhrXa8n1iyte0TNVwtApLWu1xNrltY9omb/PBCp1ROtsiDpm5tZvTmIdXOQq1u8IJLnZUEsZc0U7wgwbtgOoGoOiNTqidLBV6HiM9h2nvvbm2FInefetgA7y4KMjvkAqmeDSGtdr0eLb1eQjM9/gvLAv9rtp7HcR0n5ebK3NDBGtLOZnN1+1pYHcIV95X5apVeJhW9mgUhrXa8nku/LIBkVfm5W+KHCR+cXPuZHytvrZ8FeP9dCPX5uSoYSLd/OAJHWul7PUL6qIKONXtqMPtjnxWfUcW9XBUk3+vBLr9HHxT0eRinR8P3LINJa1+sZynfQy+6DXjjgoVPPxfc/hANeukIZXrYr0XBiOoi01vV61HxVTtKrPdw75IGv3ZE/9mFQeKL/62ovCyXj0M/cPRzNr8PpaSDSWtfrUfMddrP6iBsOu2nUOmvNLEafmkbDqRdZOSCriSbJOtJEkdash9RMBZFaPV46Xg3fNcHRJkoUjRdfk48r1J9Pz4l8xoTXjrooDWW5MCt6MU8BkVo9XvrhNJxwwUk32ZE+5nLx5im4+npvm14gp//6MSc5knW8kau6D8CeByIlwZxu4MGPjVDjYeygeT605+Fu6HuH5eLtebhCcxq4Y8slb3CWZEiWZOoexGEAkZJgTPU8MDkHHoBctMNAj8xTZ8DlNJAuj6EZc7ntHPTOhznp4CnJMjm5r3uQxhwQKQnGVk+nrR6s9QNvAWcWOQ3Z3O6b6295lNdSV8synyNXsmyOKG4Bz2R6PVngyXr0f/t4Uu/AUu+AujrWDl5z5ZDVb6477sxHP/YDsupZJ1mOOs7qHsSfiTHwPCRavkJoqgvJ9di5JpIVyOTXQISLDx3YOdyS5aplle4DuGwgLZiJsWUSvS2ZkDBNAX8N+GrBb2fB42Yb/GvwOHw2CiTDV8tdj4WnlWQiaGNXix2Cdv5os/Os7n4n6S12uvoytirJhsfDqFYbrW02aLXhD9aQrrX3gpln2qwEpLfNxgXJUpKRS7VktFu5+ZsV2i10XbKyMFJPu42CdivXQz1W/vrFynNKMtNZS8YVCxc7LBCSmaYOC6WdZnIv1zA2JCuGDgvrrlhwh31XLFzoSPaLD3PjGKN+N7Gjy8Td62dhKIU8JrZdc/Ck8n+j+xTjuk0UdZ/B3H2Gjj9NPBDJ877aqhvJ9m2fIkWKFClSpFD+S/4Bvx7UN4jc91kAAAAASUVORK5CYII=" alt=''/>
              <div className="nav-text">
                <h2>Events Joined</h2>
                 <p>{joinedEvents}</p>
              </div>
            </div>
            
        </div>
    </div>

  )
}

export default Dashnav