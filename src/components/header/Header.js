import React from 'react'
import './header.css'
function Header() {

  var i = 0;
  var txt = 'Welcome to the story bank!'; /* The text */
  var speed = 50; /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className='headerTitleSm'>Welcome to the story bank</span>
          <span className="headerTitleLg">Daily Story Space</span>
        </div>
        <center> <img className='headerImg' src="https://t.ly/LAxA" alt="hacker pic" /></center>
      </div>
    </>
  )
}

export default Header