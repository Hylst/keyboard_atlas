
import { useState, useEffect } from 'react';
import { OSType, LayoutType, UserProgress } from '../types';

const LEITNER_INTERVALS = [0, 1, 3, 7, 14, 30]; // Jours avant la prochaine révision

export const usePreferences = () => {
  // OS Preference
  const [selectedOS, setSelectedOS] = useState<OSType>(() => {
    const saved = localStorage.getItem('pref_os');
    return (saved as OSType) || OSType.WINDOWS;
  });

  // Layout Preference
  const [keyboardLayout, setKeyboardLayout] = useState<LayoutType>(() => {
    const saved = localStorage.getItem('pref_layout');
    return (saved as LayoutType) || LayoutType.AZERTY;
  });

  // SRS Progress Logic
  const [progress, setProgress] = useState<Record<string, UserProgress>>(() => {
    const saved = localStorage.getItem('user_progress');
    if (saved) return JSON.parse(saved);

    // Migration des anciens "masteredIds" vers le nouveau système SRS (Level 5)
    const oldMastered = localStorage.getItem('mastered_shortcuts');
    if (oldMastered) {
      const ids: string[] = JSON.parse(oldMastered);
      const newProgress: Record<string, UserProgress> = {};
      const now = Date.now();
      ids.forEach(id => {
        newProgress[id] = { 
          level: 5, 
          nextReview: now + 30 * 24 * 60 * 60 * 1000, 
          lastPracticed: now,
          streak: 10
        };
      });
      return newProgress;
    }
    return {};
  });

  // Arcade High Score
  const [arcadeHighScore, setArcadeHighScore] = useState<number>(() => {
    const saved = localStorage.getItem('arcade_high_score');
    return saved ? parseInt(saved, 10) : 0;
  });

  // Favorites Logic
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('favorite_shortcuts');
    return saved ? JSON.parse(saved) : [];
  });

  // Persistence Effects
  useEffect(() => { localStorage.setItem('pref_os', selectedOS); }, [selectedOS]);
  useEffect(() => { localStorage.setItem('pref_layout', keyboardLayout); }, [keyboardLayout]);
  useEffect(() => { localStorage.setItem('user_progress', JSON.stringify(progress)); }, [progress]);
  useEffect(() => { localStorage.setItem('favorite_shortcuts', JSON.stringify(favoriteIds)); }, [favoriteIds]);
  useEffect(() => { localStorage.setItem('arcade_high_score', arcadeHighScore.toString()); }, [arcadeHighScore]);

  // Derived state for backward compatibility / UI helpers
  const masteredIds = Object.keys(progress).filter(id => progress[id].level >= 5);
  const dueIds = Object.keys(progress).filter(id => progress[id].level < 5 && progress[id].nextReview <= Date.now());

  // Action: Mark as Mastered manually (Toggle)
  const toggleMastery = (id: string) => {
    setProgress(prev => {
      const current = prev[id];
      const newProg = { ...prev };
      
      if (current && current.level >= 5) {
        // Demote / Forget
        delete newProg[id];
      } else {
        // Promote to Mastered immediately
        newProg[id] = {
          level: 5,
          nextReview: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 days
          lastPracticed: Date.now(),
          streak: 10
        };
      }
      return newProg;
    });
  };

  // Action: Submit Quiz Result (SRS Logic)
  const submitQuizResult = (id: string, success: boolean) => {
    setProgress(prev => {
      const current = prev[id] || { level: 0, nextReview: 0, lastPracticed: 0, streak: 0 };
      let newLevel = current.level;
      let newStreak = current.streak;

      if (success) {
        newLevel = Math.min(5, current.level + 1);
        newStreak += 1;
      } else {
        newLevel = Math.max(0, current.level - 1); // Pas trop punitif, recule d'un cran
        if (current.level === 0) newLevel = 0; // Cap at 0
        newStreak = 0;
      }

      const daysToAdd = LEITNER_INTERVALS[newLevel];
      const nextReview = Date.now() + daysToAdd * 24 * 60 * 60 * 1000;

      return {
        ...prev,
        [id]: {
          level: newLevel,
          nextReview: nextReview,
          lastPracticed: Date.now(),
          streak: newStreak
        }
      };
    });
  };

  const updateArcadeHighScore = (score: number) => {
    setArcadeHighScore(prev => Math.max(prev, score));
  };

  const toggleFavorite = (id: string) => {
    setFavoriteIds(prev => prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]);
  };

  const resetPreferences = () => {
    if (window.confirm("Voulez-vous vraiment effacer toute votre progression (Favoris, Maîtrise et Scores) ?")) {
      setProgress({});
      setFavoriteIds([]);
      setArcadeHighScore(0);
    }
  };

  return {
    selectedOS, setSelectedOS,
    keyboardLayout, setKeyboardLayout,
    progress, masteredIds, dueIds,
    toggleMastery, submitQuizResult,
    favoriteIds, toggleFavorite,
    arcadeHighScore, updateArcadeHighScore,
    resetPreferences
  };
};
