import { combineReducers } from 'redux'
import PostReducers from './PostReducers'
import userReducers from './userReducers'

export default combineReducers({
    posts: PostReducers,
    users: userReducers

})