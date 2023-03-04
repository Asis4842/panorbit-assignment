import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Header from '../../component/Header/Header'
import Sidebar from '../../component/Sidebar/Sidebar'


const PostDetailsPage = () => {
    const User = useSelector((state)=>state.userReducer?.selectedUser)
  
  return (
   <Container>
   <Navbar>
   <Sidebar />
   </Navbar>
  
   <MainContent>
   <Head>
   <Header 
   title="Posts"
   username={User?.name}
   profilepic={User?.profilepicture}
   />
   </Head>
   <Body>
   <h1 style={{
    color:'#eeeeee',
    fontSize:'60px'
   }}>Coming Soon</h1>
   </Body>
   
   </MainContent>
   </Container>
  )
}

export default PostDetailsPage

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: #fff;
`
const Navbar = styled.div`
width: 17%;
height: 100%;
margin: 2px;

`

const MainContent = styled.div`
width: 83%;
height: 100%;
background-color: #fff;
display: flex;
flex-direction: column;
align-items: center;
`
const Head = styled.div`
width: 90%;
height: 16%;

`
const Body = styled.div`
width: 90%;
height: 84%;
display: flex;
align-items: center;
justify-content:center ;
`