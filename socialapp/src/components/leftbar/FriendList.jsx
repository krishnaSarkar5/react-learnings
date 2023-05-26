import React from 'react'
import Friend from './Friend'

const FriendList = () => {
  return (
    <>
        <ul className="leftbarFriendList">
            <Friend image="/assets/person/2.jpeg" name="Rahul Roy"/>
            <Friend image="/assets/person/3.jpeg" name="Kunal Sen"/> 
            <Friend image="/assets/person/4.jpeg" name="Rina Saha"/> 
            <Friend image="/assets/person/5.jpeg" name="Sunita Roy"/> 
            <Friend image="/assets/person/6.jpeg" name="Mrinal Roy"/>               
        </ul>
    </>
  )
}

export default FriendList