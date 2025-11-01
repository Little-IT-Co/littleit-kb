<template>
  <a :href="withBase('/')" class="custom-nav-title">
    <img v-if="logo" :src="logo" alt="Logo" class="nav-logo" />
    <span class="nav-title-little">Little</span>
    <span class="nav-title-cloud">Cloud</span>
  </a>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { withBase } from 'vitepress/client'

const { site } = useData()
const logo = computed(() => site.value.themeConfig.logo)
</script>

<style scoped>
.custom-nav-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.custom-nav-title:hover {
  opacity: 0.9;
}

.nav-logo {
  height: 24px;
  width: auto;
  display: block;
}

.nav-title-little {
  font-family: 'BlackEcho', sans-serif;
  font-size: 1.5rem;
  color: #FFFFFF;
  font-weight: normal;
  letter-spacing: -0.02em;
}

.nav-title-cloud {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(90deg, hsl(187, 100%, 56%) 0%, hsl(197, 100%, 50%) 50%, hsl(275, 52%, 73%) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}
</style>

