import React from 'react'
import './BlogApp.css'
import SideBar from './components/sidebar/SideBar'

import TopBar from './components/topbar/TopBar'
import Home from './pages/home/Home'
import Settings from './pages/settings/Settings'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import Post from './components/post/Post'
import SinglePost from './components/singlePost/SinglePost'
import Error404 from './pages/error/Error404'
import Contact from './pages/contact/Contact'
document.title = 'BlogApp'
function BlogApp() {
  const user = false;
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TopBar/>}>
            <Route className="homeLink" exact path='/' element={<Home />} />
            <Route className="homeLink" path='/about' element={<SideBar />} />
            <Route className="homeLink" path='/contact' element={<Contact />} />            
            <Route className="homeLink" path='/login/register' element={<Register />} />
            <Route className="homeLink" path='/login' element={<Login />} />
            <Route className="homeLink" path='/write' element={<Write />} />
            <Route className="homeLink" path='/settings' element={<Settings />} />
            <Route className="homeLink" path='/post' element={<Single />} />
            <Route className="homeLink" path='*' element={<Error404/>} />
          </Route>
        </Routes>

        {/* <Home /> */}
        {/* <Single />  */}
        {/* <Write /> */}
        {/* <Settings/> */}
        {/* <Login/> */}
        {/* <Register/> */}
      </BrowserRouter>
    </>
  )
}

export default BlogApp
