import React from 'react'
import './Leftbar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FriendList from './FriendList';

const Leftbar = () => {
  return (
    <div className='left'>
        <div className="leftbarWrapper">
            <ul className="leftbarList">
                <li className="leftbarListItem">
                    <RssFeedIcon className='lefftbarIcon'/>
                    <span className="leftbarListItemText">Feed</span>
                </li>

                <li className="leftbarListItem">
                    <ChatIcon className='lefftbarIcon'/>
                    <span className="leftbarListItemText">Chats</span>
                </li>

                <li className="leftbarListItem">
                    <PlayCircleIcon className='lefftbarIcon'/>
                    <span className="leftbarListItemText">Videos</span>
                </li>

                <li className="leftbarListItem">
                    <GroupIcon className='lefftbarIcon'/>
                    <span className="leftbarListItemText">Groups</span>
                </li>

                <li className="leftbarListItem">
                    <BookmarkIcon className='lefftbarIcon'/>
                    <span className="leftbarListItemText">Bookmarks</span>
                </li>

                <li className="leftbarListItem">
                    <HelpOutlineIcon className='lefftbarIcon'/>
                    <span className="leftbarListItemText">Questions</span>
                </li>

                <li className="leftbarListItem">
                    <WorkOutlineIcon className='lefftbarIcon'/>
                    <span className="leftbarListItemText">Jobs</span>
                </li>

                <li className="leftbarListItem">
                    <EventIcon className='lefftbarIcon'/>
                    <span className="leftbarListItemText">Events</span>
                </li>

                <li className="leftbarListItem">
                    <SchoolIcon className='lefftbarIcon'/>
                    <span className="leftbarListItemText">Courses</span>
                </li>
                
            </ul>
            <button className="leftbarButton">Show More</button>
            <hr className="leftbarHr" />
            <FriendList/>
            {/* <ul className="leftbarFriendList">
                <li className="leftbarFriend">
                    <img src="/assets/person/2.jpeg" alt="" className="leftbarFriendImg" />
                    <span className="leftbarFriendName">Rahul Sen</span>
                </li>
                <li className="leftbarFriend">
                    <img src="/assets/person/2.jpeg" alt="" className="leftbarFriendImg" />
                    <span className="leftbarFriendName">Rahul Sen</span>
                </li>
                <li className="leftbarFriend">
                    <img src="/assets/person/2.jpeg" alt="" className="leftbarFriendImg" />
                    <span className="leftbarFriendName">Rahul Sen</span>
                </li>
                <li className="leftbarFriend">
                    <img src="/assets/person/2.jpeg" alt="" className="leftbarFriendImg" />
                    <span className="leftbarFriendName">Rahul Sen</span>
                </li>
                <li className="leftbarFriend">
                    <img src="/assets/person/2.jpeg" alt="" className="leftbarFriendImg" />
                    <span className="leftbarFriendName">Rahul Sen</span>
                </li>
                <li className="leftbarFriend">
                    <img src="/assets/person/2.jpeg" alt="" className="leftbarFriendImg" />
                    <span className="leftbarFriendName">Rahul Sen</span>
                </li>
                <li className="leftbarFriend">
                    <img src="/assets/person/2.jpeg" alt="" className="leftbarFriendImg" />
                    <span className="leftbarFriendName">Rahul Sen</span>
                </li>
                <li className="leftbarFriend">
                    <img src="/assets/person/2.jpeg" alt="" className="leftbarFriendImg" />
                    <span className="leftbarFriendName">Rahul Sen</span>
                </li>
            </ul> */}
        </div>
    </div>
  )
}

export default Leftbar