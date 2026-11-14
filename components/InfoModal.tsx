
import React, { useState } from 'react';

interface InfoModalProps {
  onClose: () => void;
}

type Tab = 'about' | 'creator' | 'stack' | 'privacy' | 'changelog';

const TABS: { id: Tab; label: string; emoji: string }[] = [
  { id: 'about',   label: 'À propos',  emoji: '🎯' },
  { id: 'creator', label: 'Créateur',  emoji: '👤' },
  { id: 'stack',   label: 'Stack',     emoji: '⚙️' },
  { id: 'privacy', label: 'Vie Privée', emoji: '🔒' },
  { id: 'changelog', label: 'Nouveautés', emoji: '📌' },
];

const InfoModal: React.FC<InfoModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<Tab>('about');

  return (
    <div 
      className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[88vh] animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-slate-900 text-white p-8 overflow-hidden flex-shrink-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-[80px] opacity-40 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-600 rounded-full blur-[60px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-xl shadow-lg">⌨️</div>
              <div>
                <h2 className="text-2xl font-black tracking-tight leading-none">Keyboard <span className="text-indigo-400">Atlas</span></h2>
                <p className="text-slate-400 text-xs font-medium mt-0.5">v1.36c — Votre atlas du clavier</p>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md text-white font-bold"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-100 bg-slate-50 flex-shrink-0">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest transition-all flex flex-col items-center gap-1 ${
                activeTab === tab.id
                  ? 'text-indigo-600 border-b-2 border-indigo-600 bg-white'
                  : 'text-slate-400 hover:text-slate-600 border-b-2 border-transparent'
              }`}
            >
              <span className="text-base">{tab.emoji}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="overflow-y-auto custom-scrollbar p-8 flex-1">

          {/* ─── TAB: À PROPOS ─── */}
          {activeTab === 'about' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                  🎯 La Mission
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  La souris est intuitive, mais lente. Le clavier est rapide, mais invisible.
                  <br /><br />
                  <strong>Keyboard Atlas</strong> comble ce fossé. Ce n'est pas juste une liste, c'est un outil interactif conçu pour transformer la connaissance théorique d'un raccourci en <strong>mémoire musculaire</strong> grâce à la répétition et au jeu.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  ⚡ Fonctionnalités Clés
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: '🧠', title: 'SRS Quiz', desc: 'Répétition espacée qui cible intelligemment les raccourcis sur le point d\'être oubliés.' },
                    { icon: '🕹️', title: 'Speed Run', desc: 'Contre-la-montre de 60s pour tester vos réflexes et battre vos records.' },
                    { icon: '⌨️', title: 'Clavier Virtuel', desc: 'Visualisez les combinaisons sur votre disposition réelle (AZERTY, QWERTY, DVORAK…).' },
                    { icon: '🔒', title: '100% Hors-ligne', desc: 'Votre progression et vos favoris ne quittent jamais votre navigateur.' },
                    { icon: '🧘‍♀️', title: 'Guide Ergo', desc: 'Conseils posture, Home Row, choix du clavier et prévention des TMS.' },
                    { icon: '🖨️', title: 'Export PDF', desc: 'Imprimez vos favoris sous forme de Cheat Sheet personnalisée.' },
                  ].map(f => (
                    <div key={f.title} className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
                      <div className="text-xl mb-2">{f.icon}</div>
                      <h4 className="font-bold text-slate-800 text-sm">{f.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ─── TAB: CRÉATEUR ─── */}
          {activeTab === 'creator' && (
            <div className="space-y-6 animate-fade-in">
              {/* Identity card */}
              <div className="flex items-center gap-5 p-5 bg-gradient-to-br from-indigo-50 to-slate-50 rounded-2xl border border-indigo-100">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-3xl shadow-lg flex-shrink-0">
                  🧑‍💻
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 leading-tight">Geoffroy Streit</h3>
                  <p className="text-xs text-indigo-600 font-bold uppercase tracking-widest">Hylst</p>
                  <p className="text-xs text-slate-500 mt-1">Développeur · Formateur · Maker</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                  📖 Profil
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Passionné par l\'accessibilité numérique, la pédagogie interactive et les interfaces qui font <em>vraiment</em> gagner du temps. Keyboard Atlas est né d\'un constat simple : on apprend mieux ce qu\'on pratique, pas ce qu\'on lit.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                  🔗 Contacts & Liens
                </h3>
                <div className="space-y-2">
                  {[
                    { icon: '✉️', label: 'E-mail', value: 'geoffroy.streit@ik.me', href: 'mailto:geoffroy.streit@ik.me' },
                    { icon: '💻', label: 'Code source', value: 'github.com/Hylst/keyboard-atlas', href: 'https://github.com/Hylst/keyboard-atlas' },
                    { icon: '🌐', label: 'Site web', value: 'hylst.fr', href: 'https://hylst.fr' },
                  ].map(link => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 hover:border-indigo-200 hover:shadow-sm transition-all group"
                    >
                      <span className="text-xl w-8 text-center">{link.icon}</span>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{link.label}</p>
                        <p className="text-xs font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">{link.value}</p>
                      </div>
                      <span className="ml-auto text-slate-300 group-hover:text-indigo-400 transition-colors text-xs">→</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 text-xs text-amber-800 leading-relaxed">
                💛 <strong>Open-source & libre d\'accès.</strong> Si ce projet vous est utile, une ⭐ sur GitHub ou un partage font toujours plaisir !
              </div>
            </div>
          )}

          {/* ─── TAB: STACK ─── */}
          {activeTab === 'stack' && (
            <div className="space-y-6 animate-fade-in">
              <p className="text-sm text-slate-600 leading-relaxed">
                Keyboard Atlas démontre l\'utilisation de l\'<strong>IA générative</strong> comme assistant de programmation pour accélérer le développement d\'interfaces React complexes.
              </p>

              <div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">🏗️ Technologies</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'React 19', desc: 'UI réactive & composants', color: 'text-cyan-600 bg-cyan-50 border-cyan-100' },
                    { name: 'TypeScript', desc: 'Typage strict & sûreté', color: 'text-blue-600 bg-blue-50 border-blue-100' },
                    { name: 'Tailwind CSS', desc: 'Design system utilitaire', color: 'text-teal-600 bg-teal-50 border-teal-100' },
                    { name: 'Vite', desc: 'Bundler ultra-rapide', color: 'text-violet-600 bg-violet-50 border-violet-100' },
                    { name: 'localStorage', desc: 'Persistance 100% locale', color: 'text-orange-600 bg-orange-50 border-orange-100' },
                    { name: 'IA Assistée', desc: 'Gemini / Claude co-pilot', color: 'text-indigo-600 bg-indigo-50 border-indigo-100' },
                  ].map(tech => (
                    <div key={tech.name} className={`p-4 rounded-xl border ${tech.color}`}>
                      <h4 className="font-black text-sm">{tech.name}</h4>
                      <p className="text-[11px] mt-0.5 opacity-80">{tech.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-3">📐 Architecture</h3>
                <div className="space-y-2 text-xs text-slate-600">
                  {[
                    { icon: '🧩', text: 'Hooks React custom (useAtlas, usePreferences, useKeystroke) pour une logique encapsulée et testable' },
                    { icon: '📦', text: 'Data-driven : bibliothèque de +250 raccourcis en JSON pur, extensible sans toucher au code' },
                    { icon: '🚫', text: 'Zéro dépendance externe à des API tierces ou CDN externes — build 100% déterministe' },
                    { icon: '🐳', text: 'Déployable sur Nginx/Docker via un simple `npm run build` → `dist/`' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <span>{item.icon}</span>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ─── TAB: VIE PRIVÉE ─── */}
          {activeTab === 'privacy' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-4 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl">
                <div className="text-4xl">🔒</div>
                <div>
                  <h3 className="font-black text-emerald-800">Confidentialité Totale</h3>
                  <p className="text-xs text-emerald-700 mt-0.5">Aucune donnée ne quitte votre appareil.</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { title: 'Aucun tracking', desc: 'Pas de cookies analytiques, pas de Google Analytics, pas de pixel publicitaire.' },
                  { title: 'Aucune API externe', desc: 'Zéro appel réseau. Même les polices de caractères sont hébergées localement.' },
                  { title: 'localStorage uniquement', desc: 'Vos favoris, votre progression SRS et vos scores restent dans votre navigateur.' },
                  { title: 'Export / Import JSON', desc: 'Sauvegardez et restaurez vos données vous-même, sous forme de fichier JSON lisible.' },
                  { title: 'Open-source', desc: 'Le code source est auditable publiquement sur GitHub.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-3 p-4 bg-white rounded-xl border border-slate-100">
                    <span className="text-emerald-500 font-black mt-0.5">✓</span>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{item.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-500 leading-relaxed">
                Pour effacer toutes vos données locales, utilisez le bouton <strong>"Réinitialiser les données"</strong> dans la barre latérale, ou videz le localStorage de votre navigateur depuis ses outils de développement.
              </div>
            </div>
          )}

          {/* ─── TAB: CHANGELOG ─── */}
          {activeTab === 'changelog' && (
            <div className="space-y-6 animate-fade-in">
              <div className="relative pl-6 border-l-2 border-indigo-100 space-y-8">
                {/* v1.36.0 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white"></div>
                  <h3 className="text-lg font-black text-slate-900 leading-none mb-1">
                    v1.36.0 <span className="text-sm font-bold text-slate-400 ml-2">Focus Mode & Gamification V3</span>
                  </h3>
                  <div className="space-y-3 mt-4">
                    <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                      <h4 className="text-xs font-black text-indigo-800 uppercase tracking-widest mb-2 flex items-center gap-2">🚀 Nouvelles Fonctionnalités</h4>
                      <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
                        <li><strong>Typing Speed Game :</strong> Mini-jeu "Monkeytype-like" intégré.</li>
                        <li><strong>Export/Import JSON :</strong> Sauvegardez et restaurez vos configurations (OS, layout) et vos scores.</li>
                        <li><strong>Dark Mode Toggle :</strong> Mode nuit supporté.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* v1.0.0 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-200 border-4 border-white"></div>
                  <h3 className="text-lg font-black text-slate-600 leading-none mb-1">
                    v1.0.0 <span className="text-sm font-bold text-slate-400 ml-2">Gold Release 📀</span>
                  </h3>
                  <div className="space-y-3 mt-4">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                        <li><strong>Arcade Mode :</strong> Contre-la-montre de 60s.</li>
                        <li><strong>Layout Support :</strong> AZERTY, QWERTY, DVORAK, COLEMAK.</li>
                        <li><strong>Productivity Pack :</strong> Notion, Obsidian, Trello, Adobe Lightroom.</li>
                        <li><strong>Mentions légales :</strong> Conformité RGPD et CGU françaises.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default InfoModal;
