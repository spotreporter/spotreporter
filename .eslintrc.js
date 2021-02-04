/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: ['./tsconfig.eslint.json'],
    sourceType: 'module',
    ecmaVersion: 2018,
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue'],
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:vue-scoped-css/recommended',
  ],
  rules: {
    // make typescript eslint rules even more strict
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    'vue/attribute-hyphenation': 'error',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
        },
      },
    ],
    'vue/component-name-in-template-casing': 'error',
    'vue/no-static-inline-styles': 'error',
    'vue/v-on-function-call': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-concat': 'error',
    'vue/no-boolean-default': 'error',
    // css rules
    'vue-scoped-css/no-unused-selector': 'error',
    'vue-scoped-css/no-parsing-error': 'error',
    'vue-scoped-css/require-scoped': 'error',
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
