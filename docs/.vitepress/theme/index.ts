import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    // Register global components here if needed
  },
  Layout() {
    return h(Theme.Layout, null, {
      // Custom slots can be added here
    })
  }
}