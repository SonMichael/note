import RoutesConstants from '~src/constants/routes';

const getNotesRoute = () => {
  return `/${RoutesConstants.AUTHENTICATE.PREFIX}${RoutesConstants.AUTHENTICATE.NOTES}`;
};

export default {
  getNotesRoute,
};
