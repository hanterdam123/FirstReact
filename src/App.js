import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Navbar from './Navbar/Navbar.js';
import Profile from './Profile/Profile.js';
import Dialogs from './Dialogs/Dialogs.js';
import News from './News/News.js';
import Info from './Info/Info.js';
import {BrowserRouter,Route} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Navbar state={props.AppState.NavBar}/>
        <Route path='/dialogs' render={() => <Dialogs state={props.AppState} dispatch={props.dispatch}/>}/>
        <Route path='/profile' render={() => <Profile state={props.AppState} dispatch={props.dispatch}/>}/>
        <Route path='/news' component={News}/>
        <Route path='/info' component={Info}/>
      </div>
    </BrowserRouter>
  );
}
export default App;
