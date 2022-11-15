import RoutesConstants from '~src/constants/routes';

const getNotesRoute = () => {
  return `/${RoutesConstants.AUTHENTICATE.PREFIX}${RoutesConstants.AUTHENTICATE.NOTES}`;
};

const getLoginRoute = () => {
  return `${RoutesConstants.LOGIN}`;
};

const getRegisterRoute = () => {
  return `${RoutesConstants.REGISTER}`;
};

export default {
  getNotesRoute,
  getLoginRoute,
  getRegisterRoute,
};
