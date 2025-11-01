<template>
  <div class="sidebar-search-wrapper">
    <button class="sidebar-search-button" @click="triggerSearch" aria-label="Search">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
      <span class="search-placeholder">Search documentation...</span>
      <kbd class="search-shortcut">⌘K</kbd>
    </button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const triggerSearch = () => {
  // First, try to find and click the actual VitePress search button
  // This is the most reliable method
  const searchSelectors = [
    '#local-search button',
    '.VPNavBarSearch button',
    'button[aria-label="Search"]',
    '.DocSearch-Button',
    'button.DocSearch-Button'
  ]
  
  for (const selector of searchSelectors) {
    const searchButton = document.querySelector(selector)
    if (searchButton) {
      // Click the actual search button
      searchButton.click()
      return
    }
  }
  
  // Fallback: Dispatch keyboard event that VitePress listens for
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
  
  // Also try clicking again after a short delay in case the button appears
  setTimeout(() => {
    for (const selector of searchSelectors) {
      const searchButtonAfter = document.querySelector(selector)
      if (searchButtonAfter) {
        searchButtonAfter.click()
        break
      }
    }
  }, 100)
}
</script>

<style scoped>
.sidebar-search-wrapper {
  padding: 1rem;
  border-bottom: 1px solid var(--vp-c-border);
  background-color: var(--vp-c-bg-alt);
}

.sidebar-search-button {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 1rem;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: var(--vp-border-radius);
  color: var(--vp-c-text-2);
  font-size: 14px;
  font-family: var(--vp-font-family-base);
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.sidebar-search-button:hover {
  border-color: var(--vp-c-border-hover);
  background-color: var(--vp-c-bg-elv);
  color: var(--vp-c-text);
}

.sidebar-search-button:focus {
  border-color: var(--vp-c-brand);
  outline: none;
  box-shadow: 0 0 0 3px rgba(30, 144, 255, 0.1);
}

.sidebar-search-button svg {
  flex-shrink: 0;
  color: var(--vp-c-text-3);
}

.sidebar-search-button:hover svg {
  color: var(--vp-c-brand);
}

.search-placeholder {
  flex: 1;
  color: var(--vp-c-text-3);
}

.sidebar-search-button:hover .search-placeholder {
  color: var(--vp-c-text-2);
}

.search-shortcut {
  flex-shrink: 0;
  padding: 0.125rem 0.375rem;
  font-size: 0.75rem;
  font-family: var(--vp-font-family-mono);
  background-color: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  color: var(--vp-c-text-3);
}

@media (max-width: 768px) {
  .sidebar-search-wrapper {
    padding: 0.75rem;
  }
  
  .sidebar-search-button {
    padding: 0.75rem;
    font-size: 16px; /* Prevents zoom on iOS */
  }
  
  .search-shortcut {
    display: none; /* Hide shortcut on mobile */
  }
}
</style>

