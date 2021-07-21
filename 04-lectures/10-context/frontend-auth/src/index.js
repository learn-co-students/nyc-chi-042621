import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import SnackProvider from './SnackProvider'

ReactDOM.render(
  <SnackProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>  
  </SnackProvider>
, document.getElementById('root'));
