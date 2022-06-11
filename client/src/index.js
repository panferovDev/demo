import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import { createBrowserHistory } from 'history';
import App from './App';
import reportWebVitals from './reportWebVitals';
import storeR from './Redux/store';

const history = createBrowserHistory();
axios.defaults.baseURL = process.env.REACT_APP_URL;
axios.defaults.withCredentials = true;
axios.interceptors.response.use(undefined, (err) => {
  const { data, status, config } = err.response;
  console.log('interceptors --->', status);
  history.push('/signin');
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HistoryRouter history={history}>

    <Provider store={storeR}>
      <App />
    </Provider>
  </HistoryRouter>,
);

reportWebVitals();
