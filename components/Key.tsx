
import React from 'react';

interface KeyProps {
  label: string;
  variant?: 'modifier' | 'regular';
  size?: 'sm' | 'md';
}

const Key: React.FC<KeyProps> = ({ label, variant = 'regular', size = 'md' }) => {
  const isModifier = variant === 'modifier' || ['Ctrl', 'Cmd', 'Shift', 'Alt', 'Option', 'Win'].includes(label);
  
  // Adaptation de la taille
  const heightClass = size === 'sm' ? 'h-7 text-xs' : 'h-8 sm:h-9 text-xs sm:text-sm';
  const minWidth = size === 'sm' ? 'min-w-[1.8rem]' : 'min-w-[2.2rem]';
  const px = size === 'sm' ? 'px-1.5' : 'px-2';

  return (
    <kbd className={`
      inline-flex items-center justify-center
      ${heightClass} ${minWidth} ${px}
      rounded-md border border-b-[3px]
      font-mono font-bold tracking-tight transition-all select-none
      ${isModifier 
        ? 'bg-slate-100 border-slate-300 text-slate-600' 
        : 'bg-white border-slate-200 text-slate-700'}
      shadow-sm
    `}
    title={label}
    >
      {label}
    </kbd>
  );
};

export default Key;
