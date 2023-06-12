import React from 'react'
import './Feed.css'
import Share from './share/Share'
import PostSection from './post/PostSection'

const Feed = () => {
  return (
    <div className='feed'>
        <div className="feedWrapper">
            <Share/>
            <PostSection/>
        </div>       
    </div>
  )
}

export default Feed