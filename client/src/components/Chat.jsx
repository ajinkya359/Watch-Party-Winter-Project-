import React from "react";
import styled from "styled-components";
import { socket } from "./SocketConnection";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const Container = styled.div`
  width: 20vw;
  border: 2px solid black;
  position: fixed;
  right: 0;
`;
const Chatbox = styled.div`
  display: flex;
  flex-direction: column;
  height: 91vh;
`;
const OutputWindow = styled.div`
  flex: 90%;
  
  background-color: #eaeefff7;
  
  overflow-y: scroll;
`;
const TypeMessage = styled.div`
  flex: 10%;
  
  display: flex;
  align-items: center;
  background-color: #e4f0af;
  border-top: 2px solid black;
  margin-top: 10px;
  
`;
const Input = styled.input`
  flex: 80%;
  margin-left: 15px;
  width: 220px;
  height: 20px;
  background-color: #eafeff;
`;
const Send = styled.button`
  height: 26px;
  cursor: pointer;
  flex: 20%;
  width: 2px;
  margin-right: 15px;
  background-color: teal;
  color: white;
`;
const Output = styled.div`
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid red;
  margin: 15px 15px;
  word-break: break-word; //To bring the overflowing text in a new line
`;
const Username = styled.div`
  
`;
const Message = styled.div`
  
`;
const Chat = () => {
  const [message, setMessage] = useState(null)
  const [messages, setMessages] = useState([])
  const sendMessage = ()=>{
    const message2 = document.getElementById("message");
    console.log("sending message", message2.value);
    socket.emit('send-message', {
      // username: cookies.get("username")
      msg: message2.value,
    })
  }
  
  console.log(socket)
useEffect(()=>{  
  socket.on('recieve-message', (data)=>{
      // var ow = document.getElementById("ow");
      console.log(data.msg)
      // ow.innerHTML +=   data.msg;
      setMessage(data.msg);
      setMessages(messages =>[...messages, data.msg])
  })
}, [])
  return (
    <div>
      <Container>       
        <Chatbox>
          <OutputWindow id="ow">
            <Output>
              <Username><b>username:</b></Username>
              <Message> message body</Message>
            </Output>
            {
              messages && messages.map((msg)=><Output>{msg}</Output>)
            }
          </OutputWindow>
          <TypeMessage>
          {/* <Input id="handle" placeholder="handle.." /> */}
            <Input id="message" placeholder="Type here.."  /*onChange={ (e) => {setmessage(e.target.value)}}*//>
            <Send id="send" onClick={sendMessage}>Send</Send>
          </TypeMessage>
        </Chatbox>
      </Container>
    </div>
  );
};

export default Chat;
