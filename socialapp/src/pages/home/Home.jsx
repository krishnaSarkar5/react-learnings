import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import './Home.css'
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'


const Home = () => {
  return (
    <>
        <Topbar/>  
        <div className='home'>
          <Leftbar/>
          <Feed/>
          <Rightbar/>
      </div>
    </>
    
  )
}

export default Home