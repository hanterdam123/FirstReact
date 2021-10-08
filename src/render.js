
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost} from './Redux/State.js';

export let rerender = (State) => {
ReactDOM.render(
  <React.StrictMode>
    <App AppState={State} addPost={addPost}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}
