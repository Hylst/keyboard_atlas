
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Shortcut, OSType } from '../types';
import Confetti from './Confetti';
import { useKeystroke } from '../hooks/useKeystroke';
import { playSound } from '../utils/audio';

interface SpeedRunProps {
  shortcuts: Shortcut[];
  os: OSType;
  onClose: () => void;
  highScore: number;
  onNewScore: (score: number) => void;
}

const GAME_DURATION = 60; // 60 seconds

const SpeedRun: React.FC<SpeedRunProps> = ({ shortcuts, os, onClose, highScore, onNewScore }) => {
  // Game State
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [finished, setFinished] = useState(false);
  
  // Question State
  const [currentCard, setCurrentCard] = useState<Shortcut | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  // Input
  const { pressedKeys } = useKeystroke(isPlaying && !feedback);

  // Timer
  useEffect(() => {
    let interval: number;
    if (isPlaying && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isPlaying) {
      endGame();
    }
    return () => clearInterval(interval);
  }, [isPlaying, timeLeft]);

  // Game Logic
  const startGame = () => {
    setScore(0);
    setCombo(0);
    setTimeLeft(GAME_DURATION);
    setIsPlaying(true);
    setFinished(false);
    nextCard();
    playSound('click');
  };

  const endGame = () => {
    setIsPlaying(false);
    setFinished(true);
    onNewScore(score);
    if (score > highScore) playSound('success');
  };

  const nextCard = () => {
    // Pick random card
    const valid = shortcuts.filter(s => s.os.includes(os) || s.alternatives?.some(a => a.os === os));
    if (valid.length === 0) return;
    const random = valid[Math.floor(Math.random() * valid.length)];
    setCurrentCard(random);
    setFeedback(null);
  };

  // Check Input
  useEffect(() => {
    if (!currentCard || !isPlaying || feedback) return;

    const alt = currentCard.alternatives?.find(a => a.os === os);
    let targetKeys = alt ? alt.keys : currentCard.keys;
    // Normalize targets
    targetKeys = targetKeys.map(k => {
        if (k === 'Cmd' || k === 'Command') return 'Cmd';
        if (k === 'Win' || k === 'Windows') return 'Cmd'; // Internally mapped to Cmd in hook for simplicity
        if (k === 'Control') return 'Ctrl';
        if (k === 'Option') return 'Alt';
        if (k === 'Escape') return 'Esc';
        return k;
    });

    const userKeys = Array.from(pressedKeys);
    const isMatch = targetKeys.every(k => userKeys.includes(k)) && userKeys.length === targetKeys.length;

    if (isMatch) {
      handleSuccess();
    }
  }, [pressedKeys, currentCard, isPlaying, feedback, os]);

  const handleSuccess = () => {
    playSound('pop');
    setScore(s => s + 1 + Math.floor(combo / 5)); // Bonus points for combo
    setCombo(c => {
        const newC = c + 1;
        if (newC > maxCombo) setMaxCombo(newC);
        return newC;
    });
    setFeedback('correct');
    
    // Fast transition for arcade feel
    setTimeout(() => {
      nextCard();
    }, 200);
  };

  const handleSkip = () => {
    setCombo(0);
    setFeedback('wrong');
    playSound('error');
    setTimeout(() => {
      nextCard();
    }, 400);
  };

  // Render Start Screen
  if (!isPlaying && !finished) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-indigo-900/90 backdrop-blur-md animate-fade-in">
        <div className="bg-white p-12 rounded-[3rem] text-center max-w-lg w-full shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
           
           <div className="text-6xl mb-6">🕹️</div>
           <h2 className="text-4xl font-black text-slate-900 mb-2 italic transform -skew-x-6">SPEED RUN</h2>
           <p className="text-slate-500 mb-8 font-medium">60 secondes. Un maximum de raccourcis.</p>
           
           <div className="flex justify-center gap-8 mb-8">
              <div className="flex flex-col">
                 <span className="text-xs font-bold text-slate-400 uppercase">High Score</span>
                 <span className="text-3xl font-black text-indigo-600">{highScore}</span>
              </div>
           </div>

           <button 
             onClick={startGame}
             className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-xl hover:bg-indigo-700 hover:scale-105 transition-all shadow-xl shadow-indigo-300"
           >
             START
           </button>
           <button onClick={onClose} className="mt-4 text-slate-400 font-bold hover:text-slate-600 text-sm">Annuler</button>
        </div>
      </div>
    );
  }

  // Render End Screen
  if (finished) {
    return (
      <>
        {score > highScore && <Confetti />}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-indigo-900/90 backdrop-blur-md animate-fade-in">
          <div className="bg-white p-12 rounded-[3rem] text-center max-w-lg w-full shadow-2xl relative overflow-hidden">
             {score > highScore && (
                 <div className="absolute top-6 right-6 rotate-12 bg-yellow-400 text-yellow-900 font-black px-3 py-1 rounded-full text-xs shadow-lg animate-bounce">
                    NEW RECORD!
                 </div>
             )}
             <div className="text-6xl mb-4 animate-pop">
               {score > highScore ? '👑' : '🏁'}
             </div>
             <h2 className="text-4xl font-black text-slate-900 mb-6">TIME'S UP!</h2>
             
             <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-2xl">
                   <div className="text-xs text-slate-400 font-bold uppercase">Score</div>
                   <div className="text-4xl font-black text-indigo-600">{score}</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl">
                   <div className="text-xs text-slate-400 font-bold uppercase">Max Combo</div>
                   <div className="text-4xl font-black text-emerald-500">{maxCombo}</div>
                </div>
             </div>
  
             <button 
               onClick={startGame}
               className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all mb-3"
             >
               RETRY
             </button>
             <button onClick={onClose} className="w-full text-slate-500 font-bold py-3 hover:bg-slate-50 rounded-xl transition-colors">
               Quitter
             </button>
          </div>
        </div>
      </>
    );
  }

  // Render Game Loop
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm">
      
      {/* HUD */}
      <div className="absolute top-8 w-full max-w-3xl flex justify-between items-end text-white px-4">
         <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase opacity-60">Score</span>
            <span className="text-4xl font-black font-mono">{score.toString().padStart(3, '0')}</span>
         </div>
         
         <div className="flex flex-col items-center">
            <div className={`text-6xl font-black font-mono ${timeLeft < 10 ? 'text-rose-500 animate-pulse' : 'text-white'}`}>
                {timeLeft}
            </div>
         </div>

         <div className="flex flex-col items-end">
            <span className="text-[10px] font-black uppercase opacity-60">Combo</span>
            <span className={`text-4xl font-black font-mono ${combo > 2 ? 'text-yellow-400' : 'text-slate-400'}`}>x{combo}</span>
         </div>
      </div>

      {/* Card */}
      <div className={`
        bg-white w-full max-w-xl p-12 rounded-[3rem] text-center shadow-[0_0_60px_rgba(255,255,255,0.2)] transform transition-all
        ${feedback === 'correct' ? 'scale-110 border-4 border-emerald-400' : ''}
        ${feedback === 'wrong' ? 'shake border-4 border-rose-400' : ''}
      `}>
          {currentCard?.software && (
             <span className="inline-block bg-slate-100 text-slate-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                {currentCard.software}
             </span>
          )}
          <h2 className="text-4xl font-black text-slate-900 leading-tight mb-8">
             {currentCard?.action}
          </h2>

          <div className="h-20 flex items-center justify-center gap-2">
             {Array.from(pressedKeys).map((k, i) => (
                <kbd key={i} className="bg-indigo-600 text-white px-4 py-2 rounded-xl font-mono font-bold text-2xl shadow-lg border-b-4 border-indigo-800 animate-pop">
                   {k}
                </kbd>
             ))}
             {Array.from(pressedKeys).length === 0 && (
                <span className="text-slate-200 text-4xl font-black animate-pulse">...</span>
             )}
          </div>
      </div>

      <button 
        onClick={handleSkip} 
        className="mt-12 text-white/50 hover:text-white font-bold uppercase tracking-widest text-sm transition-colors"
      >
        Passer (Espace)
      </button>

    </div>
  );
};

export default SpeedRun;
