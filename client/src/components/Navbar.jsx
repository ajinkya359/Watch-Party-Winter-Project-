import React from 'react'
import styled from 'styled-components'
import {Person} from '@material-ui/icons'

const Container = styled.div`
height: 50px;
width: 100vw;
background-color: #feffc2;
`;
const Wrapper = styled.div`
 display: flex;
 padding: 10px;
 
`;

const Left = styled.div`
 flex: 25%;
 font-size: 18px;
 margin-top: 2px;
`;
const Title = styled.div`
cursor: pointer;
/* border: 1px solid black; */
width: 105px;
`;

const Right = styled.div`
flex: 75%;
display: flex;
justify-content: flex-end;
align-items: center;
font-size: 15px;
`;
const MenuItems = styled.div`
 margin-left: 20px;
 cursor: pointer;
`; 
const Username = styled.div`
border: 1px solid gray;
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
padding-left: 5px;
padding-right: 5px;
align-items: center;
display: flex;
`;


const Navbar = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                  <Left>
                      <Title>
                    <b>Watch-Party</b>
                    </Title>
                  </Left>
                  <Right>
                      <MenuItems>
                      <Username>
                        Sarthak Jain
                        <Person style={{"marginLeft":"5px"}}/>
                      </Username>
                      </MenuItems>
                      <MenuItems>
                         About Us
                      </MenuItems>
                      <MenuItems>
                        LogOut
                      </MenuItems>
                      
                  </Right>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Navbar
