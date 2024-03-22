import React from 'react'

const Header = () => {
  return <>
    <div className="nav">
    <div className="navleft">
      <div className="navlogo">
        <a href="/">
          <h2>Event Manager</h2>
        </a>
      </div>
    </div>
    <div className="navright">
      <div className="navlist">
        <ul>
          <li className="navitem">
            <a href="/login" className="navlink"
              ><img
                src="https://img.icons8.com/fluency-systems-regular/48/settings--v1.png"
                alt="settings--v1"
            /></a>
          </li>
          <li className="navitem">
            <a href="/login" className="navlink"
              ><img
                src="https://img.icons8.com/sf-regular/48/home-page.png" alt="home-page"/>
            </a>
          </li>
          <li className="navitem">
            <a href="/login" className="navlink"
              ><img
                src="https://img.icons8.com/windows/32/000000/user-male-circle.png"
                alt="user-male-circle"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </>
  
}

export default Header;