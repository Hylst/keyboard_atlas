
import { Software } from '../types';

export const SOFTWARES: Software[] = [
  // Dev
  { id: 'vscode', name: 'VS Code', icon: '📜', category: 'dev' },
  { id: 'intellij', name: 'IntelliJ IDEA', icon: '🧠', category: 'dev' },
  { id: 'webstorm', name: 'WebStorm', icon: '🌐', category: 'dev' },
  { id: 'android-studio', name: 'Android Studio', icon: '🤖', category: 'dev' },
  { id: 'terminal', name: 'Terminal / Shell', icon: '⌨️', category: 'dev' },
  { id: 'iterm2', name: 'iTerm2', icon: '🐚', category: 'dev' },
  { id: 'windows-terminal', name: 'Windows Terminal', icon: '💻', category: 'dev' },
  { id: 'git', name: 'Git CLI', icon: '🌳', category: 'dev' },
  { id: 'github-desktop', name: 'GitHub Desktop', icon: '🐙', category: 'dev' },
  { id: 'sourcetree', name: 'SourceTree', icon: '🌲', category: 'dev' },
  { id: 'docker', name: 'Docker', icon: '🐳', category: 'dev' },
  
  // Web
  { id: 'chrome', name: 'Chrome/Edge', icon: '🌍', category: 'web' },
  { id: 'firefox', name: 'Firefox', icon: '🦊', category: 'web' },
  { id: 'safari', name: 'Safari', icon: '🧭', category: 'web' },
  
  // Productivity (New)
  { id: 'notion', name: 'Notion', icon: '📓', category: 'productivity' },
  { id: 'obsidian', name: 'Obsidian', icon: '💎', category: 'productivity' },
  { id: 'trello', name: 'Trello', icon: '📋', category: 'productivity' },

  // Edition & Office
  { id: 'office', name: 'Word/Docs', icon: '📄', category: 'edition' },
  { id: 'powerpoint', name: 'PowerPoint', icon: '📊', category: 'edition' },
  { id: 'indesign', name: 'InDesign', icon: '📕', category: 'edition' },
  
  // Data
  { id: 'excel', name: 'Excel', icon: '📗', category: 'data' },
  { id: 'jupyter', name: 'Jupyter', icon: '📓', category: 'data' },
  { id: 'rstudio', name: 'RStudio', icon: '🔵', category: 'data' },

  // Creative
  { id: 'figma', name: 'Figma', icon: '🎨', category: 'creative' },
  { id: 'illustrator', name: 'Illustrator', icon: '✒️', category: 'creative' },
  { id: 'photoshop', name: 'Photoshop', icon: '🖌️', category: 'creative' },
  { id: 'lightroom', name: 'Lightroom', icon: '📷', category: 'creative' },
  { id: 'premiere', name: 'Premiere Pro', icon: '🎞️', category: 'creative' },
  { id: 'blender', name: 'Blender', icon: '🧊', category: 'creative' },

  // Media
  { id: 'spotify', name: 'Spotify', icon: '🎧', category: 'media' },
  { id: 'vlc', name: 'VLC', icon: '🟠', category: 'media' },
  { id: 'youtube', name: 'YouTube', icon: '▶️', category: 'media' },
  { id: 'obs', name: 'OBS Studio', icon: '🎥', category: 'media' },
  { id: 'davinci', name: 'DaVinci Resolve', icon: '🎬', category: 'media' },

  // Communication
  { id: 'slack', name: 'Slack', icon: '🟣', category: 'communication' },
  { id: 'discord', name: 'Discord', icon: '🎮', category: 'communication' },
  { id: 'teams', name: 'Teams', icon: '📞', category: 'communication' },
  { id: 'zoom', name: 'Zoom', icon: '🎥', category: 'communication' },
  { id: 'meet', name: 'Google Meet', icon: '📹', category: 'communication' },
  { id: 'outlook', name: 'Outlook', icon: '📧', category: 'communication' },
  { id: 'gmail', name: 'Gmail', icon: '📮', category: 'communication' },

  // System
  { id: 'finder', name: 'Finder (macOS)', icon: '📂', category: 'system' }
];
