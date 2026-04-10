
import { LearningPath } from '../types';

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'vscode-pro',
    title: 'Expert VS Code',
    description: 'Maîtrisez l\'édition multi-ligne, la navigation par symboles et le terminal intégré.',
    icon: '📜',
    // IDs must match data/shortcuts/*.ts files
    shortcutIds: ['dev-dup-line-down', 'nav-jump-word-right', 'gen-paste-plain', 'gen-undo', 'gen-redo'],
    level: 'Avancé'
  },
  {
    id: 'web-surf',
    title: 'Productivité Web',
    description: 'Naviguez, recherchez et débuggez sans jamais quitter votre clavier.',
    icon: '🌍',
    shortcutIds: ['web-focus-url', 'web-private', 'web-dev-tools', 'web-reopen-tab'],
    level: 'Intermédiaire'
  },
  {
    id: 'system-master',
    title: 'Maîtrise du Bureau',
    description: 'Optimisez votre espace de travail et la gestion de vos fenêtres système.',
    icon: '🖥️',
    shortcutIds: ['sys-snap-left', 'sys-show-desktop', 'nav-desktop-view', 'sys-spotlight'],
    level: 'Débutant'
  }
];
