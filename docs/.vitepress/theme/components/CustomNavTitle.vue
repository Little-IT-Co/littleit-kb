<template>
  <a :href="withBase('/')" class="custom-nav-title">
    <!-- Little Cloud Icon SVG -->
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 32 32" 
      fill="none"
      class="nav-icon"
    >
      <path 
        d="M8.5 23H22a7 7 0 1 0-6.71-9h-6.79a4.5 4.5 0 0 0-4.5 4.5v0a4.5 4.5 0 0 0 4.5 4.5Z"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span class="nav-title-text">
      <span class="nav-title-little">Little</span>
      <span class="nav-title-cloud">Cloud</span>
    </span>
  </a>
</template>

<script setup>
import { withBase } from 'vitepress/client'
</script>

<style scoped>
.custom-nav-title {
  display: flex;
  align-items: center;
  gap: 0.5rem; /* gap-2 */
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.custom-nav-title:hover {
  opacity: 0.9;
}

.custom-nav-title:hover .nav-icon {
  transform: scale(1.1);
  transition: transform 0.2s ease;
}

.nav-icon {
  height: 24px;
  width: 24px;
  color: hsl(212, 100%, 56%); /* primary color */
  transition: transform 0.2s ease;
}

.nav-title-text {
  display: flex;
  align-items: baseline;
  gap: 0.25rem; /* gap-1 */
  font-size: 1.25rem; /* text-xl */
  letter-spacing: -0.025em; /* tracking-tight */
  line-height: 1;
}

.nav-title-little {
  font-family: 'Black Echo', sans-serif;
  font-size: 1.31rem;
  color: #FFFFFF;
  font-weight: normal;
}

.nav-title-cloud {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 1.25rem;
  font-weight: 700; /* font-bold */
  background: linear-gradient(90deg, hsl(212, 100%, 56%) 0%, hsl(219, 93%, 64%) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .nav-icon {
    height: 20px;
    width: 20px;
  }
  
  .nav-title-text {
    font-size: 1.125rem;
    gap: 0.125rem;
  }
  
  .nav-title-little {
    font-size: 1.2rem;
  }
  
  .nav-title-cloud {
    font-size: 1.125rem;
  }
}

@media (max-width: 480px) {
  .nav-icon {
    height: 18px;
    width: 18px;
  }
  
  .nav-title-text {
    font-size: 1rem;
  }
  
  .nav-title-little {
    font-size: 1.1rem;
  }
  
  .nav-title-cloud {
    font-size: 1rem;
  }
}
</style>

