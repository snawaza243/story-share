import React from 'react'
// import Home from './Blog/components/pages/Home/Home'

import TopBar from './Blog/components/topbar/TopBar'
import Home from './Blog/pages/home/Home'
import Single from './Blog/pages/single/Single'
import Write from './Blog/pages/write/Write'
import JsonDataDisplay from './Package/JSON2/JSONDisplay2'
document.title = 'Sam project'
function App () {
  return (
    <>
      <TopBar />
      {/* <Home /> */}
      {/* <Single />  */}
      <Write />
    </>
  )
}


export default App
