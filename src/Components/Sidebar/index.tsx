import React from "react";
import "./sidebar.scss";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton, Avatar } from "@material-ui/core";
import SidebarChat from "../SidebarChat";

const SideBar = () => {
  return (
    <section className="sidebar">
      {/* 해드 */}
      <header className="sidebar__header">
        <Avatar src="https://avatars0.githubusercontent.com/u/16949022?s=460&u=bce9b2279de733dcd3bacd0dc4c5e3a5ddd26f5d&v=4" />
        <div className="sidebar__header__right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreIcon />
          </IconButton>
        </div>
      </header>
      {/* 찾기 */}
      <div className="sidebar__search">
        <div className="sidebar__search__container">
          <SearchIcon />
          <input placeholder="찾기 또는 만들기" type="text" />
        </div>
      </div>
      {/* Chat List */}
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </section>
  );
};

export default SideBar;
