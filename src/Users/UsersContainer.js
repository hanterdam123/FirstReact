import React from "react"
import { connect } from "react-redux"
import { followAC , unfollowAC , setUsersAC } from '../Redux/UsersReducer/UsersReducer.js'
import Users from './Users.js'

let mapStateToProps = (state) => {
    return {
        Users:state.usersReducer.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow:(userId) => {
            
            dispatch(followAC(userId))
            
        },
        unfollow:(userId) => {
            
            dispatch(unfollowAC(userId))
            
        },
        setUsers:(users) => {
            if(users.length === 0) {
                dispatch(setUsersAC(users))
            }
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Users)