
import { useState } from 'react';
import { LearningPath } from '../types';

export const useFilters = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSoftware, setActiveSoftware] = useState<string | null>(null);
  const [activePath, setActivePath] = useState<LearningPath | null>(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const clearFilters = () => {
    setActiveCategory(null);
    setActiveSoftware(null);
    setActivePath(null);
    setShowFavoritesOnly(false);
    setSearchQuery('');
  };

  return {
    searchQuery, setSearchQuery,
    activeCategory, setActiveCategory,
    activeSoftware, setActiveSoftware,
    activePath, setActivePath,
    showFavoritesOnly, setShowFavoritesOnly,
    clearFilters
  };
};
