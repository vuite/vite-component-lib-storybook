module.exports = {
  root: true,

  env: {
    browser: true,
    jest: true,
    node: true
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],

  parserOptions: {
    ecmaVersion: 2020
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/comma-dangle': [2, 'never'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': [2, 'never'],
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off'
  },

  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/dist/**', 'docs/*'],
      env: {
        jest: true
      }
    }
  ]
}
