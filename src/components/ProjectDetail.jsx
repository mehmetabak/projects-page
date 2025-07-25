// src/components/ProjectDetail.jsx

import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { FiX, FiMaximize2, FiMinimize2, FiShare2, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import remarkGfm from 'remark-gfm'; // Gelişmiş Markdown desteği (tablolar, vb.)
import ImageWithFallback from './ImageWithFallback'; // Varsayılan resim bileşeni

// Panelin minimum genişliğini piksel olarak tanımla
const MIN_WIDTH_PX = 450;

const ProjectDetail = ({ project, onClose, setSearchTerm, theme, onNext, onPrevious }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  // Sürükleme sınırlarını belirlemek için backdrop'a referans
  const constraintsRef = useRef(null);

  // Performanslı genişlik yönetimi için useMotionValue.
  // Bu hook, React'in state döngüsünü tetiklemeden animasyon değerlerini güncelleyerek
  // sürükleme işlemini çok daha akıcı hale getirir.
  const width = useMotionValue(Math.max(MIN_WIDTH_PX, window.innerWidth * 0.4));

  // Klavyeden kontrol (Escape ve Ok Tuşları)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNext?.();
      if (event.key === 'ArrowLeft') onPrevious?.();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  // Ekran boyutu değiştiğinde panelin taşmasını engellemek için genişliği ayarla
  useEffect(() => {
    const handleResize = () => {
      if (!isFullScreen) {
        width.set(Math.max(MIN_WIDTH_PX, Math.min(width.get(), window.innerWidth * 0.9)));
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isFullScreen, width]);
  
  // Paylaşım fonksiyonu
  const handleShare = async () => {
    // Projeye özel URL'i oluştur
    const shareUrl = `${window.location.origin}/projects/${project.id}`;
    const shareData = {
      title: project.title[lang],
      text: project.summary[lang],
      url: shareUrl,
    };
    // Web Share API'yi destekliyorsa kullan
    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Paylaşım hatası:", err);
      }
    } else {
      // Desteklemiyorsa, linki panoya kopyala ve kullanıcıyı bilgilendir
      navigator.clipboard.writeText(shareData.url).then(() => {
        alert("Bağlantı panoya kopyalandı!");
      });
    }
  };

  return (
    <AnimatePresence>
      {project && (
        // Arka Plan (Backdrop) - Tema uyumlu
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed inset-0 z-50 flex justify-end 
            ${theme === 'dark' ? 'bg-black/60' : 'bg-gray-900/40'} backdrop-blur-sm`}
          ref={constraintsRef}
          onClick={onClose}
        >
          {/* Ana Panel */}
          <motion.div
            layout // Bu sihirli prop, 'isFullScreen' değiştiğinde boyut ve pozisyonu canlandırır
            transition={{ type: 'spring', stiffness: 500, damping: 40 }}
            style={{ width: isFullScreen ? '100vw' : width }} // Genişliği MotionValue'den al
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className={`h-full bg-panel shadow-2xl flex flex-col border-l border-border overflow-hidden relative`}
            onClick={(e) => e.stopPropagation()} // Panele tıklayınca kapanmasını engelle
          >
            {/* Yeniden Boyutlandırma Kolu (Sadece tam ekran değilken görünür) */}
            {!isFullScreen && (
              <motion.div
                drag="x"
                onDrag={(event, info) => {
                  width.set(width.get() - info.delta.x);
                }}
                dragConstraints={{
                  left: -(Math.min(width.get(), window.innerWidth * 0.9) - MIN_WIDTH_PX),
                  right: 0
                }}
                dragElastic={0.1}
                className="absolute left-0 top-0 bottom-0 w-2 cursor-col-resize group z-10"
                aria-label="Paneli yeniden boyutlandır"
              >
                <div className="w-0.5 h-full bg-transparent group-hover:bg-primary transition-colors duration-200 mx-auto" />
              </motion.div>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={project.id} // Proje değiştiğinde içeriğin yeniden canlanmasını sağlar
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
                  hidden: { opacity: 0 }
                }}
                className="flex flex-col h-full"
              >
                {/* ÜST BÖLÜM */}
                <motion.header 
                  variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: -20, opacity: 0 } }} 
                  className="p-4 flex justify-between items-center border-b border-border flex-shrink-0"
                >
                  <h2 className="text-xl font-bold font-display text-themed-text truncate pr-4">{project.title[lang]}</h2>
                  <div className="flex items-center gap-1">
                    {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" title="Canlı siteye git" className="p-2 rounded-full text-secondary hover:bg-bg transition-colors"><FiExternalLink size={18} /></a>}
                    {navigator.share && <button onClick={handleShare} title="Paylaş" className="p-2 rounded-full text-secondary hover:bg-bg transition-colors"><FiShare2 size={18} /></button>}
                    <button onClick={() => setIsFullScreen(!isFullScreen)} title={isFullScreen ? "Küçült" : "Tam ekran yap"} className="p-2 rounded-full text-secondary hover:bg-bg transition-colors">{isFullScreen ? <FiMinimize2 size={18} /> : <FiMaximize2 size={18} />}</button>
                    <button onClick={onClose} title="Kapat (Esc)" className="p-2 rounded-full text-secondary hover:bg-bg transition-colors"><FiX size={20} /></button>
                  </div>
                </motion.header>

                {/* İÇERİK BÖLÜMÜ */}
                <div className="flex-grow overflow-y-auto">
                  <motion.div 
                    variants={{ visible: { scale: 1, opacity: 1 }, hidden: { scale: 0.95, opacity: 0 } }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  >
                    <ImageWithFallback src={project.image} alt={project.title[lang]} className="w-full h-60 object-cover" />
                  </motion.div>
                  <motion.div 
                    variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: 20, opacity: 0 } }} 
                    className="p-6 prose dark:prose-invert max-w-none 
                                    prose-h2:font-display prose-headings:text-themed-text 
                                    prose-p:text-secondary 
                                    prose-a:text-themed-text hover:prose-a:underline
                                    prose-strong:text-primary-text
                                    prose-li:text-secondary
                                    prose-blockquote:border-themed-text"
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.description[lang]}</ReactMarkdown>
                  </motion.div>
                </div>

                {/* ALT BÖLÜM (FOOTER) - NAVİGASYON BUTONLARI */}
                <motion.footer 
                  variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: 20, opacity: 0 } }} 
                  className="p-4 border-t border-border flex-shrink-0 bg-bg/80 backdrop-blur-sm"
                >
                  <div className="flex justify-between items-center">
                    <button onClick={onPrevious} className="flex items-center gap-2 p-2 rounded-lg text-secondary hover:bg-card hover:text-primary-text transition-colors">
                      <FiChevronLeft size={20} /> <span className="hidden sm:inline">{t('previous')}</span>
                    </button>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {project.tags.slice(0,3).map(tag => (
                          <button 
                            key={tag} 
                            onClick={() => { onClose(); setTimeout(() => setSearchTerm(`#${tag}`), 150); }}
                            className="text-xs font-medium bg-primary/10 text-themed-text rounded-full px-3 py-1 hover:bg-primary/20 transition-colors"
                          >
                            #{tag}
                          </button>
                        ))}
                    </div>
                    <button onClick={onNext} className="flex items-center gap-2 p-2 rounded-lg text-secondary hover:bg-card hover:text-primary-text transition-colors">
                      <span className="hidden sm:inline">{t('next')}</span> <FiChevronRight size={20} />
                    </button>
                  </div>
                </motion.footer>

              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetail;