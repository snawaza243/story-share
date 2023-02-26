import React from 'react'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'
import Header from '../../components/header/Header' 
import './home.css'

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  )
}

export default Home