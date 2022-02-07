import React from 'react'
import Profile from './Profile.js'
import { setProfileAC, getUserProfile, getStatus, updateStatus } from '../Redux/ProfileReducer/ProfileReducer.js'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import { authRedirect } from '../HOC/authRedirect.js'
import { compose } from 'redux'

class ProfileC extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        if(this.props.isAuth === false) {
            return <Redirect to={'/login'}/>
        }
        return (
        <Profile 
            {...this.props}
            users={this.props.users}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
        />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users:state.profileReducer.users,
        status:state.profileReducer.status,
        authorizedUserId:state.authReducer.userId,
        isAuth: state.authReducer.isAuth
    }
}

export default compose(connect(mapStateToProps, {
    setProfileAC,
    getUserProfile,
    getStatus,
    updateStatus
}) ,withRouter ,authRedirect )(ProfileC)

