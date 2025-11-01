import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/docs/',
  title: 'Little Cloud Documentation',
  description: 'Simple, reliable and secure cloud solutions. Documentation for Little Cloud services and products.',
  
  // Build output directory
  outDir: '../dist',
  
  // Markdown configuration
  markdown: {
    config: (md) => {
      // Configure code block language aliases - modify tokens before rendering
      md.core.ruler.before('normalize', 'dockerfile-alias', (state) => {
        const tokens = state.tokens
        for (let i = 0; i < tokens.length; i++) {
          const token = tokens[i]
          if (token.type === 'fence' && token.info) {
            const info = token.info.trim().toLowerCase()
            if (info === 'dockerfile') {
              token.info = 'docker'
            }
          }
          // Also check nested tokens
          if (token.children) {
            for (let j = 0; j < token.children.length; j++) {
              const child = token.children[j]
              if (child.type === 'fence' && child.info) {
                const info = child.info.trim().toLowerCase()
                if (info === 'dockerfile') {
                  child.info = 'docker'
                }
              }
            }
          }
        }
      })
    }
  },
  
  // Theme configuration
  themeConfig: {
    siteTitle: 'Little Cloud Docs',
    logo: 'https://little.cloud/assets/img/logo.svg', // Add your logo if you have one
    
    // Navigation - removed menu items, using custom navbar instead
    nav: [],
    
    // Sidebar
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/getting-started/' },
          ]
        }
      ],
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Overview', link: '/getting-started/' },
          ]
        }
      ],
      '/knowledge-base/': [
        {
          text: 'Knowledge Base',
          items: [
            { text: 'Overview', link: '/knowledge-base/' },
          ]
        },
        {
          text: 'Google Workspace',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/knowledge-base/google-workspace/' },
            { text: 'Gmail', link: '/knowledge-base/google-workspace/gmail' },
            { text: 'Google Admin', link: '/knowledge-base/google-workspace/google-admin' },
            { text: 'Google Drive, Docs, Sheets and Slides', link: '/knowledge-base/google-workspace/google-drive-docs-sheets-slides' },
            { text: 'Google Meet', link: '/knowledge-base/google-workspace/google-meet' },
            { text: 'Google Keep', link: '/knowledge-base/google-workspace/google-keep' },
          ]
        },
        {
          text: 'Microsoft 365',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/knowledge-base/microsoft-365/' },
            { text: 'Adding Users', link: '/knowledge-base/microsoft-365/adding-users' },
            { text: 'Adding Licences', link: '/knowledge-base/microsoft-365/adding-licences' },
            { text: 'OneDrive & SharePoint', link: '/knowledge-base/microsoft-365/onedrive-sharepoint' },
            { text: 'Microsoft Teams', link: '/knowledge-base/microsoft-365/microsoft-teams' },
            { text: 'Microsoft Entra', link: '/knowledge-base/microsoft-365/microsoft-entra' },
            { text: 'Outlook & Exchange', link: '/knowledge-base/microsoft-365/outlook-exchange/' },
            { text: 'The Web App vs The Client', link: '/knowledge-base/microsoft-365/outlook-exchange/web-app-vs-client' },
            { text: 'Mailboxes', link: '/knowledge-base/microsoft-365/outlook-exchange/mailboxes' },
          ]
        },
        {
          text: 'WordPress',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/knowledge-base/wordpress/' },
            { text: 'Plugins', link: '/knowledge-base/wordpress/plugins/' },
            { text: '  └ Google Site Kit', link: '/knowledge-base/wordpress/plugins/google-site-kit' },
            { text: '  └ Elementor', link: '/knowledge-base/wordpress/plugins/elementor' },
            { text: '  └ Limit Login Attempts', link: '/knowledge-base/wordpress/plugins/limit-login-attempts' },
            { text: '  └ WP Mail Options', link: '/knowledge-base/wordpress/plugins/wp-mail-options' },
            { text: 'Best Practices for Security', link: '/knowledge-base/wordpress/security-best-practices' },
            { text: 'Installation', link: '/knowledge-base/wordpress/installation/' },
            { text: '  └ Installing on cPanel', link: '/knowledge-base/wordpress/installation/cpanel' },
            { text: '  └ Installing on Docker', link: '/knowledge-base/wordpress/installation/docker' },
            { text: '  └ Installing on Coolify', link: '/knowledge-base/wordpress/installation/coolify' },
          ]
        },
        {
          text: 'cPanel',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/knowledge-base/cpanel' },
          ]
        },
        {
          text: 'CyberPanel',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/knowledge-base/cyberpanel' },
          ]
        },
        {
          text: 'Cloudmin',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/knowledge-base/cloudmin' },
          ]
        },
        {
          text: 'Docker',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/knowledge-base/docker' },
          ]
        },
        {
          text: 'GitHub',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/knowledge-base/github' },
          ]
        },
      ],
      '/knowledge-base/google-workspace/': [
        {
          text: 'Google Workspace',
          items: [
            { text: 'Overview', link: '/knowledge-base/google-workspace/' },
            { text: 'Gmail', link: '/knowledge-base/google-workspace/gmail' },
            { text: 'Google Admin', link: '/knowledge-base/google-workspace/google-admin' },
            { text: 'Google Drive, Docs, Sheets and Slides', link: '/knowledge-base/google-workspace/google-drive-docs-sheets-slides' },
            { text: 'Google Meet', link: '/knowledge-base/google-workspace/google-meet' },
            { text: 'Google Keep', link: '/knowledge-base/google-workspace/google-keep' },
          ]
        }
      ],
      '/knowledge-base/microsoft-365/': [
        {
          text: 'Microsoft 365',
          items: [
            { text: 'Overview', link: '/knowledge-base/microsoft-365/' },
            { text: 'Adding Users', link: '/knowledge-base/microsoft-365/adding-users' },
            { text: 'Adding Licences', link: '/knowledge-base/microsoft-365/adding-licences' },
            { text: 'OneDrive & SharePoint', link: '/knowledge-base/microsoft-365/onedrive-sharepoint' },
            { text: 'Microsoft Teams', link: '/knowledge-base/microsoft-365/microsoft-teams' },
            { text: 'Microsoft Entra', link: '/knowledge-base/microsoft-365/microsoft-entra' },
            { text: 'Outlook & Exchange', link: '/knowledge-base/microsoft-365/outlook-exchange/' },
            { text: 'The Web App vs The Client', link: '/knowledge-base/microsoft-365/outlook-exchange/web-app-vs-client' },
            { text: 'Mailboxes', link: '/knowledge-base/microsoft-365/outlook-exchange/mailboxes' },
          ]
        },
      ],
      '/knowledge-base/microsoft-365/outlook-exchange/': [
        {
          text: 'Outlook & Exchange',
          items: [
            { text: 'Overview', link: '/knowledge-base/microsoft-365/outlook-exchange/' },
            { text: 'The Web App vs The Client', link: '/knowledge-base/microsoft-365/outlook-exchange/web-app-vs-client' },
            { text: 'Mailboxes', link: '/knowledge-base/microsoft-365/outlook-exchange/mailboxes' },
          ]
        }
      ],
      '/knowledge-base/wordpress/': [
        {
          text: 'WordPress',
          items: [
            { text: 'Overview', link: '/knowledge-base/wordpress/' },
            { text: 'Plugins', link: '/knowledge-base/wordpress/plugins/' },
            { text: '  └ Google Site Kit', link: '/knowledge-base/wordpress/plugins/google-site-kit' },
            { text: '  └ Elementor', link: '/knowledge-base/wordpress/plugins/elementor' },
            { text: '  └ Limit Login Attempts', link: '/knowledge-base/wordpress/plugins/limit-login-attempts' },
            { text: '  └ WP Mail Options', link: '/knowledge-base/wordpress/plugins/wp-mail-options' },
            { text: 'Best Practices for Security', link: '/knowledge-base/wordpress/security-best-practices' },
            { text: 'Installation', link: '/knowledge-base/wordpress/installation/' },
            { text: '  └ Installing on cPanel', link: '/knowledge-base/wordpress/installation/cpanel' },
            { text: '  └ Installing on Docker', link: '/knowledge-base/wordpress/installation/docker' },
            { text: '  └ Installing on Coolify', link: '/knowledge-base/wordpress/installation/coolify' },
          ]
        }
      ],
      '/knowledge-base/wordpress/plugins/': [
        {
          text: 'WordPress Plugins',
          items: [
            { text: 'Overview', link: '/knowledge-base/wordpress/plugins/' },
            { text: 'Google Site Kit', link: '/knowledge-base/wordpress/plugins/google-site-kit' },
            { text: 'Elementor', link: '/knowledge-base/wordpress/plugins/elementor' },
            { text: 'Limit Login Attempts', link: '/knowledge-base/wordpress/plugins/limit-login-attempts' },
            { text: 'WP Mail Options', link: '/knowledge-base/wordpress/plugins/wp-mail-options' },
          ]
        }
      ],
      '/knowledge-base/wordpress/installation/': [
        {
          text: 'WordPress Installation',
          items: [
            { text: 'Overview', link: '/knowledge-base/wordpress/installation/' },
            { text: 'Installing on cPanel', link: '/knowledge-base/wordpress/installation/cpanel' },
            { text: 'Installing on Docker', link: '/knowledge-base/wordpress/installation/docker' },
            { text: 'Installing on Coolify', link: '/knowledge-base/wordpress/installation/coolify' },
          ]
        }
      ],
    },
    
    // Footer
    footer: {
      message: 'Made with ❤️ by Little Cloud',
      copyright: 'Copyright © 2025 Little Cloud OÜ'
    },
    
    // Edit link (optional)
    editLink: {
      pattern: 'https://github.com/littlewebco/littlecloud-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
  }
})