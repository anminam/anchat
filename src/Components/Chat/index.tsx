import React from "react";
import "./chat.scss";
import { Avatar, IconButton } from "@material-ui/core";

import ChatIcon from "@material-ui/icons/Chat";
import MoreIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import EmojiEmotions from "@material-ui/icons/EmojiEmotions";

const Chat = () => {
  return (
    <section className="chat">
      <header className="chat__header">
        <Avatar />
        <div className="chat__header__info">
          <h3>Room Name</h3>
          <p>마지막메시지</p>
        </div>
        <div className="chat__header__right">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreIcon />
          </IconButton>
        </div>
      </header>
      <div className="chat__body">
        <p className="chat__body__message">
          <span className="chat__name">안미남</span>
          안녕 훈민아
          <span className="chat__time">{new Date().getTime()}</span>
        </p>
        <p className="chat__body__message chat_body_reciever">
          <span className="chat__name">안미남</span>
          안녕 훈민아
          <span className="chat__time">{new Date().getTime()}</span>
        </p>
        <p className="chat__body__message">
          <span className="chat__name">안미남</span>
          안녕 훈민아
          <span className="chat__time">{new Date().getTime()}</span>
        </p>
      </div>
      <footer className="chat__footer">
        <EmojiEmotions />
        <form>
          <input type="text" placeholder="입력해주세요.." />
        </form>
      </footer>
    </section>
  );
};

export default Chat;
