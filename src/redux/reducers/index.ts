import { combineReducers } from 'redux';
import { wordsReducer } from './words';

// export interface ReduxState {
// }

export default combineReducers({
  words: wordsReducer
});
