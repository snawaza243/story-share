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
          <a target={'_blank'} href="https://www.facebook.com/snawaza243"><i className='topIcon fab fa-facebook-square'></i></a>
          <a target={'_blank'} href="https://facebook.com/snawaza243"><i className='topIcon fab fa-twitter-square'></i></a>
          <a target={'_blank'} href="https://www.pinterest.com/snawaza243"><i className='topIcon fab fa-pinterest-square'></i></a>
          <a target={'_blank'} href="https://www.instagram.com/snawaza243"><i className='topIcon fab fa-instagram-square'></i></a>
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
          <a target={'_blank'} href="https://www.linkedin.com/in/snawaza243/"><i className='topIcon fab fa-linkedin-square'></i></a>
          <a target={'_blank'} href="https://youtube.com/indiantechnoera"><i className='topIcon fab fa-youtube-square'></i></a>
          <a target={'_blank'} href="https://github.com/snawaza243"><i className='topIcon fab fa-github-square'></i></a>
          <a target={'_blank'} href="https://www.snawaza243@gmail.com"><i className='topIcon fab fa-mail-envelop-square'></i></a>

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
