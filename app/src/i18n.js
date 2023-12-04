// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: require('./locales/en.json'),
  fi: require('./locales/fi.json')
};

const i18n = createI18n({
  locale: 'en', // default language
  messages
});

export default i18n;