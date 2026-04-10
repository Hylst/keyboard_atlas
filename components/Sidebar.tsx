
import React from 'react';
import { CATEGORIES, SOFTWARES } from '../data/shortcuts';
import { LEARNING_PATHS } from '../data/learningPaths';
import { LearningPath } from '../types';

interface SidebarProps {
  isQuizMode: boolean;
  activePath: LearningPath | null;
  activeSoftware: string | null;
  showFavoritesOnly: boolean;
  favoriteCount: number;
  masteryPercentage: number;
  dueCount?: number;
  onToggleQuiz: () => void;
  onToggleArcade?: () => void; // New prop
  onSelectPath: (path: LearningPath) => void;
  onSelectSoftware: (id: string) => void;
  onToggleFavorites: () => void;
  dailyShortcut: { action: string; software?: string; keys: string[] };
  onResetPreferences: () => void;
  arcadeHighScore?: number; // New prop
}

const Sidebar: React.FC<SidebarProps> = ({
  isQuizMode,
  activePath,
  activeSoftware,
  showFavoritesOnly,
  favoriteCount,
  masteryPercentage,
  dueCount = 0,
  onToggleQuiz,
  onToggleArcade,
  onSelectPath,
  onSelectSoftware,
  onToggleFavorites,
  dailyShortcut,
  onResetPreferences,
  arcadeHighScore = 0
}) => {
  return (
    <aside className="lg:col-span-1 no-print order-2 lg:order-1">
      <div className="lg:sticky lg:top-24 space-y-6">
        
        {/* Actions Principales */}
        <div className="space-y-3">
            {/* Learning Mode */}
            <button
            onClick={onToggleQuiz}
            className={`relative w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all transform active:scale-95 shadow-lg flex items-center justify-center gap-3 ${
                isQuizMode 
                ? 'bg-rose-500 text-white ring-4 ring-rose-100 shadow-rose-200' 
                : 'bg-white text-slate-800 border-2 border-slate-100 hover:border-indigo-200 hover:text-indigo-600'
            }`}
            >
            <span className="text-lg">{isQuizMode ? '✕' : '🎓'}</span>
            <span>{isQuizMode ? 'Quitter' : 'Mode Apprentissage'}</span>
            {!isQuizMode && dueCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] w-6 h-6 flex items-center justify-center rounded-full border-2 border-white animate-bounce">
                {dueCount}
                </span>
            )}
            </button>

            {/* Arcade Mode (New) */}
            <button
            onClick={onToggleArcade}
            className="relative w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all transform active:scale-95 shadow-lg flex items-center justify-center gap-3 bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200"
            >
            <span className="text-lg">🕹️</span>
            <span>Speed Run (60s)</span>
            {arcadeHighScore > 0 && (
                <span className="absolute top-1 right-2 text-[9px] text-indigo-200">
                    HI: {arcadeHighScore}
                </span>
            )}
            </button>
        </div>

        {/* Daily Focus */}
        {!isQuizMode && (
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-[2rem] text-white shadow-xl shadow-slate-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl rotate-12 group-hover:rotate-0 transition-transform duration-500">📅</div>
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 relative z-10">Focus Quotidien</h3>
            <div className="mb-4 relative z-10">
              <h4 className="text-base font-bold leading-tight mb-1">{dailyShortcut.action}</h4>
              {dailyShortcut.software && <span className="text-[9px] text-white/70 font-black uppercase tracking-widest">{dailyShortcut.software}</span>}
            </div>
            <div className="flex flex-wrap gap-1 relative z-10">
              {dailyShortcut.keys.map((k, i) => (
                <span key={i} className="px-2 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-md text-[10px] font-mono shadow-sm">{k}</span>
              ))}
            </div>
          </section>
        )}

        {/* Navigation Blocks - Glass Panel */}
        <section className="glass-panel p-6 rounded-[2rem] space-y-8">
          {/* Parcours */}
          <div>
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span>Parcours</span>
              <span className="h-px flex-grow bg-slate-200"></span>
            </h3>
            <div className="space-y-2">
              {LEARNING_PATHS.map(path => (
                <button
                  key={path.id}
                  onClick={() => onSelectPath(path)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all transform active:scale-[0.98] flex items-center gap-3 border ${
                    activePath?.id === path.id 
                      ? 'bg-indigo-50 text-indigo-700 border-indigo-100 shadow-sm' 
                      : 'bg-transparent text-slate-600 border-transparent hover:bg-slate-50'
                  }`}
                >
                  <span className="text-lg">{path.icon}</span>
                  <span>{path.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Logiciels */}
          <div>
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span>Logiciels</span>
              <span className="h-px flex-grow bg-slate-200"></span>
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {SOFTWARES.map(sw => (
                <button
                  key={sw.id}
                  onClick={() => onSelectSoftware(sw.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl text-[9px] font-black uppercase transition-all transform active:scale-90 border ${
                    activeSoftware === sw.id 
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' 
                      : 'bg-white text-slate-500 border-slate-100 hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <span className="text-lg mb-1">{sw.icon}</span>
                  <span className="text-center leading-tight">{sw.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div>
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span>Progression</span>
              <span className="h-px flex-grow bg-slate-200"></span>
            </h3>
            <div className="space-y-4">
              <button
                onClick={onToggleFavorites}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all transform active:scale-[0.98] border ${
                  showFavoritesOnly 
                    ? 'bg-amber-50 border-amber-200 text-amber-700 shadow-sm' 
                    : 'bg-white border-slate-100 text-slate-600 hover:border-amber-200 hover:text-amber-600'
                }`}
              >
                <span className="flex items-center gap-2">⭐ Mes Favoris</span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-black ${showFavoritesOnly ? 'bg-white text-amber-700' : 'bg-slate-100 text-slate-500'}`}>{favoriteCount}</span>
              </button>
              
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 inner-shadow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Maîtrise Globale</span>
                  <span className="text-xs font-black text-indigo-600">{masteryPercentage}%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-1000 ease-out" 
                    style={{ width: `${masteryPercentage}%` }}
                  ></div>
                </div>
                {dueCount > 0 && (
                   <div className="mt-3 text-[9px] font-medium text-rose-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                      {dueCount} cartes nécessitent une révision
                   </div>
                )}
              </div>

              <button
                onClick={onResetPreferences}
                className="w-full text-[9px] font-bold text-slate-300 hover:text-rose-500 transition-colors py-2"
              >
                Réinitialiser les données
              </button>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;
