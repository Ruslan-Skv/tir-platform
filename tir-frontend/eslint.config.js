// eslint.config.js
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
      // React Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
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




// // eslint.config.js
// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import tseslint from 'typescript-eslint'
// import prettierPlugin from 'eslint-plugin-prettier'
// import { defineConfig } from 'eslint/config'

// export default defineConfig([
//   // Игнорируем папки
//   {
//     ignores: ['dist', 'node_modules', '*.config.js'],
//   },
//   // Основные правила для TypeScript/React
//   {
//     files: ['**/*.{ts,tsx}'],
//     plugins: {
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//       'prettier': prettierPlugin, // Добавляем плагин
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
//       // Prettier правила
//       'prettier/prettier': 'error',
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
// ])




// // eslint.config.js
// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import tseslint from 'typescript-eslint'
// import prettier from 'eslint-config-prettier'
// import { defineConfig } from 'eslint/config'

// export default defineConfig([
//   // Игнорируем папки
//   {
//     ignores: ['dist', 'node_modules', '*.config.js'],
//   },
//   // Основные правила для TypeScript/React
//   {
//     files: ['**/*.{ts,tsx}'],
//     extends: [
//       js.configs.recommended,
//       tseslint.configs.recommended,
//       reactHooks.configs.flat.recommended,
//       reactRefresh.configs.vite,
//       prettier,
//     ],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         project: './tsconfig.app.json',
//       },
//     },
//     rules: {
//       'prettier/prettier': 'error',
//       '@typescript-eslint/no-unused-vars': 'error',
//       '@typescript-eslint/explicit-function-return-type': 'off',
//       '@typescript-eslint/explicit-module-boundary-types': 'off',
//       '@typescript-eslint/no-explicit-any': 'warn',
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ],
//     },
//   },
// ])



// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import tseslint from 'typescript-eslint'
// import { defineConfig, globalIgnores } from 'eslint/config'

// export default defineConfig([
//   globalIgnores(['dist']),
//   {
//     files: ['**/*.{ts,tsx}'],
//     extends: [
//       js.configs.recommended,
//       tseslint.configs.recommended,
//       reactHooks.configs.flat.recommended,
//       reactRefresh.configs.vite,
//     ],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//   },
// ])
