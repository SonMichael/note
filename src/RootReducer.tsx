// reducers/rootReducers.js
import { combineReducers } from 'redux';
import editorReducer from '~src/editor/Reducer';

const rootReducer = combineReducers({
  editorReducer,
});

export default rootReducer;
