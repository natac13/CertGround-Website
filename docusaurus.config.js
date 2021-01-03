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
      defaultMode: 'dark',
      respectPrefersColorScheme: true
    },
    navbar: {
      title: 'CertGround',
      logo: {
        alt: 'CertGround Monogram Logo',
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
        { to: 'quote', label: 'Request Quote', position: 'left' },
        // {
        //   to: '/#clients',
        //   activeBasePath: '/',
        //   label: 'Clients',
        //   position: 'left'
        // },
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
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: 'docs/getting-started' },
            { label: 'Certification Sharing', to: 'docs/member/cert-share' },
            { label: 'FAQs', to: 'docs/faqs' }
          ]
        },
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
              label: 'Clients',
              to: '/#clients'
            },
            {
              label: 'Demo App',
              href: 'https://demo.certground.com'
            }
          ]
        },
        {
          title: 'Contact Us',
          items: [
            {
              label: 'Email',
              href: 'mailto:sean.campbell13@gmail.com'
            },
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
      logo: {
        alt: 'CertGround™',
        src: 'img/CertGround-Logo-Full-White-BlueBG.png'
      },
      copyright: `Copyright © ${new Date().getFullYear()} Sean Paul Campbell`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: 'https://github.com/natac13/CertGround-Website/edit/master/'
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 3,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Sean Campbell`
          },
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
          editUrl: 'https://github.com/natac13/CertGround-Website/edit/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  plugins: ['docusaurus-tailwindcss-loader', '@docusaurus/plugin-ideal-image']
}
