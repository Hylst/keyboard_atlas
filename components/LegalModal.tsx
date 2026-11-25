
import React, { useState } from 'react';

interface LegalModalProps {
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'mentions' | 'privacy' | 'tos'>('mentions');

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
          <h2 className="text-xl font-black text-slate-800">Informations Légales</h2>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-slate-500 hover:bg-slate-300 transition-colors font-bold">✕</button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-100">
          <button 
            onClick={() => setActiveTab('mentions')}
            className={`flex-1 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${activeTab === 'mentions' ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Mentions Légales
          </button>
          <button 
            onClick={() => setActiveTab('privacy')}
            className={`flex-1 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${activeTab === 'privacy' ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Confidentialité (RGPD)
          </button>
          <button 
            onClick={() => setActiveTab('tos')}
            className={`flex-1 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${activeTab === 'tos' ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' : 'text-slate-400 hover:text-slate-600'}`}
          >
            CGU
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-8 custom-scrollbar text-sm text-slate-600 leading-relaxed">
          {activeTab === 'mentions' && (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-black text-slate-800 mb-2">1. Éditeur du site</h3>
                <p>Le site <strong>Keyboard Atlas</strong> est édité par :</p>
                <ul className="list-disc ml-4 mt-2">
                  <li><strong>Nom :</strong> Geoffroy Streit (Hylst)</li>
                  <li><strong>Contact :</strong> geoffroy.streit@ik.me</li>
                  <li><strong>Statut :</strong> site personnel édité à titre non professionnel, publié sur la plateforme hylst.fr</li>
                  <li><strong>Conception :</strong> application créée par Geoffroy Streit avec l'assistance d'une IA</li>
                </ul>
              </section>
              <section>
                <h3 className="text-lg font-black text-slate-800 mb-2">2. Hébergement</h3>
                <p>Le site est hébergé par :</p>
                <ul className="list-disc ml-4 mt-2">
                  <li><strong>Hébergeur :</strong> Hostinger International Limited</li>
                  <li><strong>Adresse :</strong> 61 Lordou Vironos Street, 6023 Larnaca, Chypre</li>
                  <li><strong>Serveur :</strong> serveur privé virtuel situé au Royaume-Uni</li>
                </ul>
                <p className="mt-2">
                  Mentions légales et politique de confidentialité complètes de la plateforme :{' '}
                  <a href="https://hylst.fr/mentions-legales.html" target="_blank" rel="noopener" className="text-indigo-600 font-bold hover:underline">hylst.fr/mentions-legales.html</a>.
                </p>
              </section>
              <section>
                <h3 className="text-lg font-black text-slate-800 mb-2">3. Propriété Intellectuelle</h3>
                <p>L'ensemble du code source de ce projet est sous licence AGPL-3.0-or-later. Le contenu (structure des données, textes, design) est la propriété exclusive de l'éditeur, sauf mention contraire.</p>
              </section>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl mb-6">
                <h4 className="font-bold text-emerald-800 mb-1">Résumé RGPD</h4>
                <p className="text-emerald-700 text-xs">L'application ne collecte aucune donnée personnelle : tout est stocké localement sur votre machine. Seuls les journaux techniques du serveur web sont conservés, douze mois au plus.</p>
              </div>

              <section>
                <h3 className="text-lg font-black text-slate-800 mb-2">1. Collecte des données</h3>
                <p><strong>Keyboard Atlas</strong> respecte votre vie privée. L'application fonctionne selon le principe du "Local-First".</p>
                <p className="mt-2">L'application n'envoie aucune donnée personnelle à un serveur et n'utilise pas de base de données. Comme tout serveur web, celui de la plateforme hylst.fr enregistre des journaux techniques (adresse IP, date, page demandée, navigateur) pour la sécurité, sur la base de l'intérêt légitime de l'éditeur (RGPD, article 6.1.f). Ils sont conservés douze mois au plus.</p>
                <p className="mt-2">Si vous écrivez à l'adresse de contact, votre message reste dans la messagerie de l'éditeur, fournie par Infomaniak Network SA en Suisse (pays couvert par une décision d'adéquation de la Commission européenne), et sert uniquement à vous répondre.</p>
              </section>

              <section>
                <h3 className="text-lg font-black text-slate-800 mb-2">2. Stockage Local (LocalStorage)</h3>
                <p>Pour assurer le fonctionnement des fonctionnalités suivantes, nous stockons des données directement dans le navigateur de votre appareil via la technologie <code>localStorage</code> :</p>
                <ul className="list-disc ml-4 mt-2">
                  <li>Préférences d'OS et de Clavier.</li>
                  <li>Progression dans le mode Quiz (Système SRS).</li>
                  <li>Liste des favoris.</li>
                  <li>Meilleurs scores du mode Arcade.</li>
                </ul>
                <p className="mt-2">Ces données ne quittent jamais votre navigateur. Vous pouvez les supprimer à tout moment en vidant le cache de votre navigateur ou via le bouton "Réinitialiser" dans les paramètres de l'application.</p>
              </section>

              <section>
                <h3 className="text-lg font-black text-slate-800 mb-2">3. Cookies</h3>
                <p>Cette application n'utilise aucun cookie tiers de traçage publicitaire ou d'analyse comportementale (type Google Analytics).</p>
              </section>
            </div>
          )}

          {activeTab === 'tos' && (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-black text-slate-800 mb-2">1. Objet</h3>
                <p>Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités de mise à disposition des services du site <strong>Keyboard Atlas</strong>.</p>
              </section>

              <section>
                <h3 className="text-lg font-black text-slate-800 mb-2">2. Accès au service</h3>
                <p>Le service est accessible gratuitement à tout utilisateur disposant d'un accès à internet. L'éditeur met en œuvre tous les moyens pour assurer un accès de qualité, mais n'est tenu à aucune obligation d'y parvenir (obligation de moyens).</p>
              </section>

              <section>
                <h3 className="text-lg font-black text-slate-800 mb-2">3. Responsabilité</h3>
                <p>Les informations et raccourcis clavier diffusés sur le site sont réputés fiables mais le site ne garantit pas qu'il soit exempt de défauts, d'erreurs ou d'omissions.</p>
                <p className="mt-2">L'utilisation des informations et contenus disponibles sur l'ensemble du site ne saurait en aucun cas engager la responsabilité de l'éditeur. L'utilisateur est seul maître de la bonne utilisation, avec discernement et esprit, des informations mises à sa disposition.</p>
              </section>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50 text-center">
           <button onClick={onClose} className="text-indigo-600 font-bold hover:underline text-sm">Fermer</button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
