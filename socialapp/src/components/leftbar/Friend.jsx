import React from 'react'

const Friend = ({image,name}) => {
  return (
    <>
        <li className="leftbarFriend">
            <img src={image} alt="" className="leftbarFriendImg" />
            <span className="leftbarFriendName">{name}</span>
        </li>
    </>
  )
}

export default Friend