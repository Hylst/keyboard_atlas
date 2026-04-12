
# Structure du Projet

Le projet suit une architecture React modulaire avec une forte séparation des préoccupations de données.

## 📂 Arborescence des Fichiers

```
/
├── index.html              # Point d'entrée + SEO Meta tags
├── index.tsx               # Racine React
├── App.tsx                 # Layout Principal & Orchestration d'état
├── metadata.json           # Manifeste de l'application
├── types.ts                # Interfaces TypeScript (Shortcut, Category, Software)
│
├── components/             # Composants UI
│   ├── Key.tsx             # Visualisation d'une touche unique
│   ├── ShortcutCard.tsx    # Carte d'affichage d'un raccourci
│   ├── Sidebar.tsx         # Navigation, stats et filtres
│   ├── Quiz.tsx            # Moteur de jeu SRS (Overlay)
│   ├── SpeedRun.tsx        # Moteur de jeu Arcade (Overlay)
│   ├── TypingGame.tsx      # Minijeu de frappe au clavier (Monkeytype-like)
│   ├── CommandPalette.tsx  # Palette de commande (Ctrl+K)
│   ├── MacGlossary.tsx     # Modal d'aide pour symboles Mac
│   ├── LegalModal.tsx      # Mentions légales et CGU
│   ├── ErgoModal.tsx       # Conseils Ergonomie & Santé
│   ├── InfoModal.tsx       # À propos & Auteur
│   ├── Onboarding.tsx      # Guide de bienvenue interactif pour les nouveaux utilisateurs
│   └── Confetti.tsx        # Effets visuels de victoire
│
├── hooks/                  # Hooks Personnalisés
│   ├── useAtlas.ts         # Contrôleur logique principal (Filtres, Recherche)
│   ├── usePreferences.ts   # Persistance LocalStorage (OS, Favoris, SRS)
│   └── useKeystroke.ts     # Détection des frappes clavier
│
└── data/                   # La Base de Connaissance
    ├── categories.ts       # Liste des catégories
    ├── softwares.ts        # Liste des logiciels supportés
    ├── learningPaths.ts    # Parcours d'apprentissage
    ├── shortcuts.ts        # Exportateur principal
    └── shortcuts/          # Données modulaires
        ├── general.ts
        ├── navigation.ts
        ├── web.ts
        ├── dev.ts
        ├── devops.ts
        ├── productivity.ts
        ├── system.ts
        ├── edition.ts
        ├── communication.ts
        ├── creative.ts
        ├── data.ts
        ├── media.ts
        └── accessibility.ts
```

## 🧠 Architecture des Données

### L'Interface `Shortcut`
Chaque raccourci est un objet contenant :
*   `id`: Identifiant unique (ex: `nav-jump-word`).
*   `keys`: Tableau de chaînes pour l'OS principal (généralement Windows).
*   `alternatives`: Surcharges pour macOS/Linux/Windows si les touches diffèrent.
*   `category` & `software`: Pour le filtrage.
*   `difficulty`: Beginner/Intermediate/Advanced pour le tri et les badges.

### Gestion d'État
*   **usePreferences:** Gère la persistance. Les paramètres utilisateur (choix OS, raccourcis maîtrisés) sont sauvegardés dans `localStorage`.
*   **useAtlas:** Agit comme le cerveau central. Il ingère les données brutes et applique les filtres pour retourner le tableau `filteredShortcuts` à l'interface.
