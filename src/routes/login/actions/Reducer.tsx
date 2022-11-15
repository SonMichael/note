import { createReducer } from '@reduxjs/toolkit';
import { login, logout } from './Actions';
import CookieHelper from '~src/helpers/cookie';
import CookieConstants from '~src/constants/cookie';

type InitialStateType = {
  token: string;
  isLogged: boolean;
  error: any;
};

const token = CookieHelper.get(CookieConstants._NOTE);
const initialState: InitialStateType = {
  token,
  isLogged: token ? true : false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isLogged = true;
    })
    .addCase(login.rejected, (state, action) => {
      state.error = action.payload;
      state.isLogged = false;
    })
    .addCase(logout, (state) => {
      state.token = '';
      state.isLogged = false;
    })
    .addDefaultCase((state) => state);
});

export default reducer;
