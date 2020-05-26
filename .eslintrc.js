module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'getter-return': 'error',
    'no-cond-assign': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'warn',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'warn',
    'no-extra-semi': 'off',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'warn',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'warn',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'warn',
    'no-unsafe-negation': 'error',
    'use-isnan': 'warn',
    'valid-typeof': 'warn',
    'default-case': 'warn',
    'dot-location': ['warn', 'property'],
    'no-case-declarations': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'warn',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'warn',
    'no-octal': 'error',
    'no-redeclare': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'warn',
    'no-unmodified-loop-condition': 'warn',
    'no-unused-labels': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-return': 'warn',
    'no-with': 'error',
    'require-await': 'error',
    yoda: ['warn', 'never'],
    'no-delete-var': 'warn',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'off',
    'no-unused-vars': 'warn',
    'arrow-body-style': ['warn', 'as-needed'],
    'arrow-parens': ['off', 'as-needed'],
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'warn',
    'no-this-before-super': 'error',
    'no-useless-rename': 'warn',
    'no-var': 'warn',
    'object-shorthand': ['warn', 'always'],
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'prefer-destructuring': [
      'warn',
      { array: true, object: true },
      { enforceForRenamedProperties: false }
    ],
    'prefer-rest-params': 'warn',
    'prefer-template': 'warn',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'template-curly-spacing': ['error', 'never'],
    'vue/no-unused-components': 'warn'
  }
};