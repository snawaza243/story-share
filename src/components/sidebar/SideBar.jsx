import React from 'react'
import './sidebar.css'
import adminAvatar from './admin.png'
function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">
            ADMIN
          </span>
          <img className='sidebarTitleImg' src={adminAvatar} alt="" />
          <p className='authorWords'>
            Hello Dear! <br /> Welcome To <em>"Daily Story Space"</em>. Your World Of natural stories Awaits. We’re so glad you’re here! You are now part of a growing community of this creating, collaborating, and connecting across the globe via real and emotional stories. Whether you’ve joined to share or just to explore the other ones story. <br /></p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">
            CATEGORIES
          </span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Health</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Cinema</li>
            <li className="sidebarListItem">Life</li>
          </ul>
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle">
            FOLLOW US
          </span>
          <div className="sidebarSocial">
          <a target={'_blank'}  href="https://www.facebook.com/snawaza243"><i className='topIcon tIs fab fa-facebook-square'></i></a>
          <a target={'_blank'}  href="https://facebook.com/snawaza243"><i className='topIcon tIs fab fa-twitter-square'></i></a>
          <a target={'_blank'}  href="https://www.pinterest.com/snawaza243"><i className='topIcon tIs fab fa-pinterest-square'></i></a>
          <a target={'_blank'}  href="https://www.instagram.com/snawaza243"><i className='topIcon tIs fab fa-instagram-square'></i></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar