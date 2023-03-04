import { combineReducers } from 'redux'
import UserReducer from './UserReducer'

const rootReducer = combineReducers({
    userReducer:UserReducer
})

export default rootReducer