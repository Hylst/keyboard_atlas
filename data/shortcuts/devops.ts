
export const devopsShortcuts = [
  // --- GIT (VS Code & CLI Mix) ---
  {
    "id": "git-vscode-commit",
    "action": "Git: Commit (Message)",
    "keys": ["Ctrl", "Enter"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "git",
    "difficulty": "Beginner",
    "description": "Valide le message de commit dans l'éditeur.",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Enter"] }]
  },
  {
    "id": "git-vscode-panel",
    "action": "Git: Panneau Source Control",
    "keys": ["Ctrl", "Shift", "G"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "git",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Ctrl", "Shift", "G"] }]
  },
  {
    "id": "git-stash",
    "action": "Git: Stash (CLI)",
    "keys": ["git", "stash"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "git",
    "difficulty": "Intermediate",
    "description": "Sauvegarde temporairement les modifications."
  },
  {
    "id": "git-log-oneline",
    "action": "Git: Log (Graphique)",
    "keys": ["git", "log", "--oneline", "--graph"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "git",
    "difficulty": "Advanced",
    "description": "Affiche l'historique de manière concise."
  },
  {
    "id": "git-vscode-stage",
    "action": "Git: Stage Selection",
    "keys": ["Ctrl", "K", "S"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "git",
    "difficulty": "Advanced",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "K", "S"] }]
  },
  {
    "id": "git-vscode-unstage",
    "action": "Git: Unstage Selection",
    "keys": ["Ctrl", "K", "U"],
    "os": ["Windows", "Linux"],
    "category": "dev",
    "software": "git",
    "difficulty": "Advanced",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "K", "U"] }]
  },

  // --- DOCKER ---
  {
    "id": "docker-detach",
    "action": "Docker: Détacher (Detach)",
    "keys": ["Ctrl", "P", "Ctrl", "Q"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "docker",
    "difficulty": "Advanced",
    "description": "Quitte le conteneur sans l'arrêter (séquence)."
  },
  {
    "id": "docker-logs",
    "action": "Docker: Suivre les Logs",
    "keys": ["docker", "logs", "-f"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "docker",
    "difficulty": "Intermediate"
  },
  {
    "id": "docker-ps",
    "action": "Docker: Lister Processus",
    "keys": ["docker", "ps"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "docker",
    "difficulty": "Beginner"
  },
  {
    "id": "docker-compose-up",
    "action": "Compose: Démarrer",
    "keys": ["docker-compose", "up", "-d"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "docker",
    "difficulty": "Intermediate",
    "description": "Lance les services en arrière-plan."
  },
  {
    "id": "docker-prune",
    "action": "Docker: Nettoyer (System)",
    "keys": ["docker", "system", "prune"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "dev",
    "software": "docker",
    "difficulty": "Advanced",
    "description": "Supprime conteneurs, réseaux et images non utilisés."
  }
];
