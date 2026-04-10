
export const editionShortcuts = [
  // --- WORD / DOCS / GENERAL ---
  {
    "id": "edit-bold",
    "action": "Mettre en gras",
    "keys": ["Ctrl", "B"],
    "os": ["Windows", "Linux"],
    "category": "edition",
    "software": "office",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "B"] }]
  },
  {
    "id": "edit-italic",
    "action": "Mettre en italique",
    "keys": ["Ctrl", "I"],
    "os": ["Windows", "Linux"],
    "category": "edition",
    "software": "office",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "I"] }]
  },
  {
    "id": "edit-underline",
    "action": "Souligner",
    "keys": ["Ctrl", "U"],
    "os": ["Windows", "Linux"],
    "category": "edition",
    "software": "office",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "U"] }]
  },
  {
    "id": "edit-comment-office",
    "action": "Insérer un commentaire",
    "keys": ["Ctrl", "Alt", "M"],
    "os": ["Windows", "Linux"],
    "category": "edition",
    "software": "office",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Option", "M"] }]
  },

  // --- POWERPOINT ---
  {
    "id": "edit-ppt-start",
    "action": "Lancer le Diaporama",
    "keys": ["F5"],
    "os": ["Windows", "Linux"],
    "category": "edition",
    "software": "powerpoint",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "Enter"] }]
  },
  {
    "id": "edit-ppt-current",
    "action": "Lancer (Diapo actuelle)",
    "keys": ["Shift", "F5"],
    "os": ["Windows", "Linux"],
    "category": "edition",
    "software": "powerpoint",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Enter"] }]
  },
  {
    "id": "edit-ppt-black",
    "action": "Écran Noir (Pause)",
    "keys": ["B"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "edition",
    "software": "powerpoint",
    "difficulty": "Advanced",
    "description": "Appuyez sur n'importe quelle touche pour revenir."
  },
  {
    "id": "edit-ppt-white",
    "action": "Écran Blanc (Pause)",
    "keys": ["W"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "edition",
    "software": "powerpoint",
    "difficulty": "Advanced"
  },
  {
    "id": "edit-ppt-laser",
    "action": "Pointeur Laser",
    "keys": ["Ctrl", "L"],
    "os": ["Windows"],
    "category": "edition",
    "software": "powerpoint",
    "difficulty": "Advanced",
    "description": "Transforme la souris en laser.",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "P"] }]
  }
];
