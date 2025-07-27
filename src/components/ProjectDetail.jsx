// src/components/ProjectDetail.jsx

import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import Markdown from 'markdown-to-jsx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiX, FiMaximize2, FiMinimize2, FiShare2, FiExternalLink, FiChevronLeft, FiChevronRight, FiBookmark, FiCopy, FiCheck, FiGithub } from 'react-icons/fi';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ImageWithFallback from './ImageWithFallback';

const MIN_WIDTH_PX = 450;
const MAX_WIDTH_RATIO = 0.9;
const DEFAULT_WIDTH_RATIO = 0.4;

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const MarkdownComponents = {
  h2: ({ children }) => <h2 className="font-display text-themed-text text-2xl font-bold mt-8 mb-4 border-b border-border pb-2">{children}</h2>,
  h3: ({ children }) => <h3 className="font-display text-themed-text text-xl font-bold mt-6 mb-3">{children}</h3>,
  p: ({ children }) => <p className="text-secondary leading-relaxed mb-4">{children}</p>,
  ul: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-4 pl-4">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-4 pl-4">{children}</ol>,
  li: ({ children }) => <li className="text-secondary">{children}</li>,
  a: ({ children, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline transition-colors font-medium">{children}</a>,
  strong: ({ children }) => <strong className="font-bold text-primary-text">{children}</strong>,
  blockquote: ({ children }) => <blockquote className="border-l-4 border-primary bg-primary/5 p-4 my-6 italic text-secondary">{children}</blockquote>,
  del: ({ children }) => <del className="opacity-70">{children}</del>,
  img: ({ alt, src }) => (
    <span className="block my-6 rounded-lg overflow-hidden border border-border shadow-md">
      <ImageWithFallback src={src} alt={alt} className="w-full h-auto" />
    </span>
  ),
  table: ({ children }) => <div className="overflow-x-auto my-6"><table className="w-full border-collapse border border-border">{children}</table></div>,
  thead: ({ children }) => <thead className="bg-card">{children}</thead>,
  th: ({ children }) => <th className="p-3 border border-border font-bold text-left text-primary-text">{children}</th>,
  td: ({ children }) => <td className="p-3 border border-border text-secondary">{children}</td>,
  pre: ({ children }) => <div className="my-6 rounded-lg overflow-hidden">{children}</div>,
  code: ({ children, className }) => {
    const language = className?.replace('lang-', '');
    if (language) {
      return (
        <SyntaxHighlighter style={vscDarkPlus} language={language} PreTag="div">
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      );
    }
    return (
      <code className="bg-primary/10 text-primary rounded px-1.5 py-1 font-mono text-sm mx-1">
        {children}
      </code>
    );
  },
};

const ProjectDetail = ({ 
  project, 
  onClose, 
  setSearchTerm, 
  theme, 
  onNext, 
  onPrevious,
  forceFullscreen = false,
  projectCount = 0
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  
  const [isFullScreen, setIsFullScreen] = useState(forceFullscreen);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copyNotification, setCopyNotification] = useState('');
  const [imageStatus, setImageStatus] = useState('loading'); // 'loading', 'loaded', 'error'
  const [readingTime, setReadingTime] = useState(0);
  
  const constraintsRef = useRef(null);
  const panelRef = useRef(null);
  const scrollableContentRef = useRef(null);
  const lastManualWidth = useRef(null);

  const initialWidth = useMemo(() => 
    Math.max(MIN_WIDTH_PX, window.innerWidth * DEFAULT_WIDTH_RATIO), 
    []
  );
  
  const width = useMotionValue(initialWidth);
  const opacity = useTransform(width, 
    [MIN_WIDTH_PX, window.innerWidth * MAX_WIDTH_RATIO], 
    [0.8, 1]
  );

  useEffect(() => {
    if (project?.description?.[lang]) {
      const words = project.description[lang].split(/\s+/).length;
      const avgWordsPerMinute = lang === 'tr' ? 200 : 250;
      setReadingTime(Math.ceil(words / avgWordsPerMinute));
    }
  }, [project?.description, lang]);

  useEffect(() => {
    if (forceFullscreen && !isFullScreen) {
      setIsFullScreen(true);
    }
  }, [forceFullscreen, isFullScreen]);

  const toggleFullscreen = useCallback(() => {
    if (!isFullScreen) {
      lastManualWidth.current = width.get();
      setIsFullScreen(true);
    } else {
      setIsFullScreen(false);
      requestAnimationFrame(() => {
        width.set(lastManualWidth.current || initialWidth);
      });
    }
  }, [isFullScreen, width, initialWidth]);

  const toggleBookmark = useCallback(() => {
    if (!project?.id) return;
    const newBookmarkStatus = !isBookmarked;
    setIsBookmarked(newBookmarkStatus);
    
    try {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      const updatedBookmarks = newBookmarkStatus 
        ? [...new Set([...bookmarks, project.id])]
        : bookmarks.filter(id => id !== project.id);
      
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    } catch (err) {
      console.error("Bookmark error:", err);
    }
  }, [isBookmarked, project?.id]);

  const handleKeyDown = useCallback((event) => {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') return;
    
    switch(event.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowRight':
        if (onNext) {
          event.preventDefault();
          onNext();
        }
        break;
      case 'ArrowLeft':
        if (onPrevious) {
          event.preventDefault();
          onPrevious();
        }
        break;
      case 'f':
      case 'F':
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          toggleFullscreen();
        }
        break;
      case 'b':
      case 'B':
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          toggleBookmark();
        }
        break;
      case 's':
      case 'S':
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          handleShare();
        }
        break;
    }
  }, [onClose, onNext, onPrevious, toggleFullscreen, toggleBookmark]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleResize = useCallback(
    debounce(() => {
      if (!isFullScreen) {
        const maxWidth = window.innerWidth * MAX_WIDTH_RATIO;
        const currentWidth = width.get();
        if (currentWidth > maxWidth) {
          width.set(Math.max(MIN_WIDTH_PX, maxWidth));
        }
      }
    }, 100),
    [isFullScreen, width]
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const handleShare = useCallback(async () => {
    if (!project?.id) return;
    
    const shareUrl = `${window.location.origin}/projects/${project.id}`;
    const shareData = {
      title: project.title?.[lang] || 'Project',
      text: project.summary?.[lang] || '',
      url: shareUrl,
    };

    if (navigator.share && navigator.canShare?.(shareData)) {
      try {
        await navigator.share(shareData);
        setCopyNotification('shared');
      } catch (err) {
        if (err.name !== 'AbortError') {
          fallbackCopy(shareUrl);
        }
      }
    } else {
      fallbackCopy(shareUrl);
    }
  }, [project?.id, project?.title, project?.summary, lang, t]);

  const fallbackCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyNotification('copied');
    } catch (err) {
      console.error("Copy error:", err);
      setCopyNotification('error');
    }
    setTimeout(() => setCopyNotification(''), 2000);
  };

  useEffect(() => {
    if (!project?.id) return;
    
    try {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      setIsBookmarked(bookmarks.includes(project.id));
    } catch (err) {
      console.error("Bookmark loading error:", err);
      setIsBookmarked(false);
    }

    setImageStatus('loading');
    scrollableContentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project?.id]);

  const dragConstraints = useMemo(() => ({
    left: -(Math.min(width.get(), window.innerWidth * MAX_WIDTH_RATIO) - MIN_WIDTH_PX),
    right: 0
  }), [width]);

  if (!project) return null;

  const notificationMessages = {
    copied: t('linkCopied') || 'Link copied!',
    shared: t('shared') || 'Shared!',
    error: t('copyError') || 'Copy failed'
  };

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={`fixed inset-0 z-50 flex justify-end 
          ${theme === 'dark' ? 'bg-black/60' : 'bg-gray-900/40'} backdrop-blur-sm`}
        ref={constraintsRef}
        onClick={onClose}
      >
        <motion.div
          ref={panelRef}
          layout
          transition={{ type: 'spring', stiffness: 600, damping: 35 }}
          style={{ 
            width: isFullScreen ? '100vw' : width,
            opacity
          }}
          initial={{ x: "100%", scale: 0.95 }}
          animate={{ x: 0, scale: 1 }}
          exit={{ x: "100%", scale: 0.95 }}
          className="h-full bg-panel shadow-2xl flex flex-col border-l border-border overflow-hidden relative"
          onClick={(e) => e.stopPropagation()}
        >
          {!isFullScreen && (
            <motion.div
              drag="x"
              onDrag={(event, info) => {
                const newWidth = Math.max(MIN_WIDTH_PX, 
                  Math.min(window.innerWidth * MAX_WIDTH_RATIO, width.get() - info.delta.x)
                );
                width.set(newWidth);
              }}
              dragConstraints={dragConstraints}
              dragElastic={0.05}
              whileHover={{ scale: 1.1 }}
              className="absolute left-0 top-0 bottom-0 w-3 cursor-col-resize group z-20 flex items-center justify-center"
              aria-label="Resize panel"
            >
              <motion.div 
                className="w-1 h-8 bg-primary/30 rounded-full group-hover:bg-primary/60 transition-colors"
                whileHover={{ height: 32 }}
              />
            </motion.div>
          )}

          <AnimatePresence>
            {copyNotification && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm z-30 flex items-center gap-2 ${
                  copyNotification === 'error' 
                    ? 'bg-red-500 text-white' 
                    : 'bg-green-500 text-white'
                }`}
              >
                <FiCheck size={16} /> 
                {notificationMessages[copyNotification]}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
                hidden: { opacity: 0 }
              }}
              className="flex flex-col h-full"
            >
              <motion.header 
                variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: -20, opacity: 0 } }} 
                className="p-4 flex justify-between items-start gap-4 border-b border-border flex-shrink-0 bg-panel/80 backdrop-blur-sm"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-xl font-bold font-display text-themed-text truncate">
                      {project.title?.[lang] || 'Untitled Project'}
                    </h2>
                    {readingTime > 0 && (
                      <span className="text-xs text-secondary bg-secondary/10 px-2 py-1 rounded-full">
                        {readingTime} {t('minRead') || 'min read'}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-secondary line-clamp-2">
                    {project.summary?.[lang] || ''}
                  </p>
                  {projectCount > 1 && (
                    <p className="text-xs text-secondary/70 mt-1">
                      {t('projectNavigation') || 'Use ← → to navigate between projects'}
                    </p>
                  )}
                </div>
                
                <div className="flex items-center gap-1 flex-shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleBookmark}
                    title={`${isBookmarked ? t('removeBookmark') : t('addBookmark')} (Ctrl+B)`}
                    className={`p-2 rounded-full transition-colors ${
                      isBookmarked ? 'text-yellow-500 bg-yellow-500/10' : 'text-secondary hover:bg-bg'
                    }`}
                  >
                    <FiBookmark size={18} fill={isBookmarked ? 'currentColor' : 'none'} />
                  </motion.button>
                  
                  {project.github && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t('viewGithub') || 'View on GitHub'}
                      className="p-2 rounded-full text-secondary hover:bg-bg transition-colors"
                    >
                      <FiGithub size={18} />
                    </motion.a>
                  )}
                  
                  {project.link && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t('viewLive') || 'View live site'}
                      className="p-2 rounded-full text-secondary hover:bg-bg transition-colors"
                    >
                      <FiExternalLink size={18} />
                    </motion.a>
                  )}
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleShare}
                    title={`${t('share')} (Ctrl+S)`}
                    className="p-2 rounded-full text-secondary hover:bg-bg transition-colors"
                  >
                    {navigator.share ? <FiShare2 size={18} /> : <FiCopy size={18} />}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleFullscreen}
                    title={`${isFullScreen ? t('minimize') : t('maximize')} (Ctrl+F)`}
                    className="p-2 rounded-full text-secondary hover:bg-bg transition-colors"
                  >
                    {isFullScreen ? <FiMinimize2 size={18} /> : <FiMaximize2 size={18} />}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    title={`${t('close')} (Esc)`}
                    className="p-2 rounded-full text-secondary hover:bg-bg transition-colors"
                  >
                    <FiX size={20} />
                  </motion.button>
                </div>
              </motion.header>

              <div 
                className="flex-grow overflow-y-auto custom-scrollbar" 
                ref={scrollableContentRef}
              >
                <div className="p-4 md:p-6">
                  <motion.div 
                    variants={{ visible: { scale: 1, opacity: 1 }, hidden: { scale: 0.98, opacity: 0 } }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative overflow-hidden bg-card rounded-xl shadow-lg border border-border/50 mb-6"
                  >
                    <ImageWithFallback 
                      src={project.image} 
                      alt={project.title?.[lang] || 'Project image'} 
                      className={`w-full aspect-video object-cover transition-all duration-700 ${
                        imageStatus === 'loading' 
                          ? 'scale-105 blur-md' 
                          : 'scale-100 blur-0 group-hover:scale-105'
                      }`}
                      onLoad={() => setImageStatus('loaded')}
                      onError={() => setImageStatus('error')}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                    
                    {imageStatus === 'loading' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-panel/20 backdrop-blur-sm">
                        <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div>
                      </div>
                    )}
                  </motion.div>
                
                  <motion.div 
                    variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: 20, opacity: 0 } }} 
                  >
                    <Markdown
                      options={{
                        overrides: MarkdownComponents,
                        forceBlock: true,
                      }}
                    >
                      {project.description?.[lang] || t('noDescription') || 'No description available.'}
                    </Markdown>
                  </motion.div>
                </div>
              </div>

              <motion.footer 
                variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: 20, opacity: 0 } }} 
                className="p-4 border-t border-border flex-shrink-0 bg-panel/90 backdrop-blur"
              >
                <div className="flex justify-between items-center">
                  <motion.button
                    whileHover={{ scale: 1.05, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onPrevious}
                    disabled={!onPrevious}
                    className="flex items-center gap-2 p-2 rounded-lg text-secondary hover:bg-card hover:text-primary-text transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FiChevronLeft size={20} />
                    <span className="hidden sm:inline">{t('previous')}</span>
                  </motion.button>
                  
                  <div className="flex flex-wrap gap-2 justify-center max-w-md">
                    {project.tags?.slice(0, 6).map((tag, index) => (
                      <motion.button 
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => { 
                          onClose(); 
                          setTimeout(() => setSearchTerm(`#${tag}`), 150); 
                        }}
                        className="text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1 hover:bg-primary/20 hover:border-primary/40 transition-all"
                      >
                        #{tag}
                      </motion.button>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onNext}
                    disabled={!onNext}
                    className="flex items-center gap-2 p-2 rounded-lg text-secondary hover:bg-card hover:text-primary-text transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="hidden sm:inline">{t('next')}</span>
                    <FiChevronRight size={20} />
                  </motion.button>
                </div>
              </motion.footer>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetail;