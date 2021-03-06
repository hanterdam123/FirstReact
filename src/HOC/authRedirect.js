
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapStateToPropsRedirect = (state) => {
    return {
        isAuth:state.authReducer.isAuth
    }
}

export const authRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render () {
            if(!this.props.isAuth) return <Redirect to='/login'/>

            return <Component {...this.props}/>
        }
    } 
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}