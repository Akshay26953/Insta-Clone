import SearchOutlined from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import './Chat.css';
import MoreVert from '@mui/icons-material/MoreVert';

function Chat() {
  return (
    <div className='chat'>
        <div className="header">
          <Avatar/>
          <div className="header_info">
            <h3>Room Name</h3>
            <p>Last seen at ....</p>
          </div>
          <div className="header_Right">
            <IconButton>
              <SearchOutlined/>
            </IconButton>
            <IconButton>
              <AttachFileIcon/>
            </IconButton>
            <IconButton>
              <MoreVert/>
            </IconButton>
          </div>
        </div>
        <div className="chat_body">
          
        </div>
    </div>
  )
}

export default Chat