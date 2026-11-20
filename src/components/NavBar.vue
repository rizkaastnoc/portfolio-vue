<script setup>
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import { profile } from '../data/profile'

const links = [
  { to: '/', label: 'Beranda' },
  { to: '/about', label: 'Tentang' },
  { to: '/projects', label: 'Project' },
  { to: '/contact', label: 'Kontak' },
]

// State menu mobile
const open = ref(false)
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-line bg-bg">
    <div class="container-page flex h-16 items-center justify-between">
      <RouterLink to="/" class="font-display text-lg font-extrabold" @click="open = false">
        {{ profile.name }}
      </RouterLink>

      <div class="flex items-center gap-2">
        <nav aria-label="Navigasi utama" class="hidden md:block">
          <ul class="flex items-center gap-1">
            <li v-for="link in links" :key="link.to">
              <RouterLink :to="link.to" class="nav-link rounded-md px-3 py-2 font-semibold text-muted hover:text-ink"
                active-class="is-active" exact-active-class="is-active">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </nav>

        <ThemeToggle />

        <button type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface md:hidden"
          :aria-expanded="open" aria-controls="menu-mobile" aria-label="Buka menu" @click="open = !open">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" aria-hidden="true">
            <path v-if="!open" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>

    <nav v-show="open" id="menu-mobile" aria-label="Navigasi seluler" class="border-t border-line md:hidden">
      <ul class="container-page flex flex-col py-2">
        <li v-for="link in links" :key="link.to">
          <RouterLink :to="link.to" class="nav-link block rounded-md px-3 py-3 font-semibold text-muted"
            active-class="is-active" exact-active-class="is-active" @click="open = false">
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

.nav-link.is-active {
  color: var(--ink);
  box-shadow: inset 0 -3px 0 var(--accent);
}
</style>
