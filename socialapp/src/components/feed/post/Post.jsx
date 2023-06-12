import React from 'react'
import './Post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = ({post}) => {
  return (
    <div className='post'>
      <div className="postWrapper">

          <div className="postTop">
              <div className="postTopLeft">
                  <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                  <span className="postUsername">{post?.username}</span>
                  <span className="postDate">{post?.date}</span>
              </div>
              <div className="postTopRight">
                  <MoreVertIcon/>
              </div>
          </div>

          <div className="postCenter">
              <span className="postText">{post?.description}</span>
              <img src={post.photo} alt="" className="postImage" />
          </div>

          <div className="postBottom">
              <div className="postBottomLeft">
                <img src="/assets/like.png" alt="" className="reactionIcon" />
                <img src="/assets/heart.png" alt="" className="reactionIcon" />
                <span className="postReactionCounter">{post.like}</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
              </div>
          </div>
      </div>
      
    </div>
  )
}

export default Post