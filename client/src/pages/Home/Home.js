import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Chat } from '../../components/Chat/Chat';
import RoomData from '../../components/RoomData/RoomData';
import Video from '../../components/Video/Video';
import './Home.css'
import io from 'socket.io-client'

let socket = null;

// const ENDPOINT = "http://localhost:5000";
const ENDPOINT = process.env.NODE_ENV ? "https://watch-party-sarthak.herokuapp.com/" : "http://localhost:5000";                     
// const ENDPOINT = "https://watch-party-sarthak.herokuapp.com/";

const Home = ({room_id, username}) => {

  const [Socket, setSocket] = useState(null);

  const navigate = useNavigate();
  useEffect(()=>{
 
    if(room_id && username){
      
       socket= io(ENDPOINT)
       setSocket( socket );
       
    }
  }, [room_id, username]);

  useEffect(() => {
    if(Socket){
      Socket.emit('join', {username, room_id} , (error)=>{ 
        if(error){                                         
            Socket.disconnect();                           
            navigate("/login");                             
            alert(error); 
        }
      })

    }
  }, [Socket]);
  


  const [users, setusers] = useState(null);

  return (<div >
      {/* <Navbar/> */}
      <RoomData users={users}/>      
      <div className='home'>
      <Video className="homevid" Socket={Socket}/>
      <Chat className="homechat" Socket={Socket} room_id={room_id} username={username} setusers={setusers}/>
      </div>
  </div>
  );
};

export {Home, socket};
