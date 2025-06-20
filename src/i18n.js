import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './lang/en/translation.json';
import kh from './lang/kh/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    kh: { translation: kh },
  },
  lng: 'kh',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
