
import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { CATEGORIES } from './data/shortcuts';
import { OSType, LayoutType } from './types';
import ShortcutCard from './components/ShortcutCard';
import VirtualKeyboard from './components/VirtualKeyboard';
import Sidebar from './components/Sidebar';
import Quiz from './components/Quiz';
import SpeedRun from './components/SpeedRun';
import TypingGame from './components/TypingGame';
import MacGlossary from './components/MacGlossary';
import CommandPalette from './components/CommandPalette';
import { useAtlas } from './hooks/useAtlas';
import { LEARNING_PATHS } from './data/learningPaths';

// Lazy-loaded modals (saves ~50kB from initial bundle)
const LegalModal = lazy(() => import('./components/LegalModal'));
const InfoModal  = lazy(() => import('./components/InfoModal'));
const ErgoModal  = lazy(() => import('./components/ErgoModal'));
const Onboarding = lazy(() => import('./components/Onboarding'));

const ModalFallback = () => (
  <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center">
    <div className="w-12 h-12 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin" />
  </div>
);

const App: React.FC = () => {
  const {
    selectedOS, setSelectedOS,
    keyboardLayout, setKeyboardLayout,
    searchQuery, setSearchQuery,
    activeCategory, setActiveCategory,
    activeSoftware, setActiveSoftware,
    activePath, setActivePath,
    showFavoritesOnly, setShowFavoritesOnly,
    isQuizMode, setIsQuizMode,
    isArcadeMode, setIsArcadeMode,
    isTypingMode,
    toggleQuiz, toggleArcade, toggleTyping,
    hoveredKeys, setHoveredKeys,
    masteredIds, favoriteIds,
    toggleMastery, toggleFavorite, clearFilters,
    filteredShortcuts, currentCategoryName, dailyShortcut,
    totalShortcutsCount,
    resetPreferences,
    exportData, importData,
    progress, submitQuizResult, dueIds,
    arcadeHighScore, updateArcadeHighScore,
    typingHighScore, updateTypingHighScore,
    hasSeenOnboarding, setHasSeenOnboarding
  } = useAtlas();

  const [showMacGlossary, setShowMacGlossary] = useState(false);
  const [showLegalModal, setShowLegalModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showErgoModal, setShowErgoModal] = useState(false);
  const [isCmdPaletteOpen, setIsCmdPaletteOpen] = useState(false);
  const [isLayoutPickerOpen, setIsLayoutPickerOpen] = useState(false);
  const layoutPickerRef = React.useRef<HTMLDivElement>(null);

  // Dark Mode
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('dark_mode');
    return saved === 'true';
  });
  useEffect(() => {
    localStorage.setItem('dark_mode', String(isDark));
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  // Close layout picker on outside click
  React.useEffect(() => {
    if (!isLayoutPickerOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (layoutPickerRef.current && !layoutPickerRef.current.contains(e.target as Node)) {
        setIsLayoutPickerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLayoutPickerOpen]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Global Keyboard Shortcuts for the App itself
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Command Palette (Ctrl+K or Cmd+K)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCmdPaletteOpen(true);
        return;
      }

      // Ignore if user is typing in an input (except for Escape)
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        if (e.key === 'Escape') {
           if (!isCmdPaletteOpen) {
              e.preventDefault();
              searchInputRef.current?.blur();
           }
        }
        return;
      }

      // '/' to focus search
      if (e.key === '/') {
        e.preventDefault();
        searchInputRef.current?.focus();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // 'Escape' to clear filters or close modals
      if (e.key === 'Escape') {
        if (showMacGlossary) {
          setShowMacGlossary(false);
          return;
        }
        if (showLegalModal) {
          setShowLegalModal(false);
          return;
        }
        if (showInfoModal) {
          setShowInfoModal(false);
          return;
        }
        if (showErgoModal) {
          setShowErgoModal(false);
          return;
        }
        if (isCmdPaletteOpen) {
          setIsCmdPaletteOpen(false);
          return;
        }
        if (activeCategory || activeSoftware || activePath || showFavoritesOnly || searchQuery) {
          clearFilters();
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [activeCategory, activeSoftware, activePath, showFavoritesOnly, searchQuery, clearFilters, showMacGlossary, showLegalModal, showInfoModal, showErgoModal, isCmdPaletteOpen]);

  const handleVirtualKeyClick = (key: string) => {
    let searchTerm = key;
    if (key === 'Cmd' || key === '⌘') searchTerm = 'Cmd';
    if (key === 'Ctrl' || key === '⌃') searchTerm = 'Ctrl';
    if (key === 'Alt' || key === '⌥') searchTerm = 'Alt';
    if (key === 'Shift' || key === '⇧') searchTerm = 'Shift';
    
    if (searchQuery && !searchQuery.includes(searchTerm)) {
      setSearchQuery((prev) => `${prev} ${searchTerm}`.trim());
    } else {
      setSearchQuery(searchTerm);
    }
    
    window.scrollTo({ top: window.innerHeight * 0.4, behavior: 'smooth' });
    searchInputRef.current?.focus();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Suspense fallback={<ModalFallback />}>
        {!hasSeenOnboarding && (
          <Onboarding onComplete={() => setHasSeenOnboarding(true)} />
        )}
      </Suspense>
      {showMacGlossary && <MacGlossary onClose={() => setShowMacGlossary(false)} />}
      <Suspense fallback={showLegalModal ? <ModalFallback /> : null}>
        {showLegalModal && <LegalModal onClose={() => setShowLegalModal(false)} />}
      </Suspense>
      <Suspense fallback={showInfoModal ? <ModalFallback /> : null}>
        {showInfoModal && <InfoModal onClose={() => setShowInfoModal(false)} />}
      </Suspense>
      <Suspense fallback={showErgoModal ? <ModalFallback /> : null}>
        {showErgoModal && <ErgoModal onClose={() => setShowErgoModal(false)} />}
      </Suspense>
      
      <CommandPalette 
        isOpen={isCmdPaletteOpen}
        onClose={() => setIsCmdPaletteOpen(false)}
        onSelectCategory={(id) => { setActiveCategory(id); setActiveSoftware(null); setActivePath(null); setShowFavoritesOnly(false); }}
        onSelectSoftware={(id) => { setActiveSoftware(id); setActiveCategory(null); setActivePath(null); setShowFavoritesOnly(false); }}
        onSelectPath={(id) => { 
          const path = LEARNING_PATHS.find(p => p.id === id);
          if (path) { setActivePath(path); setActiveCategory(null); setActiveSoftware(null); setShowFavoritesOnly(false); }
        }}
        onSelectOS={setSelectedOS}
        onSelectLayout={setKeyboardLayout}
        onToggleQuiz={toggleQuiz}
        selectedOS={selectedOS}
        selectedLayout={keyboardLayout}
      />

      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg transform rotate-3 cursor-pointer hover:rotate-0 transition-all" 
                onClick={clearFilters}
              >
                ⌨️
              </div>
              <h1 className="text-xl font-black tracking-tight text-slate-900 leading-none">
                Keyboard <span className="text-indigo-600">Atlas</span>
              </h1>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div 
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-medium text-slate-500 cursor-pointer hover:bg-slate-200 transition-colors border border-transparent hover:border-slate-300"
                onClick={() => setIsCmdPaletteOpen(true)}
              >
                 <span>Rechercher</span>
                 <kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-300 font-mono text-[10px] text-slate-400">Ctrl K</kbd>
              </div>

              <div className="h-6 w-px bg-slate-200 mx-2"></div>

              <button 
                onClick={() => window.print()}
                className={`flex items-center gap-2 text-[10px] font-black uppercase transition-colors px-4 py-2 rounded-xl border ${
                  showFavoritesOnly 
                    ? 'bg-amber-50 text-amber-600 border-amber-200 hover:bg-amber-100' 
                    : 'bg-slate-50 text-slate-400 border-transparent hover:text-indigo-600'
                }`}
              >
                🖨️ {showFavoritesOnly ? 'PDF Mes Favoris' : 'PDF Cheat Sheet'}
              </button>
              
              <div className="relative" ref={layoutPickerRef}>
                 <button
                   onClick={() => setIsLayoutPickerOpen(p => !p)}
                   className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors select-none"
                   aria-haspopup="listbox"
                   aria-expanded={isLayoutPickerOpen}
                   title="Changer de disposition de clavier"
                 >
                   {keyboardLayout} <span className="text-slate-400 text-[10px]">▾</span>
                 </button>
                 {isLayoutPickerOpen && (
                   <div className="absolute top-full right-0 mt-1 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 w-36 animate-fade-in">
                     {[LayoutType.AZERTY, LayoutType.QWERTY, LayoutType.DVORAK, LayoutType.COLEMAK].map(layout => (
                       <button
                         key={layout}
                         onClick={() => { setKeyboardLayout(layout); setIsLayoutPickerOpen(false); }}
                         className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                           keyboardLayout === layout ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-50'
                         }`}
                       >
                         {layout}
                       </button>
                     ))}
                   </div>
                 )}
              </div>

              <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
                {[OSType.WINDOWS, OSType.MACOS, OSType.LINUX].map(os => (
                  <button
                    key={os}
                    onClick={() => setSelectedOS(os)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedOS === os ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {os}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => setShowMacGlossary(true)}
                className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-bold hover:bg-indigo-100 transition-colors"
                title="Glossaire Mac"
              >
                ?
              </button>
              <button
                onClick={() => setIsDark(d => !d)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                title={isDark ? 'Mode Clair' : 'Mode Sombre'}
                aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
              >
                {isDark ? '☀️' : '🌙'}
              </button>
              <button 
                onClick={() => setShowErgoModal(true)}
                className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center font-bold hover:bg-emerald-100 transition-colors"
                title="Ergonomie & Santé"
              >
                🧘‍♀️
              </button>
              <button 
                onClick={() => setShowInfoModal(true)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 font-serif font-bold italic hover:bg-slate-200 transition-colors"
                title="À Propos"
              >
                i
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {!isQuizMode && !isArcadeMode && !isTypingMode && (
          <section className="hidden md:block mb-12 no-print">
            <VirtualKeyboard 
              activeKeys={hoveredKeys || []} 
              os={selectedOS} 
              layout={keyboardLayout} 
              onKeyClick={handleVirtualKeyClick}
            />
          </section>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          <Sidebar 
            isQuizMode={isQuizMode}
            isTypingMode={isTypingMode}
            activePath={activePath}
            activeSoftware={activeSoftware}
            showFavoritesOnly={showFavoritesOnly}
            favoriteCount={favoriteIds.length}
            masteryPercentage={totalShortcutsCount > 0 ? Math.round((masteredIds.length / totalShortcutsCount) * 100) : 0}
            onToggleQuiz={toggleQuiz}
            onToggleArcade={toggleArcade}
            onToggleTyping={toggleTyping}
            onReviewDueCards={() => { clearFilters(); toggleQuiz(); }}
            onExportData={exportData}
            onImportData={importData}
            onSelectPath={(path) => { setActivePath(path); setActiveCategory(null); setActiveSoftware(null); setShowFavoritesOnly(false); }}
            onSelectSoftware={(id) => { setActiveSoftware(id); setActiveCategory(null); setActivePath(null); setShowFavoritesOnly(false); }}
            onToggleFavorites={() => { setShowFavoritesOnly(!showFavoritesOnly); setActivePath(null); setActiveCategory(null); setActiveSoftware(null); }}
            dailyShortcut={dailyShortcut}
            onResetPreferences={resetPreferences}
            dueCount={dueIds.length}
            arcadeHighScore={arcadeHighScore}
            typingHighScore={typingHighScore}
          />

          <div className="lg:col-span-3 order-1 lg:order-2">
            {isQuizMode ? (
              <Quiz 
                shortcuts={filteredShortcuts} 
                progress={progress}
                os={selectedOS} 
                onClose={() => setIsQuizMode(false)}
                onResult={submitQuizResult}
              />
            ) : isArcadeMode ? (
              <SpeedRun 
                shortcuts={filteredShortcuts}
                os={selectedOS}
                onClose={() => setIsArcadeMode(false)}
                highScore={arcadeHighScore}
                onNewScore={updateArcadeHighScore}
              />
            ) : isTypingMode ? (
              <TypingGame
                onClose={() => toggleTyping()}
                typingHighScore={typingHighScore}
                onNewHighScore={updateTypingHighScore}
              />
            ) : (
              <>
                <div className="relative mb-8 no-print">
                  <span className="absolute inset-y-0 left-5 flex items-center text-slate-400 text-xl">🔍</span>
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Action, touche (ex: Ctrl) ou logiciel..."
                    className="w-full pl-14 pr-6 py-5 rounded-[2.5rem] bg-white border-2 border-transparent shadow-xl shadow-indigo-100/10 focus:border-indigo-500 outline-none transition-all text-slate-800 font-medium"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {(searchQuery || activeCategory || activeSoftware || activePath || showFavoritesOnly) ? (
                    <button 
                      onClick={clearFilters}
                      className="absolute inset-y-0 right-5 text-[10px] font-black uppercase text-indigo-600"
                    >
                      Effacer (Esc)
                    </button>
                  ) : (
                     <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                       <kbd className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-400 rounded-md text-[10px] font-mono border border-slate-200">/</kbd>
                     </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-8 no-print">
                  <button
                    onClick={() => { setActiveCategory(null); setActiveSoftware(null); setActivePath(null); setShowFavoritesOnly(false); }}
                    className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                      activeCategory === null && activeSoftware === null && activePath === null && !showFavoritesOnly ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-slate-400 shadow-sm'
                    }`}
                  >
                    Tout
                  </button>
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => { setActiveCategory(cat.id); setActiveSoftware(null); setActivePath(null); setShowFavoritesOnly(false); }}
                      className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                        activeCategory === cat.id ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-slate-400 shadow-sm border border-slate-100'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>

                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3 mb-8 print-header">
                  {currentCategoryName}
                  <span className="text-[10px] bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full no-print">{filteredShortcuts.length}</span>
                </h2>

                {filteredShortcuts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredShortcuts.map(shortcut => (
                      <ShortcutCard 
                        key={shortcut.id} 
                        shortcut={shortcut} 
                        displayOS={selectedOS}
                        isMastered={masteredIds.includes(shortcut.id)}
                        isFavorited={favoriteIds.includes(shortcut.id)}
                        searchQuery={searchQuery}
                        onToggleMastery={toggleMastery}
                        onToggleFavorite={toggleFavorite}
                        onHover={(keys) => setHoveredKeys(keys)}
                      />
                    ))}
                  </div>
                ) : showFavoritesOnly ? (
                  <div className="bg-white rounded-[3rem] border-4 border-dashed border-rose-100 py-32 text-center">
                    <div className="text-6xl mb-6">❤️</div>
                    <h4 className="text-xl font-black text-slate-700">Pas encore de favoris</h4>
                    <p className="text-slate-400 mt-2 max-w-xs mx-auto">
                      Sur chaque fiche, clique sur <span className="text-rose-500 font-bold">♡</span> pour sauvegarder tes raccourcis préférés ici.
                    </p>
                    <button
                      onClick={clearFilters}
                      className="mt-6 px-6 py-2 rounded-full bg-rose-50 text-rose-600 font-bold text-sm border border-rose-100 hover:bg-rose-100 transition-colors"
                    >
                      Explorer la bibliothèque →
                    </button>
                  </div>
                ) : (
                  <div className="bg-white rounded-[3rem] border-4 border-dashed border-slate-100 py-32 text-center px-4">
                    <div className="text-6xl mb-6 opacity-20">🔎</div>
                    <h4 className="text-xl font-black text-slate-500">Aucun raccourci ne correspond à ces critères</h4>
                    <p className="text-slate-400 mt-2 mb-6">Essayez de modifier vos filtres ou de cliquer sur les touches du clavier virtuel.</p>
                    <button
                      onClick={clearFilters}
                      className="px-6 py-2 rounded-full bg-slate-100 text-slate-600 font-bold text-sm border border-slate-200 hover:bg-slate-200 transition-colors shadow-sm"
                    >
                      Réinitialiser les filtres
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-12 mt-20 no-print text-center">
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] mb-2">Keyboard Atlas — Refactored Edition</p>
        <p className="text-slate-300 text-[9px] font-medium mb-4">
           Application créée par <span className="text-slate-500 font-bold">Geoffroy Streit (Hylst)</span> avec l'assistance d'une IA • geoffroy.streit@ik.me
        </p>
        
        {/* Liens légaux */}
        <div className="flex justify-center gap-4 text-[9px] text-slate-400">
           <button onClick={() => setShowLegalModal(true)} className="hover:text-indigo-600 transition-colors">Mentions Légales & Confidentialité</button>
           <span>•</span>
           <a href="https://github.com/Hylst/keyboard-atlas" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">Code Source (GitHub)</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
