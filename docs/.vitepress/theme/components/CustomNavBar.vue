<template>
  <div class="custom-nav-bar">
    <div class="nav-icons">
      <a :href="withBase('/')" class="nav-icon" title="Home" aria-label="Home">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </a>
      <a :href="withBase('/kb/')" class="nav-icon" title="Knowledge Base" aria-label="Knowledge Base">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      </a>
      <!-- Mobile search icon button - triggers native VitePress search -->
      <button 
        class="nav-icon nav-search-icon-mobile" 
        title="Search" 
        aria-label="Search"
        @click="triggerSearch"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { withBase } from 'vitepress/client'

const triggerSearch = () => {
  // Trigger VitePress search by dispatching Cmd/Ctrl+K keyboard shortcut
  // This matches how VitePress handles the search trigger
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0
  
  // Create a proper keyboard event that VitePress will recognize
  const event = new KeyboardEvent('keydown', {
    key: 'k',
    code: 'KeyK',
    keyCode: 75,
    which: 75,
    ctrlKey: !isMac,
    metaKey: isMac,
    shiftKey: false,
    altKey: false,
    bubbles: true,
    cancelable: true
  })
  
  // Dispatch on window to match VitePress's listener
  window.dispatchEvent(event)
}
</script>

<style scoped>
.custom-nav-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

.nav-icons {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--vp-border-radius-sm);
  color: var(--vp-c-text-2);
  transition: all 0.2s ease;
  text-decoration: none;
  border: 1px solid transparent;
  background: none;
  cursor: pointer;
  padding: 0;
}

.nav-icon:hover {
  color: var(--vp-c-brand);
  background-color: #141414;
  border-color: var(--vp-c-border);
}

.nav-icon svg {
  transition: transform 0.2s ease;
}

.nav-icon:hover svg {
  transform: scale(1.1);
}

.nav-search-icon-mobile {
  display: none; /* Hidden on desktop */
}

@media (max-width: 767px) {
  .nav-search-icon-mobile {
    display: flex; /* Show on mobile */
  }
  
  .custom-nav-bar {
    gap: 0.5rem;
  }
  
  .nav-icon {
    width: 44px; /* Touch-friendly size */
    height: 44px;
    min-width: 44px;
    min-height: 44px;
  }
}
</style>
