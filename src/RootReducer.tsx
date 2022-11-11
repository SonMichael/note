import { configureStore } from '@reduxjs/toolkit';
import editorReducer from '~src/routes/auth/note/editor/actions/Reducer';
import notesReducer from '~src/routes/auth/note/notes/actions/Reducer';
import loginReducer from '~src/routes/login/actions/Reducer';

const rootReducer = configureStore({
  reducer: {
    editorReducer,
    notesReducer,
    loginReducer,
  },
});
export type RootStateType = ReturnType<typeof rootReducer.getState>;
export type AppDispatchType = typeof rootReducer.dispatch;

export default rootReducer;
