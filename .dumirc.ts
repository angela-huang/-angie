import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  baseUrl: '/-angie',
  publichPaht: '/-angie',
  conventionLayout: false,
  themeConfig: {
    name: '',
    logo: '/logo.png',
    footer: false,
    nav: [
      {
        title: '文档',
        link: '/docs/button',
        activePath: '/docs'
      },
      {
        title: '组件',
        link: '/components/button',
        activePath: '/components'
      },

    ]
  },
  theme: { '@c-primary': '#54b180' },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libbraryDirectory: 'es',
        style: true
      }
    ]
  ],
});
