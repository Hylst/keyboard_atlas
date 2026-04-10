
export const dataShortcuts = [
  // --- EXCEL ---
  {
    "id": "data-excel-flash-fill",
    "action": "Remplissage Instantané (Flash Fill)",
    "keys": ["Ctrl", "E"],
    "os": ["Windows", "Linux"],
    "category": "data",
    "software": "excel",
    "difficulty": "Advanced",
    "description": "Détecte un modèle et remplit la colonne automatiquement.",
    "alternatives": [{ "os": "macOS", "keys": ["Ctrl", "E"] }]
  },
  {
    "id": "data-excel-toggle-ref",
    "action": "Figer référence ($)",
    "keys": ["F4"],
    "os": ["Windows"],
    "category": "data",
    "software": "excel",
    "difficulty": "Intermediate",
    "description": "Basculer entre A1, $A$1, A$1 et $A1.",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "T"] }]
  },
  {
    "id": "data-excel-create-table",
    "action": "Créer un Tableau",
    "keys": ["Ctrl", "T"],
    "os": ["Windows", "Linux"],
    "category": "data",
    "software": "excel",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "T"] }]
  },
  {
    "id": "data-excel-format",
    "action": "Format de Cellule",
    "keys": ["Ctrl", "1"],
    "os": ["Windows", "Linux"],
    "category": "data",
    "software": "excel",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "1"] }]
  },
  {
    "id": "data-excel-autosum",
    "action": "Somme Automatique",
    "keys": ["Alt", "="],
    "os": ["Windows"],
    "category": "data",
    "software": "excel",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "T"] }]
  },
  {
    "id": "data-excel-filter",
    "action": "Ajouter/Retirer Filtres",
    "keys": ["Ctrl", "Shift", "L"],
    "os": ["Windows"],
    "category": "data",
    "software": "excel",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "F"] }]
  },
  {
    "id": "data-excel-date",
    "action": "Insérer Date du jour",
    "keys": ["Ctrl", ";"],
    "os": ["Windows"],
    "category": "data",
    "software": "excel",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Ctrl", ";"] }]
  },
  {
    "id": "data-excel-time",
    "action": "Insérer Heure actuelle",
    "keys": ["Ctrl", "Shift", ":"],
    "os": ["Windows"],
    "category": "data",
    "software": "excel",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", ";"] }]
  },
  {
    "id": "data-excel-nav-edge",
    "action": "Sauter au bord (Données)",
    "keys": ["Ctrl", "Arrow"],
    "os": ["Windows"],
    "category": "data",
    "software": "excel",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Arrow"] }]
  },

  // --- JUPYTER NOTEBOOKS ---
  {
    "id": "data-jupyter-run",
    "action": "Exécuter la cellule",
    "keys": ["Shift", "Enter"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "data",
    "software": "jupyter",
    "difficulty": "Beginner",
    "description": "Exécute et passe à la suivante."
  },
  {
    "id": "data-jupyter-run-stay",
    "action": "Exécuter et rester",
    "keys": ["Ctrl", "Enter"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "data",
    "software": "jupyter",
    "difficulty": "Intermediate"
  },
  {
    "id": "data-jupyter-context-help",
    "action": "Aide Contextuelle",
    "keys": ["Shift", "Tab"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "data",
    "software": "jupyter",
    "difficulty": "Intermediate",
    "description": "Affiche la docstring de la fonction."
  },
  {
    "id": "data-jupyter-to-markdown",
    "action": "Changer en Markdown",
    "keys": ["Esc", "M"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "data",
    "software": "jupyter",
    "difficulty": "Intermediate",
    "description": "En mode commande (bleu)."
  },
  {
    "id": "data-jupyter-to-code",
    "action": "Changer en Code",
    "keys": ["Esc", "Y"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "data",
    "software": "jupyter",
    "difficulty": "Intermediate"
  },
  {
    "id": "data-jupyter-insert-above",
    "action": "Insérer cellule au-dessus",
    "keys": ["Esc", "A"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "data",
    "software": "jupyter",
    "difficulty": "Beginner"
  },
  {
    "id": "data-jupyter-insert-below",
    "action": "Insérer cellule en dessous",
    "keys": ["Esc", "B"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "data",
    "software": "jupyter",
    "difficulty": "Beginner"
  },
  {
    "id": "data-jupyter-delete",
    "action": "Supprimer la cellule",
    "keys": ["Esc", "D", "D"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "data",
    "software": "jupyter",
    "difficulty": "Intermediate",
    "description": "Appuyer deux fois sur D."
  },
  {
    "id": "data-jupyter-merge",
    "action": "Fusionner Cellules",
    "keys": ["Shift", "M"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "data",
    "software": "jupyter",
    "difficulty": "Advanced",
    "description": "Fusionne les cellules sélectionnées (Mode Commande)."
  },
  {
    "id": "data-jupyter-line-numbers",
    "action": "Numéros de ligne (On/Off)",
    "keys": ["Esc", "L"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "data",
    "software": "jupyter",
    "difficulty": "Intermediate"
  },
  {
    "id": "data-jupyter-palette",
    "action": "Palette de commandes",
    "keys": ["Ctrl", "Shift", "P"],
    "os": ["Windows", "Linux"],
    "category": "data",
    "software": "jupyter",
    "difficulty": "Advanced",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "P"] }]
  },

  // --- RSTUDIO ---
  {
    "id": "data-r-assign",
    "action": "Opérateur d'assignation (<-)",
    "keys": ["Alt", "-"],
    "os": ["Windows", "Linux"],
    "category": "data",
    "software": "rstudio",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Option", "-"] }]
  },
  {
    "id": "data-r-pipe",
    "action": "Pipe Operator (%>%)",
    "keys": ["Ctrl", "Shift", "M"],
    "os": ["Windows", "Linux"],
    "category": "data",
    "software": "rstudio",
    "difficulty": "Intermediate",
    "description": "Essentiel pour tidyverse.",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "M"] }]
  },
  {
    "id": "data-r-run",
    "action": "Exécuter ligne/sélection",
    "keys": ["Ctrl", "Enter"],
    "os": ["Windows", "Linux"],
    "category": "data",
    "software": "rstudio",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Enter"] }]
  },
  {
    "id": "data-r-run-all",
    "action": "Exécuter tout le script",
    "keys": ["Ctrl", "Alt", "R"],
    "os": ["Windows", "Linux"],
    "category": "data",
    "software": "rstudio",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Option", "R"] }]
  },
  {
    "id": "data-r-insert-chunk",
    "action": "Insérer Bloc (Rmd)",
    "keys": ["Ctrl", "Alt", "I"],
    "os": ["Windows", "Linux"],
    "category": "data",
    "software": "rstudio",
    "difficulty": "Intermediate",
    "description": "Insère un nouveau chunk de code R.",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Option", "I"] }]
  },
  {
    "id": "data-r-comment",
    "action": "Commenter/Décommenter",
    "keys": ["Ctrl", "Shift", "C"],
    "os": ["Windows", "Linux"],
    "category": "data",
    "software": "rstudio",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "C"] }]
  },
  {
    "id": "data-r-format",
    "action": "Reformat Code",
    "keys": ["Ctrl", "Shift", "A"],
    "os": ["Windows", "Linux"],
    "category": "data",
    "software": "rstudio",
    "difficulty": "Advanced",
    "description": "Indente et nettoie le code sélectionné.",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "A"] }]
  },
  {
    "id": "data-r-restart",
    "action": "Redémarrer session R",
    "keys": ["Ctrl", "Shift", "F10"],
    "os": ["Windows", "Linux"],
    "category": "data",
    "software": "rstudio",
    "difficulty": "Advanced",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "F10"] }]
  },
  {
    "id": "data-r-knit",
    "action": "Knit Document (Rmd)",
    "keys": ["Ctrl", "Shift", "K"],
    "os": ["Windows", "Linux"],
    "category": "data",
    "software": "rstudio",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "K"] }]
  },
  {
    "id": "data-r-clear-console",
    "action": "Effacer la console",
    "keys": ["Ctrl", "L"],
    "os": ["Windows", "Linux"],
    "category": "data",
    "software": "rstudio",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Ctrl", "L"] }]
  }
];
