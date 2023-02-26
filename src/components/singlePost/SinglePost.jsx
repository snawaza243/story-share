import React from 'react'
import './singlepost.css'
function SinglePost() {
  return (
    <>
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img className='singlePostImg' src="https://blog.hubspot.com/hubfs/post-instagram-1.jpg" alt="" />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <div className="singlePostEdit">
              <i className='singlePostIcon far fa-edit'></i>
              <i className='singlePostIcon far fa-trash-alt'></i>
              </div> 
            </h1>
            <div className="singlePostInfo">
              <span className='singlePostAuthor'>Author: <b>Sam</b></span>
              <span className='singlePostDate'>1 hour ago</span>              
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor aspernatur dolore eum? Cum blanditiis, at ad vero modi doloremque. Nemo molestias fugiat, neque illo, veritatis consequatur ducimus nostrum eius alias rerum error quasi quis! Temporibus nemo deleniti laboriosam repellat consectetur laudantium, odio, quasi aliquid, culpa quod tempore animi qui excepturi?
            </p>
        </div>
    </div>
    </>
  )
}

export default SinglePost