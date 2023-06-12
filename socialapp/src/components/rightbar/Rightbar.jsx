import React from 'react'
import './Rightbar.css'
import OnlineFriend from './online/OnlineFriend'
import OnlineFriendList from './online/OnlineFriendList'
import Birthday from './birthday/Birthday'
import Advertisement from './advertisement/Advertisement'

const Rightbar = () => {
  return (
    <div className='right'>
      <div className="rightbarWrapper">
        {/* <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Rahul Roy</b> and <b>3 other friends</b> have a birthday today</span>
        </div> */}
        <Birthday/>
        {/* <img src="/assets/ad.png" alt="" className="rightbarAd" /> */}
        <Advertisement/>

         <OnlineFriendList/>
      </div>
    </div>
  )
}

export default Rightbar