import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'

import RoomSelection from '../components/RoomSelection/RoomSelection'

import {Home} from './Home/Home'

const JoinRoom = ({currUser, setCurrUser}) => {

    const [room_id, setroom_id] = useState("")
    
    return (
        <div>
            <Navbar currUser={currUser} setCurrUser={setCurrUser}/>
            {room_id===''?<RoomSelection setroom_id={setroom_id}/>:<Home room_id={room_id} username={currUser}/>}
        </div>
    )
}

export default JoinRoom
