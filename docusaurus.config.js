module.exports = {
  title: '<mapml-viewer> documentation',
  tagline: 'A custom <mapml-viewer> and <layer-> element suite',
  url: 'Maps4HTML.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Maps4HTML', // Usually your GitHub org/user name.
  projectName: 'web-map-doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '<mapml-viewer>',
      logo: {
        alt: 'Maps4HTML Logo',
        src: 'img/maps4html.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://www.w3.org/community/maps4html/',
          label: 'Blog',
          position: 'right'
        },
        {
          href: 'https://github.com/Maps4HTML/Web-Map-Custom-Element',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Installation',
              to: 'docs/installation/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Wiki',
              href: 'https://www.w3.org/community/maps4html/wiki/',
            },
            {
              label: 'Gitter',
              href: 'https://gitter.im/Maps4HTML',
            },
            {
              label: 'Discourse',
              href: 'https://discourse.wicg.io/c/web-mapping',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/maps4html',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Maps4HTML/Web-Map-Custom-Element',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Maps4HTML. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Maps4HTML/web-map-doc',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
