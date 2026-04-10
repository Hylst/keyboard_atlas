
export const systemShortcuts = [
  // --- EXISTING BASIC SYSTEM ---
  {
    "id": "sys-screenshot",
    "action": "Capture d'écran partielle",
    "keys": ["Win", "Shift", "S"],
    "os": ["Windows"],
    "category": "system",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "4"] }]
  },
  {
    "id": "sys-lock",
    "action": "Verrouiller la session",
    "keys": ["Win", "L"],
    "os": ["Windows"],
    "category": "system",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Ctrl", "Cmd", "Q"] }]
  },
  {
    "id": "sys-task-manager",
    "action": "Gestionnaire des tâches",
    "keys": ["Ctrl", "Shift", "Esc"],
    "os": ["Windows"],
    "category": "system",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Option", "Esc"] }]
  },
  {
    "id": "sys-spotlight",
    "action": "Recherche Globale (Spotlight)",
    "keys": ["Win", "S"],
    "os": ["Windows"],
    "category": "system",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Space"] }]
  },
  {
    "id": "sys-force-quit",
    "action": "Forcer à Quitter",
    "keys": ["Alt", "F4"],
    "os": ["Windows"],
    "category": "system",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Option", "Esc"] }]
  },

  // --- WINDOW MANAGEMENT (SNAPPING & MONITORS) ---
  {
    "id": "sys-snap-left",
    "action": "Ancrer Fenêtre à Gauche",
    "keys": ["Win", "Left"],
    "os": ["Windows", "Linux"],
    "category": "system",
    "difficulty": "Beginner",
    "description": "Divise l'écran et place la fenêtre à gauche."
  },
  {
    "id": "sys-snap-right",
    "action": "Ancrer Fenêtre à Droite",
    "keys": ["Win", "Right"],
    "os": ["Windows", "Linux"],
    "category": "system",
    "difficulty": "Beginner",
    "description": "Divise l'écran et place la fenêtre à droite."
  },
  {
    "id": "sys-move-monitor-left",
    "action": "Déplacer vers écran gauche",
    "keys": ["Win", "Shift", "Left"],
    "os": ["Windows"],
    "category": "system",
    "difficulty": "Advanced",
    "description": "Envoyer la fenêtre sur le moniteur de gauche.",
    "alternatives": [{ "os": "Linux", "keys": ["Super", "Shift", "Left"] }]
  },
  {
    "id": "sys-move-monitor-right",
    "action": "Déplacer vers écran droite",
    "keys": ["Win", "Shift", "Right"],
    "os": ["Windows"],
    "category": "system",
    "difficulty": "Advanced",
    "description": "Envoyer la fenêtre sur le moniteur de droite.",
    "alternatives": [{ "os": "Linux", "keys": ["Super", "Shift", "Right"] }]
  },
  {
    "id": "sys-maximize",
    "action": "Maximiser / Plein Écran",
    "keys": ["Win", "Up"],
    "os": ["Windows", "Linux"],
    "category": "system",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Ctrl", "F"] }]
  },
  {
    "id": "sys-minimize",
    "action": "Minimiser la fenêtre",
    "keys": ["Win", "Down"],
    "os": ["Windows"],
    "category": "system",
    "difficulty": "Beginner",
    "alternatives": [
      { "os": "macOS", "keys": ["Cmd", "M"] },
      { "os": "Linux", "keys": ["Super", "H"] }
    ]
  },
  {
    "id": "sys-show-desktop",
    "action": "Afficher le Bureau",
    "keys": ["Win", "D"],
    "os": ["Windows", "Linux"],
    "category": "system",
    "difficulty": "Beginner",
    "description": "Minimise tout pour montrer le bureau.",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "F3"] }]
  },

  // --- FINDER (macOS) ---
  {
    "id": "sys-finder-open",
    "action": "Ouvrir dossier/fichier",
    "keys": ["Cmd", "Down"],
    "os": ["macOS"],
    "category": "system",
    "software": "finder",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "Windows", "keys": ["Enter"] }]
  },
  {
    "id": "sys-finder-parent",
    "action": "Dossier Parent",
    "keys": ["Cmd", "Up"],
    "os": ["macOS"],
    "category": "system",
    "software": "finder",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "Windows", "keys": ["Alt", "Up"] }]
  },
  {
    "id": "sys-finder-rename",
    "action": "Renommer le fichier",
    "keys": ["Enter"],
    "os": ["macOS"],
    "category": "system",
    "software": "finder",
    "difficulty": "Intermediate",
    "description": "Sur Mac, Entrée renomme. Pour ouvrir, utiliser Cmd+O.",
    "alternatives": [{ "os": "Windows", "keys": ["F2"] }]
  },
  {
    "id": "sys-finder-info",
    "action": "Lire les informations",
    "keys": ["Cmd", "I"],
    "os": ["macOS"],
    "category": "system",
    "software": "finder",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "Windows", "keys": ["Alt", "Enter"] }]
  },
  {
    "id": "sys-finder-new-folder",
    "action": "Nouveau dossier",
    "keys": ["Cmd", "Shift", "N"],
    "os": ["macOS"],
    "category": "system",
    "software": "finder",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "Windows", "keys": ["Ctrl", "Shift", "N"] }]
  },
  {
    "id": "sys-finder-trash",
    "action": "Placer dans la corbeille",
    "keys": ["Cmd", "Backspace"],
    "os": ["macOS"],
    "category": "system",
    "software": "finder",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "Windows", "keys": ["Delete"] }]
  },

  // --- TOOLS & GLOBAL ---
  {
    "id": "sys-clipboard-history",
    "action": "Historique Presse-papier",
    "keys": ["Win", "V"],
    "os": ["Windows"],
    "category": "system",
    "difficulty": "Intermediate",
    "description": "Voir/coller les éléments copiés précédemment."
  },
  {
    "id": "sys-explorer",
    "action": "Ouvrir Explorateur/Finder",
    "keys": ["Win", "E"],
    "os": ["Windows"],
    "category": "system",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Option", "Cmd", "Space"] }]
  },
  {
    "id": "sys-settings",
    "action": "Ouvrir Paramètres",
    "keys": ["Win", "I"],
    "os": ["Windows"],
    "category": "system",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", ","] }]
  }
];
