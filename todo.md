# Pistes d'Amélioration & Fonctionnalités Futures (TODO)
> Dernière mise à jour : 2026-04-12

---

## ✅ Complété

- **Ergonomie & Accessibilité :** ErgoModal avec 4 onglets (Placement, RSI, Clavier, Témoignages), illus, liens.
- **Export / Import JSON :** Sauvegarde / restauration du localStorage (favoris, maîtrise, scores, préfs OS/layout) via fichier JSON.
- **InfoModal enrichi :** 4 onglets (À propos, Créateur, Stack, Vie Privée) avec infos Geoffroy Streit v1.36c.
- **Scroll Sidebar :** Bloc navigation (Parcours + Logiciels + Progression) scrollable avec `overflow-y-auto`.
- **Fix sélecteur Layout :** Remplacement du CSS `group-hover` défaillant par un toggle `onClick` + fermeture au clic extérieur.
- **Typing Speed Game :** Moteur de jeu complet (3 modes, 3 durées, heatmap erreurs, records par mode persistés).
- **Empty-state Favoris :** Message contextuel + CTA "Explorer" quand aucun favori n'existe.
- **focus:ring ErgoModal :** Bouton fermeture accessible au clavier (`focus:ring-2 focus:ring-indigo-500` + `aria-label`).
- **Lazy loading modales :** ErgoModal, InfoModal, LegalModal en `React.lazy` + `Suspense` (~50kB économisés au démarrage).
- **SEO :** `sitemap.xml` et `robots.txt` générés dans `/public/`.
- **Dark mode toggle :** Bouton 🌙/☀️ dans le header, persisté en localStorage, appliqué via classe `dark` sur `<html>`.
- **Badge Speed Run :** Badge 🏆 score visible dans le bouton Speed Run de la Sidebar.
- **Focus quotidien seedé :** Le raccourci du jour est déterministe (hash de la date) — ne change plus à chaque rechargement.

---

## 🐛 Bugs, Incohérences & UX (Analyse Récente)

### Contenu & Données (Omissions)
- [x] **Softwares manquants (`data/softwares.ts`)** : Il manque des outils de dev essentiels comme Git (GitHub Desktop / SourceTree), IDE (WebStorm, Android Studio), Outils système (Explorateur Windows, Finder Mac présent mais seul, terminaux modernes iTerm2/Windows Terminal), et Navigateurs Web (Firefox, Safari).

### Expérience Utilisateur (UX)
- [x] **Empty State Filtres Trompeur** : Lorsqu'un croisement de filtres (Catégorie + Logiciel) ne donne rien, le message affiche "Essayez de cliquer sur le clavier virtuel", ce qui est hors-sujet. -> À remplacer par "Aucun raccourci ne correspond à ces critères" avec bouton "Réinitialiser les filtres".
- [x] **Déclenchement Quiz de Révision** : Le badge "X cartes nécessitent une révision" dans la barre de *Progression* (Sidebar) n'est **pas cliquable**. Il devrait agir comme un bouton pour lancer une session Quiz isolant ces cartes "Dues" (SRS).
- [x] **Surcharge Visuelle Sidebar (Logiciels)** : Actuellement affichés en grille complète. Si on ajoute des logiciels, la liste va saturer la hauteur écran. -> Nécessite un regroupement accordéon ou limiter l'affichage (ex: top 6 avec bouton "Voir tous").
- [x] **Bouton Maîtrise Trop Long** : Le terme "MARQUER COMME MAÎTRISÉE" casse parfois le container bouton de la carte (`ShortcutCard.tsx`) sur petit écran. -> Raccourcir à "Maîtrisé" ou gérer le clamp HTML.
- [ ] **Tooltips Premium Absents** : Les boutons iconographiques (🧘‍♀️, `i`, Export/Import) n'utilisent que de simples bulles natives `title=""`. Manque un vrai composant Tooltip contextuel stylé.

### Bugs d'Interface Connus
- [ ] Le compteur de progression ("X maîtrisés") de la `Sidebar` est parfois désynchronisé localement lors d'un Toggle de carte, nécessitant un reload pour rafraîchir.
- [ ] **Mode sombre** : L'activation fonctionne (classe `.dark` sur `html`) mais le CSS utilitaire `dark:` manque sur 95% des composants internes UI.
- [ ] **Catégorie active Mobile** : Le petit bandeau de scroll masque le badge de la catégorie active si l'utilisateur scroll horizontalement.
- [ ] **Shortcut card hover** : L'animation CSS 3D (`scale-[1.02]`) bug ou est filtrée par le moteur gecko (`backdrop-filter`) sur Firefox.
- [ ] **Clavier virtuel DVORAK/COLEMAK** : Certaines touches virtuelles n'affichent pas les bons glyphes typographiques (encodés en dur AZERTY).
- [ ] **Responsive** : Sur viewport < 900px, le clavier virtuel génère un défilement horizontal ou déborde de la grille conteneur (`overflow-x` à gérer).

---

## 🎨 Design (Modales & UI)
- [ ] **InfoModal / LegalModal** : Le `backdrop-blur` complet impacte fortement le rendu GPU, baisser/harmoniser avec `backdrop-blur-sm` transparent (`bg-slate-900/60`).
- [x] **Onboarding** : Scène overlay "bienvenue" pour un nouvel utilisateur (détecté via l'absence de clé localStorage dédiée).
- [ ] **Animations Globales** : Implémenter le hook `animate-fade-in` de façon consistante sur le toggle de filtres ou vues.
- [ ] **Quiz Résultats** : Les confettis sont pertinents, mais la note de réussite ne roule pas d'anim visuelle sur son compteur (`0% -> 80%`).

---

## 🔧 Architecture & Tests
- [ ] **`useAtlas.ts`** : Le 'Dieu Hook' (+190 lignes) monopolise l'orchestration état -> À partitionner en `useAtlasFilters`, `useAtlasPrefs`, etc.
- [ ] **Types limités** : Ajouter des modèles de layouts power-user (`COLEMAK-DH`).
- [ ] **Tests** : 0 test unitaire couvert. Setup Vitest sur la logique pure SRS `submitQuizResult`.

---

## 📦 PWA / Déploiement Production
- [ ] **`manifest.json`** : Mettre au point la propriété `start_url` pour adresser `/keyboard_atlas/` depuis le proxy nginx.
- [ ] **Accessibilité** : Icone globale AppIcon Sidebar est purement design. Nécessite un `aria-hidden` ou text screen-reader.
- [ ] **Header Secu Nginx** : Protéger le serveur statique LWS/Docker : `CSP`, `X-Content-Type-Options`, `X-Frame-Options: SAMEORIGIN`.
