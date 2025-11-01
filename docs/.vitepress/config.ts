import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/docs/',
  title: 'Little Cloud Documentation',
  description: 'Documentation for Little Cloud services and products',
  
  // Build output directory
  outDir: '../dist',
  
  // Theme configuration
  themeConfig: {
    siteTitle: 'Little Cloud Docs',
    logo: '/logo.svg', // Add your logo if you have one
    
    // Navigation
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
    ],
    
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
      ]
    },
    
    // Social links (optional)
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-org/littlecloud-www' }
    ],
    
    // Search
    search: {
      provider: 'local'
    },
    
    // Footer
    footer: {
      message: 'Made with ❤️ by Little Cloud',
      copyright: 'Copyright © 2025 Little Cloud'
    },
    
    // Edit link (optional)
    editLink: {
      pattern: 'https://github.com/your-org/vitepress-repo/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    
    // Dark mode
    appearance: 'dark', // or 'force-dark' or false for light only
  }
})