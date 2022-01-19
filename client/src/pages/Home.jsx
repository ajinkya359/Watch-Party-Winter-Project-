import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Chat from '../components/Chat'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { backend } from '../backend'
import { Navigate, useNavigate } from 'react-router-dom'
import RoomSelection from '../components/RoomSelection/RoomSelection'
import { RoomId } from '../Context/room_id'

const Main = styled.div`
display: flex;
`;
const Left = styled.div ``;

const Home = () => {
    const navigate=useNavigate();
    const [room_id, setroom_id] = useState("")
    const [username, setusername] = useState("")
    useEffect( () => {
         axios.get(backend+"/check_login_status",{withCredentials:true})
        .then(res=>{
            console.log(res.data)
            const data=res.data
            console.log(res.data);
            if(data.status)
            {
                setusername(data.username)
            }
            else{
                alert("Not logged in ")
                navigate('/login')
                // setusername("Not logged in")
            }
        }).catch(err=>console.log(err))
    }, [])
    return (
        <div>
            {/* <RoomId.Provider value="This is the room id"> */}
            {/* {room_id} */}
            <Navbar username={username}/>
            {room_id===''?<RoomSelection setroom_id={setroom_id}/>:<Chat room_id={room_id} />}
            
        </div>
    )
}

export default Home
