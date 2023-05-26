import React from 'react'
import './Topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { Person } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Topbar = () => {
  return (
    <div className='topbarConatiner'>
        <div className="topbarLeft">
            <span className="logo">Social App</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <SearchIcon className='searchIcon'/>
                <input placeholder='Search for friend, post or video' className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarlink">Homepage</span>
                <span className="topbarlink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <ChatIcon/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <NotificationsIcon/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>       
    </div>
  )
}

export default Topbar