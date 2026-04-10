import React from 'react';

interface MacGlossaryProps {
  onClose: () => void;
}

const MacGlossary: React.FC<MacGlossaryProps> = ({ onClose }) => {
  const symbols = [
    { char: '⌘', name: 'Command', desc: 'Touche principale (comme Ctrl sur PC)' },
    { char: '⌥', name: 'Option', desc: 'Alt / Alternative' },
    { char: '⌃', name: 'Control', desc: 'Souvent utilisé dans le Terminal' },
    { char: '⇧', name: 'Shift', desc: 'Majuscule' },
    { char: '⇪', name: 'Caps Lock', desc: 'Verrouillage Majuscule' },
    { char: '⌫', name: 'Delete', desc: 'Effacer (Retour arrière)' },
    { char: '⏎', name: 'Return', desc: 'Entrée / Valid' },
    { char: '⎋', name: 'Esc', desc: 'Échap' },
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in" onClick={onClose}>
      <div 
        className="bg-white rounded-[2rem] p-8 max-w-lg w-full shadow-2xl transform transition-all scale-100"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black text-slate-900">Symboles Mac</h2>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors font-bold">✕</button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {symbols.map(s => (
            <div key={s.char} className="flex items-center gap-4 p-3 rounded-xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-lg text-2xl text-slate-700 font-sans shadow-sm">
                {s.char}
              </div>
              <div>
                <div className="font-bold text-slate-800">{s.name}</div>
                <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
           <p className="text-xs text-slate-400">Cliquez n'importe où pour fermer</p>
        </div>
      </div>
    </div>
  );
};

export default MacGlossary;