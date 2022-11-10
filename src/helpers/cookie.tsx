import Cookies from 'js-cookie';
import CookieConstants from '~src/constants/cookie';

const setToken = (token: string) => {
  Cookies.set(CookieConstants._NOTE, token || getToken(), {
    expires: 7,
    path: '/',
  });
};

const getToken = () => {
  return Cookies.get(CookieConstants._NOTE) || '';
};

const removeToken = () => {
  Cookies.remove(CookieConstants._NOTE, { path: '/' });
};

export default {
  setToken,
  getToken,
  removeToken,
};
