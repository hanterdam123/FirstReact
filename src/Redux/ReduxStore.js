import { createStore, combineReducers } from "redux";
import messageReducer from "./MessageReducer/MessageReducer.js";
import profileReducer from "./ProfileReducer/ProfileReducer.js";
import navbarReducer from "./NavbarReducer/NavbarReducer.js"

let reducers = combineReducers({
    profileReducer: profileReducer,
    messageReducer: messageReducer,
    navbarReducer: navbarReducer
})

let store = createStore(reducers)
 
export default store