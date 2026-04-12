import React, { useState } from 'react';

interface ErgoModalProps {
  onClose: () => void;
}

const ErgoModal: React.FC<ErgoModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'synth' | 'posture' | 'rsi' | 'hardware'>('synth');

  return (
    <div 
      className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 lg:p-8 border-b border-slate-100 bg-slate-50/80 backdrop-blur-sm">
          <div className="flex flex-col">
              <h2 className="text-2xl font-black text-slate-800 flex items-center gap-3">
                 <span className="text-3xl">🧘‍♀️</span> Ergonomie & Santé
              </h2>
              <p className="text-sm text-slate-500 font-medium mt-2">Prévenir les douleurs, optimiser sa frappe et choisir son matériel.</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 text-slate-500 hover:bg-slate-300 hover:text-slate-800 transition-colors font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-label="Fermer">✕</button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-100 overflow-x-auto custom-scrollbar bg-white">
          <button 
            onClick={() => setActiveTab('synth')}
            className={`flex-none px-6 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'synth' ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50/50'}`}
          >
            Synthèse Visuelle
          </button>
          <button 
            onClick={() => setActiveTab('posture')}
            className={`flex-none px-6 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'posture' ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50/50'}`}
          >
            Placement (Home Row)
          </button>
          <button 
            onClick={() => setActiveTab('rsi')}
            className={`flex-none px-6 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'rsi' ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50/50'}`}
          >
            Prévention RSI
          </button>
          <button 
            onClick={() => setActiveTab('hardware')}
            className={`flex-none px-6 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'hardware' ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50/50'}`}
          >
            Choix du Clavier
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 lg:p-8 custom-scrollbar text-sm text-slate-600 leading-relaxed bg-white">
          
          {/* SYNTHÈSE VISUELLE TAB */}
          {activeTab === 'synth' && (
            <div className="space-y-8 animate-fade-in">
              <h3 className="text-xl font-black text-slate-800 mb-6 text-center">La Carte Ergonomique Idéale</h3>
              <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-inner">
                 
                 {/* Représentation visuelle de la posture */}
                 <div className="flex-1 flex flex-col items-center gap-6">
                    <div className="w-40 h-48 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center relative overflow-hidden">
                       <svg viewBox="0 0 100 100" className="w-32" style={{color: '#6366f1'}}>
                         {/* Tête */}
                         <circle cx="35" cy="20" r="8" fill="currentColor"/>
                         {/* Corps droit */}
                         <line x1="35" y1="28" x2="35" y2="70" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                         {/* Cuisse */}
                         <line x1="35" y1="70" x2="60" y2="70" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                         {/* Bras formant un 90+ deg */}
                         <path d="M35 35 L45 55 L65 55" stroke="#8b5cf6" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                         {/* Bureau */}
                         <line x1="55" y1="55" x2="95" y2="55" stroke="#94a3b8" strokeWidth="3" />
                         {/* Écran (Hauteur des yeux) */}
                         <rect x="80" y="15" width="6" height="30" rx="1" fill="#cbd5e1" />
                         <line x1="83" y1="45" x2="83" y2="55" stroke="#94a3b8" strokeWidth="3" />
                       </svg>
                       <div className="absolute bottom-2 left-0 right-0 text-center">
                           <span className="bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded text-[10px]">Poignets flottants & Écran haut</span>
                       </div>
                    </div>
                    <p className="text-sm font-bold text-slate-600 uppercase tracking-widest">La Règle du 90°</p>
                 </div>
                 
                 <div className="w-px bg-slate-200 hidden md:block"></div>

                 {/* Représentation visuelle CSS du clavier ergonomique Split */}
                 <div className="flex-1 flex flex-col items-center gap-6">
                    <div className="w-64 h-48 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
                        <div className="flex gap-4 opacity-90 scale-125">
                           {/* Left half */}
                           <div className="grid grid-cols-4 gap-1 transform -rotate-12 translate-y-1">
                              <div className="w-4 h-4 bg-slate-200 rounded-sm"></div>
                              <div className="w-4 h-4 bg-slate-200 rounded-sm"></div>
                              <div className="w-4 h-4 bg-slate-200 rounded-sm"></div>
                              <div className="w-4 h-4 bg-slate-200 rounded-sm"></div>
                              <div className="w-4 h-4 bg-indigo-200 rounded-sm"></div>
                              <div className="w-4 h-4 bg-indigo-200 rounded-sm"></div>
                              <div className="w-4 h-4 bg-indigo-200 rounded-sm"></div>
                              <div className="w-4 h-4 bg-indigo-500 rounded-sm text-white flex items-center justify-center" style={{fontSize:'8px', fontWeight:'bold'}}>F</div>
                              <div className="w-4 h-4 bg-slate-200 rounded-sm"></div>
                              <div className="w-4 h-4 bg-slate-200 rounded-sm"></div>
                              <div className="w-4 h-4 bg-slate-200 rounded-sm"></div>
                              <div className="w-4 h-4 bg-slate-200 rounded-sm"></div>
                              <div className="col-span-4 flex justify-end mt-1"><div className="w-6 h-4 bg-emerald-400 rounded-sm"></div></div>
                           </div>
                           {/* Right half */}
                           <div className="grid grid-cols-4 gap-1 transform rotate-12 translate-y-1">
                              <div className="w-4 h-4 bg-slate-200 rounded-sm"></div>
                              <div className="w-4 h-4 bg-slate-200 rounded-sm"></div>
                              <div className="w-4 h-4 bg-slate-200 rounded-sm"></div>
                              <div className="w-4 h-4 bg-slate-200 rounded-sm"></div>
                              <div className="w-4 h-4 bg-rose-500 rounded-sm text-white flex items-center justify-center" style={{fontSize:'8px', fontWeight:'bold'}}>J</div>
                              <div className="w-4 h-4 bg-rose-200 rounded-sm"></div>
                              <div className="w-4 h-4 bg-rose-200 rounded-sm"></div>
                              <div className="w-4 h-4 bg-rose-200 rounded-sm"></div>
                              <div className="w-4 h-4 bg-slate-200 rounded-sm"></div>
                              <div className="w-4 h-4 bg-slate-200 rounded-sm"></div>
                              <div className="w-4 h-4 bg-slate-200 rounded-sm"></div>
                              <div className="w-4 h-4 bg-slate-200 rounded-sm"></div>
                              <div className="col-span-4 flex justify-start mt-1"><div className="w-6 h-4 bg-emerald-400 rounded-sm"></div></div>
                           </div>
                        </div>
                        <div className="absolute bottom-2 left-0 right-0 text-center flex flex-col gap-1 items-center">
                           <span className="bg-indigo-50 text-indigo-700 font-bold px-2 py-0.5 rounded text-[10px] inline-block">Ergot tactile: F et J</span>
                           <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px] inline-block">Pouces : Espace </span>
                        </div>
                    </div>
                    <p className="text-sm font-bold text-slate-600 uppercase tracking-widest text-center">Organisation Clavier Split</p>
                 </div>
              </div>
            </div>
          )}

          {/* POSTURE TAB */}
          {activeTab === 'posture' && (
            <div className="space-y-8 animate-fade-in">
              <section>
                <h3 className="text-lg font-black text-slate-800 mb-3">Le Reposoir (Home Row) expliqué en détails</h3>
                <p className="text-md mb-4">La "Home Row" est la rangée centrale de votre clavier. En dactylographie classique (QWERTY/AZERTY), vos doigts doivent toujours revenir se reposer sur ces touches clés, ce qui réduit considérablement le déplacement global des mains.</p>
                <div className="mt-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">
                  <div className="flex-1">
                     <h4 className="font-black text-slate-800 text-lg mb-4 flex items-center gap-2 justify-center lg:justify-start">
                        <span className="w-3 h-3 rounded-full bg-indigo-500"></span> Main Gauche
                     </h4>
                     <div className="flex justify-center lg:justify-start gap-2 mb-4">
                        <kbd className="px-3 py-2 bg-white border border-slate-200 rounded shadow-sm font-mono font-bold text-indigo-600 text-lg">Q/A</kbd>
                        <kbd className="px-3 py-2 bg-white border border-slate-200 rounded shadow-sm font-mono font-bold text-indigo-600 text-lg">S</kbd>
                        <kbd className="px-3 py-2 bg-white border border-slate-200 rounded shadow-sm font-mono font-bold text-indigo-600 text-lg">D</kbd>
                        <kbd className="px-3 py-2 bg-white border border-indigo-300 rounded shadow-sm font-mono font-bold text-indigo-700 border-b-4 border-b-indigo-500 relative">F</kbd>
                     </div>
                     <p className="text-slate-600">Auriculaire à Index. Notez l'<strong className="text-indigo-600">ergot physique</strong> sur le F (un petit trait en relief) pour positionner votre index aveuglément sans regarder vos touches.</p>
                  </div>
                  <div className="hidden lg:block w-px bg-slate-200 self-stretch"></div>
                  <div className="flex-1">
                     <h4 className="font-black text-slate-800 text-lg mb-4 flex items-center gap-2 justify-center lg:justify-start">
                       <span className="w-3 h-3 rounded-full bg-rose-500"></span> Main Droite
                     </h4>
                     <div className="flex justify-center lg:justify-start gap-2 mb-4">
                        <kbd className="px-3 py-2 bg-white border border-rose-300 rounded shadow-sm font-mono font-bold text-rose-700 border-b-4 border-b-rose-500 relative">J</kbd>
                        <kbd className="px-3 py-2 bg-white border border-slate-200 rounded shadow-sm font-mono font-bold text-rose-600 text-lg">K</kbd>
                        <kbd className="px-3 py-2 bg-white border border-slate-200 rounded shadow-sm font-mono font-bold text-rose-600 text-lg">L</kbd>
                        <kbd className="px-3 py-2 bg-white border border-slate-200 rounded shadow-sm font-mono font-bold text-rose-600 text-lg">M/;</kbd>
                     </div>
                     <p className="text-slate-600">Index à Auriculaire. Notez l'<strong className="text-rose-600">ergot physique</strong> symétrique sur le J. Dès que vous perdez le fil, balayez la zone pour trouver ces deux traits.</p>
                  </div>
                </div>
              </section>

              <section className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                 <h3 className="text-lg font-black text-emerald-800 mb-2">L'importance vitale des Pouces</h3>
                 <p className="text-emerald-700">Les deux pouces n'ont historiquement qu'une seule mission : <strong className="bg-emerald-200 px-1 rounded">Espace</strong>. La règle d'or est d'opérer la barre d'espace avec <strong className="underline">le pouce de la main opposée</strong> à celle qui vient de frapper la dernière lettre du mot. Cela distribue parfaitement la charge nerveuse sur les deux bras.</p>
              </section>
            </div>
          )}

          {/* RSI TAB */}
          {activeTab === 'rsi' && (
            <div className="space-y-8 animate-fade-in">
              <div className="bg-rose-50 border-2 border-rose-200 p-6 rounded-2xl mb-6 shadow-sm">
                <h4 className="font-black text-rose-800 text-lg mb-2 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span> TMS (RSI - Repetitive Strain Injury)
                </h4>
                <p className="text-rose-700 text-sm font-medium leading-relaxed">Les tendinites, le syndrome du canal carpien, la compression du nerf ulnaire et les douleurs cervicales détruisent des carrières complètes dans la tech chaque année. <strong>La douleur n'est pas normale.</strong> N'ignorez jamais un picotement, un engourdissement ou une inflammation persistante.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                 <section>
                   <h3 className="text-lg font-black text-slate-800 mb-4">1. Checklist du Poste de Travail</h3>
                   <ul className="space-y-4">
                     <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                       <span className="text-xl">✋</span> 
                       <div>
                          <strong>Poignets et Paumes</strong> 
                          <p className="text-xs text-slate-500 mt-1">Apanage classique : ne cassez JAMAIS vos poignets vers le haut (fermez les petits pieds sous le clavier). Reposez la base palpable de la main (paume), pas la jonction articulaire molle (poignet) où passent les nerfs.</p>
                       </div>
                     </li>
                     <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                       <span className="text-xl">💪</span> 
                       <div>
                          <strong>Coudes à '{'>'} 90°'</strong> 
                          <p className="text-xs text-slate-500 mt-1">L'angle de vos bras doit être légèrement ouvert. Le bureau et les accoudoirs doivent être au même niveau pour que vos avant-bras planent sans effort de l'épaule.</p>
                       </div>
                     </li>
                     <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                       <span className="text-xl">🖥️</span> 
                       <div>
                          <strong>Ligne d'Horizon (Écran)</strong> 
                          <p className="text-xs text-slate-500 mt-1">Le milieu de l'écran doit être face à vos yeux, voire légèrement en-dessous, avec un port de tête droit.</p>
                       </div>
                     </li>
                   </ul>
                 </section>

                 <section>
                   <h3 className="text-lg font-black text-slate-800 mb-4">2. Pauses & Outils (Micro-Breaks)</h3>
                   <p className="mb-4">La concentration vous fera oublier la douleur et le temps. Externalisez vos pauses avec ces outils recommandés :</p>
                   
                   <div className="flex flex-col gap-3 mb-6">
                      <a href="https://hovancik.net/stretchly/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-indigo-50 border border-indigo-100 hover:border-indigo-300 rounded-xl transition-all group">
                         <div>
                            <strong className="text-indigo-800 block mb-1">Stretchly</strong>
                            <p className="text-xs text-indigo-600">Appli open-source minimale bloquant doucement votre écran.</p>
                         </div>
                         <svg className="w-5 h-5 text-indigo-400 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </a>
                      <a href="https://workrave.org/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl transition-all group">
                         <div>
                            <strong className="text-slate-800 block mb-1">Workrave</strong>
                            <p className="text-xs text-slate-500">Historique et strict, conçu spécialement contre le RSI.</p>
                         </div>
                         <svg className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </a>
                   </div>

                   <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">🧘 Les 2 Étirements Clés (15s chacun)</h4>
                   <ul className="mt-2 space-y-2 text-sm bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <li><strong className="text-indigo-600">L'Extension ("Stop!") :</strong> Bras tendu droit devant vous, attrapez vos doigts en tirant délicatement vers vous, la paume poussant vers l'extérieur. Étire le dessous de l'avant-bras.</li>
                      <li className="mt-3"><strong className="text-indigo-600">La Flexion (Poignet Cassé) :</strong> Bras tendu devant vous, la paume tournée vers vous, tirez le plat de la main vers le sol en pliant le poignet. Étire le dessus de l'avant-bras.</li>
                   </ul>
                 </section>
              </div>
            </div>
          )}

          {/* HARDWARE TAB */}
          {activeTab === 'hardware' && (
            <div className="space-y-8 animate-fade-in">
              <section className="bg-yellow-50/50 p-6 rounded-2xl border border-yellow-100">
                <h3 className="text-lg font-black text-slate-800 mb-4">Le Matériel change la donne</h3>
                <p className="text-slate-700 leading-relaxed">Votre clavier ne doit pas être une surface inerte, mais un outil adaptatif. Investir dans un clavier sur-mesure est l'investissement santé le plus rentable de votre carrière.</p>
              </section>

              <div className="grid lg:grid-cols-2 gap-8">
                  <section>
                    <h3 className="text-lg font-black text-slate-800 mb-4">1. Types de "Switchs" Mécaniques</h3>
                    <p className="text-sm mb-4">La résistance mécanique d'une touche affecte la fatigue musculaire des doigts à chaque frappe :</p>
                    <ul className="space-y-3">
                      <li className="p-4 bg-white shadow-sm border border-slate-200 rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 bottom-0 w-1 bg-red-400"></div>
                        <strong className="text-red-700 block mb-1 text-md">🔴 Linear (Rouge/Noir)</strong>
                        <span className="text-xs text-slate-600">Silencieux et lisses. Aucune résistance au clic. Parfait pour les frappeurs très légers (qui "planent") ou le gaming intensif.</span>
                      </li>
                      <li className="p-4 bg-white shadow-sm border border-slate-200 rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 bottom-0 w-1 bg-amber-600"></div>
                        <strong className="text-amber-800 block mb-1 text-md">🟤 Tactile (Marron/Clear)</strong>
                        <span className="text-xs text-slate-600">Un léger "cran" physique se ressent au milieu, prouvant la frappe. <strong className="text-amber-900 border-b border-amber-300">Le roi des développeurs</strong> pour une tactilité sans déranger l'open-space.</span>
                      </li>
                      <li className="p-4 bg-white shadow-sm border border-slate-200 rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 bottom-0 w-1 bg-blue-500"></div>
                        <strong className="text-blue-800 block mb-1 text-md">🔵 Clicky (Bleu/Vert)</strong>
                        <span className="text-xs text-slate-600">Cran massif accompagné d'un "click" audible (façon machine à écrire). Satisfaction énorme... si vous travaillez seul !</span>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-black text-slate-800 mb-4">2. L'Univers des Claviers Alternatifs</h3>
                    <div className="grid gap-4">
                       <div className="p-4 bg-white shadow-sm border border-indigo-100 rounded-xl hover:border-indigo-300 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-black text-indigo-900">Split Ortholinaire</h4>
                            <a href="https://www.zsa.io/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-1 rounded hover:bg-indigo-100 transition-colors">ZSA (Moonlander) ↗</a>
                          </div>
                          <p className="text-xs text-slate-600">Séparé en 2 blocs pour ouvrir les épaules. Les touches sont empilées en colonnes droites (ortholinaires) au lieu d'être décalées, pour correspondre au mouvement naturel des doigts.</p>
                       </div>

                       <div className="p-4 bg-white shadow-sm border border-teal-100 rounded-xl hover:border-teal-300 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-black text-teal-900">Claviers "Alice" & Customs</h4>
                            <a href="https://splitkb.com/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold bg-teal-50 text-teal-600 px-2 py-1 rounded hover:bg-teal-100 transition-colors">SplitKB (Corne) ↗</a>
                          </div>
                          <p className="text-xs text-slate-600">Des blocs incurvés pour corriger la déviation ulnéaire sans diviser totalement le clavier. Un vaste écosystème très compact nécessitant une gestion avancée des "Layers".</p>
                       </div>

                       <div className="p-4 bg-white shadow-sm border border-slate-200 rounded-xl hover:border-slate-300 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-black text-slate-800">Mécaniques Commerciaux</h4>
                            <a href="https://www.keychron.com/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded hover:bg-slate-200 transition-colors">Keychron ↗</a>
                          </div>
                          <p className="text-xs text-slate-600">L'entrée de gamme premium pour découvrir les switches mécaniques de haute qualité et le form factor Low Profile (très fin, excellent pour la posture).</p>
                       </div>
                    </div>
                  </section>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 lg:p-8 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
           <p className="text-xs text-slate-400">Consultez également nos recommandations régulières pour optimiser vos flux.</p>
           <button onClick={onClose} className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 transition-all active:scale-95">J'ai compris !</button>
        </div>
      </div>
    </div>
  );
};

export default ErgoModal;
