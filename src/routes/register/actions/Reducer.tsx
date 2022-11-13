import { createReducer } from '@reduxjs/toolkit';
import { register } from './Actions';

type InitialStateType = {
  error: any;
};

const initialState: InitialStateType = {
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(register.fulfilled, (state) => {
      state.error = null;
    })
    .addCase(register.rejected, (state, action) => {
      state.error = action.payload;
    })
    .addDefaultCase((state) => state);
});

export default reducer;
