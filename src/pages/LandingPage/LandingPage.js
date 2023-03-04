import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UserActions } from '../../redux/actions/UserActions'

const LandingPage = () => {
    const AccountData = useSelector((state)=>state.userReducer?.accountList)

const dispatch = useDispatch()
const navigate = useNavigate()

    useEffect(()=>{
      const getUserApi =async()=>{
        try{

        
        const resp= await axios.get('https://panorbit.in/api/users.json')
       
        dispatch(UserActions.getUsers(resp?.data?.users))
        }catch(err){
            console.log(err)
        }
      }
      getUserApi()
    },[])

    const handleAccountSelected =async(item)=>{
     await dispatch(UserActions.selectedUser(item))
    navigate("/profileDetail")
    }
  return (
    <Container>
     <div
     style={{
      position:'absolute',
      top:'0',
      left:'0',
      width:'100%',
      height:'50vh',
      
     }}
     >
     <img src='/images/svg.png' alt="bgimage" style={{
      objectFit:'cover',
      height:'100%',
      width:'100%'
     }} />
     </div>
      <AccountSelectCard>
      <Header>
      <HeadText>Select an account</HeadText>
      </Header>
      
       <AccountList>
       {AccountData && AccountData?.map((item,ind)=>{
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
       </AccountList>
      </AccountSelectCard>
    </Container>
  )
}

export default LandingPage

const Container= styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
height: 100vh;

`

const AccountSelectCard = styled.div`
width: 35%;
height: 440px;
box-shadow: 0 10px 14px 0 rgba(0,0,0,.3);
display: flex;
flex-direction: column;
background-color: #fff;
border-radius:10px;
z-index:1;
`

const Header = styled.div`
width: 100%;
flex: 2;
display: flex;
align-items: center;
justify-content: center;
background-color: #f6f6f6;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
margin-bottom: 8px;
`
const AccountList = styled.div`
width: 100%;
flex: 8;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
background-color: #fff;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
overflow-y: scroll;
overflow-x: hidden;
&::-webkit-scrollbar{
    width: 8px;
	background-color: #fff;
   border-bottom-right-radius:10px;
};
&::-webkit-scrollbar-thumb
{
	border-radius: 8px;
	background-color: #f5f5f5;
};
`

const HeadText = styled.p`
color:'#727272';
font-size: 15px;
font-weight: 600;
`

const UserCard = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
border-bottom: 2px solid #fbfbfb;
width: 90%;
padding:4px;
&:hover{
    cursor: pointer;
    background-color: #4E48C860;
}

`
const Avatar = styled.div`
height: 40px;
width: 40px;
border-radius: 100px;
background-color: yellow;
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
