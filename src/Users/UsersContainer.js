import React from "react"
import { connect } from "react-redux"
import { followAC , unfollowAC , setUsersAC, setCurrentPageAC, setTotalUsersCountAC, setFetchingAC , follow} from '../Redux/UsersReducer/UsersReducer.js'
import Users from './Users.js'
import * as axios from 'axios'
import preloader from '../tail-spin.svg'

class UsersC extends React.Component {

    componentDidMount() { // асинхронные операции
        this.props.isFetchingS(true) // прелоадер до запроса и во время запроса на сервер
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        this.props.isFetchingS(false)
        this.props.setUsers(response.data) // после запроса на сервер
        })
        
    }

    render() {
    return (<>
    {this.props.isFetching ? <img style={{position:"absolute",width:'200px',left:'50%',top:'50%'}} src={preloader}/> : null} 
    <Users 
    totalUsersCount={this.props.totalUsersCount} 
    currentPage={this.props.currentPage}  
    users={this.props.users} 
    pageSize={this.props.pageSize}
    onPageChanged={this.onPageChanged}
    follow={this.props.follow}
    unfollow={this.props.unfollow}
    buttons={this.props.buttons}
    followed={this.props.followed}
    /> 
    </>)
    }
}

let mapStateToProps = (state) => {
    
    return {
        users:state.UsersReducer.users,
        pageSize:state.UsersReducer.pageSize,
        totalUsersCount:state.UsersReducer.totalUsersCount,
        currentPage:state.UsersReducer.currentPage,
        isFetching:state.UsersReducer.isFetching,
        
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow:(userId) => {
            dispatch(followAC(userId))
        },
        unfollow:(userId) => {
        if(userId === 0) {
            dispatch(unfollowAC(userId))
        }
        },
        setUsers:(users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        isFetchingS:(isFetching) => {
            dispatch(setFetchingAC(isFetching))
        },
        followed:(fol)=> {
            dispatch(follow(fol))
        }
        
    }
}*/

const UsersContainer = connect(mapStateToProps, {
    follow:followAC,
    unfollow:unfollowAC,
    setUsers:setUsersAC,
    setCurrentPage:setCurrentPageAC,
    setTotalUsersCount:setTotalUsersCountAC,
    isFetchingS:setFetchingAC,
    followed:follow
})(UsersC)

export default UsersContainer