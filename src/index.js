
import './index.css';
import reportWebVitals from './reportWebVitals';
import Store from './Redux/State.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


let rerender = () => { 
ReactDOM.render(
  <React.StrictMode>
    <App AppState={Store.getState()} addPost={Store.addPost.bind(Store)} addMessage={Store.addMessage.bind(Store)} newPostText={Store.getState().newPostText} changePost={Store.changePost.bind(Store)} newMessageText={Store.getState().newMessageText} changeMessage={Store.changeMessage.bind(Store)}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}

rerender(Store);

Store.subscribe(rerender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();