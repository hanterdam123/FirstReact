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
        <Navbar state={props.AppState.SideBar}/>
        <Route path='/dialogs' render={() => <Dialogs state={props.AppState.MessagePage} addMessage={props.addMessage} newMessageText={props.newMessageText} changeMessage={props.changeMessage}/>}/>
        <Route path='/profile' render={() => <Profile state={props.AppState.ProfilePage} addPost={props.addPost} newPostText={props.newPostText} changePost={props.changePost}/>}/>
        <Route path='/news' component={News}/>
        <Route path='/info' component={Info}/>
      </div>
    </BrowserRouter>
  );
}
export default App;
