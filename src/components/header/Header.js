import React from 'react'
import './header.css'
function Header() {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className='headerTitleSm'>Welcome to the story bank</span>
          <span className="headerTitleLg">Daily Story Space</span>
        </div>
       <center> <img className='headerImg' src="https://res.cloudinary.com/dwqgr4ovb/image/upload/v1675865589/shareyourstory/2-min_uavt9n.png" alt="hacker pic" /></center>
      </div>
    </>
  )
}

export default Header