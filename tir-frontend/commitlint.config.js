module.exports = {
  extends: ['@commitlint/config-conventional']
};


// module.exports = {
//   extends: ['@commitlint/config-conventional'],
//   rules: {
//     'type-enum': [
//       2,
//       'always',
//       [
//         'feat',     // Новая функциональность
//         'fix',      // Исправление бага
//         'docs',     // Изменения в документации
//         'style',    // Изменения, не влияющие на логику (форматирование)
//         'refactor', // Рефакторинг кода
//         'test',     // Добавление тестов
//         'chore',    // Вспомогательные изменения
//         'revert'    // Откат изменений
//       ]
//     ],
//     'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']]
//   }
// };