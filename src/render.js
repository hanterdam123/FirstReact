
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost,addMessage,changePost, changeMessage} from './Redux/State.js'

export let rerender = (State) => {
ReactDOM.render(
  <React.StrictMode>
    <App AppState={State} addPost={addPost} addMessage={addMessage} newPostText={State.newPostText} changePost={changePost} newMessageText={State.newMessageText} changeMessage={changeMessage}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}
