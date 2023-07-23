import React from 'react'
import './Post.css';
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';


function Post({name, description , message, photoUrl}) {
  return (
    <div className='post'>
        <div className='post_header'>
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className='post_info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className='post_body'>
            <p>{message}</p>
            
        </div>

        <div className='post_buttons'>
            <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray"/>
            <InputOption Icon={ChatIcon} title="Comment" color="gray"/>
            <InputOption Icon={RepeatIcon} title="Repost" color="gray"/>
            <InputOption Icon={SendIcon} title="Send" color="gray"/>
        </div>

    </div>
  );
}

export default Post;