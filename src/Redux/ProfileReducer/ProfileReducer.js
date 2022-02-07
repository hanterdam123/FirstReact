import { getProfile, profileAPI } from "../../ApiJS/Api"

const ADD_POST = 'ADD_POST'
const CHANGE_POST = 'CHANGE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {

    newPostText:'' ,
    PostsInfo: [
      {message:'Hello, World!', like:'20', dislike:'2', id:1,name:'Artem', photo:'https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg'},
      {message:'My name is Arthur', like:'20', dislike:'2',id:2,name:'Arthur', photo:'https://implantes-dentales.odonto.com.ar/wp-content/uploads/2018/01/Depositphotos_32817757_l.jpg'},
      {message:'How are you?', like:'20', dislike:'2',id:3,name:'Masha', photo:'https://yobte.ru/uploads/posts/2019-11/krasivye-devushki-s-dlinnymi-volosami-60-foto-43.jpg'},
    ],
    users:[],
    status:''
}

const profileReducer = (state = initialState, action) => {

  let stateCopy

  switch (action.type) {
      case ADD_POST:{
        let newPost = {
          message:action.body,
          id:1,
          like:0,
          dislike:0,
          name:'Artem',
          photo:'https://yt3.ggpht.com/a/AATXAJyM4KuEcv_bqSIjZreW0i3voF85xaiLKUuhN4punw=s900-c-k-c0xffffffff-no-rj-mo'
        }
        stateCopy = {
          ...state,
          PostsInfo: [...state.PostsInfo, newPost] ,
          newPostText: ''
        }
        return stateCopy
      }
      case CHANGE_POST:{
        stateCopy = {
          ...state,
          newPostText: action.text
        }
        return stateCopy
      }
      case SET_USER_PROFILE:{
        stateCopy = {
          ...state, users:action.users
        }
        return stateCopy
      }
      case SET_STATUS: {
        return {
          ...state,
          status:action.status
        }
      }
      default: {
        return state
      }
    }
}

export const addPostActionCreator = (body) => ({type:ADD_POST, body})

export const updatePostActionCreator = (text) => ({type:CHANGE_POST, text:text})

export const setProfileAC = (users) => ({type:SET_USER_PROFILE, users:users})

export const setStatusAC = (status) => ({type:SET_STATUS, status})

export const getUserProfile = (userId) => async (dispatch) => { //thunk
  let response = await getProfile(userId)
    dispatch(setProfileAC(response.data))
 
}

export const getStatus = (userId) => async (dispatch) => { //thunk
  let response = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0) {
        dispatch(updateStatus(response.data))
      }

  
}

export default profileReducer