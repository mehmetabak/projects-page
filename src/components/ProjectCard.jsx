// src/components/ProjectCard.jsx
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ImageWithFallback from './ImageWithFallback'; // Önceki yanıttaki bileşen

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

const Tag = ({ tag, setSearchTerm }) => (
  <button
    onClick={(e) => {
      e.stopPropagation();
      setSearchTerm(`#${tag}`);
    }}
    className="text-xs font-medium bg-dark-primary/10 dark:bg-dark-primary/20 text-dark-primary rounded-full px-3 py-1 hover:bg-dark-primary/20 dark:hover:bg-dark-primary/30 transition-colors"
  >
    #{tag}
  </button>
);

const ProjectCard = ({ project, onSelect, setSearchTerm }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <motion.div
      variants={itemVariants}
      onClick={onSelect}
      className="bg-light-card dark:bg-dark-card rounded-xl border border-transparent dark:hover:border-dark-primary overflow-hidden cursor-pointer group transition-all duration-300 h-full flex flex-col"
      whileHover={{ y: -5, scale: 1.02,
        boxShadow: "0px 10px 30px -5px rgba(47, 129, 247, 0.1)"
      }}
    >
      <ImageWithFallback src={project.image} alt={project.title[lang]} className="w-full h-44 object-cover" />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-light-text dark:text-dark-text mb-2 group-hover:text-dark-primary transition-colors">
          {project.title[lang]}
        </h3>
        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-4 line-clamp-3 flex-grow">
          {project.summary[lang]}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-light-border/50 dark:border-dark-border/50">
          {project.tags.slice(0, 3).map(tag => (
            <Tag key={tag} tag={tag} setSearchTerm={setSearchTerm} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;