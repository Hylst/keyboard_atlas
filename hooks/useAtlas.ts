
import { useState, useMemo } from 'react';
import { Shortcut, LearningPath } from '../types';
import { SHORTCUTS_DATA, CATEGORIES, SOFTWARES } from '../data/shortcuts';
import { usePreferences } from './usePreferences';

export const useAtlas = () => {
  // Import preferences logic
  const {
    selectedOS, setSelectedOS,
    keyboardLayout, setKeyboardLayout,
    progress, masteredIds, dueIds,
    toggleMastery, submitQuizResult,
    favoriteIds, toggleFavorite,
    arcadeHighScore, updateArcadeHighScore,
    typingHighScore, updateTypingHighScore,
    resetPreferences,
    exportData,
    importData
  } = usePreferences();

  // UI State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSoftware, setActiveSoftware] = useState<string | null>(null);
  const [activePath, setActivePath] = useState<LearningPath | null>(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [isArcadeMode, setIsArcadeMode] = useState(false);
  const [isTypingMode, setIsTypingMode] = useState(false);
  
  const [hoveredKeys, setHoveredKeys] = useState<string[] | null>(null);

  const toggleQuiz = () => {
    setIsQuizMode(prev => !prev);
    setIsArcadeMode(false);
    setIsTypingMode(false);
    if (!isQuizMode) window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleArcade = () => {
    setIsArcadeMode(prev => !prev);
    setIsQuizMode(false);
    setIsTypingMode(false);
    if (!isArcadeMode) window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTyping = () => {
    setIsTypingMode(prev => !prev);
    setIsQuizMode(false);
    setIsArcadeMode(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    setActiveCategory(null);
    setActiveSoftware(null);
    setActivePath(null);
    setShowFavoritesOnly(false);
    setSearchQuery('');
  };

  const filteredShortcuts = useMemo(() => {
    let base = SHORTCUTS_DATA;
    
    // 1. Path Filter
    if (activePath) {
      base = base.filter(s => activePath.shortcutIds.includes(s.id));
    }
    
    // 2. Favorites Filter
    if (showFavoritesOnly) {
      base = base.filter(s => favoriteIds.includes(s.id));
    }

    // 3. Category & Software Filters
    if (activeCategory) {
      base = base.filter(s => s.category === activeCategory);
    }
    if (activeSoftware) {
      base = base.filter(s => s.software === activeSoftware);
    }

    // 4. Search Algorithm (Weighted Scoring)
    const query = searchQuery.toLowerCase().trim();
    if (!query) {
       // Just filter by OS availability if no search
       return base.filter(shortcut => 
         shortcut.os.includes(selectedOS) || shortcut.alternatives?.some(alt => alt.os === selectedOS)
       );
    }

    return base
      .map(shortcut => {
        let score = 0;
        const actionLower = shortcut.action.toLowerCase();
        
        // Exact match or Starts With gets highest priority
        if (actionLower === query) score += 100;
        else if (actionLower.startsWith(query)) score += 50;
        else if (actionLower.includes(query)) score += 20;

        // Keywords match
        if (shortcut.keys.some(k => k.toLowerCase().includes(query))) score += 10;
        if (shortcut.software?.toLowerCase().includes(query)) score += 5;
        if (shortcut.category.toLowerCase().includes(query)) score += 5;
        
        // OS Availability Check (Binary filter)
        const isAvailableForOS = shortcut.os.includes(selectedOS) || 
                                 shortcut.alternatives?.some(alt => alt.os === selectedOS);

        if (!isAvailableForOS) score = 0;

        return { shortcut, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(item => item.shortcut);

  }, [searchQuery, activeCategory, activeSoftware, selectedOS, activePath, showFavoritesOnly, favoriteIds]);

  const currentCategoryName = useMemo(() => {
    if (showFavoritesOnly) return "Ma Sélection";
    if (activePath) return `Parcours : ${activePath.title}`;
    if (activeSoftware) return `Logiciel : ${SOFTWARES.find(s => s.id === activeSoftware)?.name}`;
    if (activeCategory) return CATEGORIES.find(c => c.id === activeCategory)?.name;
    return "Bibliothèque Atlas";
  }, [showFavoritesOnly, activePath, activeCategory, activeSoftware]);

  const dailyShortcut = useMemo(() => {
    const today = new Date().toDateString(); 
    let hash = 0;
    for (let i = 0; i < today.length; i++) {
      hash = today.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % SHORTCUTS_DATA.length;
    return SHORTCUTS_DATA[index];
  }, []);

  const totalShortcutsCount = SHORTCUTS_DATA.length;

  return {
    // Preferences
    selectedOS, setSelectedOS,
    keyboardLayout, setKeyboardLayout,
    progress, masteredIds, dueIds,
    toggleMastery, submitQuizResult,
    favoriteIds, toggleFavorite,
    arcadeHighScore, updateArcadeHighScore,
    typingHighScore, updateTypingHighScore,
    resetPreferences,
    exportData,
    importData,
    
    // UI Actions
    toggleQuiz,
    toggleArcade,
    toggleTyping,
    clearFilters,
    setSearchQuery,
    setActiveCategory,
    setActiveSoftware,
    setActivePath,
    setShowFavoritesOnly,
    setIsQuizMode,
    setIsArcadeMode,
    setIsTypingMode,
    setHoveredKeys,

    // UI State
    searchQuery,
    activeCategory,
    activeSoftware,
    activePath,
    showFavoritesOnly,
    isQuizMode,
    isArcadeMode,
    isTypingMode,
    hoveredKeys,
    
    // Derived Data
    filteredShortcuts, 
    currentCategoryName, 
    dailyShortcut,
    totalShortcutsCount
  };
};
