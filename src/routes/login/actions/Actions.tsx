import ActionTypes, { LoginType } from './ActionTypes';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import ApiHelper from '~src/helpers/api';
import HttpHelper from '~src/helpers/http';
import CookieHelper from '~src/helpers/cookie';
import CookieConstants from '~src/constants/cookie';

type LoginParamsResponseType =
  | LoginType
  | {
      error: any;
    };
type LoginParamsType = {
  user_name: string;
  password: string;
};
export const login = createAsyncThunk(
  ActionTypes.LOGIN,
  async (params: LoginParamsType, { rejectWithValue }) => {
    const response = await ApiHelper.post(`/login`, params);
    const jsonData: LoginParamsResponseType = response.data.data;
    if (HttpHelper.isFail(response.status) || 'error' in jsonData) {
      return rejectWithValue(jsonData);
    }
    CookieHelper.set(CookieConstants._NOTE, jsonData.token);
    return jsonData;
  },
);

export const logout = createAction(ActionTypes.LOGOUT, () => {
  CookieHelper.remove(CookieConstants._NOTE);
  return {
    payload: {},
  };
});
