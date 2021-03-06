import { authAPI } from "../ApiJS/Api"
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'auth/SET_USER_DATA'

let initialState = {
    userId:null,
    email:null,
    login:null,
    isAuth:true
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }

        }
        default:{
            return state
        }
    }
}

export const setUserData = (userId, email, login, isAuth) => ({type:SET_USER_DATA, data:{userId,email,login, isAuth}})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if(response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setUserData(id, email, login, true))
    }
}

export const Logi = (email, password, remember) => async (dispatch) => {

        let response = await authAPI.login(email, password, remember)

        if(response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some.error'
            dispatch(stopSubmit('login', {_error:message}))
            
        }
}

export const Logout = () => async (dispatch) => {
       
        let response = await authAPI.logOut()

        if(response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
}

export default authReducer