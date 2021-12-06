import { createStore, combineReducers } from "redux";
import messageReducer from "./MessageReducer/MessageReducer.js";
import profileReducer from "./ProfileReducer/ProfileReducer.js";
import navbarReducer from "./NavbarReducer/NavbarReducer.js"
import UsersReducer from "./UsersReducer/UsersReducer.js"

let reducers = combineReducers({
    profileReducer: profileReducer,
    messageReducer: messageReducer,
    navbarReducer: navbarReducer,
    UsersReducer: UsersReducer
})

let store = createStore(reducers)

window.store = store

export default store