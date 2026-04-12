
import { useState, useEffect, ChangeEvent } from 'react';
import { OSType, LayoutType, UserProgress } from '../types';
import type { TypingMode } from '../data/typing';

const LEITNER_INTERVALS = [0, 1, 3, 7, 14, 30]; // Jours avant la prochaine révision

export const usePreferences = () => {
  // OS Preference
  const [selectedOS, setSelectedOS] = useState<OSType>(() => {
    const saved = localStorage.getItem('pref_os');
    return (saved as OSType) || OSType.WINDOWS;
  });

  // Onboarding Preference
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean>(() => {
    return localStorage.getItem('has_seen_onboarding') === 'true';
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

  // Typing Game High Scores (per mode)
  const [typingHighScore, setTypingHighScore] = useState<Record<TypingMode, number>>(() => {
    const saved = localStorage.getItem('typing_high_score');
    return saved ? JSON.parse(saved) : { prose: 0, code: 0, alien: 0 };
  });

  useEffect(() => {
    localStorage.setItem('typing_high_score', JSON.stringify(typingHighScore));
  }, [typingHighScore]);

  const updateTypingHighScore = (mode: TypingMode, score: number) => {
    setTypingHighScore(prev => ({ ...prev, [mode]: Math.max(prev[mode] || 0, score) }));
  };

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
  useEffect(() => { localStorage.setItem('has_seen_onboarding', hasSeenOnboarding.toString()); }, [hasSeenOnboarding]);

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

  const exportData = () => {
    const data = {
      pref_os: selectedOS,
      pref_layout: keyboardLayout,
      user_progress: progress,
      favorite_shortcuts: favoriteIds,
      arcade_high_score: arcadeHighScore,
      typing_high_score: typingHighScore,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `keyboard_atlas_backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const importData = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        if (data.pref_os) setSelectedOS(data.pref_os);
        if (data.pref_layout) setKeyboardLayout(data.pref_layout);
        if (data.user_progress) setProgress(data.user_progress);
        if (data.favorite_shortcuts) setFavoriteIds(data.favorite_shortcuts);
        if (data.arcade_high_score !== undefined) setArcadeHighScore(data.arcade_high_score);
        if (data.typing_high_score) setTypingHighScore(data.typing_high_score);
        alert("Données importées avec succès !");
      } catch (err) {
        alert("Erreur lors de l'importation. Le fichier est-il valide ?");
      }
    };
    reader.readAsText(file);
    // Reset file input
    event.target.value = '';
  };

  return {
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
    hasSeenOnboarding,
    setHasSeenOnboarding
  };
};
