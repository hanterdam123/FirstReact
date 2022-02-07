
import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import {setUserData, Logout} from '../Redux/authReducer.js'


class HeaderC extends React.Component {

   

    render() {
        return (
            <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
})

export default connect(mapStateToProps, {setUserData, Logout}) (HeaderC)