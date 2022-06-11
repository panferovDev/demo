import {
  call, put, takeEvery, takeLatest, delay, debounce, throttle,
} from 'redux-saga/effects';
import axios from 'axios';
import { GET_WORDS, SET_WORDS } from '../Redux/types';

const fetchWords = (value) => axios.post('/words', { word: value });

function* worker(action) {
  try {
    const { data } = yield call(fetchWords, action.payload);
    yield put({ type: SET_WORDS, payload: data });
  } catch (e) {
    yield put({ type: SET_WORDS, payload: [{ id: 1, word: 'Error' }] });
  }
}

function* wordSaga() {
  yield throttle(1000, GET_WORDS, worker);
}

export default wordSaga;
