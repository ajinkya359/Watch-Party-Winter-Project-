import React from 'react'
import styled from 'styled-components'
import Chat from '../components/Chat'
import Navbar from '../components/Navbar'

const Main = styled.div`
display: flex;
`;
const Left = styled.div ``;

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Chat/>
        </div>
    )
}

export default Home
