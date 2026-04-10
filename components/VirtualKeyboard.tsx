
import React, { useState, useEffect } from 'react';
import { OSType, LayoutType } from '../types';

interface VirtualKeyboardProps {
  activeKeys: string[];
  os: OSType;
  layout: LayoutType;
  onKeyClick?: (key: string) => void;
}

const KEYBOARD_LAYOUTS = {
  [LayoutType.QWERTY]: [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
    ['Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift']
  ],
  [LayoutType.AZERTY]: [
    ['²', '&', 'é', '"', "'", '(', '-', 'è', '_', 'ç', 'à', ')', '='],
    ['Tab', 'A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '^', '$', '*'],
    ['Caps', 'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'ù', 'Enter'],
    ['Shift', '<', 'W', 'X', 'C', 'V', 'B', 'N', ',', ';', ':', '!', 'Shift']
  ],
  [LayoutType.DVORAK]: [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '[', ']'],
    ['Tab', "'", ',', '.', 'P', 'Y', 'F', 'G', 'C', 'R', 'L', '/', '=', '\\'],
    ['Caps', 'A', 'O', 'E', 'U', 'I', 'D', 'H', 'T', 'N', 'S', '-', 'Enter'],
    ['Shift', ';', 'Q', 'J', 'K', 'X', 'B', 'M', 'W', 'V', 'Z', 'Shift']
  ],
  [LayoutType.COLEMAK]: [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    ['Tab', 'Q', 'W', 'F', 'P', 'G', 'J', 'L', 'U', 'Y', ';', '[', ']', '\\'],
    ['Caps', 'A', 'R', 'S', 'T', 'D', 'H', 'N', 'E', 'I', 'O', "'", 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'K', 'M', ',', '.', '/', 'Shift']
  ]
};

const AZERTY_NUM_MAP: Record<string, string> = {
  '1': '&', '2': 'é', '3': '"', '4': "'", '5': '(',
  '6': '-', '7': 'è', '8': '_', '9': 'ç', '0': 'à'
};

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({ activeKeys, os, layout, onKeyClick }) => {
  const [internalPressedKeys, setInternalPressedKeys] = useState<Set<string>>(new Set());
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  const normalizeKey = (key: string) => {
    const k = key.toLowerCase().trim();
    if (k === 'control') return 'ctrl';
    if (k === 'option') return 'opt';
    if (k === 'command' || k === 'meta') return 'cmd';
    if (k === 'escape') return 'esc';
    if (k === ' ') return 'space';
    if (k === 'arrowup') return 'up';
    if (k === 'arrowdown') return 'down';
    if (k === 'arrowleft') return 'left';
    if (k === 'arrowright') return 'right';
    if (k === 'enter') return 'enter';
    if (k === 'backspace') return 'backspace';
    if (k === 'tab') return 'tab';
    if (k === 'capslock') return 'caps';
    if (k === 'shift') return 'shift';
    return k;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = normalizeKey(e.key);
      setInternalPressedKeys(prev => new Set(prev).add(key));
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = normalizeKey(e.key);
      setInternalPressedKeys(prev => {
        const next = new Set(prev);
        next.delete(key);
        return next;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const isKeyActive = (keyLabel: string) => {
    const normalizedPropActive = activeKeys.map(k => k.toLowerCase().trim());
    const lowerLabel = keyLabel.toLowerCase();

    const isInternallyPressed = internalPressedKeys.has(lowerLabel) ||
       (lowerLabel === 'win' && (internalPressedKeys.has('meta') || internalPressedKeys.has('os'))) ||
       (lowerLabel === 'cmd' && internalPressedKeys.has('cmd')) ||
       (lowerLabel === 'opt' && internalPressedKeys.has('opt')) ||
       (lowerLabel === 'alt' && internalPressedKeys.has('alt'));

    let isPropActive = normalizedPropActive.includes(lowerLabel) ||
        (lowerLabel === 'win' && normalizedPropActive.some(ak => ['win', 'super', 'cmd'].includes(ak))) ||
        (lowerLabel === 'cmd' && normalizedPropActive.some(ak => ['win', 'super', 'cmd'].includes(ak))) ||
        (lowerLabel === 'opt' && normalizedPropActive.some(ak => ['alt', 'opt'].includes(ak))) ||
        (lowerLabel === 'alt' && normalizedPropActive.some(ak => ['alt', 'opt'].includes(ak)));

    if (layout === LayoutType.AZERTY && !isPropActive) {
      const numberKey = Object.keys(AZERTY_NUM_MAP).find(key => AZERTY_NUM_MAP[key] === keyLabel);
      if (numberKey && normalizedPropActive.includes(numberKey)) {
        isPropActive = true;
      }
    }

    return { active: isInternallyPressed || isPropActive, pressed: isInternallyPressed };
  };

  const Key: React.FC<{ label: string, width?: string, grow?: boolean }> = ({ label, width = 'w-10', grow = false }) => {
    const { active, pressed } = isKeyActive(label);
    
    let finalLabel = label;
    const lower = label.toLowerCase();

    if (lower === 'cmd' || lower === 'win' || lower === 'super') {
      finalLabel = os === OSType.MACOS ? '⌘' : (os === OSType.LINUX ? '❖' : '⊞');
    } else if (lower === 'alt' || lower === 'opt') {
      finalLabel = os === OSType.MACOS ? '⌥' : 'Alt';
    } else if (lower === 'ctrl') {
      finalLabel = os === OSType.MACOS ? '⌃' : 'Ctrl';
    } else if (lower === 'up') finalLabel = '↑';
    else if (lower === 'down') finalLabel = '↓';
    else if (lower === 'left') finalLabel = '←';
    else if (lower === 'right') finalLabel = '→';

    const mobileTextSize = label.length > 1 ? 'text-[9px]' : 'text-[11px]';
    const desktopTextSize = label.length > 1 ? 'sm:text-[11px]' : 'sm:text-sm';
    const widthClass = grow ? 'flex-grow' : width;

    return (
      <div 
        onClick={() => onKeyClick?.(label)}
        onPointerEnter={() => setHoveredKey(lower)}
        onPointerLeave={() => setHoveredKey(null)}
        className={`
          ${widthClass} h-10 sm:h-12 
          flex flex-col items-center justify-center relative
          rounded-lg font-bold select-none cursor-pointer
          ${mobileTextSize} ${desktopTextSize}
          key-3d
          ${active 
            ? 'key-3d-active' 
            : 'bg-slate-200 border border-slate-300 text-slate-600 hover:bg-white hover:text-indigo-600'}
          ${pressed ? 'active-press' : ''}
        `}
        title={`Filtrer par ${finalLabel}`}
      >
        <span>{finalLabel}</span>
      </div>
    );
  };

  const rows = KEYBOARD_LAYOUTS[layout];
  const mouseKeys = ['leftclick', 'rightclick', 'middleclick', 'drag', 'scroll'];
  const activeMouseKeys = activeKeys.map(k => k.toLowerCase()).filter(k => mouseKeys.includes(k));
  const hasMouseAction = activeMouseKeys.length > 0;

  return (
    <div className="flex flex-col xl:flex-row gap-8 justify-center items-start w-full max-w-7xl mx-auto no-print perspective-1000">
      {/* KEYBOARD BASE */}
      <div className="bg-slate-300 p-3 sm:p-5 rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] border-b-8 border-slate-400 w-full max-w-4xl relative z-10">
        <div className="bg-slate-100/50 rounded-[1.5rem] p-3 sm:p-4 border border-white/50 shadow-inner">
          <div className="flex flex-col gap-2">
            
            {/* Status Bar */}
            <div className="flex justify-between items-center px-4 mb-2 text-slate-400 uppercase font-black tracking-widest text-[9px]">
              <div className="flex gap-2 items-center">
                <span className={`w-2 h-2 rounded-full transition-all duration-300 ${internalPressedKeys.size > 0 ? 'bg-indigo-500 shadow-[0_0_8px_indigo]' : 'bg-emerald-400'}`}></span>
                {internalPressedKeys.size > 0 ? 'INPUT DETECTED' : 'KEYBOARD READY'}
              </div>
              <div className="flex gap-4">
                 <span className="bg-slate-200 px-2 py-0.5 rounded text-slate-500">{layout}</span>
                 <span className="text-indigo-500 font-bold">{os}</span>
              </div>
            </div>

            {/* Keys Rows */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="flex gap-1.5 sm:gap-2 mb-2">
                <Key label="Esc" width="w-10 sm:w-14" />
                <div className="flex gap-1 flex-grow justify-around px-2 sm:px-4">
                   {['F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12'].map(f => <Key key={f} label={f} width="w-7 sm:w-10" />)}
                </div>
              </div>
              <div className="flex gap-1 sm:gap-1.5">
                {rows[0].map((k) => <Key key={k} label={k} />)}
                <Key label="Backspace" width="w-14 sm:w-24" grow />
              </div>
              <div className="flex gap-1 sm:gap-1.5">
                <Key label={rows[1][0]} width="w-12 sm:w-16" />
                {rows[1].slice(1).map((k) => <Key key={k} label={k} />)}
              </div>
              <div className="flex gap-1 sm:gap-1.5">
                <Key label={rows[2][0]} width="w-14 sm:w-20" />
                {rows[2].slice(1, -1).map((k) => <Key key={k} label={k} />)}
                <Key label={rows[2][rows[2].length-1]} width="w-14 sm:w-20" grow />
              </div>
              <div className="flex gap-1 sm:gap-1.5">
                <Key label={rows[3][0]} width="w-16 sm:w-24" />
                {rows[3].slice(1, -1).map((k) => <Key key={k} label={k} />)}
                <Key label={rows[3][rows[3].length-1]} width="w-16 sm:w-24" grow />
              </div>
              <div className="flex gap-1 sm:gap-1.5">
                <Key label="Ctrl" width="w-10 sm:w-16" />
                <Key label={os === OSType.MACOS ? 'Opt' : (os === OSType.LINUX ? 'Super' : 'Win')} width="w-10 sm:w-16" />
                <Key label={os === OSType.MACOS ? 'Cmd' : 'Alt'} width="w-10 sm:w-16" />
                <Key label="Space" grow />
                <Key label={os === OSType.MACOS ? 'Cmd' : 'Alt'} width="w-10 sm:w-16" />
                {os !== OSType.MACOS && <Key label="Fn" width="w-10 sm:w-14" />}
                <Key label={os === OSType.MACOS ? 'Opt' : 'Ctrl'} width="w-10 sm:w-16" />
                
                <div className="flex gap-1 items-center px-1 sm:px-2 ml-auto bg-slate-200/50 rounded-lg p-1">
                  <Key label="Left" width="w-8 sm:w-10" />
                  <div className="flex flex-col gap-1">
                    <Key label="Up" width="w-8 sm:w-10" />
                    <Key label="Down" width="w-8 sm:w-10" />
                  </div>
                  <Key label="Right" width="w-8 sm:w-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOUSE ZONE */}
      <div className={`
        bg-white p-4 rounded-[2rem] border border-slate-200 shadow-xl transition-all duration-500
        ${hasMouseAction ? 'w-full xl:w-28 opacity-100 scale-100' : 'w-full xl:w-0 h-0 xl:h-auto opacity-0 scale-90 p-0 border-0 overflow-hidden'}
      `}>
         <div className="flex xl:flex-col gap-4 justify-center items-center h-full">
            <div className={`w-16 h-24 rounded-[1.5rem] border-[3px] flex relative transition-colors shadow-sm ${activeMouseKeys.includes('rightclick') || activeMouseKeys.includes('leftclick') ? 'bg-slate-50 border-indigo-500' : 'bg-white border-slate-200'}`}>
                {/* L Click */}
                <div className={`absolute top-0 left-0 w-[50%] h-[40%] border-r border-b border-inherit rounded-tl-[1.2rem] transition-colors ${activeMouseKeys.includes('leftclick') ? 'bg-indigo-500' : ''}`}></div>
                {/* R Click */}
                <div className={`absolute top-0 right-0 w-[50%] h-[40%] border-b border-inherit rounded-tr-[1.2rem] transition-colors ${activeMouseKeys.includes('rightclick') ? 'bg-indigo-500' : ''}`}></div>
                {/* Wheel */}
                <div className={`absolute top-[12%] left-1/2 -translate-x-1/2 w-2 h-6 rounded-full border border-slate-300 transition-colors shadow-sm ${activeMouseKeys.includes('middleclick') || activeMouseKeys.includes('scroll') ? 'bg-amber-400 border-amber-500' : 'bg-slate-100'}`}></div>
            </div>
            {activeMouseKeys.includes('drag') && <span className="text-[9px] font-black text-indigo-500 uppercase tracking-widest px-2 py-1 bg-indigo-50 rounded-md">DRAG</span>}
            {activeMouseKeys.includes('scroll') && <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest px-2 py-1 bg-amber-50 rounded-md animate-bounce">SCROLL</span>}
         </div>
      </div>
    </div>
  );
};

export default VirtualKeyboard;
