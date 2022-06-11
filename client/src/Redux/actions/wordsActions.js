import { GET_WORDS, SET_WORDS } from '../types';

export const setWords = (value) => ({
  type: SET_WORDS,
  payload: value,
});

export const getWords = (value) => ({
  type: GET_WORDS,
  payload: value,
});
