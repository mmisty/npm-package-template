const original = require('../.eslintrc.js');

module.exports = {
  ...original,
  rules: {
    ...original.rules,
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
