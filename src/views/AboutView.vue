<script setup>
import { profile } from '../data/profile'

const initials = profile.name
  .split(' ')
  .map((w) => w[0])
  .slice(0, 2)
  .join('')
  .toUpperCase()
</script>

<template>
  <!-- Halaman ini sengaja di-style dengan CSS manual (bukan Tailwind) -->
  <article class="about">
    <header class="about__header">
      <div class="about__avatar" aria-hidden="true">{{ initials }}</div>
      <div>
        <h1 class="about__title">Tentang saya</h1>
        <p class="about__lead">{{ profile.role }} &mdash; {{ profile.location }}</p>
      </div>
    </header>

    <section class="about__section" aria-labelledby="cerita">
      <h2 id="cerita" class="about__heading">Cerita singkat</h2>
      <p v-for="(paragraf, i) in profile.about" :key="i" class="about__text">{{ paragraf }}</p>
    </section>

    <section class="about__section" aria-labelledby="perjalanan">
      <h2 id="perjalanan" class="about__heading">Perjalanan belajar</h2>
      <ol class="about__timeline">
        <li v-for="item in profile.timeline" :key="item.year" class="about__item">
          <time class="about__year">{{ item.year }}</time>
          <h3 class="about__item-title">{{ item.title }}</h3>
          <p class="about__text">{{ item.text }}</p>
        </li>
      </ol>
    </section>

    <section class="about__section" aria-labelledby="skill">
      <h2 id="skill" class="about__heading">Yang sedang saya pakai</h2>
      <ul class="about__skills">
        <li v-for="skill in profile.skills" :key="skill" class="about__skill">{{ skill }}</li>
      </ul>
    </section>
  </article>
</template>

<style scoped>
.about {
  max-width: 44rem;
  margin: 0 auto;
  padding: 3rem 1.25rem 1rem;
  color: var(--ink);
}

.about__header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.about__avatar {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 1.25rem;
  background: var(--accent);
  color: var(--accent-ink);
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 2rem;
  font-weight: 800;
}

.about__title {
  margin: 0;
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: clamp(2rem, 6vw, 3rem);
  line-height: 1.1;
}

.about__lead {
  margin: 0.4rem 0 0;
  color: var(--muted);
  font-size: 1.1rem;
}

.about__section {
  margin-bottom: 2.5rem;
}

.about__heading {
  margin: 0 0 0.75rem;
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 1.5rem;
}

.about__text {
  margin: 0 0 0.9rem;
  max-width: 62ch;
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1.7;
}

/* Timeline: urutan tahun memang berurutan, jadi pakai <ol> */
.about__timeline {
  margin: 0;
  padding: 0 0 0 1.25rem;
  list-style: none;
  border-left: 2px solid var(--line);
}

.about__item {
  position: relative;
  margin-bottom: 1.5rem;
}

.about__item::before {
  content: '';
  position: absolute;
  left: -1.8rem;
  top: 0.35rem;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px var(--bg);
}

.about__year {
  display: block;
  color: var(--accent);
  font-weight: 600;
}

.about__item-title {
  margin: 0.15rem 0 0.3rem;
  font-size: 1.15rem;
}

.about__skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.about__skill {
  padding: 0.4rem 0.9rem;
  border: 1px solid var(--line);
  border-radius: 0.5rem;
  background: var(--surface);
  font-weight: 600;
}

@media (max-width: 480px) {
  .about__header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
