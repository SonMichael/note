import { combineReducers } from 'redux';
import editorReducer from '~src/editor/Reducer';
import notesReducer from '~src/notes/Reducer';

const rootReducer = combineReducers({
  editor: editorReducer,
  notes: notesReducer,
});

export default rootReducer;
