import React, { useState } from 'react'
import styled from 'styled-components'
import ChatModal from '../ChatModal/ChatModal'

const Footer = () => {
    const [chatModal,setChatModal] = useState(false)

  return (
   <Container>
     <ChatTop
     onClick={()=>setChatModal(!chatModal)}
     >
    <p>Chats</p>
    <p>^</p>
     </ChatTop>

     {chatModal && <ChatModal closeModal={setChatModal} />}
   </Container>
  )
}

export default Footer
const Container = styled.div`
height:70px;
width: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
padding-right: 110px;
`
const ChatTop = styled.div`
width: 230px;
height: 80%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 4px;
background-color: #2c65c8;
border-top-left-radius: 4px;
border-top-right-radius:4px;
color: #fff;
`