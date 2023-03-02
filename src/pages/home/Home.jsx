import React from 'react'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'
import Header from '../../components/header/Header' 
import './home.css'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
      <Footer/>
    </>
  )
}

export default Home