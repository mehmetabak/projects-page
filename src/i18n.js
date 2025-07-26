// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Header & Search
          headerTitle: 'My Projects',
          searchPlaceholder: 'Search project or #hashtag...',
          searchFocus: 'Press Ctrl+K to search',
          
          // Results & Filtering
          noResultsTitle: 'No Results Found',
          noResultsMessage: "No projects found for '{{term}}'. Please try another keyword.",
          clearFilters: 'Clear Filters',
          allCategories: 'All Categories',
          projectCount: '{{count}} project',
          projectCount_plural: '{{count}} projects',
          
          // Navigation
          previous: 'Previous',
          next: 'Next',
          projectNavigation: 'Use ← → to navigate between projects',
          
          // Project Detail
          minRead: 'min read',
          readingTime: '{{time}} minute read',
          readingTime_plural: '{{time}} minutes read',
          close: 'Close',
          maximize: 'Maximize',
          minimize: 'Minimize',
          share: 'Share',
          
          // Actions & Links
          addBookmark: 'Add to bookmarks',
          removeBookmark: 'Remove from bookmarks',
          viewLive: 'View live site',
          viewGithub: 'View on GitHub',
          viewDemo: 'View demo',
          
          // Notifications
          linkCopied: 'Link copied!',
          shared: 'Shared successfully!',
          copyError: 'Failed to copy link',
          bookmarkAdded: 'Added to bookmarks',
          bookmarkRemoved: 'Removed from bookmarks',
          
          // Content
          noDescription: 'No description available.',
          tags: 'Tags',
          features: 'Features',
          technologies: 'Technologies',
          category: 'Category',
          
          // Keyboard Shortcuts (for tooltips)
          keyboardShortcuts: {
            search: 'Ctrl+K',
            close: 'Esc',
            fullscreen: 'Ctrl+F',
            bookmark: 'Ctrl+B',
            share: 'Ctrl+S',
            previous: '←',
            next: '→'
          },
          
          // Accessibility
          resizePanel: 'Resize panel',
          openProject: 'Open project details',
          closeProject: 'Close project details',
          navigateProjects: 'Navigate between projects',
          
          // Loading & Errors
          loading: 'Loading...',
          error: 'An error occurred',
          retry: 'Retry',
          projectNotFound: 'Project not found',
          
          // Time & Date
          updatedAt: 'Updated {{date}}',
          createdAt: 'Created {{date}}',
          
          // Categories (if needed)
          categories: {
            all: 'All',
            web: 'Web Development',
            mobile: 'Mobile Apps',
            design: 'Design',
            tools: 'Tools & Utilities',
            games: 'Games',
            other: 'Other'
          }
        }
      },
      tr: {
        translation: {
          // Header & Search
          headerTitle: 'Projelerim',
          searchPlaceholder: 'Proje veya #hashtag ara...',
          searchFocus: 'Aramak için Ctrl+K tuşlayın',
          
          // Results & Filtering
          noResultsTitle: 'Sonuç Bulunamadı',
          noResultsMessage: "'{{term}}' için uygun bir proje bulunamadı. Lütfen başka bir anahtar kelime deneyin.",
          clearFilters: 'Filtreleri Temizle',
          allCategories: 'Tüm Kategoriler',
          projectCount: '{{count}} proje',
          projectCount_plural: '{{count}} proje',
          
          // Navigation
          previous: 'Önceki',
          next: 'Sonraki',
          projectNavigation: 'Projeler arasında gezinmek için ← → kullanın',
          
          // Project Detail
          minRead: 'dk okuma',
          readingTime: '{{time}} dakika okuma',
          readingTime_plural: '{{time}} dakika okuma',
          close: 'Kapat',
          maximize: 'Tam Ekran',
          minimize: 'Küçült',
          share: 'Paylaş',
          
          // Actions & Links
          addBookmark: 'Favorilere ekle',
          removeBookmark: 'Favorilerden çıkar',
          viewLive: 'Canlı siteyi görüntüle',
          viewGithub: 'GitHub\'da görüntüle',
          viewDemo: 'Demo\'yu görüntüle',
          
          // Notifications
          linkCopied: 'Link kopyalandı!',
          shared: 'Başarıyla paylaşıldı!',
          copyError: 'Link kopyalanamadı',
          bookmarkAdded: 'Favorilere eklendi',
          bookmarkRemoved: 'Favorilerden çıkarıldı',
          
          // Content
          noDescription: 'Açıklama mevcut değil.',
          tags: 'Etiketler',
          features: 'Özellikler',
          technologies: 'Teknolojiler',
          category: 'Kategori',
          
          // Keyboard Shortcuts (for tooltips)
          keyboardShortcuts: {
            search: 'Ctrl+K',
            close: 'Esc',
            fullscreen: 'Ctrl+F',
            bookmark: 'Ctrl+B',
            share: 'Ctrl+S',
            previous: '←',
            next: '→'
          },
          
          // Accessibility
          resizePanel: 'Paneli yeniden boyutlandır',
          openProject: 'Proje detaylarını aç',
          closeProject: 'Proje detaylarını kapat',
          navigateProjects: 'Projeler arasında gezin',
          
          // Loading & Errors
          loading: 'Yükleniyor...',
          error: 'Bir hata oluştu',
          retry: 'Tekrar Dene',
          projectNotFound: 'Proje bulunamadı',
          
          // Time & Date
          updatedAt: '{{date}} tarihinde güncellendi',
          createdAt: '{{date}} tarihinde oluşturuldu',
          
          // Categories (if needed)
          categories: {
            all: 'Tümü',
            web: 'Web Geliştirme',
            mobile: 'Mobil Uygulamalar',
            design: 'Tasarım',
            tools: 'Araçlar ve Yardımcılar',
            games: 'Oyunlar',
            other: 'Diğer'
          }
        }
      }
    },
    supportedLngs: ['tr', 'en'],
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
    },
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;