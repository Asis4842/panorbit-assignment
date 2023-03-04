import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UserActions } from '../../redux/actions/UserActions'

const SignOutButton = styled.div`
width: 35%;
height: 35px;
border-radius: 25px;
display: flex;
justify-content: center;
align-items: center;
background-color: #d55151;
color: #fff;
font-weight: 500;
margin-top: 10px;
&:hover{
  cursor: pointer;
}

`
const UserCard = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-top: 2px solid #fbfbfb;
width: 90%;
padding:4px;
margin-top: 5px;
margin-bottom: 5px;
&:hover{
    cursor: pointer;
    background-color: #4E48C860;
}

`
const Avatar = styled.div`
height: 30px;
width: 30px;
border-radius: 100px;
margin-right: 8px;
display:flex;
align-items: center;
justify-content: center;

`
const UserName = styled.p`
color:'#e4e4e4';
font-size: 14px;
font-weight: 400;
`

const LoginModal = ({closeModal}) => {
  const selectedUser = useSelector((state)=>state.userReducer?.selectedUser)
  const userList = useSelector((state)=>state.userReducer?.accountList)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [changeAccount,setChangeAccount] = useState([])
useEffect(()=>{
const filterArray = userList.filter((item,ind)=>item?.id!==selectedUser?.id)
const random = Math.floor(Math.random()*(filterArray?.length-4))
const resultArray = filterArray.slice(random,random+2)
setChangeAccount(resultArray)
},[selectedUser])

const handleSignOut =async(e)=>{
e.stopPropagation()
 dispatch(UserActions.logoutUser())

}
const handleAccountSelected =async(item)=>{
  await dispatch(UserActions.selectedUser(item))
 navigate("/profileDetail")
 }

  return (
    <Container onClick={()=>closeModal(false)}>
    <LogoutCard>
    <img src={selectedUser?.profilepicture} alt={selectedUser?.username} style={{
      objectFit:'cover',
      height:'80px',
      width:'80px',
      borderRadius:'80px'
  }} />
     <p>{selectedUser?.name}</p>
     <p>{selectedUser?.email}</p>
     {changeAccount?.map((item,ind)=>{
      return (
        <UserCard
        key={item.id}
        onClick={()=>handleAccountSelected(item)}
        >
        <Avatar >
        <img src={item?.profilepicture} alt={item?.username} style={{
            objectFit:'cover',
            height:'100%',
            width:'100%',
            borderRadius:'inherit'
        }} />
        </Avatar>
         <UserName>{item?.name}</UserName>
        </UserCard>
      )
     })}
    
     <SignOutButton 
     onClick={(e)=>handleSignOut(e)}
     >
     <p>Sign out</p>
     </SignOutButton>
    </LogoutCard>
    </Container>
  )
}

export default LoginModal

const Container = styled.div`
height: 100vh;
width: 100%;
background-color: transparent;
position: absolute;
top:0;
left: 0;
`
const LogoutCard = styled.div`
width: 270px;
height: 340px;
border-radius: 20px;
background-color: #fff;
position: absolute;
top:60px;
right: 90px;
box-shadow: 0 30px 44px 0 rgba(0,0,0,.3);
display: flex;
flex-direction: column;
align-items: center;
gap:8px;
padding:18px
`