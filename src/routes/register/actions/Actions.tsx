import ActionTypes from './ActionTypes';
import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiHelper from '~src/helpers/api';
import HttpHelper from '~src/helpers/http';

type RegisterResponseType =
  | {
      user_name: string;
      password: string;
    }
  | {
      error: any;
    };
type RegisterParamsType = {
  user_name: string;
  password: string;
  password_confirmation: string;
};
export const register = createAsyncThunk(
  ActionTypes.REGISTER,
  async (params: RegisterParamsType, { rejectWithValue }) => {
    const response = await ApiHelper.post(`/register`, params);
    const jsonData: RegisterResponseType = response.data.data;
    if (HttpHelper.isFail(response.status) || 'error' in jsonData) {
      return rejectWithValue(jsonData);
    }
    return jsonData;
  },
);
