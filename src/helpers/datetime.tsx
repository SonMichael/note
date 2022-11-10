import Moment from 'moment';
import EnvHelper from '~src/helpers/env';
import ConfigConstants from '~src/constants/config';

export const YYYY_MM_DD_HH_MM_SS = 'YYYY-MM-DD HH:mm:ss';
export const YYYY_MM_DD = 'YYYY-MM-DD';

const format = (formatDate: string, date: string) => {
  return Moment(date)
    .utc()
    .utcOffset(EnvHelper.getValue(ConfigConstants.REACT_APP_GMT_VN))
    .format(formatDate);
};

export default {
  format,
  YYYY_MM_DD_HH_MM_SS,
  YYYY_MM_DD,
};
