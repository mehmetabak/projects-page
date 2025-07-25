// src/App.jsx

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// React Router DOM'dan yönlendirme için gerekli hook'ları ve bileşenleri import et
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'; 

import Header from './components/Header';
import ProjectCategory from './components/ProjectCategory';
import ProjectDetail from './components/ProjectDetail';
import CategoryFilters from './components/CategoryFilters';
import ScrollToTop from './components/ScrollToTop';
import { projectsData } from './data/projects';

// Framer Motion'dan animasyon için gerekli modülleri import et
import { AnimatePresence, motion, LazyMotion, domAnimation } from 'framer-motion';

/**
 * ProjectPage Bileşeni
 * Ana sayfa içeriğini ve tüm uygulama mantığını yönetir.
 * URL'deki değişikliklere göre davranır.
 */
function ProjectPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate(); // Programatik olarak URL değiştirmek için
  const { projectId } = useParams(); // URL'den dinamik :projectId parametresini almak için

  // State tanımlamaları
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null); // Seçili proje objesini (proje, index, kategori) tutar

  // Tema değiştirme useEffect'i
  useEffect(() => {
    const root = document.documentElement;
    root.lang = i18n.language;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme, i18n.language]);

  // URL tabanlı proje açma useEffect'i
  useEffect(() => {
    if (projectId) {
      // Tüm projeleri tek bir listede topla ve ID'ye göre arama yap
      const allProjects = Object.entries(projectsData).flatMap(([category, projects]) => 
        projects.map(p => ({ ...p, category }))
      );
      const projectToOpen = allProjects.find(p => p.id === projectId);
      
      if (projectToOpen) {
        // Projeyi seç ama URL'yi tekrar değiştirme (zaten o URL'deyiz)
        handleProjectSelect(projectToOpen, projectToOpen.category, false); 
      }
    } else {
      // Eğer URL'de bir proje ID'si yoksa, paneli kapat
      setSelectedProject(null); 
    }
  }, [projectId]); // Bu useEffect, sadece URL'deki projectId değiştiğinde çalışır

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  // Filtreleme mantığı
  const projectCategories = Object.keys(projectsData);
  const filteredProjects = projectCategories.reduce((acc, category) => {
    if (activeCategory !== 'All' && category !== activeCategory) return acc;
    const term = searchTerm.toLowerCase().replace('#', '');
    const lang = i18n.language;
    const filtered = projectsData[category].filter(project =>
      !term || 
      (project.title[lang]?.toLowerCase().includes(term) ||
      project.summary[lang]?.toLowerCase().includes(term) ||
      project.tags.some(tag => tag.toLowerCase().includes(term)))
    );
    if (filtered.length > 0) acc[category] = filtered;
    return acc;
  }, {});

  // Proje seçildiğinde state'i günceller ve (istenirse) URL'i değiştirir.
  const handleProjectSelect = (project, category, shouldNavigate = true) => {
    const projectList = filteredProjects[category] || projectsData[category] || [];
    const projectIndex = projectList.findIndex(p => p.id === project.id);
    setSelectedProject({ project, index: projectIndex, category });
    if (shouldNavigate) {
      navigate(`/projects/${project.id}`);
    }
  };

  // Detay panelini kapatırken ana sayfaya yönlendirir.
  const handleClose = () => {
    navigate('/');
  };

  // Sonraki projeye geç ve URL'i güncelle.
  const handleNext = () => {
    if (!selectedProject) return;
    const { index, category } = selectedProject;
    const projectList = filteredProjects[category] || [];
    if (projectList.length < 2) return;
    const nextIndex = (index + 1) % projectList.length;
    handleProjectSelect(projectList[nextIndex], category);
  };

  // Önceki projeye geç ve URL'i güncelle.
  const handlePrevious = () => {
    if (!selectedProject) return;
    const { index, category } = selectedProject;
    const projectList = filteredProjects[category] || [];
    if (projectList.length < 2) return;
    const prevIndex = (index - 1 + projectList.length) % projectList.length;
    handleProjectSelect(projectList[prevIndex], category);
  };

  return (
    <div className="bg-bg text-primary-text min-h-screen font-sans">
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <CategoryFilters
          categories={projectCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <AnimatePresence mode="wait">
          {Object.keys(filteredProjects).length > 0 ? (
            <motion.div
              key="project-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {Object.keys(filteredProjects).map(category => (
                <ProjectCategory
                  key={category}
                  title={category}
                  projects={filteredProjects[category]}
                  onProjectSelect={(project) => handleProjectSelect(project, category)} 
                  setSearchTerm={setSearchTerm}
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
              <h2 className="text-2xl font-semibold font-display text-primary-text">{t('noResultsTitle')}</h2>
              <p className="text-secondary mt-2">
                {t('noResultsMessage', { term: searchTerm })}
              </p>
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
      />
      <ScrollToTop />
    </div>
  );
}


/**
 * App Bileşeni
 * Uygulamanın giriş noktası. React Router'ı kurar ve hangi URL'in
 * hangi sayfayı göstereceğini belirler.
 */
function App() {
  return (
    <LazyMotion features={domAnimation}>
      <Routes>
        {/* Ana sayfa URL'i ("/") için ProjectPage'i render et */}
        <Route path="/" element={<ProjectPage />} />
        
        {/* Proje detay URL'i ("/projects/:projectId") için de ProjectPage'i render et. 
            ProjectPage, URL'deki :projectId'yi kullanarak hangi projeyi açacağını anlar. */}
        <Route path="/projects/:projectId" element={<ProjectPage />} />
      </Routes>
    </LazyMotion>
  );
}

export default App;