import React from "react";
import "./App.scss";
import SideBar from "../Components/Sidebar";
import Chat from "../Components/Chat";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        {/* <h1>Anminam Chat</h1> */}
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
