module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'no-console': 'warn',
    'no-eval': 'error',
  },
}
