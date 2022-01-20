import React,{useEffect} from "react";
import "./Chat.css";
const {io} = require('socket.io-client')
// import {io} from "socket.io-client";

 const socket = io("http://localhost:5000");
// export default io;

const Chat = (props) => {
  const sendMessage = () => {
    const message2 = document.getElementById("message");
    console.log("sending message", message2.value);
    socket.emit("send-message", {
      msg: message2.value,
    });
  };
  socket.on("recieve-message", (data) => {
    console.log("message",data.msg);
    // const list=document.getElementById('message_list')
    // var entry = document.createElement("div");
    // entry.appendChild(document.createTextNode(data.msg));
    // list.appendChild(entry);
  });
  useEffect(()=>{
socket.on("connection", () => {
  console.log("connection", "connected");
  const list = document.getElementById("message_list");
  var entry = document.createElement("div");
  entry.appendChild(document.createTextNode("Connected to server"));
  list.appendChild(entry);
});
  })
  
  return (
    <div className="container">
      Room:{props.room_id}
      <div className="chatbox">
        <div className="OutputWindow" id="ow">
          <div className="Output">
            <div className="Username">
              <b>username:</b>
            </div>
            <div className="Message"> message body</div>
          </div>
          <ul id="message_list">
            
          </ul>
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
