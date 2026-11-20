import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'Beranda' } },
  // Lazy load: halaman dimuat hanya saat dibuka (code splitting)
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue'), meta: { title: 'Tentang' } },
  { path: '/projects', name: 'projects', component: () => import('../views/ProjectsView.vue'), meta: { title: 'Project' } },
  { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue'), meta: { title: 'Kontak' } },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFoundView.vue'), meta: { title: 'Tidak ditemukan' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

router.afterEach((to) => {
  document.title = `${to.meta.title} | Portfolio`
})

export default router
