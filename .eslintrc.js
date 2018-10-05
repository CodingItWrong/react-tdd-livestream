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
    'jest/globals': true,
  },
};
