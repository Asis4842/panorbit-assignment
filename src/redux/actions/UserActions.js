import { ActionTypes } from "../types/Types"

const getUsers =(data)=>{
    return {
        type:ActionTypes.GET_USERS,
        payload:data
    }
}

const selectedUser =(data)=>{
    return {
        type:ActionTypes.SELECTED_USER,
        payload:data
    }
}

const chatSelectedUser =(data)=>{
    return {
        type:ActionTypes.CHAT_USER_SELECTED,
        payload:data
    }
}


const logoutUser =()=>{
    return {
        type:ActionTypes.LOGOUT,
       
    }
}

export const UserActions ={
    getUsers,
    selectedUser,
    logoutUser,
    chatSelectedUser
}