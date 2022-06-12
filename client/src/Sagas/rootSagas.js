import { all, fork } from 'redux-saga/effects';
import wordSaga from './wordSaga';

export default function* rootSaga() {
  yield fork(wordSaga);
}
