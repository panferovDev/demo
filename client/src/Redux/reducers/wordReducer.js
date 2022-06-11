import { SET_WORDS } from '../types';

const wordReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_WORDS:
      return payload;
    default:
      return state;
  }
};
export default wordReducer;
