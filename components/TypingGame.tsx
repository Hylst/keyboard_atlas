
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TYPING_PRESETS, TypingMode, TypingPreset, getRandomText } from '../data/typing';

// ── Types ─────────────────────────────────────────────────────────────────────

interface CharState {
  char: string;
  status: 'idle' | 'correct' | 'wrong' | 'current';
}

interface GameResult {
  wpm: number;
  cpm: number;
  accuracy: number;
  errors: number;
  duration: number;
  errorMap: Record<string, number>; // char → number of times missed
}

interface TypingGameProps {
  onClose: () => void;
  typingHighScore: Record<TypingMode, number>;
  onNewHighScore: (mode: TypingMode, score: number) => void;
}

// ── Constants ─────────────────────────────────────────────────────────────────

const DURATIONS = [30, 60, 120] as const;
type Duration = (typeof DURATIONS)[number];

// ── Helpers ───────────────────────────────────────────────────────────────────

function buildCharStates(text: string): CharState[] {
  return text.split('').map((char, i) => ({
    char,
    status: i === 0 ? 'current' : 'idle',
  }));
}

function calcWPM(correctChars: number, elapsedSeconds: number): number {
  if (elapsedSeconds === 0) return 0;
  return Math.round((correctChars / 5) / (elapsedSeconds / 60));
}

// ── Component ─────────────────────────────────────────────────────────────────

const TypingGame: React.FC<TypingGameProps> = ({ onClose, typingHighScore, onNewHighScore }) => {
  const [phase, setPhase] = useState<'menu' | 'playing' | 'results'>('menu');
  const [mode, setMode] = useState<TypingMode>('prose');
  const [duration, setDuration] = useState<Duration>(60);

  const [chars, setChars] = useState<CharState[]>([]);
  const [cursor, setCursor] = useState(0);
  const [errors, setErrors] = useState(0);
  const [totalTyped, setTotalTyped] = useState(0);
  const [errorMap, setErrorMap] = useState<Record<string, number>>({});
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [result, setResult] = useState<GameResult | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const startedAtRef = useRef<number>(0);
  const correctCharsRef = useRef(0);
  const currentTextRef = useRef('');

  const activePreset = TYPING_PRESETS.find(p => p.id === mode)!;

  // ── Game Lifecycle ─────────────────────────────────────────────────────────

  const startGame = useCallback(() => {
    const text = getRandomText(mode);
    currentTextRef.current = text;
    correctCharsRef.current = 0;
    const initial = buildCharStates(text);
    setChars(initial);
    setCursor(0);
    setErrors(0);
    setTotalTyped(0);
    setErrorMap({});
    setTimeLeft(duration);
    setResult(null);
    startedAtRef.current = Date.now();
    setPhase('playing');
    setTimeout(() => containerRef.current?.focus(), 50);
  }, [mode, duration]);

  const endGame = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    const elapsed = (Date.now() - startedAtRef.current) / 1000;
    const wpm = calcWPM(correctCharsRef.current, elapsed);
    const cpm = Math.round(correctCharsRef.current / (elapsed / 60));
    const accuracy = totalTyped > 0 ? Math.round(((totalTyped - errors) / totalTyped) * 100) : 100;
    const res: GameResult = { wpm, cpm, accuracy, errors, duration: Math.round(elapsed), errorMap };
    setResult(res);
    setPhase('results');
    if (wpm > (typingHighScore[mode] || 0)) {
      onNewHighScore(mode, wpm);
    }
  }, [errors, errorMap, totalTyped, mode, typingHighScore, onNewHighScore, duration]);

  // ── Timer ──────────────────────────────────────────────────────────────────

  useEffect(() => {
    if (phase !== 'playing') return;
    timerRef.current = window.setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { endGame(); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase, endGame]);

  // ── Keyboard Input ─────────────────────────────────────────────────────────

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (phase !== 'playing') return;

    const { key } = e;

    // Ignore modifier-only keys
    if (['Shift', 'Control', 'Alt', 'Meta', 'CapsLock', 'Tab', 'Escape', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(key)) return;

    e.preventDefault();

    // Backspace
    if (key === 'Backspace') {
      if (cursor === 0) return;
      const newCursor = cursor - 1;
      setChars(prev => {
        const next = [...prev];
        next[cursor] = { ...next[cursor], status: cursor < next.length ? 'idle' : 'idle' };
        next[newCursor] = { ...next[newCursor], status: 'current' };
        return next;
      });
      setCursor(newCursor);
      return;
    }

    const text = currentTextRef.current;
    if (cursor >= text.length) return;

    const expected = text[cursor];
    const isCorrect = key === expected;

    setTotalTyped(t => t + 1);

    if (isCorrect) {
      correctCharsRef.current += 1;
    } else {
      setErrors(err => err + 1);
      setErrorMap(prev => ({ ...prev, [expected]: (prev[expected] || 0) + 1 }));
    }

    const newCursor = cursor + 1;
    const finished = newCursor >= text.length;

    setChars(prev => {
      const next = [...prev];
      next[cursor] = { ...next[cursor], status: isCorrect ? 'correct' : 'wrong' };
      if (!finished && next[newCursor]) {
        next[newCursor] = { ...next[newCursor], status: 'current' };
      }
      return next;
    });

    if (finished) { endGame(); return; }
    setCursor(newCursor);
  }, [phase, cursor, endGame]);

  // ── Scroll current char into view ─────────────────────────────────────────

  const textDisplayRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!textDisplayRef.current) return;
    const current = textDisplayRef.current.querySelector('[data-current="true"]') as HTMLElement | null;
    current?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }, [cursor]);

  // ── Renders ────────────────────────────────────────────────────────────────

  const timerColor = timeLeft <= 10 ? 'text-rose-500' : timeLeft <= 20 ? 'text-amber-500' : 'text-slate-700';

  const topErrors = (Object.entries(result?.errorMap || {}) as [string, number][])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12);

  // ── MENU ──────────────────────────────────────────────────────────────────

  if (phase === 'menu') {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 gap-8 animate-fade-in">
        {/* Header */}
        <div className="text-center">
          <div className="text-5xl mb-3">⌨️</div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Typing Speed Game</h2>
          <p className="text-slate-500 mt-1 text-sm">Entraîne-toi, mesure ta progression, cible tes lacunes.</p>
        </div>

        {/* Mode selector */}
        <div className="w-full max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3 text-center">Choix du mode</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {TYPING_PRESETS.map(preset => (
              <button
                key={preset.id}
                onClick={() => setMode(preset.id)}
                className={`p-5 rounded-2xl border-2 text-left transition-all ${
                  mode === preset.id
                    ? `${preset.accentColor} shadow-md scale-[1.02]`
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="text-3xl mb-2">{preset.icon}</div>
                <div className={`font-black text-base ${mode === preset.id ? preset.textColor : 'text-slate-800'}`}>{preset.label}</div>
                <div className="text-xs text-slate-500 mt-1 leading-snug">{preset.description}</div>
                {typingHighScore[preset.id] > 0 && (
                  <div className={`text-[10px] font-bold mt-2 ${preset.textColor}`}>
                    🏆 Record : {typingHighScore[preset.id]} MPM
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Duration selector */}
        <div className="w-full max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3 text-center">Durée</p>
          <div className="flex justify-center gap-3">
            {DURATIONS.map(d => (
              <button
                key={d}
                onClick={() => setDuration(d)}
                className={`w-20 py-2.5 rounded-xl text-sm font-bold border-2 transition-all ${
                  duration === d
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
                }`}
              >
                {d}s
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={startGame}
            className={`px-10 py-4 rounded-2xl text-white font-black text-base shadow-xl bg-gradient-to-r ${activePreset.color} hover:scale-105 transition-transform active:scale-95`}
          >
            {activePreset.icon} Lancer — {duration}s
          </button>
          <button
            onClick={onClose}
            className="px-6 py-4 rounded-2xl text-slate-500 bg-slate-100 hover:bg-slate-200 font-bold text-sm transition-colors"
          >
            ✕ Fermer
          </button>
        </div>
      </div>
    );
  }

  // ── PLAYING ──────────────────────────────────────────────────────────────

  if (phase === 'playing') {
    const progress = cursor / Math.max(1, chars.length);
    const elapsed = (Date.now() - startedAtRef.current) / 1000;
    const liveWpm = calcWPM(correctCharsRef.current, elapsed);
    const liveAcc = totalTyped > 0 ? Math.round(((totalTyped - errors) / totalTyped) * 100) : 100;

    return (
      <div
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="outline-none min-h-[70vh] flex flex-col p-6 gap-5 animate-fade-in"
        aria-label="Zone de frappe — tapez le texte affiché"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          {/* Mode badge */}
          <span className={`text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full border ${activePreset.accentColor} ${activePreset.textColor}`}>
            {activePreset.icon} {activePreset.label}
          </span>

          {/* Live stats */}
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-widest text-slate-400">MPM</div>
              <div className="text-xl font-black text-slate-800">{liveWpm}</div>
            </div>
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-widest text-slate-400">Préc.</div>
              <div className={`text-xl font-black ${liveAcc < 85 ? 'text-rose-500' : 'text-slate-800'}`}>{liveAcc}%</div>
            </div>
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-widest text-slate-400">Erreurs</div>
              <div className={`text-xl font-black ${errors > 0 ? 'text-rose-500' : 'text-emerald-500'}`}>{errors}</div>
            </div>
          </div>

          {/* Timer */}
          <div className={`text-4xl font-black tabular-nums ${timerColor}`}>
            {timeLeft}s
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${activePreset.color} transition-all duration-150`}
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Text display */}
        <div
          ref={textDisplayRef}
          className="flex-1 p-6 rounded-2xl bg-slate-900 text-slate-300 font-mono text-lg leading-relaxed overflow-y-auto select-none"
          style={{ minHeight: '260px', maxHeight: '340px' }}
        >
          {chars.map((c, i) => {
            const isCurrent = c.status === 'current';
            return (
              <span
                key={i}
                data-current={isCurrent}
                className={
                  c.status === 'correct' ? 'text-emerald-400' :
                  c.status === 'wrong'   ? 'text-rose-400 bg-rose-900/50 rounded' :
                  c.status === 'current' ? 'text-white bg-indigo-500/80 rounded px-0.5 animate-pulse' :
                  'text-slate-500'
                }
              >
                {c.char === '\n' ? (
                  <>
                    {c.status === 'current' ? <span className="text-indigo-400">↵</span> : ''}
                    {'\n'}
                  </>
                ) : c.char === ' ' && c.status === 'wrong' ? (
                  <span className="bg-rose-900/50 rounded">·</span>
                ) : c.char}
              </span>
            );
          })}
        </div>

        {/* Hint */}
        <div className="text-center text-xs text-slate-400">
          Commence à taper ↑ · Backspace pour corriger
        </div>

        {/* Escape */}
        <button
          onClick={endGame}
          className="mx-auto text-xs text-slate-400 hover:text-slate-600 underline"
        >
          Terminer maintenant
        </button>
      </div>
    );
  }

  // ── RESULTS ──────────────────────────────────────────────────────────────

  const isNewRecord = result && result.wpm > 0 && result.wpm >= (typingHighScore[mode] || 0);

  return (
    <div className="min-h-[70vh] flex flex-col gap-6 p-6 animate-fade-in">
      {/* Header result */}
      <div className="text-center">
        {isNewRecord && (
          <div className="text-xs font-black uppercase tracking-widest text-amber-500 mb-1 animate-bounce">
            🏆 Nouveau Record !
          </div>
        )}
        <h2 className="text-3xl font-black text-slate-900">Résultats</h2>
        <div className={`text-xs uppercase tracking-widest font-bold mt-1 ${activePreset.textColor}`}>
          {activePreset.icon} Mode {activePreset.label} · {result?.duration}s
        </div>
      </div>

      {/* Score cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Mots/min', value: result?.wpm, unit: 'MPM', icon: '⚡', color: 'text-indigo-600' },
          { label: 'Chars/min', value: result?.cpm, unit: 'CPM', icon: '🔤', color: 'text-violet-600' },
          { label: 'Précision', value: `${result?.accuracy}`, unit: '%', icon: '🎯', color: result && result.accuracy >= 95 ? 'text-emerald-600' : 'text-amber-600' },
          { label: 'Erreurs', value: result?.errors, unit: 'fautes', icon: '✗', color: result && result.errors === 0 ? 'text-emerald-600' : 'text-rose-600' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 text-center">
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className={`text-3xl font-black ${s.color}`}>{s.value}</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">{s.unit}</div>
            <div className="text-[10px] text-slate-400">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Error heatmap */}
      {topErrors.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-rose-500 font-black text-sm">🔥 Caractères les plus ratés</span>
            <span className="text-xs text-slate-400">— concentre tes prochaines sessions ici</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {(topErrors as [string, number][]).map(([char, count]) => {
              const maxCount = (topErrors[0] as [string, number])[1];
              const intensity = count / maxCount;
              return (
                <div
                  key={char}
                  className="flex flex-col items-center p-2.5 rounded-xl border-2 min-w-[3rem]"
                  style={{
                    borderColor: `rgba(239,68,68,${0.2 + intensity * 0.8})`,
                    backgroundColor: `rgba(239,68,68,${0.04 + intensity * 0.15})`,
                  }}
                >
                  <span className="font-mono font-black text-xl text-rose-700">
                    {char === ' ' ? '·' : char === '\n' ? '↵' : char}
                  </span>
                  <span className="text-[10px] font-bold text-rose-500 mt-0.5">×{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Perfect run */}
      {topErrors.length === 0 && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center">
          <div className="text-3xl">✨</div>
          <div className="font-black text-emerald-700 mt-1">Frappe parfaite !</div>
          <div className="text-xs text-emerald-600 mt-0.5">Aucune erreur commise</div>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap justify-center gap-3 mt-auto">
        <button
          onClick={startGame}
          className={`px-8 py-3.5 rounded-2xl text-white font-black shadow-lg bg-gradient-to-r ${activePreset.color} hover:scale-105 transition-transform active:scale-95`}
        >
          {activePreset.icon} Rejouer
        </button>
        <button
          onClick={() => setPhase('menu')}
          className="px-6 py-3.5 rounded-2xl bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-colors"
        >
          Changer de mode
        </button>
        <button
          onClick={onClose}
          className="px-6 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-500 font-bold hover:bg-slate-50 transition-colors"
        >
          ✕ Fermer
        </button>
      </div>
    </div>
  );
};

export default TypingGame;
