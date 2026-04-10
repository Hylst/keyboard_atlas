
export enum OSType {
  WINDOWS = 'Windows',
  MACOS = 'macOS',
  LINUX = 'Linux'
}

export enum LayoutType {
  QWERTY = 'QWERTY',
  AZERTY = 'AZERTY',
  DVORAK = 'DVORAK',
  COLEMAK = 'COLEMAK'
}

export enum Difficulty {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced'
}

// Interface pour les données brutes (avant parsing) provenant des fichiers JSON/TS
export interface RawShortcut {
  id: string;
  action: string;
  keys: string[];
  description?: string;
  os: string[]; // Strings simples ici, convertis plus tard
  category: string;
  software?: string;
  difficulty: string; // String simple ici
  alternatives?: {
    os: string;
    keys: string[];
  }[];
}

export interface Shortcut {
  id: string;
  action: string;
  keys: string[];
  description?: string;
  os: OSType[];
  category: string;
  software?: string;
  difficulty: Difficulty;
  alternatives?: {
    os: OSType;
    keys: string[];
  }[];
}

export interface UserProgress {
  level: number; // 0 (New) à 5 (Mastered)
  nextReview: number; // Timestamp
  lastPracticed: number; // Timestamp
  streak: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Software {
  id: string;
  name: string;
  icon: string;
  category: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  icon: string;
  shortcutIds: string[];
  level: string;
}
