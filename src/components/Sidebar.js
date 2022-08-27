import React from "react";
import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MessageIcon from "@mui/icons-material/Message";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="header">
        <div className="header_left">
          <Avatar src="https://cdn.britannica.com/60/222660-050-064DBA89/Dwayne-Johnson-AKA-The-Rock-2019.jpg?w=400&h=300&c=crop" />
        </div>
        <div className="header_right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <MessageIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="search">
        <div className="searchContainer">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search or start new chat" name="searchBar" id="searchBar" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
      </div>
    </div>
  );
}

export default Sidebar;
