
export const productivityShortcuts = [
  // --- NOTION ---
  {
    "id": "prod-notion-cmd",
    "action": "Ouvrir Commandes",
    "keys": ["/"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "productivity",
    "software": "notion",
    "difficulty": "Beginner",
    "description": "Le menu magique pour tout insérer."
  },
  {
    "id": "prod-notion-todo",
    "action": "Case à cocher (Todo)",
    "keys": ["[", "]"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "productivity",
    "software": "notion",
    "difficulty": "Beginner",
    "description": "Tapez [] puis Espace."
  },
  {
    "id": "prod-notion-h1",
    "action": "Titre 1 (H1)",
    "keys": ["#", "Space"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "productivity",
    "software": "notion",
    "difficulty": "Beginner"
  },
  {
    "id": "prod-notion-dark",
    "action": "Mode Sombre (Dark)",
    "keys": ["Ctrl", "Shift", "L"],
    "os": ["Windows", "Linux"],
    "category": "productivity",
    "software": "notion",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "L"] }]
  },
  {
    "id": "prod-notion-duplicate",
    "action": "Dupliquer Bloc",
    "keys": ["Ctrl", "D"],
    "os": ["Windows", "Linux"],
    "category": "productivity",
    "software": "notion",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "D"] }]
  },
  {
    "id": "prod-notion-toggle",
    "action": "Liste dépliante (Toggle)",
    "keys": [">", "Space"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "productivity",
    "software": "notion",
    "difficulty": "Intermediate"
  },
  {
    "id": "prod-notion-color",
    "action": "Dernière couleur utilisée",
    "keys": ["Ctrl", "Shift", "H"],
    "os": ["Windows", "Linux"],
    "category": "productivity",
    "software": "notion",
    "difficulty": "Advanced",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "H"] }]
  },

  // --- OBSIDIAN ---
  {
    "id": "prod-obs-palette",
    "action": "Palette de commandes",
    "keys": ["Ctrl", "P"],
    "os": ["Windows", "Linux"],
    "category": "productivity",
    "software": "obsidian",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "P"] }]
  },
  {
    "id": "prod-obs-open",
    "action": "Ouvrir Fichier (Quick)",
    "keys": ["Ctrl", "O"],
    "os": ["Windows", "Linux"],
    "category": "productivity",
    "software": "obsidian",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "O"] }]
  },
  {
    "id": "prod-obs-link",
    "action": "Lien interne (Wiki)",
    "keys": ["[", "["],
    "os": ["Windows", "Linux", "macOS"],
    "category": "productivity",
    "software": "obsidian",
    "difficulty": "Beginner",
    "description": "Double crochet pour lier une note."
  },
  {
    "id": "prod-obs-split-right",
    "action": "Diviser à droite",
    "keys": ["Ctrl", "\\"],
    "os": ["Windows", "Linux"],
    "category": "productivity",
    "software": "obsidian",
    "difficulty": "Advanced",
    "description": "Ouvre la note courante à côté.",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "\\"] }]
  },
  {
    "id": "prod-obs-preview",
    "action": "Mode Lecture/Édition",
    "keys": ["Ctrl", "E"],
    "os": ["Windows", "Linux"],
    "category": "productivity",
    "software": "obsidian",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "E"] }]
  },

  // --- TRELLO ---
  {
    "id": "prod-trello-assign",
    "action": "S'assigner la carte",
    "keys": ["Space"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "productivity",
    "software": "trello",
    "difficulty": "Beginner",
    "description": "Au survol d'une carte."
  },
  {
    "id": "prod-trello-due",
    "action": "Ajouter Date (Due Date)",
    "keys": ["D"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "productivity",
    "software": "trello",
    "difficulty": "Beginner"
  },
  {
    "id": "prod-trello-label",
    "action": "Ouvrir Labels",
    "keys": ["L"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "productivity",
    "software": "trello",
    "difficulty": "Intermediate"
  },
  {
    "id": "prod-trello-archive",
    "action": "Archiver la carte",
    "keys": ["C"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "productivity",
    "software": "trello",
    "difficulty": "Intermediate"
  },
  {
    "id": "prod-trello-insert",
    "action": "Insérer carte dessous",
    "keys": ["N"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "productivity",
    "software": "trello",
    "difficulty": "Beginner"
  }
];
