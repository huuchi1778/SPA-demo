module.exports = {
  extends: '@cybozu/eslint-config/presets/es5',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  env: {
    es6: true
  },
  globals: {
    process: 'readonly',
    __dirname: 'readonly'
  }
};
