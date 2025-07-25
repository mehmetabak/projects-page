// src/components/ProjectCategory.jsx
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Kartların birbiri ardına gelme süresi
    },
  },
};

const ProjectCategory = ({ title, projects, onProjectSelect, setSearchTerm }) => {
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold mb-6 text-light-text dark:text-dark-text">{title}</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={() => onProjectSelect(project)}
            setSearchTerm={setSearchTerm}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ProjectCategory;