const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS ='SET_USERS'

let initialState = {
    users:[
    ]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case FOLLOW:{
            return {
                ...state,
                users: state.users.map(p => {
                    if(p.id === action.userId) {
                        return {...usersReducer, followed:true}
                    }
                    return p
                })
            }
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
            return {
                ...state, users: [...state.users, ...action.users]
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

export default usersReducer