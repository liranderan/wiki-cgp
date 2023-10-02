// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'City Guide Pro',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://calgary-3sy.pages.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cityguidepro', // Usually your GitHub org/user name.
  projectName: 'wiki-cgp', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['cn'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cityguidepro/wiki-cgp',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/cityguidepro/wiki-cgp',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
            {
            title: 'CGP',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Wiki',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
               {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
                    {
            title: 'Docs',
            items: [
              {
                label: 'About City Guide',
                href: 'https://www.xiaohongshu.com/user/profile/584e45dd6a6a693c6733d67e',
              },
              {
                label: 'Contact us',
                href: 'https://www.xiaohongshu.com/user/profile/584e45dd6a6a693c6733d67e',
              },{
                label: 'Terms of Service',
                href: 'https://www.xiaohongshu.com/user/profile/584e45dd6a6a693c6733d67e',
              },{
                label: 'Privacy Policy',
                href: 'https://www.xiaohongshu.com/user/profile/584e45dd6a6a693c6733d67e',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Xiaohongshu',
                href: 'https://www.xiaohongshu.com/user/profile/584e45dd6a6a693c6733d67e',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/cityguidepro',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/cityguidepro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} cityguidepro, inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
