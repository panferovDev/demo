import axios from 'axios';
import { SET_USER } from '../types';

export const setUser = (value) => ({
  type: SET_USER,
  payload: value,
});

export const regUser = (value) => (dispatch) => {
  axios.post('/user/signup', value)
    .then((response) => dispatch(setUser(response.data)))
    .catch((err) => console.log(err));
};

export const checkUser = () => (dispatch) => {
  setTimeout(() => {
    axios.post('/user/check')
      .then((response) => dispatch(setUser(response.data)))
      .catch((err) => dispatch(setUser({})));
  }, 1000);
};

export const userLogOut = () => (dispatch) => {
  axios('/user/logout')
    .then((res) => dispatch(setUser({})));
};

export const userSignIn = (value) => (dispatch) => {
  axios.post('/user/signin', value)
    .then((res) => dispatch(setUser(res.data)));
};
