const LOGIN = 'auth/login';
const LOGOUT = 'auth/logout';

export type LoginType = {
  token: string;
};

export default {
  LOGIN,
  LOGOUT,
};
