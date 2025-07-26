// src/components/ProjectCard.jsx
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useMemo, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ImageWithFallback from './ImageWithFallback';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 25 
    } 
  },
};

const Tag = ({ tag, setSearchTerm, index }) => (
  <motion.button
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={(e) => {
      e.stopPropagation();
      setSearchTerm(`#${tag}`);
    }}
    className="text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1 hover:bg-primary/20 hover:border-primary/40 transition-all duration-200"
  >
    #{tag}
  </motion.button>
);

const MarkdownRenderer = ({ content, className = "" }) => {
  const customRenderers = useMemo(() => ({
    // Image renderer with fallback support
    img: ({ src, alt, ...props }) => (
      <ImageWithFallback
        src={src}
        alt={alt || 'Project image'}
        className="w-full max-w-full h-auto rounded-lg my-2 object-cover"
        {...props}
      />
    ),
    // Paragraph renderer to handle images properly
    p: ({ children, ...props }) => {
      // Check if paragraph contains only an image
      const isImageOnly = children?.length === 1 && 
        children[0]?.type === 'img';
      
      if (isImageOnly) {
        return <div className="my-2">{children}</div>;
      }
      
      return <p className={className} {...props}>{children}</p>;
    },
    // Link renderer with security
    a: ({ href, children, ...props }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-primary/80 transition-colors"
        {...props}
      >
        {children}
      </a>
    ),
    // Code renderer
    code: ({ children, ...props }) => (
      <code
        className="bg-primary/10 text-primary px-1 py-0.5 rounded text-sm"
        {...props}
      >
        {children}
      </code>
    ),
    // Strong text renderer
    strong: ({ children, ...props }) => (
      <strong className="text-primary-text font-semibold" {...props}>
        {children}
      </strong>
    )
  }), [className]);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={customRenderers}
      className="prose prose-sm dark:prose-invert max-w-none"
    >
      {content}
    </ReactMarkdown>
  );
};

const ProjectCard = ({ project, onSelect, setSearchTerm, index = 0 }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showFullSummary, setShowFullSummary] = useState(false);

  // Memoized values for performance
  const title = useMemo(() => project.title?.[lang] || 'Untitled Project', [project.title, lang]);
  const summary = useMemo(() => project.summary?.[lang] || '', [project.summary, lang]);
  const visibleTags = useMemo(() => project.tags?.slice(0, 3) || [], [project.tags]);

  // Check if summary contains markdown
  const hasMarkdown = useMemo(() => {
    return summary.includes('![') || 
           summary.includes('**') || 
           summary.includes('`') ||
           summary.includes('[') ||
           summary.includes('#');
  }, [summary]);

  const handleCardClick = useCallback(() => {
    onSelect();
  }, [onSelect]);

  const toggleSummary = useCallback((e) => {
    e.stopPropagation();
    setShowFullSummary(prev => !prev);
  }, []);

  // Truncate summary if too long and not showing full
  const displaySummary = useMemo(() => {
    if (showFullSummary || summary.length <= 150) {
      return summary;
    }
    return summary.substring(0, 150) + '...';
  }, [summary, showFullSummary]);

  const shouldShowReadMore = summary.length > 150;

  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      onClick={handleCardClick}
      className="bg-card rounded-xl border border-border hover:border-primary/30 overflow-hidden cursor-pointer group transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-lg"
      whileHover={{ 
        y: -5, 
        scale: 1.02,
        boxShadow: "0px 10px 30px -5px rgba(var(--primary-rgb, 47, 129, 247), 0.15)"
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <ImageWithFallback 
          src={project.image} 
          alt={title}
          className={`w-full h-44 object-cover transition-all duration-500 ${
            imageLoaded ? 'group-hover:scale-110' : 'scale-110 blur-sm'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Loading overlay */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-bg/50">
            <div className="animate-spin rounded-full h-6 w-6 border-2 border-primary border-t-transparent"></div>
          </div>
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick action indicators */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.link && (
            <div className="w-6 h-6 bg-green-500/80 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          )}
          {project.github && (
            <div className="w-6 h-6 bg-gray-800/80 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <motion.h3 
          className="font-bold text-lg text-primary-text mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2"
          whileHover={{ scale: 1.02 }}
        >
          {title}
        </motion.h3>

        {/* Summary with Markdown Support */}
        <div className="text-sm text-secondary mb-4 flex-grow">
          {hasMarkdown ? (
            <div className={`${!showFullSummary ? 'line-clamp-3' : ''}`}>
              <MarkdownRenderer 
                content={displaySummary}
                className="text-secondary leading-relaxed"
              />
            </div>
          ) : (
            <p className={`leading-relaxed ${!showFullSummary ? 'line-clamp-3' : ''}`}>
              {displaySummary}
            </p>
          )}
          
          {/* Read More/Less Button */}
          {shouldShowReadMore && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSummary}
              className="text-primary text-xs font-medium mt-2 hover:text-primary/80 transition-colors"
            >
              {showFullSummary ? 'Show Less' : 'Read More'}
            </motion.button>
          )}
        </div>

        {/* Tags Section */}
        {visibleTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
            {visibleTags.map((tag, tagIndex) => (
              <Tag 
                key={tag} 
                tag={tag} 
                setSearchTerm={setSearchTerm}
                index={tagIndex}
              />
            ))}
            {project.tags?.length > 3 && (
              <span className="text-xs text-secondary bg-secondary/10 rounded-full px-3 py-1">
                +{project.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Footer Info */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/30">
          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="text-xs bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-2 py-1 rounded-full">
                ⭐ Featured
              </span>
            )}
            {project.status && (
              <span className={`text-xs px-2 py-1 rounded-full ${
                project.status === 'completed' 
                  ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                  : project.status === 'in-progress'
                  ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                  : 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
              }`}>
                {project.status === 'completed' ? '✓ Complete' : 
                 project.status === 'in-progress' ? '⚡ In Progress' : '📋 Planning'}
              </span>
            )}
          </div>
          
          {project.date && (
            <span className="text-xs text-secondary">
              {new Date(project.date).toLocaleDateString(lang)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;