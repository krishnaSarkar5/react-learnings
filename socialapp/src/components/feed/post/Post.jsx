import React from 'react'
import './Post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
  return (
    <div className='post'>
      <div className="postWrapper">

          <div className="postTop">
              <div className="postTopLeft">
                  <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                  <span className="postUsername">Krishna Sarkar</span>
                  <span className="postDate">5 min ago</span>
              </div>
              <div className="postTopRight">
                  <MoreVertIcon/>
              </div>
          </div>

          <div className="postCenter">
              <span className="postText">Hey It's my first post :)</span>
              <img src="/assets/post/1.jpeg" alt="" className="postImage" />
          </div>

          <div className="postBottom">
              <div className="postBottomLeft">
                <img src="/assets/like.png" alt="" className="reactionIcon" />
                <img src="/assets/heart.png" alt="" className="reactionIcon" />
                <span className="postReactionCounter">32 people</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
              </div>
          </div>
      </div>
      
    </div>
  )
}

export default Post