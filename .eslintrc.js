module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-array-constructor': 'off',
    'no-plusplus': 'off',
    'no-extend-native': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'no-empty-function': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-syntax': 'off',
    'no-prototype-builtins': 'off',
    'prefer-const': 'off',
  },
};
