<script setup>
import { profile } from '../data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-20 border-t border-line">
    <div class="container-page flex flex-col gap-3 py-8 text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>&copy; {{ year }} {{ profile.name }}. Dibuat dengan Vue 3 dan Tailwind CSS.</p>
      <ul class="flex gap-5 font-semibold">
        <li><a class="hover:text-ink" :href="profile.github" target="_blank" rel="noopener">GitHub</a></li>
        <li><a class="hover:text-ink" :href="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a></li>
      </ul>
    </div>
  </footer>
</template>
