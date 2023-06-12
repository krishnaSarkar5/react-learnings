import React from 'react'
import './OnlineFriend.css'

const OnlineFriend = () => {
  return (
    <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnlineMark"></span>
            </div>
            <span className="rightbarUsername">Rahul Roy</span>
    </li>
  )
}

export default OnlineFriend