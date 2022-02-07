import { getUsers } from "../../ApiJS/Api"

const SET_USERS ='SET_USERS'
const SET_PAGE = 'SET_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FEYCHING'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users:[],
    pageSize:5, // Размер страницы (одной) в пользователях.
    totalUsersCount: 30, // Количество пользователей.
    currentPage:1,
    isFetching:false,
    followingInProgress:false
}

const UsersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PAGE: {
            return {...state, currentPage:action.page }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.total}
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching:action.fetch
            }
        }
        case FOLLOW: {
            return {
                ...state,
                users:[state.users.map(p => {
                    if(p.id === action.userId) {
                        return {
                            ...p, followed:false
                        }
                    } return p
                    })
                ]
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users:[state.users.map(p => {
                    if(p.id === action.userId) {
                        return {
                            ...p, followed:true
                        }
                    } return p
                })]
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress:action.isFetching
            }
        }
        default: {
            return state;
        }
    }
}

export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setPageAC = (page) => ({type:SET_PAGE, page:page})
export const setTotalUsersCount = (total) => ({type:SET_TOTAL_COUNT, total})
export const setToggleIsFetching = (fetch) => ({type:TOGGLE_IS_FETCHING, fetch})
export const followAC = (userId) => ({type:FOLLOW, userId})
export const unfollowAC = (userId) => ({type:UNFOLLOW, userId})
export const followingAC = (isFetching) => ({type:TOGGLE_IS_FOLLOWING_PROGRESS, isFetching})

export const getUsersThunk = () => { // thunk
    return async (dispatch) => {
        dispatch(setToggleIsFetching(true))
        let data = await getUsers()
        dispatch(setToggleIsFetching(false))
        dispatch(setUsersAC(data.items)) // после запроса на сервер
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(followingAC(true, userId))
        let response = await follow(userId)
        if(response.data.resultCode == 0) {
            dispatch(followAC(userId))
        }
        dispatch(followingAC(false, userId))
    } 
}

export const unfollow = (userId) => {
    return async (dispatch) => {
            dispatch(followingAC(true, userId))
            let response = await unfollow(userId)
                if(response.data.resultCode == 0) {
                    dispatch(unfollowAC(userId))
                }
                dispatch(followingAC(false, userId))
    } 
}

export default UsersReducer