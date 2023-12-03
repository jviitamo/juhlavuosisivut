// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./components/MainPage/MainBody.vue'),
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('./components/Events/EventContainer.vue'),
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;