
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Shortcut, OSType, UserProgress } from '../types';
import Confetti from './Confetti';
import { useKeystroke } from '../hooks/useKeystroke';
import { playSound } from '../utils/audio';

interface QuizProps {
  shortcuts: Shortcut[]; // Liste filtrée (contexte actuel)
  progress: Record<string, UserProgress>; // Données SRS
  os: OSType;
  onClose: () => void;
  onResult: (id: string, success: boolean) => void;
}

const TIMER_SECONDS = 20;

const Quiz: React.FC<QuizProps> = ({ shortcuts, progress, os, onClose, onResult }) => {
  const [sessionKey, setSessionKey] = useState(0); 

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | 'timeout' | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const timerRef = useRef<number | null>(null);

  // Input Hook
  const { pressedKeys } = useKeystroke(!quizFinished && !feedback);

  // Audio Init on mount
  useEffect(() => {
    playSound('pop');
  }, []);

  // Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // SMART SELECTION ALGORITHM
  // Se déclenche uniquement au changement de sessionKey ou si shortcuts change radicalement
  const questions = useMemo(() => {
    const validShortcuts = shortcuts.filter(s => s.os.includes(os) || s.alternatives?.some(a => a.os === os));
    
    if (validShortcuts.length === 0) return [];

    const now = Date.now();
    
    // 1. Priorité absolue : Cartes "Dues" (Level < 5 et NextReview < Now)
    const due = validShortcuts.filter(s => {
      const p = progress[s.id];
      return p && p.level < 5 && p.nextReview <= now;
    });

    // 2. Secondaire : Cartes "Nouvelles" (Jamais vues ou Level 0 sans date future)
    const newCards = validShortcuts.filter(s => !progress[s.id] || (progress[s.id].level === 0 && progress[s.id].nextReview <= now));

    // 3. Tertiaire : Cartes "En cours" (Level 1-4, pas encore dues mais proches)
    const learning = validShortcuts.filter(s => {
      const p = progress[s.id];
      return p && p.level > 0 && p.level < 5 && p.nextReview > now;
    });

    // 4. Remplissage : Cartes "Maîtrisées" (Level 5) pour maintenir la forme
    const mastered = validShortcuts.filter(s => progress[s.id]?.level >= 5);

    // Construction du deck de 5 cartes
    let deck: Shortcut[] = [];

    // On prend tout ce qui est dû (max 3)
    deck = [...deck, ...due.sort(() => 0.5 - Math.random()).slice(0, 3)];

    // Si on a de la place, on ajoute des nouvelles (max 2)
    if (deck.length < 5) {
      deck = [...deck, ...newCards.sort(() => 0.5 - Math.random()).slice(0, 5 - deck.length)];
    }

    // Si encore de la place, on prend des "Learning"
    if (deck.length < 5) {
      deck = [...deck, ...learning.sort(() => 0.5 - Math.random()).slice(0, 5 - deck.length)];
    }

    // Enfin, mastered ou random pur si vraiment vide
    if (deck.length < 5) {
      const remaining = validShortcuts.filter(s => !deck.includes(s));
      deck = [...deck, ...remaining.sort(() => 0.5 - Math.random()).slice(0, 5 - deck.length)];
    }
    
    return deck;
  }, [shortcuts, os, progress, sessionKey]);

  const currentQuestion = questions[currentQuestionIdx];

  const getTargetKeys = (shortcut: Shortcut) => {
    const alt = shortcut.alternatives?.find(a => a.os === os);
    let keys = alt ? alt.keys : shortcut.keys;
    return keys.map(k => {
        if (k === 'Cmd' || k === 'Command') return 'Cmd';
        if (k === 'Win' || k === 'Windows') return 'Cmd';
        if (k === 'Control') return 'Ctrl';
        if (k === 'Option') return 'Alt';
        if (k === 'Escape') return 'Esc';
        return k;
    });
  };

  const targetKeys = useMemo(() => 
    currentQuestion ? getTargetKeys(currentQuestion) : [],
  [currentQuestion, os]);

  useEffect(() => {
    if (feedback || !currentQuestion) return;
    const userKeys = Array.from(pressedKeys);
    const isMatch = targetKeys.every(k => userKeys.includes(k)) && userKeys.length === targetKeys.length;

    if (isMatch) {
      handleSuccess();
    }
  }, [pressedKeys, targetKeys, feedback, currentQuestion]);

  const handleSuccess = () => {
    playSound('success');
    setFeedback('correct');
    setScore(s => s + 1);
    const newStreak = streak + 1;
    setStreak(newStreak);
    if (newStreak > maxStreak) setMaxStreak(newStreak);
    
    onResult(currentQuestion.id, true); // SRS Update

    setTimeout(() => {
      nextQuestion();
    }, 800);
  };

  const handleSkip = () => {
    if (feedback) return;
    playSound('error');
    setFeedback('wrong');
    setStreak(0);
    setShowSolution(true);
    
    onResult(currentQuestion.id, false); // SRS Update

    setTimeout(() => {
      nextQuestion();
    }, 2500); // Plus long pour lire la solution
  };

  const nextQuestion = () => {
    setFeedback(null);
    setShowSolution(false);
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setTimeLeft(TIMER_SECONDS);
    } else {
      setQuizFinished(true);
      playSound('success');
    }
  };

  // Timer Logic
  useEffect(() => {
    if (!feedback && !quizFinished && questions.length > 0) {
      if (timeLeft > 0) {
        timerRef.current = window.setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      } else {
        handleSkip();
      }
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [timeLeft, feedback, quizFinished, questions.length]);

  const restartQuiz = () => {
    setSessionKey(prev => prev + 1);
    setCurrentQuestionIdx(0);
    setScore(0);
    setStreak(0);
    setQuizFinished(false);
    setFeedback(null);
    setTimeLeft(TIMER_SECONDS);
  };

  if (questions.length < 1) return (
     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fade-in">
        <div className="bg-white p-8 rounded-2xl text-center">
           <h3 className="text-xl font-bold mb-4">Aucune carte à réviser !</h3>
           <p className="mb-6 text-slate-500">Essayez de changer les filtres ou revenez plus tard.</p>
           <button onClick={onClose} className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold">Fermer</button>
        </div>
     </div>
  );

  if (quizFinished) return (
    <>
      {score > questions.length / 2 && <Confetti />}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
        <div className="bg-white p-12 rounded-[3rem] text-center border-4 border-indigo-100 shadow-2xl animate-slide-up max-w-lg w-full">
          <div className="text-6xl mb-6 animate-pop">
            {score === questions.length ? '🏆' : score >= questions.length / 2 ? '👏' : '🧠'}
          </div>
          <h3 className="text-3xl font-black text-slate-900 mb-2">Session SRS Terminée</h3>
          <p className="text-slate-500 text-lg mb-6">Score : <span className="text-indigo-600 font-black">{score} / {questions.length}</span></p>
          <p className="text-xs text-slate-400 mb-8 uppercase tracking-widest">Vos intervalles de révision ont été mis à jour.</p>
          
          <div className="flex flex-col gap-3">
             <button onClick={restartQuiz} className="bg-slate-100 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-colors">
               Continuer à réviser
             </button>
             <button onClick={onClose} className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200">
               Terminer
             </button>
          </div>
        </div>
      </div>
    </>
  );

  const cardProgress = progress[currentQuestion.id];
  const cardLevel = cardProgress?.level || 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fade-in">
      <div className={`
        bg-white w-full max-w-2xl p-8 sm:p-12 rounded-[3rem] shadow-2xl border-4 transition-all duration-300 relative overflow-hidden
        ${feedback === 'correct' ? 'border-emerald-400 scale-105' : feedback === 'wrong' ? 'border-rose-400 animate-shake' : 'border-slate-100'}
      `}>
        
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 h-2 bg-slate-100 w-full">
          <div className="h-full bg-indigo-600 transition-all duration-500" style={{ width: `${((currentQuestionIdx) / questions.length) * 100}%` }}></div>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Carte {currentQuestionIdx + 1} / {questions.length}</span>
            <div className="flex gap-1">
               {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < cardLevel ? 'bg-emerald-400' : 'bg-slate-200'}`}></div>
               ))}
            </div>
          </div>
          <div className="text-xs font-mono font-bold text-slate-300">{timeLeft}s</div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-rose-100 hover:text-rose-500 font-bold transition-colors">✕</button>
        </div>

        {/* Question */}
        <div className="text-center mb-12">
          <div className="mb-4 flex justify-center">
            {currentQuestion.software ? (
               <span className="text-[10px] font-black text-white bg-slate-900 px-3 py-1 rounded-full uppercase tracking-widest">
                 {currentQuestion.software}
               </span>
            ) : (
               <span className="text-[10px] font-black text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-widest">
                 Général
               </span>
            )}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-4">
            {currentQuestion.action}
          </h2>
          <p className="text-slate-400 font-medium">
            {cardLevel === 0 ? "Nouvelle carte ! Tapez la combinaison." : "Révision : Tapez la combinaison."}
          </p>
        </div>

        {/* User Input Visualizer */}
        <div className="min-h-[120px] flex flex-col items-center justify-center gap-6">
           {showSolution ? (
             <div className="animate-fade-in flex flex-col items-center">
               <p className="text-rose-500 font-black uppercase tracking-widest text-xs mb-2">Solution</p>
               <div className="flex gap-2">
                 {targetKeys.map((k, i) => (
                   <kbd key={i} className="bg-slate-800 text-white px-3 py-2 rounded-lg font-mono font-bold text-lg shadow-lg border-b-4 border-black">{k}</kbd>
                 ))}
               </div>
             </div>
           ) : (
             <div className="flex flex-wrap justify-center gap-2">
               {Array.from(pressedKeys).length > 0 ? (
                 Array.from(pressedKeys).map((k, i) => (
                   <kbd key={i} className="bg-indigo-600 text-white px-4 py-3 rounded-xl font-mono font-bold text-2xl shadow-lg shadow-indigo-200 animate-pop border-b-4 border-indigo-800 transition-all">
                     {k === 'Cmd' ? (os === OSType.MACOS ? '⌘' : (os === OSType.LINUX ? '❖' : '⊞')) : k}
                   </kbd>
                 ))
               ) : (
                 <div className="text-slate-200 font-black text-5xl opacity-20 select-none animate-pulse">
                   _ _ _
                 </div>
               )}
             </div>
           )}
        </div>

        {/* Footer Actions */}
        <div className="mt-12 flex justify-between items-center">
          <button 
             onClick={handleSkip}
             className="text-xs font-black text-slate-400 uppercase tracking-widest hover:text-rose-500 transition-colors"
          >
            Je ne sais pas (Passer)
          </button>
          
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
             <span className="text-[10px] font-bold text-slate-400 uppercase">Input Active</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Quiz;
