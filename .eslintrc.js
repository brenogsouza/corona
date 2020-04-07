module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react',
    'import',
    'import-helpers',
    'jsx-a11y',
    'react-hooks',
    'prettier',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'no-nested-ternary': 'off',
    'no-unused-expressions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        alphabetize: { order: 'asc', ignoreCase: true },
        groups: [
          'module',
          '/react-icons/',
          '/^~/(?!layouts|components|pages|services|utils|assets|styles)/',
          '/^~/layouts/',
          '/^~/components/',
          '/^~/pages/',
          '/^~/services/',
          '/^~/utils/',
          '/^~/assets/',
          '/^~/styles/',
          '/([./]+)style?$/',
          ['parent', 'sibling', 'index'],
        ],
      },
    ],
  },
};
