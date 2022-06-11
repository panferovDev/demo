import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Sagas/rootSagas';
import userReducer from './reducers/userReducer';
import wordReducer from './reducers/wordReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    words: wordReducer,
    user: userReducer,
  },
  middleware: (midd) => [...midd(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export default store;
