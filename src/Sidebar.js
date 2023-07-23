import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) =>(
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p className='sidebar_topic'>{topic}</p>
        </div>
    )

    

  return (
    <div className="sidebar">
        <div className="sidebar_top">
            <img src="https://th.bing.com/th/id/R.721f4b6209c44e6df051e09a4bd5153c?rik=Ai0gLkBodxNvoA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-SlZELCXM5A4%2fUkL90VSVQoI%2fAAAAAAABESE%2fOOa0WWnMwvA%2fw1200-h630-p-k-no-nu%2fAnd%2bwe%2ball%2bshine%2bon%2blike%2bthe%2bmoon%2band%2bthe%2bstars%2band%2bthe%2bsun.jpg&ehk=%2f9mENmjud0QJ%2feBj0VMCFpRpGfcFoob1wZi%2fbcsHqPQ%3d&risl=&pid=ImgRaw&r=0" alt=""/>
            <Avatar src={user?.photoUrl} className='sidebar_avatar'>{user?.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>

        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className="sidebar_StatNumber">2465</p>
                
            </div>
            <div className="sidebar_stat">
                <p>Views on post</p>
                <p className="sidebar_StatNumber">2465</p>
                
            </div>

        </div>
        <div className='sidebar_bottom'>
            <p>Recent</p>
            {recentItem('reactJs')}
            {recentItem('softwareengineering')}
            {recentItem('programing')}
            {recentItem('typescript')}
            {recentItem('devOps')}
            

        </div>

    </div>
  );
}

export default Sidebar;