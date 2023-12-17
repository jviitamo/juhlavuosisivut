// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    props: {
      text: 'nav_bar[0].front_page_header'
    },
    component: () => import('./components/MainPage/MainBody.vue'),
  },
  {
    path: '/events',
    name: 'Events',
    props: {
      text: 'nav_bar[0].events_header'
    },
    component: () => import('./components/Events/EventContainer.vue'),
  },
  {
    path: '/seminar',
    name: 'Seminar',
    props: {
      text: 'nav_bar[0].seminar_header'
    },
    component: () => import('./components/Seminar/SeminarPage.vue'),
  },
  {
    path: '/infoahky',
    name: 'Annual ball',
    props: {
      text: 'nav_bar[0].annual_ball_header'
    },
    component: () => import('./components/AnnualBall/AnnualBall.vue'),
  },
  {
    path: '/guild',
    name: 'ForGuild',
    props: {
      text: 'nav_bar[0].for_guild_header'
    },
    component: () => import('./components/ForGuild/ForGuild.vue'),
  },
  {
    path: '/contact',
    name: 'ContactInformation',
    props: {
      text: 'nav_bar[0].contact_information_header'
    },
    component: () => import('./components/ContactInformation/ContactInformation.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;