import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Chat from '../components/Chat'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { backend } from '../backend'
import { Navigate, useNavigate } from 'react-router-dom'

const Main = styled.div`
display: flex;
`;
const Left = styled.div ``;

const Home = () => {
    const navigate=useNavigate();
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
            <Navbar username={username}/>
            <Chat/>
        </div>
    )
}

export default Home
