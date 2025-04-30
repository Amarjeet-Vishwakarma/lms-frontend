// eslint.config.js
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import babelParser from '@babel/eslint-parser';

export default [
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
      globals: {
        browser: true,
        es2020: true,
        node: true,
        document: 'readonly', // Explicitly define document
      },
    },
    settings: {
      react: { version: '18.2' },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'simple-import-sort/imports': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off', // Disable react-in-jsx-scope
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-undef': 'error', // Ensure no-undef is enabled
    },
  },
  {
    ignores: ['dist', 'eslint.config.js'],
  },
];