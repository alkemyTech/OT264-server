module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    mocha: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-unused-vars': ['error', { args: 'none' }]
  }
};
