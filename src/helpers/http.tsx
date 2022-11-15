const isFail = (status: number) => {
  return status < 200 || status >= 300;
};

export default {
  isFail,
};
