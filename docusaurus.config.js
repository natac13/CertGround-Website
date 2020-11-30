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
          to: 'docs/getting-started',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left'
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        { to: 'clients', label: 'Clients', position: 'left' },
        {
          href: 'https://github.com/natac13/CertGround-Website',
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
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog'
            },
            {
              label: 'Demo App',
              href: 'https://demo.certground.com'
            }
          ]
        },
        {
          title: 'Sean Campbell',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/natac13'
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/seancampbellnatac/'
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
          editUrl: 'https://github.com/natac13/CertGround-Website/edit/master/'
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/natac13/CertGround-Website/edit/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  plugins: ['@docusaurus/plugin-ideal-image']
}
