import React, { useState } from "react";
import "./chat.scss";
import { Avatar, IconButton } from "@material-ui/core";
import axios from "../../core/axios";

import ChatIcon from "@material-ui/icons/Chat";
import MoreIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import EmojiEmotions from "@material-ui/icons/EmojiEmotions";
import { IMessage } from "../../Interfaces/IMessage";

interface IProps {
  messages: IMessage[];
}
const Chat = ({ messages }: IProps) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios.post("/api/messages/new", {
      message: input,
      name: "Anminam",
      timestamp: new Date().toString,
      received: false,
    });

    setInput("");
  };

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
        {messages.map((item, i) => (
          <p
            key={i}
            className={`chat__body__message ${
              item.received && "chat_body_reciever"
            }`}
          >
            <span className="chat__name">{item.name}</span>
            {item.message}
            <span className="chat__time">{item.timestamp}</span>
          </p>
        ))}
      </div>
      <footer className="chat__footer">
        <EmojiEmotions />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="입력해주세요.."
          />
          {/* <button type="submit">Send a Message</button> */}
        </form>
      </footer>
    </section>
  );
};

export default Chat;
