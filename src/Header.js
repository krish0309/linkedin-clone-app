import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import icon_linkedin from './images/icon_linkedin.svg';

import HeaderOption from './HeaderOption'
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
//import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';


function Header() {
  


  const dispatch = useDispatch()
  const logoutOfApp = () =>{
    dispatch(logout());
    auth.signOut();

  };


  return (
    <div className='header'>
        <div className="header_left">
            <img src={icon_linkedin} alt=""/>
            <div className='header_search'>
                <SearchIcon />
                <input type="text"/>
            </div>

        </div>
        <div className="header_right">
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccount} title='My Network' />
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
            <HeaderOption Icon={ChatIcon} title='Messaging' />
            <HeaderOption Icon={NotificationsIcon} title='Notification' />
            <HeaderOption onClick={logoutOfApp} avatar="https://bit.ly/43sZs9I" title='Me' />
        </div>




    </div>
  )
}

export default Header