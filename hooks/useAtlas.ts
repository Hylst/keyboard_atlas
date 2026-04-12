
import { usePreferences } from './usePreferences';
import { useFilters } from './useFilters';
import { useGameModes } from './useGameModes';
import { useData } from './useData';

export const useAtlas = () => {
  // 1. Preferences management
  const preferences = usePreferences();
  const { selectedOS, favoriteIds } = preferences;

  // 2. UI Filters management
  const filters = useFilters();
  const {
    searchQuery,
    activeCategory,
    activeSoftware,
    activePath,
    showFavoritesOnly
  } = filters;

  // 3. Game modes management
  const gameModes = useGameModes();

  // 4. Data derivation management
  const data = useData({
    searchQuery,
    activeCategory,
    activeSoftware,
    activePath,
    showFavoritesOnly,
    selectedOS,
    favoriteIds
  });

  return {
    ...preferences,
    ...filters,
    ...gameModes,
    ...data
  };
};
