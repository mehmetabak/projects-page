// src/components/Header.jsx
import { useTranslation } from 'react-i18next';
import { FiSearch, FiSun, FiMoon, FiX } from 'react-icons/fi';
import LanguageSwitcher from './LanguageSwitcher';

const Header = ({ theme, toggleTheme, searchTerm, setSearchTerm }) => {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-30 w-full bg-bg/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16 gap-4">
          <div className="flex justify-start">
            <h1 className="text-xl sm:text-2xl font-bold font-display text-primary-text flex-shrink-0 truncate">
              {t('headerTitle')}
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-secondary" />
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-card border border-border rounded-lg pl-10 pr-8 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="absolute top-1/2 right-2 -translate-y-1/2 text-secondary hover:text-themed"><FiX /></button>
              )}
            </div>
          </div>
          {/* YENİ: Butonlar arasına boşluk ekleyen 'gap' */}
          <div className="flex items-center justify-end gap-2">
            <LanguageSwitcher />
            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-card transition-colors">
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;