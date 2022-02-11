import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';


let store = generateStore();

let WithRouter = () => <Router><App /></Router> 
let WithRedux = () => <Provider store={store} ><WithRouter /></Provider>

ReactDOM.render(
  <React.StrictMode>
    <WithRedux />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
