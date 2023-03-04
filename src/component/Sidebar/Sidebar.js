import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const navbar =[
    {
        id:'1profileDetail',
        name:'Profile',
        to:'/profileDetail'
    },
    {
        id:'2postDetail',
        name:'Post',
        to:'/postDetails'
    },
    {
        id:'3gallery',
        name:'Gallery',
        to:'/gallery'
    },
    {
        id:'4todo',
        name:'ToDo',
        to:'/todo'
    },
]

const Sidebar = (props) => {
  
const navigate = useNavigate()
const loc=useLocation()
console.log(loc.pathname)

    const [selected,setSelected]= useState(loc.pathname)


    const handleSelected =(item)=>{
        setSelected(item.to)
        navigate(item.to)
    }
  return (
    <Container>
      {navbar.map((item)=>{
   return (
    <Link
    onClick={()=>handleSelected(item)}
    key={item.id}
    >
    <Title
    style={selected===item.to?{color:'#fff'}:null}
    >{item.name}</Title>
   {selected===item.to && <Design>
    
    </Design>}
    </Link>
   )
      })}
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
width: 100%;
height: 100%;
background: rgb(59,88,200);
background: linear-gradient(180deg, rgba(59,88,200,1) 35%, rgba(90,62,200,1) 100%);
border-radius: 29px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Link = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 16px 0px;
border-bottom: 2px solid #807fd8;
position: relative;
&:nth-last-child(1){
    border-bottom: none;
}
`
const Title= styled.h4`
color: #9291de;
font-size: 18px;
font-weight: 500;
`
const Design= styled.div`
background-color: #fff;
width: 50px;
height: 75%;
border-radius: 100px;
position: absolute;
top:2px;
right: -60px;
`

