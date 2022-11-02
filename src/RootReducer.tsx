import { configureStore } from '@reduxjs/toolkit';
import editorReducer from '~src/editor/Reducer';
import notesReducer from '~src/notes/Reducer';

const rootReducer = configureStore({
  reducer: {
    editorReducer,
    notesReducer,
  },
});
export type RootStateType = ReturnType<typeof rootReducer.getState>;
export type AppDispatchType = typeof rootReducer.dispatch;

export default rootReducer;
