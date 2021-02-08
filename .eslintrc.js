module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  plugins: ['react'],
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'no-console': 'off',
    'react/no-children-prop': 'off',
    'react/no-find-dom-node':'off',
    'no-eval': 'error',
    'react/prop-types': ['off'],
  },
}
