import React, { Component } from 'react'
import './App.css'
import DialogsContainer from './Dialogs/DialogsContainer'
import News from './News/News.js'
import Info from './Info/Info.js'
import {Route} from 'react-router-dom'
import NavbarContainer from './Navbar/NavbarContainer'
import UsersContainer from './Users/UsersContainer'
import ProfileContainer from './Profile/ProfileContainer'
import HeaderC from './Header/HeaderContainer'
import Login from './Login/Login'
import { connect } from 'react-redux'
import {getAuthUserData} from './Redux/authReducer'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import {initialize} from './Redux/appReducers'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './Redux/ReduxStore.js'

class App extends Component {
  
  componentDidMount() {
    this.props.initialize()
  }

  render() {

      if(!this.props.initialized) {
        return <img style={{marginLeft:'30%'}} src='https://www.blackview.ru/upload/medialibrary/818/8187a44741ec1bc337686b53ce22cc10.gif'></img>
      }

      return (
        <div className="app">
          <HeaderC store={this.props.store}/>
          <NavbarContainer store={this.props.store} />
          <Route path='/dialogs' render={() => <DialogsContainer store={this.props.store} dispatch={this.props.dispatch}/>} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer store={this.props.store} dispatch={this.props.dispatch}/>} />
          <Route path='/news' component={News} />
          <Route path='/info' component={Info} />
          <Route path='/users' render={() => <UsersContainer store={this.props.store} dispatch={this.props.dispatch}/>}/>
          <Route path='/login' render={() => <Login/>}/>
        </div>
      )
  }
}

const mapStateToProps = (state) => ({
  initialized:state.appReducer.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps , {getAuthUserData, initialize}))(App)

let SamuraiJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>  
  )
}

export default SamuraiJSApp
