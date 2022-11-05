import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Latest from './Latest';
import Comedy from './Comedy';
import Popular from './Popular';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-bootstrap'
import Overview from './Overview';
import Home from './Home';
import RouteComp from './RouteComp';
import Test from './Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouteComp/>
   {/* <Test/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
