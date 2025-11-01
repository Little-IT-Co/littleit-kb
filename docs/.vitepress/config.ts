import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/docs/',
  title: 'Little Cloud Documentation',
  description: 'Simple, reliable and secure cloud solutions. Documentation for Little Cloud services and products.',
  
  // Enable clean URLs (removes .html extensions)
  cleanUrls: 'with-subfolders',
  
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
      '/kb/': [
        {
          text: 'Knowledge Base',
          items: [
            { text: 'Overview', link: '/kb/' },
          ]
        },
        {
          text: 'Google Workspace',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/kb/google-workspace/' },
            { text: 'Gmail', link: '/kb/google-workspace/gmail' },
            { text: 'Google Admin', link: '/kb/google-workspace/google-admin' },
            { text: 'Google Drive, Docs, Sheets and Slides', link: '/kb/google-workspace/google-drive-docs-sheets-slides' },
            { text: 'Google Meet', link: '/kb/google-workspace/google-meet' },
            { text: 'Google Keep', link: '/kb/google-workspace/google-keep' },
          ]
        },
        {
          text: 'Microsoft 365',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/kb/microsoft-365/' },
            { text: 'Adding Users', link: '/kb/microsoft-365/adding-users' },
            { text: 'Adding Licences', link: '/kb/microsoft-365/adding-licences' },
            { text: 'OneDrive & SharePoint', link: '/kb/microsoft-365/onedrive-sharepoint' },
            { text: 'Microsoft Teams', link: '/kb/microsoft-365/microsoft-teams' },
            { text: 'Microsoft Entra', link: '/kb/microsoft-365/microsoft-entra' },
            { text: 'Outlook & Exchange', link: '/kb/microsoft-365/outlook-exchange/' },
            { text: 'The Web App vs The Client', link: '/kb/microsoft-365/outlook-exchange/web-app-vs-client' },
            { text: 'Mailboxes', link: '/kb/microsoft-365/outlook-exchange/mailboxes' },
          ]
        },
        {
          text: 'WordPress',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/kb/wordpress/' },
            { text: 'Plugins', link: '/kb/wordpress/plugins/' },
            { text: '  └ Google Site Kit', link: '/kb/wordpress/plugins/google-site-kit' },
            { text: '  └ Elementor', link: '/kb/wordpress/plugins/elementor' },
            { text: '  └ Limit Login Attempts', link: '/kb/wordpress/plugins/limit-login-attempts' },
            { text: '  └ WP Mail Options', link: '/kb/wordpress/plugins/wp-mail-options' },
            { text: 'Best Practices for Security', link: '/kb/wordpress/security-best-practices' },
            { text: 'Installation', link: '/kb/wordpress/installation/' },
            { text: '  └ Installing on cPanel', link: '/kb/wordpress/installation/cpanel' },
            { text: '  └ Installing on Docker', link: '/kb/wordpress/installation/docker' },
            { text: '  └ Installing on Coolify', link: '/kb/wordpress/installation/coolify' },
          ]
        },
        {
          text: 'cPanel',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/kb/cpanel' },
          ]
        },
        {
          text: 'CyberPanel',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/kb/cyberpanel' },
          ]
        },
        {
          text: 'Cloudmin',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/kb/cloudmin' },
          ]
        },
        {
          text: 'Docker',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/kb/docker' },
          ]
        },
        {
          text: 'GitHub',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/kb/github' },
          ]
        },
      ],
      '/kb/google-workspace/': [
        {
          text: 'Google Workspace',
          items: [
            { text: 'Overview', link: '/kb/google-workspace/' },
            { text: 'Gmail', link: '/kb/google-workspace/gmail' },
            { text: 'Google Admin', link: '/kb/google-workspace/google-admin' },
            { text: 'Google Drive, Docs, Sheets and Slides', link: '/kb/google-workspace/google-drive-docs-sheets-slides' },
            { text: 'Google Meet', link: '/kb/google-workspace/google-meet' },
            { text: 'Google Keep', link: '/kb/google-workspace/google-keep' },
          ]
        }
      ],
      '/kb/microsoft-365/': [
        {
          text: 'Microsoft 365',
          items: [
            { text: 'Overview', link: '/kb/microsoft-365/' },
            { text: 'Adding Users', link: '/kb/microsoft-365/adding-users' },
            { text: 'Adding Licences', link: '/kb/microsoft-365/adding-licences' },
            { text: 'OneDrive & SharePoint', link: '/kb/microsoft-365/onedrive-sharepoint' },
            { text: 'Microsoft Teams', link: '/kb/microsoft-365/microsoft-teams' },
            { text: 'Microsoft Entra', link: '/kb/microsoft-365/microsoft-entra' },
            { text: 'Outlook & Exchange', link: '/kb/microsoft-365/outlook-exchange/' },
            { text: 'The Web App vs The Client', link: '/kb/microsoft-365/outlook-exchange/web-app-vs-client' },
            { text: 'Mailboxes', link: '/kb/microsoft-365/outlook-exchange/mailboxes' },
          ]
        },
      ],
      '/kb/microsoft-365/outlook-exchange/': [
        {
          text: 'Outlook & Exchange',
          items: [
            { text: 'Overview', link: '/kb/microsoft-365/outlook-exchange/' },
            { text: 'The Web App vs The Client', link: '/kb/microsoft-365/outlook-exchange/web-app-vs-client' },
            { text: 'Mailboxes', link: '/kb/microsoft-365/outlook-exchange/mailboxes' },
          ]
        }
      ],
      '/kb/wordpress/': [
        {
          text: 'WordPress',
          items: [
            { text: 'Overview', link: '/kb/wordpress/' },
            { text: 'Plugins', link: '/kb/wordpress/plugins/' },
            { text: '  └ Google Site Kit', link: '/kb/wordpress/plugins/google-site-kit' },
            { text: '  └ Elementor', link: '/kb/wordpress/plugins/elementor' },
            { text: '  └ Limit Login Attempts', link: '/kb/wordpress/plugins/limit-login-attempts' },
            { text: '  └ WP Mail Options', link: '/kb/wordpress/plugins/wp-mail-options' },
            { text: 'Best Practices for Security', link: '/kb/wordpress/security-best-practices' },
            { text: 'Installation', link: '/kb/wordpress/installation/' },
            { text: '  └ Installing on cPanel', link: '/kb/wordpress/installation/cpanel' },
            { text: '  └ Installing on Docker', link: '/kb/wordpress/installation/docker' },
            { text: '  └ Installing on Coolify', link: '/kb/wordpress/installation/coolify' },
          ]
        }
      ],
      '/kb/wordpress/plugins/': [
        {
          text: 'WordPress Plugins',
          items: [
            { text: 'Overview', link: '/kb/wordpress/plugins/' },
            { text: 'Google Site Kit', link: '/kb/wordpress/plugins/google-site-kit' },
            { text: 'Elementor', link: '/kb/wordpress/plugins/elementor' },
            { text: 'Limit Login Attempts', link: '/kb/wordpress/plugins/limit-login-attempts' },
            { text: 'WP Mail Options', link: '/kb/wordpress/plugins/wp-mail-options' },
          ]
        }
      ],
      '/kb/wordpress/installation/': [
        {
          text: 'WordPress Installation',
          items: [
            { text: 'Overview', link: '/kb/wordpress/installation/' },
            { text: 'Installing on cPanel', link: '/kb/wordpress/installation/cpanel' },
            { text: 'Installing on Docker', link: '/kb/wordpress/installation/docker' },
            { text: 'Installing on Coolify', link: '/kb/wordpress/installation/coolify' },
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