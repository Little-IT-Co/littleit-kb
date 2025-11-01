import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import CustomNavBar from './components/CustomNavBar.vue'
import CustomNavTitle from './components/CustomNavTitle.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'nav-bar-title': () => h(CustomNavTitle),
      'nav-bar-content-after': () => h(CustomNavBar)
    })
  }
}
