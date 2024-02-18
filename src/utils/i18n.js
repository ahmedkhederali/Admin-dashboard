import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import EN from './EN';
import AR from './AR';


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    nsSeparator: false,
    resources: {
      en: { translation: EN },
      ar: { translation: AR },
    },
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage'],
      lookupLocalStorage: 'Locale',
      caches: ['localStorage'],
    },
  });

export default i18n;
