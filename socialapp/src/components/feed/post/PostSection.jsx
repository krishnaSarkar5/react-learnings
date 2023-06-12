import React from 'react'
import Post from './Post'
import { Posts } from '../../../Data/DummyData'

const PostSection = () => {



  return (
    <>
            {Posts.map((eachPost)=>{
                return <Post id={eachPost.id} post={eachPost}/>
            })}
    </>
    
  )
}

export default PostSection