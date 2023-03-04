import React, { useState } from 'react'
import styled from 'styled-components'
import LoginModal from '../LoginModal/LoginModal'

const Header = (props) => {
    const {
        title,
        username,
        profilepic
    }=props
    const [modal,setModal]=useState(false)
  return (
    <Container>
    <Title>{title}</Title>
    <UserCard
  
    onClick={()=>setModal(!modal)}
    >
    <Avatar >
    <img src={profilepic} alt={username} style={{
        objectFit:'cover',
        height:'100%',
        width:'100%',
        borderRadius:'inherit'
    }} />
    </Avatar>
     <UserName>{username}</UserName>
    </UserCard>
   {modal && <LoginModal closeModal={setModal} />}
    </Container>
  )
}

export default Header

const Container = styled.div`
height:100%;
width: 100%;
border-bottom: 3px solid #eee;
display: flex;
align-items: center;
justify-content: space-between;

`
const Title = styled.div`
color: #646464;
font-size: 22px;
font-weight: 500;
`
const UserCard = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width: 25%;
padding:4px;
&:hover{
    cursor: pointer;
  
}

`
const Avatar = styled.div`
height: 30px;
width: 30px;
border-radius: 100px;
background-color: yellow;
margin-right: 10px;
display:flex;
align-items: center;
justify-content: center;

`
const UserName = styled.p`
color:'#b9b9b9';
font-size: 14px;
font-weight: 500;
`
