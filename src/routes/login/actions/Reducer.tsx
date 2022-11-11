import { createReducer } from '@reduxjs/toolkit';
import { login } from './Actions';
import CookieHelper from '~src/helpers/cookie';
import CookieConstants from '~src/constants/cookie';

type InitialStateType = {
  token: string;
  error: any;
};

const initialState: InitialStateType = {
  token: CookieHelper.get(CookieConstants._NOTE),
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
    })
    .addCase(login.rejected, (state, action) => {
      state.error = action.payload;
    })
    .addDefaultCase((state) => state);
});

export default reducer;
