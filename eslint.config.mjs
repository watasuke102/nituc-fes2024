// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {fixupConfigRules} from '@eslint/compat';
import {FlatCompat} from '@eslint/eslintrc';
import js from '@eslint/js';
import * as importPlugin from 'eslint-plugin-import';
import header from 'eslint-plugin-header';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({
  baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
});

export default tseslint.config(
  {
    plugins: {
      header: header,
    },
    rules: {
      'header/header': [
        'warn',
        'line',
        [
          ' NITUC fes 2024',
          ' CopyRight (c) 2024 watasuke',
          '',
          ' Email  : <watasuke102@gmail.com>',
          ' Twitter: @Watasuke102',
          ' This software is released under the MIT or MIT SUSHI-WARE License.',
        ],
      ],
    },
  },
  {
    rules: {
      ...js.configs.recommended.rules,
      // appearance
      indent: ['error', 2, {SwitchCase: 1}],
      quotes: ['error', 'single'],
      'linebreak-style': ['error', 'unix'],
      // program
      eqeqeq: ['error', 'always'], // force ===, !==
      'no-undef': 'error',
      'no-unused-vars': 'error',
      'no-invalid-regexp': 'error',
      'no-case-declarations': 'off', // allow declare in case block
    },
  },
  {
    files: ['**/*.js'],
    rules: {
      semi: ['error', 'always'],
    },
  },
  {
    ignores: ['.cache', 'public'],
  },
  ...tseslint.configs.recommended,
  ...fixupConfigRules(compat.extends('plugin:react/recommended')),
  {
    files: ['**/*.{j,t}sx'],
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      ...jsxA11y.flatConfigs.strict.rules,
    },
  },
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/order': [
        'warn',
        {
          // prettier-ignore
          groups: [
            'builtin',
            'external',
            'internal',
            'index',
            'sibling',
            'parent',
            'object',
            'type',
          ],
          // prettier-ignore
          pathGroups: [
            { position: 'before', group: 'builtin',  pattern: '*.css', patternOptions: {matchBase: true} },
            { position: 'before', group: 'type',     pattern: '@assets/**' },
          ],
          pathGroupsExcludedImportTypes: ['@assets/**'],
          'newlines-between': 'ignore',
        },
      ],
    },
  },
);
