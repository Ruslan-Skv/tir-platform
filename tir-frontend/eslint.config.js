import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  // Игнорируем папки
  {
    ignores: ['dist', 'node_modules', '*.config.js'],
  },
  // Для исходного кода (src/) с TypeScript проверкой
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: './tsconfig.app.json',
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactRefresh.configs.vite.rules,
      // TypeScript правила
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      // React правила
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // React Refresh - разрешаем экспорт констант в .page файлах
      'react-refresh/only-export-components': [
        'warn',
        { 
          allowConstantExport: true,
          allowExportNames: ['Page', 'documentProps', 'prerender', 'doNotPrerender'] 
        }
      ],
    },
  },
  // Для .page.tsx файлов - особые правила
  {
    files: ['src/**/*.page.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off', // Полностью отключаем для .page файлов
    },
  },
  // Для конфигурационных файлов (без TypeScript проверки)
  {
    files: ['**/*.config.{js,ts}', '**/eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
])



// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import tseslint from 'typescript-eslint'
// import { defineConfig } from 'eslint/config'

// export default defineConfig([
//   // Игнорируем папки
//   {
//     ignores: ['dist', 'node_modules', '*.config.js'],
//   },
//   // Для исходного кода (src/) с TypeScript проверкой
//   {
//     files: ['src/**/*.{ts,tsx}'],
//     plugins: {
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     extends: [
//       js.configs.recommended,
//       tseslint.configs.recommended,
//     ],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         project: './tsconfig.app.json',
//       },
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       ...reactRefresh.configs.vite.rules,
//       // TypeScript правила
//       '@typescript-eslint/no-unused-vars': 'error',
//       '@typescript-eslint/explicit-function-return-type': 'off',
//       '@typescript-eslint/explicit-module-boundary-types': 'off',
//       '@typescript-eslint/no-explicit-any': 'warn',
//       // React Refresh
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ],
//     },
//   },
//   // Для конфигурационных файлов (без TypeScript проверки)
//   {
//     files: ['**/*.config.{js,ts}', '**/eslint.config.js'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: {
//         ...globals.node,
//       },
//     },
//     rules: {
//       '@typescript-eslint/no-var-requires': 'off',
//       '@typescript-eslint/explicit-function-return-type': 'off',
//     },
//   },
// ])

