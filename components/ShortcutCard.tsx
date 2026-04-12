
import React, { useState } from 'react';
import { Shortcut, OSType, Difficulty } from '../types';
import Key from './Key';

interface ShortcutCardProps {
  shortcut: Shortcut;
  displayOS: OSType;
  isMastered?: boolean;
  isFavorited?: boolean;
  searchQuery?: string;
  onToggleMastery?: (id: string) => void;
  onToggleFavorite?: (id: string) => void;
  onHover?: (keys: string[] | null) => void;
}

const ShortcutCard: React.FC<ShortcutCardProps> = ({ 
  shortcut, 
  displayOS, 
  isMastered, 
  isFavorited,
  searchQuery,
  onToggleMastery, 
  onToggleFavorite,
  onHover 
}) => {
  const [copied, setCopied] = useState(false);
  
  let keysToDisplay = shortcut.keys;
  if (displayOS === OSType.MACOS && shortcut.alternatives) {
    const macAlt = shortcut.alternatives.find(a => a.os === OSType.MACOS);
    if (macAlt) keysToDisplay = macAlt.keys;
  } else if (!shortcut.os.includes(displayOS)) {
    const alt = shortcut.alternatives?.find(a => a.os === displayOS);
    if (alt) keysToDisplay = alt.keys;
  }

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = keysToDisplay.join(' + ');
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert(`Impossible de copier.\n${text}`);
    }
  };

  const getDifficultyColor = (diff: Difficulty) => {
    switch (diff) {
      case Difficulty.BEGINNER: return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case Difficulty.INTERMEDIATE: return 'bg-amber-100 text-amber-700 border-amber-200';
      case Difficulty.ADVANCED: return 'bg-rose-100 text-rose-700 border-rose-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const HighlightedText = ({ text }: { text: string }) => {
    if (!searchQuery || searchQuery.length < 2) return <>{text}</>;
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === searchQuery.toLowerCase() ? 
            <span key={i} className="bg-indigo-400 text-white rounded-sm px-0.5 shadow-sm">{part}</span> : 
            part
        )}
      </>
    );
  };

  return (
    <article 
      className={`
        shortcut-card group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300
        ${isMastered 
          ? 'bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 opacity-80 hover:opacity-100' 
          : 'bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]'}
      `}
      onMouseEnter={() => onHover?.(keysToDisplay)}
      onMouseLeave={() => onHover?.(null)}
    >
      {/* Top Actions */}
      <div className="absolute top-4 right-4 flex gap-2 no-print opacity-0 group-hover:opacity-100 transition-opacity">
         <button 
          onClick={handleCopy}
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 shadow-sm transition-colors"
          title="Copier"
        >
          {copied ? '✓' : '📋'}
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); onToggleFavorite?.(shortcut.id); }}
          className={`
            w-8 h-8 flex items-center justify-center rounded-lg border shadow-sm transition-all
            ${isFavorited ? 'bg-amber-50 border-amber-200 text-amber-500' : 'bg-white border-slate-200 text-slate-300 hover:text-amber-400 hover:border-amber-200'}
          `}
        >
          {isFavorited ? '★' : '☆'}
        </button>
      </div>

      {/* Header */}
      <div className="mb-6 pr-12">
        <div className="flex gap-2 items-center mb-2">
          {shortcut.software && (
            <span className="text-[10px] font-black text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md uppercase tracking-wide">
              <HighlightedText text={shortcut.software} />
            </span>
          )}
          <span className={`text-[9px] font-black px-2 py-0.5 rounded-md border uppercase tracking-wide ${getDifficultyColor(shortcut.difficulty)}`}>
            {shortcut.difficulty}
          </span>
          {isMastered && <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md uppercase">Maîtrisé</span>}
        </div>
        <h3 className={`text-lg font-bold leading-tight transition-colors ${isMastered ? 'text-emerald-900' : 'text-slate-800'}`}>
          <HighlightedText text={shortcut.action} />
        </h3>
        {shortcut.description && (
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">{shortcut.description}</p>
        )}
      </div>

      {/* Keys Display */}
      <div className="flex flex-wrap items-center gap-2 mt-auto">
        {keysToDisplay.map((k, idx) => (
          <React.Fragment key={idx}>
            <Key label={k} size="md" />
            {idx < keysToDisplay.length - 1 && <span className="text-slate-300 font-bold text-xs">+</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Footer Action (Mastery) */}
      <button 
        onClick={(e) => { e.stopPropagation(); onToggleMastery?.(shortcut.id); }}
        className={`
          mt-6 w-full py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all
          ${isMastered 
            ? 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-100' 
            : 'bg-slate-50 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-100 hover:border-slate-800'}
        `}
      >
        {isMastered ? (
          <>Oublier</>
        ) : (
          <>
            <span className="sm:hidden">Maîtriser</span>
            <span className="hidden sm:inline">Marquer comme maîtrisé</span>
          </>
        )}
      </button>
    </article>
  );
};

export default ShortcutCard;
