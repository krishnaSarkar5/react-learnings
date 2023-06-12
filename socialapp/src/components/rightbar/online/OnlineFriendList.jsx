import React from 'react'
import './OnlineFriendList.css'
import OnlineFriend from './OnlineFriend'

const OnlineFriendList = () => {
  return (
    <>
     <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">        
         <OnlineFriend/>
        </ul>
    </>
  )
}

export default OnlineFriendList