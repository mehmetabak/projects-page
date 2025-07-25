// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // Tarayıcı dilini algıla
  .use(LanguageDetector)
  // i18n'i react-i18next'e geçir
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          headerTitle: 'My Projects',
          searchPlaceholder: 'Search project or #hashtag...',
          noResultsTitle: 'No Results Found',
          noResultsMessage: "No projects found for '{{term}}'. Please try another keyword.",
          tags: 'Tags',
          previous: 'Previous', // YENİ
          next: 'Next'         // YENİ
        }
      },
      tr: {
        translation: {
          headerTitle: 'Projelerim',
          searchPlaceholder: 'Proje veya #hashtag ara...',
          noResultsTitle: 'Sonuç Bulunamadı',
          noResultsMessage: "'{{term}}' için uygun bir proje bulunamadı. Lütfen başka bir anahtar kelime deneyin.",
          tags: 'Etiketler',
          previous: 'Önceki',   // YENİ
          next: 'Sonraki'      // YENİ
        }
      }
    },
    supportedLngs: ['tr', 'en'], // Sadece bu dilleri destekle
    fallbackLng: 'en', // Tarayıcı dili 'tr' değilse veya desteklenmiyorsa 'en' kullan
    detection: {
      order: ['localStorage', 'navigator'], // Önce kaydedilen dile, sonra tarayıcı diline bak
    },
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;