
import React from "react"
import Users from './Users.js'
import { follow, getUsers, unfollow} from "../ApiJS/Api.js"


class UsersC extends React.Component {

    componentDidMount() { // асинхронные операции
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.setToggleIsFetching(true)
        this.props.setPageAC(pageNumber)
        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsersAC(data.items) // после запроса на сервер
            this.props.setToggleIsFetching(false)
        })
    }


    render() {
        
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for(let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return ( 
        <Users 
            {...this.props}
            users={this.props.users}
            pages={pages}
            currentPage={this.props.currentPage}
            setPageAC={this.props.setPageAC}
            onPageChange={this.onPageChange}
            isFetching={this.props.isFetching}
            follow={this.props.followAC}
            unfollow={this.props.unfollowAC}
            setTotalUsersCount={this.props.setTotalUsersCount}
            setToggleIsFetching={this.props.setToggleIsFetching}
            setUsers={this.props.setUsers}
            followingAC={this.props.followingAC}
            followingInProgress={this.props.followingInProgress}
            unfollow = {unfollow}
            follow={follow}
        />)
    }
}

export default UsersC