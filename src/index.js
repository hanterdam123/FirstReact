
import './index.css'
import reportWebVitals from './reportWebVitals'
import store from './Redux/ReduxStore.js'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

let rerender = () => { 
ReactDOM.render(
  <React.StrictMode>
    <App store={store.getState()} dispatch={store.dispatch.bind(store)}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}

rerender(store.getState());

store.subscribe(() => {
  let state = store.getState()
  rerender(state)
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();