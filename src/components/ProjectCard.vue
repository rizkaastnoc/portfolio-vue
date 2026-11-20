<script setup>
defineProps({
  project: { type: Object, required: true },
})
</script>

<template>
  <article class="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface">
    <img :src="project.image" :alt="`Tampilan project ${project.title}`" width="640" height="400" loading="lazy"
      decoding="async" class="aspect-[16/10] w-full bg-line object-cover" />
    <div class="flex flex-1 flex-col p-5">
      <h3 class="font-display text-xl font-bold">{{ project.title }}</h3>
      <p class="mt-2 text-muted">{{ project.description }}</p>

      <ul class="mt-4 flex flex-wrap gap-2" aria-label="Teknologi">
        <li v-for="tag in project.tags" :key="tag"
          class="rounded-md border border-line px-2 py-0.5 text-sm font-semibold text-muted">
          {{ tag }}
        </li>
      </ul>

      <div class="mt-auto flex gap-4 pt-5 font-semibold">
        <a :href="project.demo" class="text-accent underline underline-offset-4" target="_blank" rel="noopener">Lihat
          demo</a>
        <a :href="project.repo" class="text-accent underline underline-offset-4" target="_blank" rel="noopener">Kode
          sumber</a>
      </div>
    </div>
  </article>
</template>
