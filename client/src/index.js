import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import App from './App';
import reportWebVitals from './reportWebVitals';
import storeR from './Redux/store';

axios.defaults.baseURL = process.env.REACT_APP_URL;
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={storeR}>
      <App />
    </Provider>
  </BrowserRouter>,
);

reportWebVitals();
