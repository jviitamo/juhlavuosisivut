// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import i18n from './i18n';

const routes = [
  {
    path: '/:lang/',
    name: 'Home',
    props: {
      text: 'nav_bar[0].front_page_header'
    },
    component: () => import('./components/MainPage/MainBody.vue'),
  },
  {
    path: '/:lang/events',
    name: 'Events',
    props: {
      text: 'nav_bar[0].events_header'
    },
    component: () => import('./components/Events/EventContainer.vue'),
  },
  {
    path: '/:lang/seminar',
    name: 'Seminar',
    props: {
      text: 'nav_bar[0].seminar_header'
    },
    component: () => import('./components/Seminar/SeminarPage.vue'),
  },
  {
    path: '/:lang/infoahky',
    name: 'Annual ball',
    props: {
      text: 'nav_bar[0].annual_ball_header'
    },
    component: () => import('./components/AnnualBall/AnnualBall.vue'),
  },
  {
    path: '/:lang/guild',
    name: 'ForGuild',
    props: {
      text: 'nav_bar[0].for_guild_header'
    },
    component: () => import('./components/ForGuild/ForGuild.vue'),
  },
  {
    path: '/:lang/contact',
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
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
});

// Configure route change listener to update i18n locale
router.beforeEach((to, from, next) => {
  const lang = to.params.lang

  if (!router.hasRoute(to.name)) {
    next({ name: 'Home', params: { lang: to.params.lang || 'fi' } });
    return;
  } else if (to.params.lang !== "en" && to.params.lang !== "fi") {
    next({ name: to.name, params: { lang: 'fi' } });
    return;
  }

  if (i18n.global.locale !== lang) {
    i18n.global.locale = lang;
  }
  next();
});

export default router;