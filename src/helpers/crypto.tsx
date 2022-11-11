import Crypto from 'crypto-browserify';
import EnvHelper from '~src/helpers/env';
import ConfigConstants from '~src/constants/config';

const hash = (str: string) => {
  const hashValue = Crypto.pbkdf2Sync(
    str,
    EnvHelper.getValue(ConfigConstants.REACT_APP_SALT),
    2048,
    32,
    'sha512',
  ).toString('hex');
  return hashValue;
};

export default {
  hash,
};
