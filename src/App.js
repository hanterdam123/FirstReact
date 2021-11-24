import React from 'react'
import './App.css'
import Header from './Header/Header.js'
import Profile from './Profile/Profile.js'
import DialogsContainer from './Dialogs/DialogsContainer'
import News from './News/News.js'
import Info from './Info/Info.js'
import {BrowserRouter,Route} from 'react-router-dom'
import NavbarContainer from './Navbar/NavbarContainer'
import UsersContainer from './Users/UsersContainer'

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <NavbarContainer store={props.store} />
        <Route path='/dialogs' render={() => <DialogsContainer store={props.store} dispatch={props.dispatch}/>} />
        <Route path='/profile' render={() => <Profile store={props.store} dispatch={props.dispatch}/>} />
        <Route path='/news' component={News} />
        <Route path='/info' component={Info} />
        <Route path='/users' render={() => <UsersContainer store={props.store} dispatch={props.dispatch}/>}/>
      </div>
    </BrowserRouter>
  );
}
export default App;
