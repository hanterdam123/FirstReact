const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS ='SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_FETCHING = 'SET_FETCHING'
const FOLLOWED = 'FOLLOWED'

let initialState = {
    users:[ ],
    pageSize:5, // размер одной  страницы
    totalUsersCount:0, //количество пользователей всего
    currentPage:1,
    isFetching:true,
}

const UsersReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case FOLLOW:{
            return {
                ...state,
                users: state.users.map(p => {
                    if(p.id === action.userId) {
                        return {...p, followed:true}
                    }
                    return p
                })
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case UNFOLLOW:{
            return {
                ...state,
                users:state.users.map(p => {
                    if(p.id === action.usersId) {
                        return {...p, followed:false}
                    }
                    return p
                })
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount:action.count}
        }
        case SET_FETCHING: {
            return {...state, isFetching:action.isFetching}
        }
        case FOLLOWED: {
            return {...state, buttons:state.buttons.map(a => {
                if(a.follow === 'UNFOLLOW') {
                    return {...a, follow:'FOLLOW'}
                } else if (a.follow === 'FOLLOW') {
                    return {...a, follow:'UNFOLLOW' }
                }
            }),
                
            }
        }
        default: {
            return state;
        }
    }
}

export const followAC = (userId) => ({type:FOLLOW, userId})
export const unfollowAC = (userId) => ({type:UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type:SET_TOTAL_USERS_COUNT, count:totalUsersCount})
export const setFetchingAC = (isFetching) => ({type:SET_FETCHING, isFetching})
export const follow = (fol) => ({type:FOLLOWED, fol})

export default UsersReducer