// src/components/LanguageSwitcher.jsx

import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  // Dili değiştirme fonksiyonu
  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      // Anahtar Stil Değişiklikleri:
      // - relative: İçindeki absolute span'ı konumlandırmak için.
      // - overflow-hidden: Kayarak giren/çıkan metinlerin taşmasını engeller.
      // - w-12: Butona sabit bir genişlik vererek Header'daki diğer elemanları itmesini engeller.
      // - hover:bg-card: CSS değişkenleri ile tema uyumlu hover efekti.
      className="relative flex items-center justify-center w-12 h-10 rounded-lg overflow-hidden transition-colors hover:bg-card"
      aria-label="Change Language"
    >
      {/* AnimatePresence, dil değiştiğinde çıkış animasyonunu mümkün kılar. */}
      {/* mode="wait", çıkan elemanın animasyonu bitmeden yenisinin başlamasını engeller. */}
      <AnimatePresence mode="wait">
        <motion.span
          // key: Bu, Framer Motion'a hangi elemanın değiştiğini söyler.
          // Dil kodu değiştiğinde, animasyon tetiklenir.
          key={i18n.language}
          
          // Animasyon Tanımları
          initial={{ y: 15, opacity: 0 }}   // Aşağıdan ve şeffaf başla
          animate={{ y: 0, opacity: 1 }}     // Ortaya ve görünür hale gel
          exit={{ y: -15, opacity: 0 }}      // Yukarıya doğru kayarak kaybol
          
          // Animasyonun akıcılığını ve tipini belirle
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          
          // Metnin her zaman ortada olmasını sağla
          className="absolute text-sm font-bold text-secondary"
        >
          {i18n.language.toUpperCase()}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default LanguageSwitcher;