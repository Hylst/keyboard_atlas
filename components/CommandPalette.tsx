
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { CATEGORIES, SOFTWARES } from '../data/shortcuts';
import { LEARNING_PATHS } from '../data/learningPaths';
import { OSType, LayoutType } from '../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (id: string) => void;
  onSelectSoftware: (id: string) => void;
  onSelectPath: (id: string) => void;
  onSelectOS: (os: OSType) => void;
  onSelectLayout: (layout: LayoutType) => void;
  onToggleQuiz: () => void;
  selectedOS: OSType;
  selectedLayout: LayoutType;
}

type CommandItem = {
  id: string;
  type: 'category' | 'software' | 'path' | 'action' | 'setting';
  label: string;
  icon: string;
  action: () => void;
  keywords?: string;
};

const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
  onSelectSoftware,
  onSelectPath,
  onSelectOS,
  onSelectLayout,
  onToggleQuiz,
  selectedOS,
  selectedLayout
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Generate all possible commands
  const allCommands: CommandItem[] = useMemo(() => [
    // Actions Globales
    { id: 'quiz', type: 'action', label: 'Basculer Mode Quiz', icon: '🎯', action: onToggleQuiz },
    
    // OS Settings
    { id: 'os-win', type: 'setting', label: 'OS: Windows', icon: '🪟', action: () => onSelectOS(OSType.WINDOWS), keywords: 'windows win pc' },
    { id: 'os-mac', type: 'setting', label: 'OS: macOS', icon: '🍎', action: () => onSelectOS(OSType.MACOS), keywords: 'mac apple macos' },
    { id: 'os-linux', type: 'setting', label: 'OS: Linux', icon: '🐧', action: () => onSelectOS(OSType.LINUX), keywords: 'linux ubuntu' },

    // Layout Settings
    { id: 'layout-qwerty', type: 'setting', label: 'Clavier: QWERTY', icon: '⌨️', action: () => onSelectLayout(LayoutType.QWERTY), keywords: 'english us layout' },
    { id: 'layout-azerty', type: 'setting', label: 'Clavier: AZERTY', icon: '🇫🇷', action: () => onSelectLayout(LayoutType.AZERTY), keywords: 'french fr layout' },
    { id: 'layout-dvorak', type: 'setting', label: 'Clavier: Dvorak', icon: '🇺🇸', action: () => onSelectLayout(LayoutType.DVORAK), keywords: 'dvorak layout' },
    { id: 'layout-colemak', type: 'setting', label: 'Clavier: Colemak', icon: '⌨️', action: () => onSelectLayout(LayoutType.COLEMAK), keywords: 'colemak layout' },
    
    // Categories
    ...CATEGORIES.map(c => ({
      id: `cat-${c.id}`,
      type: 'category' as const,
      label: c.name,
      icon: c.icon,
      action: () => onSelectCategory(c.id),
      keywords: c.name.toLowerCase()
    })),
    
    // Softwares
    ...SOFTWARES.map(s => ({
      id: `soft-${s.id}`,
      type: 'software' as const,
      label: s.name,
      icon: s.icon,
      action: () => onSelectSoftware(s.id),
      keywords: s.name.toLowerCase()
    })),

    // Paths
    ...LEARNING_PATHS.map(p => ({
      id: `path-${p.id}`,
      type: 'path' as const,
      label: p.title,
      icon: p.icon,
      action: () => onSelectPath(p.id),
      keywords: p.title.toLowerCase()
    }))
  ], [onSelectCategory, onSelectSoftware, onSelectPath, onSelectOS, onSelectLayout, onToggleQuiz]);

  // Filter commands
  const filteredCommands = useMemo(() => {
    if (!query) return allCommands;
    const lowerQuery = query.toLowerCase();
    return allCommands.filter(cmd => 
      cmd.label.toLowerCase().includes(lowerQuery) || 
      cmd.keywords?.includes(lowerQuery)
    );
  }, [query, allCommands]);

  // Reset selection when filtering
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Keyboard Navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current && listRef.current.children[selectedIndex]) {
      (listRef.current.children[selectedIndex] as HTMLElement).scrollIntoView({
        block: 'nearest',
        behavior: 'smooth'
      });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm flex items-start justify-center pt-[20vh] px-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[60vh] animate-slide-up ring-1 ring-black/5"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center px-4 border-b border-slate-100 p-4">
          <span className="text-xl mr-3 text-slate-400">🔍</span>
          <input 
            ref={inputRef}
            type="text" 
            className="w-full text-lg outline-none placeholder:text-slate-400 text-slate-700 bg-transparent font-medium"
            placeholder="Recherche, OS ou Clavier..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <kbd className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-400 rounded-md text-[10px] font-mono border border-slate-200">ESC</kbd>
        </div>

        <ul ref={listRef} className="overflow-y-auto p-2 custom-scrollbar">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, idx) => (
              <li
                key={cmd.id}
                onClick={() => { cmd.action(); onClose(); }}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors
                  ${idx === selectedIndex ? 'bg-indigo-50 text-indigo-900' : 'text-slate-600 hover:bg-slate-50'}
                `}
              >
                <span className="text-xl w-8 text-center">{cmd.icon}</span>
                <div className="flex flex-col">
                  <span className={`text-sm font-bold ${idx === selectedIndex ? 'text-indigo-700' : 'text-slate-700'}`}>
                    {cmd.label}
                  </span>
                  <span className="text-[10px] uppercase font-black tracking-widest opacity-50">
                    {cmd.type === 'action' || cmd.type === 'setting' ? 'Système' : cmd.type}
                  </span>
                </div>
                {/* Active Indicator for Settings */}
                {cmd.type === 'setting' && (
                  (cmd.id.startsWith('os-') && selectedOS === (cmd.id === 'os-win' ? OSType.WINDOWS : cmd.id === 'os-mac' ? OSType.MACOS : OSType.LINUX)) ||
                  (cmd.id.startsWith('layout-') && selectedLayout === (cmd.id === 'layout-qwerty' ? LayoutType.QWERTY : cmd.id === 'layout-azerty' ? LayoutType.AZERTY : cmd.id === 'layout-dvorak' ? LayoutType.DVORAK : LayoutType.COLEMAK))
                ) && (
                   <span className="ml-auto text-xs font-black text-emerald-500 uppercase">Actif</span>
                )}
                
                {idx === selectedIndex && (
                  <span className="ml-auto text-indigo-400 text-sm">↵</span>
                )}
              </li>
            ))
          ) : (
            <div className="p-8 text-center text-slate-400">
              <p>Aucun résultat.</p>
            </div>
          )}
        </ul>
        
        <div className="bg-slate-50 border-t border-slate-100 px-4 py-2 flex justify-between items-center text-[10px] text-slate-400 font-medium">
           <div className="flex gap-4">
             <span>↑↓ pour naviguer</span>
             <span>↵ pour valider</span>
           </div>
           <span>Keyboard Atlas Command</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
