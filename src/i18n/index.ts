import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import jaTranslation from './locales/ja/translation.json';
import { DEFAULT_LANGUAGE } from './config';

const resources = {
  'en-US': {
    translation: enTranslation,
  },
  'ja-JP': {
    translation: jaTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: DEFAULT_LANGUAGE,
  fallbackLng: 'en-US',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
