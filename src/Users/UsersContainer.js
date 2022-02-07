import React from "react"
import { connect } from "react-redux"
import { compose } from "redux"

import { authRedirect } from "../HOC/authRedirect.js"
import {  setPageAC,followAC, unfollowAC, followingAC, getUsersThunk, setToggleIsFetching, setUsersAC} from '../Redux/UsersReducer/UsersReducer.js'
import UsersC from "./UsersAPI"
import { getPageSize, getUsers,totalUsersCount, currentPage, isFetching,  followingInProgress, getUsersSuperSelector } from "./UsersSelector.js"




let mapStateToProps = (state) => {
    
    return {
        users:getUsersSuperSelector(state),
        pageSize: getPageSize(state), 
        totalUsersCount: totalUsersCount(state),
        currentPage:currentPage(state),
        isFetching:isFetching(state),
        followingInProgress:followingInProgress(state)
    }
}


export default compose(connect(mapStateToProps, {
    setUsersAC:setUsersAC,
    setPageAC:setPageAC,
    followAC:followAC,
    unfollowAC:unfollowAC,
    followingAC:followingAC,
    getUsers:getUsersThunk,
    setToggleIsFetching:setToggleIsFetching
}),
    authRedirect,
    )(UsersC)