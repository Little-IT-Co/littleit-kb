<template>
  <div class="custom-nav-bar">
    <div class="nav-icons">
      <a :href="withBase('/')" class="nav-icon" title="Home" aria-label="Home">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </a>
      <a :href="withBase('/knowledge-base/')" class="nav-icon" title="Knowledge Base" aria-label="Knowledge Base">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      </a>
    </div>
    <div class="nav-search-wrapper">
      <div class="nav-search">
        <label class="search-label" for="vp-search-input">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </label>
        <input
          id="vp-search-input"
          type="search"
          class="search-input"
          placeholder="Search documentation..."
          autocomplete="off"
          @focus="handleSearchFocus"
          @input="handleSearchInput"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { withBase } from 'vitepress/client'

const searchValue = ref('')

const handleSearchFocus = () => {
  // Focus will trigger VitePress search if available
  // Or we can implement custom search
}

const handleSearchInput = (event) => {
  searchValue.value = event.target.value
  // Implement search functionality
  // For now, this will work with browser's native search
}
</script>

<style scoped>
.custom-nav-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
  background-color: transparent !important;
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

.nav-search-wrapper {
  min-width: 280px;
  max-width: 400px;
}

.nav-search {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.search-label {
  position: absolute;
  left: 12px;
  display: flex;
  align-items: center;
  color: var(--vp-c-text-3);
  pointer-events: none;
  z-index: 1;
}

.search-input {
  width: 100%;
  padding: 10px 16px 10px 40px;
  background-color: #0A0A0A;
  border: 1px solid var(--vp-c-border);
  border-radius: var(--vp-border-radius);
  color: var(--vp-c-text);
  font-size: 14px;
  font-family: var(--vp-font-family-base);
  transition: all 0.2s ease;
  outline: none;
}

.search-input::placeholder {
  color: var(--vp-c-text-3);
}

.search-input:hover {
  border-color: var(--vp-c-border-hover);
  background-color: #141414;
}

.search-input:focus {
  border-color: var(--vp-c-brand);
  background-color: #141414;
  box-shadow: 0 0 0 3px rgba(30, 144, 255, 0.1);
}

@media (max-width: 768px) {
  .custom-nav-bar {
    gap: 0.5rem;
  }
  
  .nav-search-wrapper {
    min-width: 200px;
    max-width: 250px;
  }
  
  .nav-icon {
    width: 36px;
    height: 36px;
  }
  
  .search-input {
    font-size: 16px; /* Prevents zoom on iOS */
    padding: 8px 12px 8px 36px;
  }
}

@media (max-width: 640px) {
  .nav-search-wrapper {
    min-width: 150px;
    max-width: 180px;
  }
  
  .search-input::placeholder {
    font-size: 12px;
  }
}
</style>
