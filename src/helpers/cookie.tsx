import Cookies from 'js-cookie';

const set = (key: string, token: string) => {
  Cookies.set(key, token || get(key), {
    expires: 7,
    path: '/',
  });
};

const get = (key: string) => {
  return Cookies.get(key) || '';
};

const remove = (key: string) => {
  Cookies.remove(key, { path: '/' });
};

export default {
  set,
  get,
  remove,
};
