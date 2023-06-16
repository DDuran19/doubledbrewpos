module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true, // Add 'node' environment
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020, // Use the specific version instead of 'latest'
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // Use 'detect' to automatically detect React version
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
};
