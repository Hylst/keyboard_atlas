
import { useState, useEffect, useCallback } from 'react';
import { playSound } from '../utils/audio';

// Normalise les codes de touches JS (e.code) vers notre format (Shortcut['keys'])
const normalizeKey = (e: KeyboardEvent): string | null => {
  const code = e.code;
  const key = e.key;

  // Ignorer les touches mortes ou composition
  if (key === 'Dead') return null;

  // Modifiers
  if (code.includes('Control')) return 'Ctrl';
  if (code.includes('Shift')) return 'Shift';
  if (code.includes('Alt')) return 'Alt';
  if (code.includes('Meta')) return 'Meta'; // Cmd/Win handled externally via OS prop if needed

  // Special Keys
  if (code === 'Space') return 'Space';
  if (code === 'Escape') return 'Esc';
  if (code === 'Enter') return 'Enter';
  if (code === 'Backspace') return 'Backspace';
  if (code === 'Tab') return 'Tab';
  if (code === 'Delete') return 'Delete';
  if (code.includes('ArrowUp')) return 'Up';
  if (code.includes('ArrowDown')) return 'Down';
  if (code.includes('ArrowLeft')) return 'Left';
  if (code.includes('ArrowRight')) return 'Right';
  
  // F-Keys
  if (/^F\d+$/.test(code)) return code;

  // Alphanumeric: Use key char but uppercase (e.g., 'a' -> 'A')
  // We prioritize the visual character for standard keys
  if (key.length === 1) return key.toUpperCase();

  return key; // Fallback
};

export const useKeystroke = (isActive: boolean) => {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isActive) return;

    // Normalisation spécifique pour notre app
    // On doit différencier Cmd/Win selon le contexte, mais ici on capture le raw
    // On mappera plus tard selon l'OS sélectionné dans le Quiz
    let label = normalizeKey(e);
    
    // Mapping spécifique OS-agnostic pour la détection interne
    if (e.metaKey && label !== 'Meta') label = null; // Meta is usually modifier
    if (e.key === 'Meta') label = 'Cmd'; // On internalise Meta comme Cmd/Win générique

    if (label) {
      playSound('click');
      setPressedKeys(prev => new Set(prev).add(label!));
    }

    // Prevent default only for some heavy shortcuts that might disrupt the app
    // But allow F5, F12, etc.
    if (e.ctrlKey && e.key === 's') e.preventDefault(); // Save
    if (e.ctrlKey && e.key === 'f') e.preventDefault(); // Find
    if (e.ctrlKey && e.key === 'p') e.preventDefault(); // Print
  }, [isActive]);

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    // On release, we don't clear everything immediately to allow user to see what they pressed
    // But in a "chord" logic, lifting a key removes it from the "current chord"
    let label = normalizeKey(e);
    if (e.key === 'Meta') label = 'Cmd';

    if (label) {
      setPressedKeys(prev => {
        const next = new Set(prev);
        next.delete(label!);
        return next;
      });
    }
  }, []);

  // Clear focus/blur
  const handleBlur = useCallback(() => {
    setPressedKeys(new Set());
  }, []);

  useEffect(() => {
    if (isActive) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
      window.addEventListener('blur', handleBlur);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', handleBlur);
    };
  }, [isActive, handleKeyDown, handleKeyUp, handleBlur]);

  return { pressedKeys };
};
