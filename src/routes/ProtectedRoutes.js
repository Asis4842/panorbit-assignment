import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet,Navigate } from 'react-router-dom'


const ProtectedRoutes = () => {
    const selectedUser = useSelector((state)=>state.userReducer?.selectedUser)
  return (
    selectedUser ?<Outlet/>:<Navigate to="/" />
  )
}

export default ProtectedRoutes
