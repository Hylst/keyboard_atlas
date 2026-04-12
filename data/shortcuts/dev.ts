
export const devShortcuts = [
  // --- INTELLIJ IDEA (JetBrains) ---
  {
    "id": "dev-int-search-all",
    "action": "Search Everywhere",
    "keys": ["Shift", "Shift"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "intellij",
    "difficulty": "Beginner",
    "description": "Cherche classes, fichiers, actions, tout."
  },
  {
    "id": "dev-int-intent",
    "action": "Show Intention (Quick Fix)",
    "keys": ["Alt", "Enter"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "intellij",
    "difficulty": "Beginner",
    "description": "La baguette magique pour corriger le code."
  },
  {
    "id": "dev-int-extend-sel",
    "action": "Étendre la sélection",
    "keys": ["Ctrl", "W"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "intellij",
    "difficulty": "Intermediate",
    "description": "Sélectionne le mot, puis l'expression, puis le bloc...",
    "alternatives": [{ "os": "macOS", "keys": ["Option", "Up"] }]
  },
  {
    "id": "dev-int-recent",
    "action": "Fichiers Récents",
    "keys": ["Ctrl", "E"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "intellij",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "E"] }]
  },
  {
    "id": "dev-int-refactor",
    "action": "Refactor This",
    "keys": ["Ctrl", "Alt", "Shift", "T"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "intellij",
    "difficulty": "Advanced",
    "alternatives": [{ "os": "macOS", "keys": ["Ctrl", "T"] }]
  },
  {
    "id": "dev-int-rename",
    "action": "Renommer (Rename)",
    "keys": ["Shift", "F6"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "intellij",
    "difficulty": "Intermediate"
  },
  
  // VS Code
  {
    "id": "dev-command-palette",
    "action": "Palette de commandes",
    "keys": ["Ctrl", "Shift", "P"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "vscode",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "P"] }]
  },
  {
    "id": "dev-comment",
    "action": "Commenter ligne/bloc",
    "keys": ["Ctrl", "/"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "vscode",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "/"] }]
  },
  {
    "id": "dev-dup-line-down",
    "action": "Dupliquer ligne (Bas)",
    "keys": ["Shift", "Alt", "Down"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "vscode",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Option", "Shift", "Down"] }]
  },
  {
    "id": "dev-move-line-up",
    "action": "Déplacer ligne (Haut)",
    "keys": ["Alt", "Up"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "vscode",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Option", "Up"] }]
  },
  {
    "id": "dev-move-line-down",
    "action": "Déplacer ligne (Bas)",
    "keys": ["Alt", "Down"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "vscode",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Option", "Down"] }]
  },
  {
    "id": "dev-multi-cursor",
    "action": "Multi-curseurs (Haut/Bas)",
    "keys": ["Ctrl", "Alt", "Up"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "vscode",
    "difficulty": "Advanced",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Option", "Up"] }]
  },
  {
    "id": "dev-terminal",
    "action": "Ouvrir Terminal intégré",
    "keys": ["Ctrl", "`"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "vscode",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Ctrl", "`"] }]
  },
  
  // Terminal / Shell Pure (Bash/Zsh)
  {
    "id": "term-reverse-search",
    "action": "Recherche historique (Reverse Search)",
    "keys": ["Ctrl", "R"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Intermediate",
    "description": "Rechercher dans les commandes précédentes."
  },
  {
    "id": "term-start-line",
    "action": "Aller au début de ligne",
    "keys": ["Ctrl", "A"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Beginner"
  },
  {
    "id": "term-end-line",
    "action": "Aller à la fin de ligne",
    "keys": ["Ctrl", "E"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Beginner"
  },
  {
    "id": "term-word-fwd",
    "action": "Mot Suivant",
    "keys": ["Alt", "F"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Esc", "F"] }]
  },
  {
    "id": "term-word-back",
    "action": "Mot Précédent",
    "keys": ["Alt", "B"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Esc", "B"] }]
  },
  {
    "id": "term-del-word-prev",
    "action": "Suppr. mot précédent",
    "keys": ["Ctrl", "W"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Intermediate"
  },
  {
    "id": "term-del-word-next",
    "action": "Suppr. mot suivant",
    "keys": ["Alt", "D"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Esc", "D"] }]
  },
  {
    "id": "term-delete-char",
    "action": "Supprimer caractère / Logout",
    "keys": ["Ctrl", "D"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Intermediate",
    "description": "Supprime le caractère sous le curseur ou ferme le shell si vide."
  },
  {
    "id": "term-transpose-char",
    "action": "Inverser caractères (Typos)",
    "keys": ["Ctrl", "T"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Advanced",
    "description": "Échange le caractère actuel avec le précédent."
  },
  {
    "id": "term-transpose-word",
    "action": "Inverser mots",
    "keys": ["Alt", "T"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Advanced",
    "alternatives": [{ "os": "macOS", "keys": ["Esc", "T"] }]
  },
  {
    "id": "term-capitalize",
    "action": "Capitaliser le mot",
    "keys": ["Alt", "C"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Advanced",
    "description": "Met la première lettre en majuscule.",
    "alternatives": [{ "os": "macOS", "keys": ["Esc", "C"] }]
  },
  {
    "id": "term-uppercase",
    "action": "Mettre mot en MAJ",
    "keys": ["Alt", "U"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Advanced",
    "alternatives": [{ "os": "macOS", "keys": ["Esc", "U"] }]
  },
  {
    "id": "term-lowercase",
    "action": "Mettre mot en min",
    "keys": ["Alt", "L"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Advanced",
    "alternatives": [{ "os": "macOS", "keys": ["Esc", "L"] }]
  },
  {
    "id": "term-undo",
    "action": "Annuler (Undo)",
    "keys": ["Ctrl", "_"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Advanced",
    "description": "Souvent Shift + - sur certains claviers."
  },
  {
    "id": "term-clear",
    "action": "Effacer l'écran (Clear)",
    "keys": ["Ctrl", "L"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Beginner"
  },
  {
    "id": "term-cut-line",
    "action": "Couper ligne (Kill)",
    "keys": ["Ctrl", "U"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Advanced",
    "description": "Supprime tout à gauche du curseur."
  },
  {
    "id": "term-cut-end",
    "action": "Couper jusqu'à fin",
    "keys": ["Ctrl", "K"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Advanced"
  },
  {
    "id": "term-last-arg",
    "action": "Réutiliser dernier argument",
    "keys": ["Alt", "."],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Advanced",
    "description": "Insère le dernier mot de la commande précédente.",
    "alternatives": [{ "os": "macOS", "keys": ["Esc", "."] }]
  },
  {
    "id": "term-cancel",
    "action": "Annuler la commande (SIGINT)",
    "keys": ["Ctrl", "C"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Beginner"
  },
  {
    "id": "term-stop",
    "action": "Suspendre (SIGTSTP)",
    "keys": ["Ctrl", "Z"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Advanced",
    "description": "Met le processus en arrière-plan."
  },
  {
    "id": "term-paste",
    "action": "Coller dans Terminal",
    "keys": ["Ctrl", "Shift", "V"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "V"] }]
  },
  {
    "id": "term-edit-editor",
    "action": "Éditer dans l'éditeur ($EDITOR)",
    "keys": ["Ctrl", "X", "E"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Advanced",
    "description": "Ouvre la commande actuelle dans Vim/Nano pour édition complexe."
  },
  {
    "id": "term-comment-run",
    "action": "Commenter & Sauver (History)",
    "keys": ["Alt", "#"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "terminal",
    "difficulty": "Advanced",
    "description": "Ajoute # au début et valide. Garde la commande en historique sans l'exécuter.",
    "alternatives": [{ "os": "macOS", "keys": ["Esc", "#"] }]
  },

  // --- JETBRAINS (WebStorm / Android Studio) ---
  {
    "id": "dev-jb-search-all",
    "action": "Search Everywhere",
    "keys": ["Shift", "Shift"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "webstorm",
    "difficulty": "Beginner"
  },
  {
    "id": "dev-jb-refactor",
    "action": "Refactor This",
    "keys": ["Ctrl", "Alt", "Shift", "T"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "webstorm",
    "difficulty": "Advanced",
    "alternatives": [{ "os": "macOS", "keys": ["Ctrl", "T"] }]
  },
  {
    "id": "dev-as-run",
    "action": "Run App",
    "keys": ["Shift", "F10"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "android-studio",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Ctrl", "R"] }]
  },
  {
    "id": "dev-as-sync",
    "action": "Sync Project with Gradle Files",
    "keys": ["Ctrl", "Shift", "O"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "android-studio",
    "difficulty": "Intermediate"
  },

  // --- GIT UI (GitHub Desktop / SourceTree) ---
  {
    "id": "git-gh-commit",
    "action": "Commit Changes",
    "keys": ["Ctrl", "Enter"],
    "os": ["Windows"],
    "category": "dev",
    "software": "github-desktop",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Enter"] }]
  },
  {
    "id": "git-gh-push",
    "action": "Push to Origin",
    "keys": ["Ctrl", "P"],
    "os": ["Windows"],
    "category": "dev",
    "software": "github-desktop",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "P"] }]
  },
  {
    "id": "git-gh-pull",
    "action": "Pull from Origin",
    "keys": ["Ctrl", "Shift", "P"],
    "os": ["Windows"],
    "category": "dev",
    "software": "github-desktop",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "P"] }]
  },
  {
    "id": "git-st-commit",
    "action": "Commit",
    "keys": ["Ctrl", "Shift", "C"],
    "os": ["Windows"],
    "category": "dev",
    "software": "sourcetree",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "C"] }]
  },
  {
    "id": "git-st-fetch",
    "action": "Fetch",
    "keys": ["Ctrl", "Shift", "F"],
    "os": ["Windows"],
    "category": "dev",
    "software": "sourcetree",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "F"] }]
  },
  {
    "id": "git-st-pull",
    "action": "Pull",
    "keys": ["Ctrl", "Shift", "P"],
    "os": ["Windows"],
    "category": "dev",
    "software": "sourcetree",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "P"] }]
  },

  // --- MODERN TERMINALS (iTerm2 / Windows Terminal) ---
  {
    "id": "term-iterm-split-v",
    "action": "Split Vertical",
    "keys": ["Cmd", "D"],
    "os": ["macOS"],
    "category": "dev",
    "software": "iterm2",
    "difficulty": "Intermediate"
  },
  {
    "id": "term-iterm-split-h",
    "action": "Split Horizontal",
    "keys": ["Cmd", "Shift", "D"],
    "os": ["macOS"],
    "category": "dev",
    "software": "iterm2",
    "difficulty": "Intermediate"
  },
  {
    "id": "term-wt-palette",
    "action": "Command Palette",
    "keys": ["Ctrl", "Shift", "P"],
    "os": ["Windows"],
    "category": "dev",
    "software": "windows-terminal",
    "difficulty": "Beginner"
  },
  {
    "id": "term-wt-new-tab",
    "action": "New Tab",
    "keys": ["Ctrl", "Shift", "T"],
    "os": ["Windows"],
    "category": "dev",
    "software": "windows-terminal",
    "difficulty": "Beginner"
  },
  {
    "id": "term-wt-split",
    "action": "Split Pane Auto",
    "keys": ["Alt", "Shift", "D"],
    "os": ["Windows"],
    "category": "dev",
    "software": "windows-terminal",
    "difficulty": "Intermediate"
  }
];
