<script setup>
import { reactive, ref } from 'vue'
import { validateContact } from '../utils/validate'
import { profile } from '../data/profile'

// State form
const form = reactive({ name: '', email: '', message: '' })
const errors = ref({})
const sent = ref(false)

function handleSubmit() {
  sent.value = false
  errors.value = validateContact(form)

  if (Object.keys(errors.value).length > 0) return

  // Form ini belum terhubung ke server.
  // Untuk mengirim pesan sungguhan, lihat bagian "Form kontak" di README.
  sent.value = true
  form.name = ''
  form.email = ''
  form.message = ''
}

const field =
  'mt-1 block w-full rounded-lg border bg-surface px-3 py-2.5 text-ink placeholder:text-muted'
</script>

<template>
  <section class="container-page grid gap-10 py-12 md:grid-cols-[1fr_1.3fr]" aria-labelledby="judul-kontak">
    <div>
      <h1 id="judul-kontak" class="font-display text-4xl font-extrabold">Kontak</h1>
      <p class="mt-3 max-w-prose text-lg text-muted">
        Punya pertanyaan, ide, atau tawaran kerja sama? Kirim pesan, saya akan membalasnya.
      </p>
      <dl class="mt-6 space-y-3">
        <div>
          <dt class="font-semibold">Email</dt>
          <dd><a class="text-accent underline underline-offset-4" :href="`mailto:${profile.email}`">{{ profile.email }}</a></dd>
        </div>
        <div>
          <dt class="font-semibold">Lokasi</dt>
          <dd class="text-muted">{{ profile.location }}</dd>
        </div>
      </dl>
    </div>

    <form class="rounded-xl border border-line bg-surface p-6" novalidate @submit.prevent="handleSubmit">
      <p v-if="sent" role="status" class="mb-5 rounded-lg border border-accent p-3 font-semibold text-accent">
        Pesan terkirim. Terima kasih sudah menghubungi saya.
      </p>

      <div>
        <label for="name" class="font-semibold">Nama</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          autocomplete="name"
          placeholder="Nama lengkap"
          :class="[field, errors.name ? 'border-red-500' : 'border-line']"
          :aria-invalid="!!errors.name"
          aria-describedby="name-error"
        />
        <p id="name-error" class="mt-1 min-h-5 text-sm text-red-600 dark:text-red-400">{{ errors.name }}</p>
      </div>

      <div class="mt-2">
        <label for="email" class="font-semibold">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          autocomplete="email"
          placeholder="nama@email.com"
          :class="[field, errors.email ? 'border-red-500' : 'border-line']"
          :aria-invalid="!!errors.email"
          aria-describedby="email-error"
        />
        <p id="email-error" class="mt-1 min-h-5 text-sm text-red-600 dark:text-red-400">{{ errors.email }}</p>
      </div>

      <div class="mt-2">
        <label for="message" class="font-semibold">Pesan</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="5"
          placeholder="Tulis pesan Anda"
          :class="[field, errors.message ? 'border-red-500' : 'border-line']"
          :aria-invalid="!!errors.message"
          aria-describedby="message-error"
        ></textarea>
        <p id="message-error" class="mt-1 min-h-5 text-sm text-red-600 dark:text-red-400">{{ errors.message }}</p>
      </div>

      <button type="submit" class="btn-primary mt-4 w-full sm:w-auto">Kirim pesan</button>
    </form>
  </section>
</template>
