import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: 'docs',
  title: 'MiMo Code',
  description: 'MiMo Code 文档',
  icon: '/logo.png',
  logo: '/logo.png',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/XiaomiMiMo/',
      },
    ],
    enableContentAnimation: true,
    enableScrollToTop: true,
  },
  markdown: {
    showLineNumbers: true,
  },
  locales: [
    {
      id: 'zh',
      lang: 'zh',
      label: '简体中文',
    },
  ],
  route: {
    excludeConfig: [],
  },
});
