
import { OSType, Difficulty, Shortcut, RawShortcut } from '../types';
import { CATEGORIES } from './categories';
import { SOFTWARES } from './softwares';

// Import data from local TS files
import { generalShortcuts } from './shortcuts/general';
import { navigationShortcuts } from './shortcuts/navigation';
import { editionShortcuts } from './shortcuts/edition';
import { webShortcuts } from './shortcuts/web';
import { devShortcuts } from './shortcuts/dev';
import { devopsShortcuts } from './shortcuts/devops'; 
import { productivityShortcuts } from './shortcuts/productivity'; // New Module
import { systemShortcuts } from './shortcuts/system';
import { specialShortcuts } from './shortcuts/special';
import { creativeShortcuts } from './shortcuts/creative';
import { communicationShortcuts } from './shortcuts/communication';
import { accessibilityShortcuts } from './shortcuts/accessibility';
import { mediaShortcuts } from './shortcuts/media';
import { dataShortcuts } from './shortcuts/data';

// Re-export for app consumption
export { CATEGORIES } from './categories';
export { SOFTWARES } from './softwares';

// Helper safely mapping string strings to Enums
const mapOS = (osList: string[]): OSType[] => {
  return osList.map(os => {
    switch(os) {
      case 'Windows': return OSType.WINDOWS;
      case 'macOS': return OSType.MACOS;
      case 'Linux': return OSType.LINUX;
      default: return OSType.WINDOWS; // Fallback
    }
  });
};

const mapDifficulty = (diff: string): Difficulty => {
  switch(diff) {
    case 'Beginner': return Difficulty.BEGINNER;
    case 'Intermediate': return Difficulty.INTERMEDIATE;
    case 'Advanced': return Difficulty.ADVANCED;
    default: return Difficulty.BEGINNER;
  }
};

// Helper to cast raw data to Shortcut array with strict typing
const castToShortcuts = (data: RawShortcut[]): Shortcut[] => {
  return data.map(s => ({
    ...s,
    os: mapOS(s.os),
    difficulty: mapDifficulty(s.difficulty),
    alternatives: s.alternatives?.map(a => ({
      ...a,
      os: mapOS([a.os])[0] // mapOS returns array, take first
    }))
  }));
};

// We assert the imported arrays as RawShortcut[] because they come from untyped .ts files (acting as JSON)
export const SHORTCUTS_DATA: Shortcut[] = [
  ...castToShortcuts(generalShortcuts as RawShortcut[]),
  ...castToShortcuts(navigationShortcuts as RawShortcut[]),
  ...castToShortcuts(editionShortcuts as RawShortcut[]),
  ...castToShortcuts(creativeShortcuts as RawShortcut[]),
  ...castToShortcuts(communicationShortcuts as RawShortcut[]),
  ...castToShortcuts(webShortcuts as RawShortcut[]),
  ...castToShortcuts(devShortcuts as RawShortcut[]),
  ...castToShortcuts(devopsShortcuts as RawShortcut[]), 
  ...castToShortcuts(productivityShortcuts as RawShortcut[]), // Added
  ...castToShortcuts(systemShortcuts as RawShortcut[]),
  ...castToShortcuts(accessibilityShortcuts as RawShortcut[]),
  ...castToShortcuts(mediaShortcuts as RawShortcut[]),
  ...castToShortcuts(dataShortcuts as RawShortcut[]),
  ...castToShortcuts(specialShortcuts as RawShortcut[])
];
