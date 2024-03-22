import React from 'react'

const Dashnav = ({onAddButtonClick}) => {
  return (
    <div className='dashnav'>
        <div className="addbutton">
            <button  onClick={()=>onAddButtonClick(true)}> + Add Event</button>
            <button> Explore Event</button>
        </div>
        <div className="navbutton">

            {/* navbutton main */}
            <div className="nav1 nav-item">
           <img src="data:image/png;base64,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" alt=''/>
              <div className="nav-text">
                <h2>My Events</h2>
                 <p>5</p>
              </div>
            </div>
            {/* end navbutton main */}
            <div className="nav2 nav-item">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFhElEQVR4nO2Z62+TZRjGX79MCMTI9JMLJDDZoZMhaAA5yjRqJIZoRJFx2GCMkx8chPMUmUpHYDEjERIxEkDQjNLTWNetqz2xLrApMyGMMRQnG/ANkD/gZ+66km3wru/brnU1/SVX2t7PdV/P/T7t236ooqRIkSJFihQpUujEsIe08RvZP34TtyZsggHaSO+EjVSKJ1E5CWfiBionbYAIMiYqJ+FMXkdv1nrI3sDswWtZpcyVNfEkKifhGEpBFO36cOcMO4YlpOWXsD9/DbemloCa1PqH6ok1J7+E3vw1VMqMcTuA6cVUvrQaIkmtX0vvMOTE77thRhG9M4vhlaJH701B1kRq/ZHWY8mZWcxcqcmMSryYswpEqusr6Q15VjB38NrsIub19fdE3CfKnEjzxcyCFSBSW5+/HGPYo6b5K9gXaZ9ocyLNFzOvFYJIbX3JEtIKlmEsKKQ37H2oZfQUFLJPPJH2iTYn0nwx8+ZHIFJGKHGfb9FSECkjlLjPt/gDSAbF7QDefx+SQXE7gKXvgUgZocR9vuXvgkgZocR9vqLFIFJGKHGfr+QdECkjlLjPt34RiNTqiZbW+YaNj98GkVo90dI637DxyVsg0lrX64k1S+seUbP1DRBprev1xJqldY+o2fk6iLTW9XpizdK6R9R8WgAirXW9nliztO4RNXsXgkhrXa8n1iyte0TNVwtApLWu1xNrltY9omb/PBCp1ROtsiDpm5tZvTmIdXOQq1u8IJLnZUEsZc0U7wgwbtgOoGoOiNTqidLBV6HiM9h2nvvbm2FInefetgA7y4KMjvkAqmeDSGtdr0eLb1eQjM9/gvLAv9rtp7HcR0n5ebK3NDBGtLOZnN1+1pYHcIV95X5apVeJhW9mgUhrXa8nku/LIBkVfm5W+KHCR+cXPuZHytvrZ8FeP9dCPX5uSoYSLd/OAJHWul7PUL6qIKONXtqMPtjnxWfUcW9XBUk3+vBLr9HHxT0eRinR8P3LINJa1+sZynfQy+6DXjjgoVPPxfc/hANeukIZXrYr0XBiOoi01vV61HxVTtKrPdw75IGv3ZE/9mFQeKL/62ovCyXj0M/cPRzNr8PpaSDSWtfrUfMddrP6iBsOu2nUOmvNLEafmkbDqRdZOSCriSbJOtJEkdash9RMBZFaPV46Xg3fNcHRJkoUjRdfk48r1J9Pz4l8xoTXjrooDWW5MCt6MU8BkVo9XvrhNJxwwUk32ZE+5nLx5im4+npvm14gp//6MSc5knW8kau6D8CeByIlwZxu4MGPjVDjYeygeT605+Fu6HuH5eLtebhCcxq4Y8slb3CWZEiWZOoexGEAkZJgTPU8MDkHHoBctMNAj8xTZ8DlNJAuj6EZc7ntHPTOhznp4CnJMjm5r3uQxhwQKQnGVk+nrR6s9QNvAWcWOQ3Z3O6b6295lNdSV8synyNXsmyOKG4Bz2R6PVngyXr0f/t4Uu/AUu+AujrWDl5z5ZDVb6477sxHP/YDsupZJ1mOOs7qHsSfiTHwPCRavkJoqgvJ9di5JpIVyOTXQISLDx3YOdyS5aplle4DuGwgLZiJsWUSvS2ZkDBNAX8N+GrBb2fB42Yb/GvwOHw2CiTDV8tdj4WnlWQiaGNXix2Cdv5os/Os7n4n6S12uvoytirJhsfDqFYbrW02aLXhD9aQrrX3gpln2qwEpLfNxgXJUpKRS7VktFu5+ZsV2i10XbKyMFJPu42CdivXQz1W/vrFynNKMtNZS8YVCxc7LBCSmaYOC6WdZnIv1zA2JCuGDgvrrlhwh31XLFzoSPaLD3PjGKN+N7Gjy8Td62dhKIU8JrZdc/Ck8n+j+xTjuk0UdZ/B3H2Gjj9NPBDJ877aqhvJ9m2fIkWKFClSpFD+S/4Bvx7UN4jc91kAAAAASUVORK5CYII=" alt=''/>
              <div className="nav-text">
                <h2>Events Joined</h2>
                 <p>5</p>
              </div>
            </div>
            
        </div>
    </div>

  )
}

export default Dashnav