module.exports = {
  extends: [
    'codingitwrong',
  ],
  parser: 'babel-eslint',
  plugins: [
    'cypress',
    'jest',
    'react',
  ],
  env: {
    'browser': true,
    'es6': true,
    'jest/globals': true,
    'jquery': true,
  },
};
