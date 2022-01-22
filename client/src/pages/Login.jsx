import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import img from '../images/login.png'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { getUserCall, LoginCall } from '../ApiCalls'

const Container = styled.div`
width: 100vw;
height: 100vh;
background:  linear-gradient(                  
            rgba(255,255,255,0.5),         
            rgba(255,255,255,0.5)
            ),                           // Linear gradient to apply opacity to the background-image.
            /* url(${img}); */
            url('https://cdn.shopify.com/s/files/1/0972/9458/articles/Outdoor_movie_1024x1024.jpg?v=1533094315'); 
background-size: cover; 
background-repeat: no-repeat;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color: white;
border-radius: 10px;
${mobile({ width: "80%",})}

`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
margin-left: 36%;
`

const Form = styled.form`
display: flex;
flex-direction: column;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 8px 0px ;
padding: 10px;
`

const Button = styled.button`
width: 100%;   //40% means 40% of the available space of the parent element
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
/* margin-left: 29%; */
margin-bottom: 10px;
margin-top: 10px;
&:disabled{
    background-color: #dbdbdb;
    color: teal;
    cursor: not-allowed;
}

`
const LINK = styled.a`
    margin: 5px 0px;
    font-size: 15px;
`
const Error = styled.span`
    color: red;
    font-size: 15px;
`

const Login = ({currUser, setCurrUser}) => {

    const navigate=useNavigate();
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error,seterror]=useState(false)
    

    useEffect( async() => {
        const res = await getUserCall();
        if(res.status === 200)
         {
             setCurrUser(res.data.username)
         }
         else{
             setCurrUser(null);
         }
    }, []);
    
    useEffect(() => {
        if(error){
            document.getElementById("err").style.display="block"
        }
        else{
            document.getElementById("err").style.display="none"
        }
    }, [error]);
    

    const handleClick = async (e)=>{
        e.preventDefault();
        seterror(null);
        const data={
            email:email,
            password:password
        }

        const res1 = await LoginCall(data);    //Api call for login. Imported from apiCalls.js file 
        if(res1.data.error){
           seterror(true);
        }
        const res2 = await getUserCall();
        if(res2.status === 200)
         {
             setCurrUser(res2.data.username)
         }     
      
      
    }
        return (
        <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input type="email" placeholder="email" onChange={(e)=> setemail(e.target.value)} required/>
                <Input type="password" minLength={5} placeholder="password" onChange={(e)=> setpassword(e.target.value)} required/>
                <Button onClick={handleClick} >LOGIN</Button>  
                <Error id="err">Something went wrong..</Error>
                <LINK >Don't have an account ? <Link to="/register"> Register</Link> </LINK>

            </Form>
        </Wrapper>
    </Container>
    )
}

export default Login
