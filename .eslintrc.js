'use strict';

const OFF = 0;
const ERROR = 2;

const INDENT_SPACE = 2;

module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  extends: ['airbnb-base/legacy', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      ERROR,
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    indent: [
      ERROR,
      INDENT_SPACE,
      {
        SwitchCase: 1,
      },
    ],
  },
};
