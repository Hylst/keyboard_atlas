
import { useState } from 'react';

export const useGameModes = () => {
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [isArcadeMode, setIsArcadeMode] = useState(false);
  const [isTypingMode, setIsTypingMode] = useState(false);
  const [hoveredKeys, setHoveredKeys] = useState<string[] | null>(null);

  const toggleQuiz = () => {
    setIsQuizMode(prev => !prev);
    setIsArcadeMode(false);
    setIsTypingMode(false);
    if (!isQuizMode) window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleArcade = () => {
    setIsArcadeMode(prev => !prev);
    setIsQuizMode(false);
    setIsTypingMode(false);
    if (!isArcadeMode) window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTyping = () => {
    setIsTypingMode(prev => !prev);
    setIsQuizMode(false);
    setIsArcadeMode(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    isQuizMode, setIsQuizMode,
    isArcadeMode, setIsArcadeMode,
    isTypingMode, setIsTypingMode,
    hoveredKeys, setHoveredKeys,
    toggleQuiz, toggleArcade, toggleTyping
  };
};
