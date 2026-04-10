
export const communicationShortcuts = [
  // --- SLACK ---
  {
    "id": "comms-slack-quick",
    "action": "Change Channel / DM",
    "keys": ["Ctrl", "K"],
    "os": ["Windows", "Linux"],
    "category": "communication",
    "software": "slack",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "K"] }]
  },
  
  // --- DISCORD ---
  {
    "id": "comms-discord-server",
    "action": "Serveur Précédent/Suivant",
    "keys": ["Ctrl", "Alt", "Up/Down"],
    "os": ["Windows", "Linux"],
    "category": "communication",
    "software": "discord",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Option", "Up/Down"] }]
  },

  // --- TEAMS ---
  {
    "id": "comms-teams-mute",
    "action": "Mute / Unmute",
    "keys": ["Ctrl", "Shift", "M"],
    "os": ["Windows"],
    "category": "communication",
    "software": "teams",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "M"] }]
  },
  {
    "id": "comms-teams-video",
    "action": "Caméra On/Off",
    "keys": ["Ctrl", "Shift", "O"],
    "os": ["Windows"],
    "category": "communication",
    "software": "teams",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "O"] }]
  },

  // --- ZOOM ---
  {
    "id": "comms-zoom-mute",
    "action": "Mute / Unmute (Audio)",
    "keys": ["Alt", "A"],
    "os": ["Windows", "Linux"],
    "category": "communication",
    "software": "zoom",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "A"] }]
  },
  {
    "id": "comms-zoom-video",
    "action": "Caméra On/Off",
    "keys": ["Alt", "V"],
    "os": ["Windows", "Linux"],
    "category": "communication",
    "software": "zoom",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "V"] }]
  },
  {
    "id": "comms-zoom-share",
    "action": "Partager l'écran",
    "keys": ["Alt", "S"],
    "os": ["Windows", "Linux"],
    "category": "communication",
    "software": "zoom",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "S"] }]
  },
  {
    "id": "comms-zoom-chat",
    "action": "Ouvrir le Chat",
    "keys": ["Alt", "H"],
    "os": ["Windows", "Linux"],
    "category": "communication",
    "software": "zoom",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "H"] }]
  },

  // --- GOOGLE MEET ---
  {
    "id": "comms-meet-mute",
    "action": "Mute / Unmute (Micro)",
    "keys": ["Ctrl", "D"],
    "os": ["Windows", "Linux"],
    "category": "communication",
    "software": "meet",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "D"] }]
  },
  {
    "id": "comms-meet-video",
    "action": "Caméra On/Off",
    "keys": ["Ctrl", "E"],
    "os": ["Windows", "Linux"],
    "category": "communication",
    "software": "meet",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "E"] }]
  },
  {
    "id": "comms-meet-hand",
    "action": "Lever / Baisser la main",
    "keys": ["Ctrl", "Alt", "H"],
    "os": ["Windows", "Linux"],
    "category": "communication",
    "software": "meet",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Ctrl", "Cmd", "H"] }]
  },

  // --- OUTLOOK ---
  {
    "id": "comms-outlook-new",
    "action": "Nouveau Message",
    "keys": ["Ctrl", "N"],
    "os": ["Windows"],
    "category": "communication",
    "software": "outlook",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "N"] }]
  },
  {
    "id": "comms-outlook-reply",
    "action": "Répondre",
    "keys": ["Ctrl", "R"],
    "os": ["Windows"],
    "category": "communication",
    "software": "outlook",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "R"] }]
  },
  {
    "id": "comms-outlook-send",
    "action": "Envoyer le mail",
    "keys": ["Ctrl", "Enter"],
    "os": ["Windows"],
    "category": "communication",
    "software": "outlook",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Enter"] }]
  },
  {
    "id": "comms-outlook-calendar",
    "action": "Aller au Calendrier",
    "keys": ["Ctrl", "2"],
    "os": ["Windows"],
    "category": "communication",
    "software": "outlook",
    "difficulty": "Advanced",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "2"] }]
  },

  // --- GMAIL (Raccourcis activés) ---
  {
    "id": "comms-gmail-compose",
    "action": "Nouveau Message",
    "keys": ["C"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "communication",
    "software": "gmail",
    "difficulty": "Intermediate",
    "description": "Nécessite d'activer les raccourcis dans les paramètres."
  },
  {
    "id": "comms-gmail-reply",
    "action": "Répondre (Reply)",
    "keys": ["R"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "communication",
    "software": "gmail",
    "difficulty": "Intermediate"
  },
  {
    "id": "comms-gmail-send",
    "action": "Envoyer",
    "keys": ["Ctrl", "Enter"],
    "os": ["Windows", "Linux"],
    "category": "communication",
    "software": "gmail",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Enter"] }]
  },
  {
    "id": "comms-gmail-archive",
    "action": "Archiver",
    "keys": ["E"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "communication",
    "software": "gmail",
    "difficulty": "Intermediate"
  },
  {
    "id": "comms-gmail-search",
    "action": "Rechercher un mail",
    "keys": ["/"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "communication",
    "software": "gmail",
    "difficulty": "Beginner"
  }
];
