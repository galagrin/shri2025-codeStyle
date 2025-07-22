module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],

  rules: {
    'max-len': ['error', { code: 120 }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],

    'no-console': ['error', { allow: ['warn', 'error'] }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/no-explicit-any': 'error',
    indent: ['error', 2],
    'no-var': 'error',
  },
};
