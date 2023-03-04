import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { UserActions } from '../../redux/actions/UserActions'

const SentMessage =styled.div`
width:100%;
border-top:1px solid #eee;
height:7%;
display:flex;
align-items:center;
justify-content:space-between;
padding:5px
`

const ToMessage = styled.div`
background-color: #f1f1f1;

max-width: 100px;
padding: 5px;
color:#b3b3b3;
font-size: 13px;
display: flex;
border-top-left-radius: 0px;
border-top-right-radius: 3px;
border-bottom-left-radius: 3px;
border-bottom-right-radius: 3px;
margin:5px 0px;
align-self: flex-start;
`
const FromMessage = styled.div`
background-color: #f1f1f1;

max-width: 100px;
padding: 5px;
color:#b3b3b3;
display: flex;
font-size: 13px;
border-top-left-radius: 3px;
border-top-right-radius: 0px;
border-bottom-left-radius: 3px;
border-bottom-right-radius: 3px;
margin:5px 0px;
align-self: flex-end;
`


const ChatModal = ({closeModal}) => {
    const userList = useSelector((state)=>state.userReducer?.accountList)
    const selectedUser = useSelector((state)=>state.userReducer?.selectedUser)
    const chatUsers = useSelector((state)=>state.userReducer?.chatUsers)
    const dispatch = useDispatch()
 
    const [chatAccount,setChatAccount] = useState([])
    const [openPersonalChat,setOpenPersonalChat] = useState(false)
    useEffect(()=>{
    const filterArray = userList.filter((item,ind)=>item?.id!==selectedUser?.id)
    setChatAccount(filterArray)
    },[userList])
 
    const handleChatAccountSelected=async(item,e)=>{
        e.stopPropagation()
       await dispatch(UserActions.chatSelectedUser(item))
        setOpenPersonalChat(true)
    }

const handlePersonalChatClick =(e)=>{
    e.stopPropagation()
}

    return (
    <Container
    onClick={()=>closeModal(false)}
    >
    <ChatUserCard>
    <ChatTop>
    <p>Chats</p>
    <p>^</p>
    </ChatTop>
    <ChatBottom>
    {chatAccount?.map((item,ind)=>{
        return (
          <UserCard
          key={item.id}
          onClick={(e)=>handleChatAccountSelected(item,e)}
          >
          <div style={{
            display:'flex',
            justifyItems:'flex-start',
            alignItems:'center'
          }}>
          <Avatar >
          <img src={item?.profilepicture} alt={item?.username} style={{
              objectFit:'cover',
              height:'100%',
              width:'100%',
              borderRadius:'inherit'
          }} />
          </Avatar>
           <UserName>{item?.name}</UserName>
          </div>
          <div style={{
            height:'7px',
            width:'7px',
            borderRadius:'7px',
            backgroundColor:"#1fa551"
          }}></div>
          </UserCard>
        )
       })}
    </ChatBottom>
    </ChatUserCard>
     {openPersonalChat && 
        <ChatPersonalCard
        onClick={(e)=>handlePersonalChatClick(e)}
        >
        <ChatPersonalTop>
        <div style={{
          display:'flex',
          alignItems:'center',

        }}>
        <img src={chatUsers[1]?.profilepicture} alt="img" style={{
            height:'20px',
            width:'20px',
            borderRadius:'20px',
            marginRight:'5px',
            objectFit:'cover'
        }} />
        <p style={{
            fontSize:'13px'
        }}>{chatUsers[1]?.name}</p>
        </div>
        <div style={{
            display:'flex',
            alignItems:'center',
  
          }}>
          <img src={'/images/down-arrow.png'} alt="img" style={{
            height:'20px',
            width:'20px',
            objectFit:'cover',
            color:'#fff'
        }} />
          <p onClick={(e)=>{
            e.stopPropagation()
            setOpenPersonalChat(false)
        }}>X</p>
        </div>
        
        </ChatPersonalTop>
           <ChatPersonalBottom>
           <ToMessage>Lorem mesage</ToMessage>
           <ToMessage>Lorem mesage</ToMessage>
           <FromMessage>My Message side</FromMessage>
           <ToMessage>ok</ToMessage>
           <ToMessage>Lorem mesage</ToMessage>
           <FromMessage>My Message side 2</FromMessage>
           <FromMessage>My Message side 3</FromMessage>
           <FromMessage>My Message side 34</FromMessage>
          
           </ChatPersonalBottom>
           <SentMessage>
           <p></p>
           <img src={'/images/sendicon.png'} alt="send" style={{
            height:'20px',
            width:'20px',
           
            objectFit:'contain'
        }} />
           </SentMessage>
        </ChatPersonalCard>}
    </Container>
  )
}

export default ChatModal
const Container = styled.div`
height: 100vh;
width: 100%;
background-color: transparent;
position: absolute;
top:0;
left: 0;
`
const ChatUserCard = styled.div`
width: 230px;
height: 320px;

background-color: #fff;
position: absolute;
bottom:0;
right: 110px;
box-shadow: 0 30px 44px 0 rgba(0,0,0,.3);
display: flex;
flex-direction: column;
align-items: center;
border-left: 1px solid #2c65c8;
border-right: 1px solid #2c65c8;
border-top-left-radius: 4px;
border-top-right-radius:4px;


`

const ChatTop = styled.div`
width: 230px;
height: 13%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 4px;
background-color: #2c65c8;
border-top-left-radius: 4px;
border-top-right-radius:4px;
color: #fff;
`
const ChatBottom = styled.div`
width: 220px;
height: 87%;
display: flex;
align-items: center;
flex-direction: column;
overflow-y: scroll;
overflow-x: hidden;
&::-webkit-scrollbar{
    width: 5px;
	background-color: #fff;
   border-bottom-right-radius:10px;
};
&::-webkit-scrollbar-thumb
{
	border-radius: 5px;
	background-color: #f5f5f5;
};
`

const UserCard = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 95%;
padding:6px;
&:hover{
    cursor: pointer;
    background-color: #4E48C860;
}

`
const Avatar = styled.div`
height: 27px;
width: 27px;
border-radius: 100px;
margin-right: 8px;
display:flex;
align-items: center;
justify-content: center;

`
const UserName = styled.p`
color:'#e4e4e4';
font-size: 12px;
font-weight: 400;
`

const ChatPersonalCard = styled.div`
width: 230px;
height: 320px;

background-color: #fff;
position: absolute;
bottom:0;
right: 380px;
box-shadow: 0 30px 44px 0 rgba(0,0,0,.3);
display: flex;
flex-direction: column;
align-items: center;
border-left: 1px solid #2c65c8;
border-right: 1px solid #2c65c8;
border-top-left-radius: 4px;
border-top-right-radius:4px;


`
const ChatPersonalTop = styled.div`
width: 230px;
height: 13%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 10px;
background-color: #2c65c8;
border-top-left-radius: 4px;
border-top-right-radius:4px;
color: #fff;
`
const ChatPersonalBottom = styled.div`
width: 220px;
height: 80%;
display: flex;
align-items: center;
padding:5px;
flex-direction: column;
position: relative;
overflow-y: scroll;
overflow-x: hidden;
&::-webkit-scrollbar{
    width: 5px;
	background-color: #fff;
   border-bottom-right-radius:10px;
};
&::-webkit-scrollbar-thumb
{
	border-radius: 5px;
	background-color: #f5f5f5;
};
`
