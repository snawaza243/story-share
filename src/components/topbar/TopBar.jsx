import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './topbar.css'
function TopBar() {
  const user = true;

  return (
    <>
      <head>
      </head>
      <div className='top'>
        <div className='topLeft'>
          <i className='topIcon fab fa-facebook-square'></i>
          <i className='topIcon fab fa-twitter-square'></i>
          <i className='topIcon fab fa-pinterest-square'></i>
          <i className='topIcon fab fa-instagram-square'></i>
        </div>
        <div className='toCenter'>
          <ul className='topList'>
            <li className='topListItem'><Link to="./" >Home</Link></li>
            <li className='topListItem'><Link to="./about" >About</Link></li>
            <li className='topListItem'><Link to="./contact" >Contact</Link></li>
            <li className='topListItem'><Link to="./write" >Write</Link></li>
            <li className='topListItem'><Link to="./login " >Login</Link></li>
          </ul>
        </div>
        <div className='topRight'>
          <i className='topIcon fab fa-linkedin-square'></i>
          <i className='topIcon fab fa-youtube-square'></i>
          <i className='topIcon fab fa-github-square'></i>
          {/* <i className='fa fa-user aria-hidden="true topImg"'></i> */}

          {/* <img className='topImg' src='https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg' alt='profile' />
          <i className='topSearchIcon fas fa-search'></i> */}


          {/* <div id="google_translate_element"></div> */}
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default TopBar
