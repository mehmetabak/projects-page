// src/App.jsx

import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom'; 

import Header from './components/Header';
import ProjectCategory from './components/ProjectCategory';
import ProjectDetail from './components/ProjectDetail';
import CategoryFilters from './components/CategoryFilters';
import ScrollToTop from './components/ScrollToTop';
import { projectsData } from './data/projects';

import { AnimatePresence, motion, LazyMotion, domAnimation } from 'framer-motion';

function ProjectPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { projectId } = useParams();

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isExternalLink, setIsExternalLink] = useState(false);

  // Tema optimizasyonu
  useEffect(() => {
    const root = document.documentElement;
    root.lang = i18n.language;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme, i18n.language]);

  // Dış linkten gelme kontrolü - düzeltilmiş versiyon
  useEffect(() => {
    if (projectId) {
      // Eğer location.state yoksa ve sayfa yenilendi/direct link ile gelindiyse
      const isDirectAccess = !location.state && 
        (document.referrer === '' || !document.referrer.includes(window.location.hostname));
      
      setIsExternalLink(isDirectAccess);
    } else {
      setIsExternalLink(false);
    }
  }, [projectId, location.state]);

  // URL tabanlı proje açma - memoized project finder
  const allProjects = useMemo(() => 
    Object.entries(projectsData).flatMap(([category, projects]) => 
      projects.map(p => ({ ...p, category }))
    ), []);

  useEffect(() => {
    if (projectId) {
      const projectToOpen = allProjects.find(p => p.id === projectId);
      
      if (projectToOpen) {
        handleProjectSelect(projectToOpen, projectToOpen.category, false);
      } else {
        // Proje bulunamadı, ana sayfaya yönlendir
        navigate('/', { replace: true });
      }
    } else {
      setSelectedProject(null);
    }
  }, [projectId, allProjects]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  // Optimized filtering with useMemo
  const projectCategories = useMemo(() => Object.keys(projectsData), []);
  
  const filteredProjects = useMemo(() => {
    const term = searchTerm.toLowerCase().replace('#', '');
    const lang = i18n.language;
    
    return projectCategories.reduce((acc, category) => {
      if (activeCategory !== 'All' && category !== activeCategory) return acc;
      
      const filtered = projectsData[category].filter(project => {
        if (!term) return true;
        
        return (
          project.title[lang]?.toLowerCase().includes(term) ||
          project.summary[lang]?.toLowerCase().includes(term) ||
          project.tags.some(tag => tag.toLowerCase().includes(term))
        );
      });
      
      if (filtered.length > 0) acc[category] = filtered;
      return acc;
    }, {});
  }, [searchTerm, activeCategory, i18n.language, projectCategories]);

  const handleProjectSelect = (project, category, shouldNavigate = true) => {
    const projectList = filteredProjects[category] || projectsData[category] || [];
    const projectIndex = projectList.findIndex(p => p.id === project.id);
    setSelectedProject({ project, index: projectIndex, category });
    
    if (shouldNavigate) {
      navigate(`/projects/${project.id}`, { 
        state: { 
          fromSearch: !!searchTerm,
          isModal: true // Modal olduğunu belirt
        }
      });
    }
  };

  const handleClose = () => {
    setIsExternalLink(false);
    if (location.state?.fromSearch) {
      navigate('/', { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  };

  const handleNext = () => {
    if (!selectedProject) return;
    const { index, category } = selectedProject;
    const projectList = filteredProjects[category] || [];
    if (projectList.length < 2) return;
    const nextIndex = (index + 1) % projectList.length;
    const nextProject = projectList[nextIndex];
    handleProjectSelect(nextProject, category);
  };

  const handlePrevious = () => {
    if (!selectedProject) return;
    const { index, category } = selectedProject;
    const projectList = filteredProjects[category] || [];
    if (projectList.length < 2) return;
    const prevIndex = (index - 1 + projectList.length) % projectList.length;
    const prevProject = projectList[prevIndex];
    handleProjectSelect(prevProject, category);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      
      if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
          case 'k':
            e.preventDefault();
            document.querySelector('input[type="search"]')?.focus();
            break;
          case '/':
            e.preventDefault();
            document.querySelector('input[type="search"]')?.focus();
            break;
        }
      }
    };
    
    if (!selectedProject) {
      window.addEventListener('keydown', handleGlobalKeyDown);
      return () => window.removeEventListener('keydown', handleGlobalKeyDown);
    }
  }, [selectedProject]);

  const hasResults = Object.keys(filteredProjects).length > 0;

  return (
    <div className="bg-bg text-primary-text min-h-screen font-sans">
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        hasResults={hasResults}
      />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <CategoryFilters
          categories={projectCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          projectCounts={projectCategories.reduce((acc, cat) => {
            acc[cat] = filteredProjects[cat]?.length || 0;
            return acc;
          }, {})}
        />
        
        <AnimatePresence mode="wait">
          {hasResults ? (
            <motion.div
              key="project-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {Object.entries(filteredProjects).map(([category, projects]) => (
                <ProjectCategory
                  key={category}
                  title={category}
                  projects={projects}
                  onProjectSelect={(project) => handleProjectSelect(project, category)}
                  setSearchTerm={setSearchTerm}
                  isActive={activeCategory === category || activeCategory === 'All'}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center py-20"
            >
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4 opacity-20">🔍</div>
                <h2 className="text-2xl font-semibold font-display text-primary-text mb-2">
                  {t('noResultsTitle')}
                </h2>
                <p className="text-secondary mb-6">
                  {t('noResultsMessage', { term: searchTerm })}
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('All');
                  }}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {t('clearFilters') || 'Clear Filters'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      <ProjectDetail
        project={selectedProject?.project}
        onClose={handleClose}
        setSearchTerm={setSearchTerm}
        theme={theme}
        onNext={handleNext}
        onPrevious={handlePrevious}
        forceFullscreen={isExternalLink}
        projectCount={selectedProject ? (filteredProjects[selectedProject.category]?.length || 0) : 0}
      />
      
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <Routes>
        <Route path="/" element={<ProjectPage />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
        {/* 404 fallback */}
        <Route path="*" element={<ProjectPage />} />
      </Routes>
    </LazyMotion>
  );
}

export default App;