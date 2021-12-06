
import React from "react"
import s from './Users.module.css'
import Users from './Users.js'
import * as axios from 'axios'

class UsersC extends React.Component {

    componentDidMount() {
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
               this.props.setUsers(response.data.items)
               this.props.setTotalUsersCount(response.data.totalCount)
            })
        
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
               this.props.setUsers(response.data.items)
            })
    }

    render() {
    return <Users 
    totalUsersCount={this.props.totalUsersCount} 
    currentPage={this.props.currentPage}  
    users={this.props.users} 
    pageSize={this.props.pageSize}
    onPageChanged={this.onPageChanged}
    follow={this.props.follow}
    unfollow={this.props.unfollow}
    /> 
    }
}


export default UsersC