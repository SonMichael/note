import { createReducer } from '@reduxjs/toolkit';

type InitialStateType = {
  error: any;
};
const initialState: InitialStateType = {
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase((state) => state);
});

export default reducer;
