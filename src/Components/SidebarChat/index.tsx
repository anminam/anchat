import React from "react";
import { Avatar } from "@material-ui/core";
import "./sidebarChat.scss";

const SidebarChat = () => {
  return (
    <div className="sidebar-chat">
      <Avatar />
      <div className="sidebar-chat__info">
        <h2>Room name</h2>
        <p>This is last message</p>
      </div>
    </div>
  );
};

export default SidebarChat;
