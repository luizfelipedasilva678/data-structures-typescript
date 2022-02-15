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
  },
};
