import { createStore, combineReducers, applyMiddleware } from "redux";
import messageReducer from "./MessageReducer/MessageReducer.js";
import profileReducer from "./ProfileReducer/ProfileReducer.js";
import navbarReducer from "./NavbarReducer/NavbarReducer.js"
import UsersReducer from "./UsersReducer/UsersReducer.js"
import authReducer from "./authReducer.js";
import  thunkMiddleware  from 'redux-thunk'
import {reducer as formReducer}  from 'redux-form'
import appReducer from '../Redux/appReducers'

let reducers = combineReducers({
    profileReducer: profileReducer,
    messageReducer: messageReducer,
    navbarReducer: navbarReducer,
    UsersReducer: UsersReducer,
    authReducer:authReducer,
    form:formReducer,
    appReducer:appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))


export default store