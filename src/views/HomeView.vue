<script setup>
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'

const featured = projects.slice(0, 3)
const stack = profile.skills.slice(0, 3).map((s) => `"${s}"`).join(', ')
</script>

<template>
  <section class="container-page grid items-center gap-10 py-16 md:grid-cols-[1.3fr_1fr] md:py-24" aria-labelledby="judul-hero">
    <div>
      <p class="font-semibold text-accent">{{ profile.role }}</p>
      <h1 id="judul-hero" class="mt-3 font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl">
        Halo, saya {{ profile.name }}.
      </h1>
      <p class="mt-5 max-w-prose text-lg text-muted">{{ profile.tagline }}</p>
      <div class="mt-8 flex flex-wrap gap-3">
        <RouterLink to="/projects" class="btn-primary">Lihat project</RouterLink>
        <RouterLink to="/contact" class="btn-ghost">Hubungi saya</RouterLink>
      </div>
    </div>

    <figure class="rounded-xl border border-line bg-surface p-5">
      <figcaption class="mb-3 border-b border-line pb-3 font-semibold text-muted">profil.js</figcaption>
      <pre class="overflow-x-auto font-mono text-sm leading-7"><code>const saya = {
  nama: "{{ profile.name }}",
  peran: "{{ profile.role }}",
  lokasi: "{{ profile.location }}",
  stack: [{{ stack }}],
}</code></pre>
    </figure>
  </section>

  <section class="container-page py-8" aria-labelledby="judul-skill">
    <h2 id="judul-skill" class="font-display text-2xl font-bold">Keahlian</h2>
    <ul class="mt-4 flex flex-wrap gap-3">
      <li v-for="skill in profile.skills" :key="skill" class="rounded-lg border border-line bg-surface px-4 py-2 font-semibold">
        {{ skill }}
      </li>
    </ul>
  </section>

  <section class="container-page py-12" aria-labelledby="judul-unggulan">
    <div class="flex items-end justify-between gap-4">
      <h2 id="judul-unggulan" class="font-display text-2xl font-bold">Project terbaru</h2>
      <RouterLink to="/projects" class="font-semibold text-accent underline underline-offset-4">Semua project</RouterLink>
    </div>
    <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="p in featured" :key="p.id" :project="p" />
    </div>
  </section>
</template>
