import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import Sidebar from '../../component/Sidebar/Sidebar'




const ProfileDetailPage = () => {
    const User = useSelector((state)=>state.userReducer?.selectedUser)
   
  return (
   <Container>
   <Navbar>
   <Sidebar />
   </Navbar>
  
   <MainContent>
   <Head>
   <Header 
   title="Profile"
   username={User?.name}
   profilepic={User?.profilepicture}
   />
   </Head>
   <Body>
   <UserInfo>
   <Info>
  
   <img src={User?.profilepicture} alt={User?.username} style={{
    objectFit:'cover',
    height:'180px',
    width:'180px',
    borderRadius:'100px'
}} />

<h3 style={{color:'#616161',margin:'10px 0px'}}>{User?.name}</h3>
<div style={{
    display:'flex',
    flexDirection:'column',
    width:'100%',
    gap:'10px'
   }}>
   <TextHolder>
   <h5>Username :</h5>
   <span>{User?.username}</span>
   </TextHolder>
 <TextHolder>
 <h5>Email :</h5>
 <span>{User?.email}</span>
 </TextHolder>
 <TextHolder>
 <h5>Phone :</h5>
 <span>{User?.phone}</span>
 </TextHolder>
 <TextHolder>
 <h5>Website :</h5>
 <span>{User?.website}</span>
 </TextHolder>
  
  
   
   </div>
   </Info>
   <CompanyInfo>
   <h3 style={{color:'#5c5c5c',margin:'10px 0px'}}>Company</h3>
<div style={{
    display:'flex',
    flexDirection:'column',
    gap:'10px'
   }}>
   <TextHolder>
   <h5>Name :</h5>
   <span>{User?.company?.name}</span>
   </TextHolder>
   <TextHolder>
   <h5>CatchPhrase :</h5>
   <span>{User?.company?.catchPhrase}</span>
   </TextHolder>
<TextHolder>
<h5>Bs :</h5>
<span>{User?.company?.bs}</span>
</TextHolder>
  

   </div>
   </CompanyInfo>
   </UserInfo>
   <AddressInfo>
   <Address>
   <h3 style={{color:'#b5b5b5',fontWeight:'500'}}>Address:</h3>
   <div style={{
    display:'flex',
    flexDirection:'column',
    paddingLeft:"40px",
    marginTop:"20px",
    marginBottom:"20px",
    gap:'10px'
   }}>
   <p>Street : <span>{User?.address?.street}</span></p>
   <p>Suite : <span>{User?.address?.suite}</span></p>
   <p>City : <span>{User?.address?.city}</span></p>
   <p>ZipCode : <span>{User?.address?.zipcode}</span></p>
   </div>
   </Address>
   <MapView>
   <iframe 
   title='abc'
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7776.631415969319!2d77.61408402232797!3d12.95163879032299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1677842232940!5m2!1sen!2sin" 
   width="100%" 
   height="100%" 
    allowfullscreen="" 
    loading="lazy"
     referrerpolicy="no-referrer-when-downgrade"
     style={{objectFit:'cover',borderRadius:'inherit'}}
     ></iframe>
   </MapView>
   <Location>
   <p>Lat : <span>{User?.address?.geo?.lat}</span></p>
   <p>Long : <span>{User?.address?.geo?.lng}</span></p>
   </Location>
   </AddressInfo>
   </Body>
   <Footer />
   </MainContent>
   </Container>
  )
}

export default ProfileDetailPage

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

const AddressInfo = styled.div`
height: 90%;
width: 65%;
display: flex;
border-left: 2px solid #eee;
flex-direction: column;
`

const Address = styled.div`
padding:20px;
p{
    color: #dadada;
    font-weight: 500;

    span{
        color:#616161;
        font-weight: 500;
    }
}
`;

const Location = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
padding-right: 50px;
p{
    color: #dadada;
    font-weight: 500;
    margin-right:10px;
    font-size: 13px;

    span{
        color:#5c5c5c;
        font-weight: 500;
        font-size: 13px;
    }
}
`;


const MapView = styled.div`
margin: 30px;
height: 330px;
width: 90%;
border-radius: 25px;
background-color: aliceblue;
`;
const UserInfo = styled.div`
height: 95%;
width: 35%;
display: flex;
flex-direction: column;
`
const Info = styled.div`
height: 70%;
width: 90%;
border-bottom: 2px solid #eee;

display: flex;
flex-direction: column;
align-items: center;

`
const CompanyInfo = styled.div`
height: 30%;
width: 90%;
display: flex;
flex-direction: column;
align-items: center;


`
const TextHolder = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex: 1;

h5{
    color: #dadada;
    font-weight: 500;
    display: flex;
    justify-content: flex-end;

    flex: 1;

   };
   span{
        color:#606060;
        font-weight: 500;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      
    flex: 1;
        text-align: start;
    }
`