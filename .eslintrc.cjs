module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'react-refresh'],
  rules: {
    'quotes': ['error', 'double'], // Правило для двойных кавычек
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/react-in-jsx-scope': 'off', // Отключить правило, требующее React в области видимости
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.jsx', '.tsx'] }, // Разрешить JSX в .jsx и .tsx файлах
    ],
    'import/prefer-default-export': 'off', // Отключить правило, предпочитающее экспорт по умолчанию
  },
  settings: {
    react: {
      version: 'detect', // Автоматически определяет версию React
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {}, // Добавьте это, чтобы ESLint мог распознавать TypeScript модули
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
};
