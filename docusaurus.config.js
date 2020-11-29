module.exports = {
  title: 'CertGround',
  tagline:
    'A Training Center Management Webapp built for the Construction Industry.',
  url: 'https://certground.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'natac13', // Usually your GitHub org/user name.
  projectName: 'CertGround-Website', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark'
    },
    navbar: {
      title: 'CertGround',
      logo: {
        alt: 'CertGround Momogram Logo',
        src: 'img/CertGround-Monogram-White-BlueBG.png'
      },
      items: [
        {
          to: 'docs/about',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left'
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        { to: 'clients', label: 'Clients', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right'
        },
        {
          href: 'https://demo.certground.com',
          label: 'Demo App',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              to: 'privacy-policy'
            },
            {
              label: 'End User License Agreement (EULA)',
              to: 'eula'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus'
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/natac13'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sean Paul Campbell`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
