import React, { useState } from 'react';

interface ErgoModalProps {
  onClose: () => void;
}

const ErgoModal: React.FC<ErgoModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'posture' | 'rsi' | 'hardware'>('posture');

  return (
    <div 
      className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
          <div className="flex flex-col">
              <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
                 <span className="text-2xl">🧘‍♀️</span> Ergonomie & Santé
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-1">Prévenir les douleurs et optimiser sa frappe.</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-slate-500 hover:bg-slate-300 transition-colors font-bold">✕</button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-100 overflow-x-auto custom-scrollbar">
          <button 
            onClick={() => setActiveTab('posture')}
            className={`flex-none px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${activeTab === 'posture' ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Placement (Home Row)
          </button>
          <button 
            onClick={() => setActiveTab('rsi')}
            className={`flex-none px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${activeTab === 'rsi' ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Prévention RSI
          </button>
          <button 
            onClick={() => setActiveTab('hardware')}
            className={`flex-none px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${activeTab === 'hardware' ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Choix du Clavier
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-8 custom-scrollbar text-sm text-slate-600 leading-relaxed">
          
          {/* POSTURE TAB */}
          {activeTab === 'posture' && (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-black text-slate-800 mb-2">Le Reposoir (Home Row)</h3>
                <p>La "Home Row" est la rangée centrale de votre clavier. Pour taper à l'aveugle efficacement, vos doigts doivent toujours revenir se reposer sur ces touches :</p>
                <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                  <div className="flex-1">
                     <h4 className="font-bold text-slate-800 mb-2">Main Gauche</h4>
                     <div className="flex justify-center sm:justify-start gap-1">
                        <kbd className="px-2 py-1 bg-white border border-slate-200 rounded font-mono font-bold text-indigo-600">Q/A</kbd>
                        <kbd className="px-2 py-1 bg-white border border-slate-200 rounded font-mono font-bold text-indigo-600">S</kbd>
                        <kbd className="px-2 py-1 bg-white border border-slate-200 rounded font-mono font-bold text-indigo-600">D</kbd>
                        <kbd className="px-2 py-1 bg-white border border-slate-200 rounded font-mono font-bold text-indigo-600 border-b-2 border-b-indigo-400">F</kbd>
                     </div>
                     <p className="text-xs text-slate-500 mt-2">Auriculaire à Index. Notez l'ergot physique sur le <strong>F</strong> pour vous repérer à l'aveugle.</p>
                  </div>
                  <div className="hidden sm:block w-px bg-slate-200 self-stretch"></div>
                  <div className="flex-1">
                     <h4 className="font-bold text-slate-800 mb-2">Main Droite</h4>
                     <div className="flex justify-center sm:justify-start gap-1">
                        <kbd className="px-2 py-1 bg-white border border-slate-200 rounded font-mono font-bold text-indigo-600 border-b-2 border-b-indigo-400">J</kbd>
                        <kbd className="px-2 py-1 bg-white border border-slate-200 rounded font-mono font-bold text-indigo-600">K</kbd>
                        <kbd className="px-2 py-1 bg-white border border-slate-200 rounded font-mono font-bold text-indigo-600">L</kbd>
                        <kbd className="px-2 py-1 bg-white border border-slate-200 rounded font-mono font-bold text-indigo-600">M/;</kbd>
                     </div>
                     <p className="text-xs text-slate-500 mt-2">Index à Auriculaire. Notez l'ergot physique sur le <strong>J</strong>.</p>
                  </div>
                </div>
              </section>

              <section>
                 <h3 className="text-lg font-black text-slate-800 mb-2">Les Pouces</h3>
                 <p>Les deux pouces planent au-dessus de la barre d'espace. Historiquement, le pouce opposé à la main qui vient de frapper une touche frappe l'espace (pour équilibrer la charge musculaire).</p>
              </section>
            </div>
          )}

          {/* RSI TAB */}
          {activeTab === 'rsi' && (
            <div className="space-y-6">
              <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl mb-6">
                <h4 className="font-bold text-rose-800 mb-1 flex items-center gap-2">⚠️ Troubles Musculosquelettiques (RSI)</h4>
                <p className="text-rose-700 text-xs">Les tendinites, le syndrome du canal carpien, et les douleurs aux cervicales sont les ennemis n°1 des travailleurs de la tech. N'ignorez jamais une douleur ou un picotement asymétrique persistants.</p>
              </div>

              <section>
                <h3 className="text-lg font-black text-slate-800 mb-2">1. Posture au Bureau</h3>
                <ul className="list-disc ml-4 mt-2 space-y-2">
                  <li><strong>Poignets :</strong> Ils doivent être <em>flottants</em> et droits. Ne cassez pas vos poignets vers le haut (ne dépliez pas les pieds arrière de votre clavier).</li>
                  <li><strong>Coudes :</strong> Pliés à 90° ou légèrement plus (angle ouvert). Vos avant-bras doivent reposer sur vos accoudoirs, au même niveau que le bureau.</li>
                  <li><strong>Écran :</strong> Le haut de l'écran doit se trouver à la hauteur de vos yeux.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-black text-slate-800 mb-2">2. Repos & Étirements (La Règle des 20-20-20)</h3>
                <p>Toutes les 20 minutes, regardez quelque chose à 20 pieds (6 mètres) pendant 20 secondes. De plus, étirez vos avant-bras :</p>
                <ul className="mt-2 space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                   <li><strong className="text-indigo-600">Extension Pleurale :</strong> Bras tendu devant vous, poussez délicatement les doigts vers le haut (comme pour dire "Stop") avec votre autre main pendant 15 secondes.</li>
                   <li><strong className="text-indigo-600">Flexion :</strong> Toujours bras tendu, tirez vos doigts vers le bas, vers vous. 15 secondes.</li>
                </ul>
              </section>
            </div>
          )}

          {/* HARDWARE TAB */}
          {activeTab === 'hardware' && (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-black text-slate-800 mb-2">1. Types de "Switchs" (Contacteurs)</h3>
                <p>Le choix mécanique affecte la fatigue et la précision :</p>
                <ul className="mt-4 space-y-4">
                  <li className="p-3 bg-red-50 border border-red-100 rounded-lg">
                    <strong className="text-red-700 block mb-1">🔴 Linear (Rouge/Noir)</strong>
                    Silencieux et lisses. Aucune résistance au clic. Idéal pour ceux qui tapent doucement sans écraser la touche ou pour le gaming.
                  </li>
                  <li className="p-3 bg-amber-50 border border-amber-100 rounded-lg">
                    <strong className="text-amber-800 block mb-1">🟤 Tactile (Marron/Clear)</strong>
                    Un léger "cran" se ressent au milieu de la course, sans bruit strident. <strong>Le meilleur compromis pour les développeurs et rédacteurs</strong> (retour haptique sans réveiller l'open-space).
                  </li>
                  <li className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                    <strong className="text-blue-800 block mb-1">🔵 Clicky (Bleu/Vert)</strong>
                    Bruyant à l'ancienne (façon machine à écrire) avec un cran très distinct. Satisfaction garantie, mais isolation nécessaire !
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-black text-slate-800 mb-2">2. Profils Ergonomiques Spécialisés</h3>
                <div className="grid sm:grid-cols-2 gap-4 mt-2">
                   <div className="p-4 border border-slate-200 rounded-xl">
                      <h4 className="font-bold text-slate-800">Layout "Alice" / Split</h4>
                      <p className="text-xs mt-1">Le clavier est séparé en deux blocs inclinés. Cela force vos épaules à s'ouvrir et empêche les poignets de se tordre vers l'extérieur (déviation ulnaire).</p>
                   </div>
                   <div className="p-4 border border-slate-200 rounded-xl">
                      <h4 className="font-bold text-slate-800">Low Profile</h4>
                      <p className="text-xs mt-1">Claviers très fins (type Apple Magic Keyboard ou Keychron séries K). Demande moins d'extension du poignet vers le haut, supprimant souvent le besoin d'un repose-poignets.</p>
                   </div>
                   <div className="p-4 border border-slate-200 rounded-xl">
                      <h4 className="font-bold text-slate-800">Ortho-Linéaire</h4>
                      <p className="text-xs mt-1">Les touches ne sont pas décalées mais parfaitement alignées en grille homogène. Demande un réapprentissage mais optimise fondamentalement le mouvement vertical des doigts.</p>
                   </div>
                   <div className="p-4 border border-slate-200 rounded-xl">
                      <h4 className="font-bold text-slate-800">Accessibilité</h4>
                      <p className="text-xs mt-1">Les keycaps peuvent être modifiés pour inclure des repères tactiles épais, du Braille, ou des couleurs à fort contraste (blanc pur sur noir abyssal) pour les malvoyants.</p>
                   </div>
                </div>
              </section>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50 text-center">
           <button onClick={onClose} className="text-indigo-600 font-bold hover:underline text-sm">Compris</button>
        </div>
      </div>
    </div>
  );
};

export default ErgoModal;
