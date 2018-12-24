module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'func-names': 0
  },
  env: {
    node: true
  },
  parser: typescript - eslint - parser,
  parserOptions: {
    sourceType: module,
    ecmaFeatures: {
      modules: true
    }
  }
};
