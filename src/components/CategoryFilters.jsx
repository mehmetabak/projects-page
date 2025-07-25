// src/components/CategoryFilters.jsx
import { motion } from 'framer-motion';

const CategoryFilters = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex items-center space-x-2 mb-8 overflow-x-auto pb-2">
      <button
        onClick={() => setActiveCategory('All')}
        className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors whitespace-nowrap
          ${activeCategory === 'All' ? 'text-primary-text' : 'text-secondary hover:text-primary-text'}`}
      >
        {activeCategory === 'All' && (
          <motion.div
            layoutId="activePill"
            className="absolute inset-0 bg-primary rounded-full"
            style={{ borderRadius: 9999 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10">All</span>
      </button>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors whitespace-nowrap
            ${activeCategory === category ? 'text-primary-text' : 'text-secondary hover:text-primary-text'}`}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activePill"
              className="absolute inset-0 bg-primary rounded-full"
              style={{ borderRadius: 9999 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;