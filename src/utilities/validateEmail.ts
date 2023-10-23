export const validateEmail = (email: string) => {
  const expression =
    /* eslint-disable-next-line max-len, prefer-named-capture-group, require-unicode-regexp */
    /^(?=.{1,254}$)(?=.{1,64}@)[\w!#$%&'*+/=?^`{|}~-]+(\.[\w!#$%&'*+/=?^`{|}~-]+)*@[\dA-Za-z]([\dA-Za-z-]{0,61}[\dA-Za-z])?(\.[\dA-Za-z]([\dA-Za-z-]{0,61}[\dA-Za-z])?)*$/;
  return expression.test(email);
};
