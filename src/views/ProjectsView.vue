<script setup>
import { computed, ref } from 'vue'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'

// State: filter yang sedang dipilih
const activeTag = ref('Semua')

const tags = computed(() => ['Semua', ...new Set(projects.flatMap((p) => p.tags))])
const filtered = computed(() =>
  activeTag.value === 'Semua' ? projects : projects.filter((p) => p.tags.includes(activeTag.value)),
)
</script>

<template>
  <section class="container-page py-12" aria-labelledby="judul-project">
    <h1 id="judul-project" class="font-display text-4xl font-extrabold">Project</h1>
    <p class="mt-3 max-w-prose text-lg text-muted">Beberapa hal yang pernah saya buat sambil belajar.</p>

    <div class="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter teknologi">
      <button
        v-for="tag in tags"
        :key="tag"
        type="button"
        class="rounded-lg border px-4 py-1.5 font-semibold transition-colors"
        :class="
          activeTag === tag
            ? 'border-accent bg-accent text-accent-ink'
            : 'border-line bg-surface text-ink hover:border-accent'
        "
        :aria-pressed="activeTag === tag"
        @click="activeTag = tag"
      >
        {{ tag }}
      </button>
    </div>

    <p class="mt-4 text-muted" aria-live="polite">{{ filtered.length }} project ditampilkan</p>

    <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="p in filtered" :key="p.id" :project="p" />
    </div>
  </section>
</template>
