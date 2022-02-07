import { createSelector } from "reselect"

export const getUsers = (state) => {
    return state.UsersReducer.users
}

export const getUsersSelector = (state) => {
    return getUsers(state).filter(u => true)
}

export const getUsersSuperSelector = createSelector(getUsers, (users) => { //reselect
    return users.filter(u => true)
})

export const getPageSize = (state) => {
    return state.UsersReducer.PageSize
}

export const totalUsersCount = (state) => {
    return state.UsersReducer.totalUsersCount
}

export const currentPage = (state) => {
    return state.UsersReducer.currentPage
}

export const isFetching = (state) => {
    return state.UsersReducer.isFetching
}

export const followingInProgress = (state) => {
    return state.UsersReducer.followingInProgress
}