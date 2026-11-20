<script setup>
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <a href="#main" class="skip-link">Lewati ke konten</a>
  <NavBar />
  <main id="main" class="flex-1">
    <RouterView />
  </main>
  <AppFooter />
</template>
