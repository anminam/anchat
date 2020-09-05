import React, { useEffect, useState } from "react";
import "./App.scss";
import SideBar from "../Components/Sidebar";
import Chat from "../Components/Chat";
import Pusher from "pusher-js";
import axios from "../core/axios";
import { IMessage } from "../Interfaces/IMessage";

const App = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  useEffect(() => {
    axios.get("/api/messages/sync").then((res) => {
      console.log(res.data);
      setMessages(res.data);
    });
  }, []);

  // 실시간 DB
  useEffect(() => {
    var pusher = new Pusher("d5c717f342e8fa5d1618", {
      cluster: "ap3",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage: any) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log("메인", messages);

  return (
    <div className="app">
      <div className="app__body">
        {/* <h1>Anminam Chat</h1> */}
        <SideBar />
        <Chat messages={messages} />
      </div>
    </div>
  );
};

export default App;
