import ConfigConstants from '~src/constants/config';
import axios from 'axios';
import Env from './env';
import CookieHelper from './cookie';
import CookieConstants from '~src/constants/cookie';

const getPrefixApi = () => {
  const url = `${Env.getValue(
    ConfigConstants.REACT_APP_API_URL,
  )}/${Env.getValue(ConfigConstants.REACT_APP_API_VERSION)}`;
  return url;
};

const headers = {
  'Content-Type': 'application/json',
  Authorization: '',
};

const opt = {
  baseURL: getPrefixApi(),
  headers,
  params: {},
  timeout: 30000,
};
const api = axios.create(opt);
api.interceptors.request.use(
  (config) => {
    const tokenLogin = CookieHelper.get(CookieConstants._NOTE);
    if (tokenLogin !== undefined && tokenLogin !== '') {
      config.headers.Authorization = 'Bearer ' + tokenLogin;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
