
import React from 'react';

interface InfoModalProps {
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className="relative bg-slate-900 text-white p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-[80px] opacity-40 -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
                <h2 className="text-3xl font-black mb-2 tracking-tight">Keyboard <span className="text-indigo-400">Atlas</span></h2>
                <p className="text-slate-400 font-medium text-lg">Devenez un virtuose du clavier.</p>
            </div>
            <button 
                onClick={onClose}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md text-white font-bold"
            >
                ✕
            </button>
        </div>

        <div className="overflow-y-auto p-8 custom-scrollbar space-y-8">
            {/* Mission */}
            <section>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="text-lg">🎯</span> La Mission
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    La souris est intuitive, mais lente. Le clavier est rapide, mais invisible.
                    <br/><br/>
                    <strong>Keyboard Atlas</strong> comble ce fossé. Ce n'est pas juste une liste, c'est un outil interactif conçu pour transformer la connaissance théorique d'un raccourci en <strong>mémoire musculaire</strong> grâce à la répétition et au jeu.
                </p>
            </section>

            {/* Features Grid */}
            <section>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="text-lg">⚡</span> Fonctionnalités Clés
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
                        <div className="text-2xl mb-2">🧠</div>
                        <h4 className="font-bold text-slate-800 text-sm">SRS Quiz</h4>
                        <p className="text-xs text-slate-500 mt-1">Un système de répétition espacée qui cible intelligemment les raccourcis que vous êtes sur le point d'oublier.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
                        <div className="text-2xl mb-2">🕹️</div>
                        <h4 className="font-bold text-slate-800 text-sm">Mode Arcade</h4>
                        <p className="text-xs text-slate-500 mt-1">Un contre-la-montre intense de 60 secondes pour tester vos réflexes et battre vos records.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
                        <div className="text-2xl mb-2">⌨️</div>
                        <h4 className="font-bold text-slate-800 text-sm">Mappage Réel</h4>
                        <p className="text-xs text-slate-500 mt-1">Visualisez les combinaisons sur votre disposition physique réelle (AZERTY, QWERTY, DVORAK, etc.).</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
                        <div className="text-2xl mb-2">🔒</div>
                        <h4 className="font-bold text-slate-800 text-sm">100% Local</h4>
                        <p className="text-xs text-slate-500 mt-1">Confidentialité totale. Votre progression et vos favoris ne quittent jamais votre navigateur.</p>
                    </div>
                </div>
            </section>

             {/* AI & Stack */}
             <section className="bg-gradient-to-br from-indigo-50 to-slate-50 rounded-xl p-6 border border-indigo-100">
                <h3 className="text-sm font-black text-indigo-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                    🤖 Création & Technologie
                </h3>
                <p className="text-indigo-900/80 text-xs leading-relaxed mb-4">
                    Cette application a été conçue et développée par <strong>Geoffroy Streit (Hylst)</strong>.
                    <br/>
                    Elle démontre l'utilisation moderne de l'IA générative comme assistant de programmation pour accélérer le développement d'interfaces React complexes et structurer de grandes bases de données pédagogiques.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white rounded-md text-[10px] font-bold text-slate-600 border border-slate-200 shadow-sm">React 19</span>
                    <span className="px-2 py-1 bg-white rounded-md text-[10px] font-bold text-slate-600 border border-slate-200 shadow-sm">TypeScript</span>
                    <span className="px-2 py-1 bg-white rounded-md text-[10px] font-bold text-slate-600 border border-slate-200 shadow-sm">Tailwind CSS</span>
                    <span className="px-2 py-1 bg-white rounded-md text-[10px] font-bold text-indigo-600 border border-indigo-100 shadow-sm">AI Assisted</span>
                </div>
            </section>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
