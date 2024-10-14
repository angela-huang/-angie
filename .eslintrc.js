module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'], // 内置和外部模块
          'internal', // 自己写的组件
          'parent', // 父级导入
          'sibling', // 同级导入
          'index', // 索引文件
        ],
        'newlines-between': 'always', // 每组之间强制换行
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  plugins: ['import'],
};
