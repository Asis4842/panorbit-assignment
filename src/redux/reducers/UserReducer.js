import { ActionTypes } from "../types/Types"

const initialState={
    accountList:[],
    selectedUser:null,
    chatUsers:null
}

const UserReducer =(state=initialState,action={})=>{
    switch(action.type){
        case ActionTypes.GET_USERS:
            return{
                ...state,
                accountList:action.payload
            };

            case ActionTypes.SELECTED_USER:
                return{
                    ...state,
                    selectedUser:action.payload
                };
                case ActionTypes.CHAT_USER_SELECTED:
                    return{
                        ...state,
                        chatUsers:[{...state.selectedUser},{...action.payload}]
                    };
                case ActionTypes.LOGOUT:
                    return{
                        ...state,
                        selectedUser:null,
                        chatUsers:[]
                    };
            default:
                return state
    }
    
}

export default UserReducer