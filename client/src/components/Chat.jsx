import React from "react";
import styled from "styled-components";
import { socket } from "./SocketConnection";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./Chat.css";

const Chat = () => {
  const [message, setMessage] = useState(null);
  const [messages, setMessages] = useState([]);
  const sendMessage = () => {
    const message2 = document.getElementById("message");
    console.log("sending message", message2.value);
    socket.emit("send-message", {
      // username: cookies.get("username")
      msg: message2.value,
    });
  };

  console.log(socket);
  useEffect(() => {
    socket.on("recieve-message", (data) => {
      // var ow = document.getElementById("ow");
      console.log(data.msg);
      // ow.innerHTML +=   data.msg;
      setMessage(data.msg);
      setMessages((messages) => [...messages, data.msg]);
    });
  }, []);
  return (
    // <div>
    <div className="container">
      <div className="chatbox">
        <div className="OutputWindow" id="ow">
          <div className="Output">
            <div className="Username">
              <b>username:</b>
            </div>
            <div className="Message"> message body</div>
          </div>
          {messages &&
            messages.map((msg) => <div className="Output">{msg}</div>)}
        </div>
        <div className="TypeMessage">
          <input
            className="Input"
            id="message"
            placeholder="Type here.." /*onChange={ (e) => {setmessage(e.target.value)}}*/
          ></input>
          <div className="Send" id="send" onClick={sendMessage}>
            Send
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
