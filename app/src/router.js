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
  {
    path: '/guild',
    name: 'ForGuild',
    component: () => import('./components/ForGuild/ForGuild.vue'),
  },
  {
    path: '/contact',
    name: 'ContactInformation',
    component: () => import('./components/ContactInformation/ContactInformation.vue'),
  },
  {
    path: '/infoahky',
    name: 'Annual ball',
    component: () => import('./components/AnnualBall/AnnualBall.vue'),
  },
  {
    path: '/seminar',
    name: 'Seminar',
    component: () => import('./components/Seminar/SeminarPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;