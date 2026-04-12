
export const webShortcuts = [
  {
    "id": "web-new-tab",
    "action": "Nouvel onglet",
    "keys": ["Ctrl", "T"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "chrome",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "T"] }]
  },
  {
    "id": "web-close-tab",
    "action": "Fermer l'onglet",
    "keys": ["Ctrl", "W"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "chrome",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "W"] }]
  },
  {
    "id": "web-reopen-tab",
    "action": "Rouvrir onglet fermé",
    "keys": ["Ctrl", "Shift", "T"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "chrome",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "T"] }]
  },
  {
    "id": "web-nav-back",
    "action": "Page Précédente",
    "keys": ["Alt", "Left"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "chrome",
    "difficulty": "Beginner",
    "description": "Reculer dans l'historique.",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "["] }]
  },
  {
    "id": "web-nav-forward",
    "action": "Page Suivante",
    "keys": ["Alt", "Right"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "chrome",
    "difficulty": "Beginner",
    "description": "Avancer dans l'historique.",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "]"] }]
  },
  {
    "id": "web-focus-url",
    "action": "Aller à la barre d'adresse",
    "keys": ["Ctrl", "L"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "chrome",
    "difficulty": "Intermediate",
    "description": "Ou Alt + D sur Windows.",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "L"] }]
  },
  {
    "id": "web-find",
    "action": "Rechercher dans la page",
    "keys": ["Ctrl", "F"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "chrome",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "F"] }]
  },
  {
    "id": "web-find-next",
    "action": "Recherche : Suivant",
    "keys": ["Ctrl", "G"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "chrome",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "G"] }]
  },
  {
    "id": "web-find-prev",
    "action": "Recherche : Précédent",
    "keys": ["Ctrl", "Shift", "G"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "chrome",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "G"] }]
  },
  {
    "id": "web-refresh-hard",
    "action": "Forcer l'actualisation",
    "keys": ["Ctrl", "Shift", "R"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "chrome",
    "difficulty": "Advanced",
    "description": "Recharge sans utiliser le cache.",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "R"] }]
  },
  {
    "id": "web-history",
    "action": "Ouvrir l'historique",
    "keys": ["Ctrl", "H"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "chrome",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Y"] }]
  },
  {
    "id": "web-downloads",
    "action": "Ouvrir les téléchargements",
    "keys": ["Ctrl", "J"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "chrome",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Option", "L"] }]
  },
  {
    "id": "web-private",
    "action": "Navigation Privée",
    "keys": ["Ctrl", "Shift", "N"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "chrome",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "N"] }]
  },
  {
    "id": "web-zoom-in",
    "action": "Zoomer (+)",
    "keys": ["Ctrl", "+"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "chrome",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "+"] }]
  },
  {
    "id": "web-zoom-out",
    "action": "Dézoomer (-)",
    "keys": ["Ctrl", "-"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "chrome",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "-"] }]
  },
  {
    "id": "web-zoom-reset",
    "action": "Réinitialiser Zoom (100%)",
    "keys": ["Ctrl", "0"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "chrome",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "0"] }]
  },
  {
    "id": "web-next-tab",
    "action": "Onglet Suivant",
    "keys": ["Ctrl", "Tab"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "chrome",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Ctrl", "Tab"] }]
  },
  {
    "id": "web-prev-tab",
    "action": "Onglet Précédent",
    "keys": ["Ctrl", "Shift", "Tab"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "chrome",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Ctrl", "Shift", "Tab"] }]
  },
  {
    "id": "web-dev-tools",
    "action": "Outils de développement",
    "keys": ["F12"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "chrome",
    "difficulty": "Advanced",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Option", "I"] }]
  },

  // --- FIREFOX ---
  {
    "id": "web-ff-private",
    "action": "Fenêtre de navigation privée",
    "keys": ["Ctrl", "Shift", "P"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "firefox",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "P"] }]
  },
  {
    "id": "web-ff-history-sidebar",
    "action": "Panneau latéral Historique",
    "keys": ["Ctrl", "H"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "firefox",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "H"] }]
  },
  {
    "id": "web-ff-reader",
    "action": "Activer le mode Lecture",
    "keys": ["F9"],
    "os": ["Windows", "Linux"],
    "category": "web",
    "software": "firefox",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Option", "R"] }]
  },

  // --- SAFARI ---
  {
    "id": "web-safari-sidebar",
    "action": "Afficher/Masquer barre latérale",
    "keys": ["Cmd", "Shift", "L"],
    "os": ["macOS"],
    "category": "web",
    "software": "safari",
    "difficulty": "Intermediate"
  },
  {
    "id": "web-safari-reader",
    "action": "Mode Lecteur",
    "keys": ["Cmd", "Shift", "R"],
    "os": ["macOS"],
    "category": "web",
    "software": "safari",
    "difficulty": "Intermediate"
  },
  {
    "id": "web-safari-tab-overview",
    "action": "Aperçu des onglets",
    "keys": ["Cmd", "Shift", "\\"],
    "os": ["macOS"],
    "category": "web",
    "software": "safari",
    "difficulty": "Advanced"
  }
];
