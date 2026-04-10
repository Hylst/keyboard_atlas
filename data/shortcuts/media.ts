
export const mediaShortcuts = [
  // --- DAVINCI RESOLVE ---
  {
    "id": "media-davinci-split",
    "action": "Couper le clip (Razor)",
    "keys": ["Ctrl", "B"],
    "os": ["Windows", "Linux"],
    "category": "media",
    "software": "davinci",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "B"] }]
  },
  {
    "id": "media-davinci-mode-select",
    "action": "Mode Sélection (Normal)",
    "keys": ["A"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "davinci",
    "difficulty": "Beginner"
  },
  {
    "id": "media-davinci-mode-blade",
    "action": "Mode Lame (Blade)",
    "keys": ["B"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "davinci",
    "difficulty": "Beginner"
  },
  {
    "id": "media-davinci-mode-trim",
    "action": "Mode Trim (Ajustement)",
    "keys": ["T"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "davinci",
    "difficulty": "Intermediate"
  },
  {
    "id": "media-davinci-mark-in",
    "action": "Marquer Point d'Entrée (In)",
    "keys": ["I"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "davinci",
    "difficulty": "Intermediate"
  },
  {
    "id": "media-davinci-mark-out",
    "action": "Marquer Point de Sortie (Out)",
    "keys": ["O"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "davinci",
    "difficulty": "Intermediate"
  },
  {
    "id": "media-davinci-zoom-fit",
    "action": "Zoom adapté (Fit)",
    "keys": ["Shift", "Z"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "davinci",
    "difficulty": "Beginner"
  },
  {
    "id": "media-davinci-ripple-start",
    "action": "Rogner début (Ripple Start)",
    "keys": ["Ctrl", "Shift", "["],
    "os": ["Windows", "Linux"],
    "category": "media",
    "software": "davinci",
    "difficulty": "Advanced",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "["] }]
  },
  {
    "id": "media-davinci-ripple-end",
    "action": "Rogner fin (Ripple End)",
    "keys": ["Ctrl", "Shift", "]"],
    "os": ["Windows", "Linux"],
    "category": "media",
    "software": "davinci",
    "difficulty": "Advanced",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Shift", "]"] }]
  },
  {
    "id": "media-davinci-insert",
    "action": "Insérer le clip (Insert)",
    "keys": ["F9"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "davinci",
    "difficulty": "Intermediate"
  },

  // --- OBS STUDIO ---
  {
    "id": "media-obs-fit",
    "action": "Adapter à l'écran (Fit)",
    "keys": ["Ctrl", "F"],
    "os": ["Windows", "Linux"],
    "category": "media",
    "software": "obs",
    "difficulty": "Beginner",
    "description": "Redimensionne la source pour tenir dans le canevas.",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "F"] }]
  },
  {
    "id": "media-obs-stretch",
    "action": "Étirer à l'écran (Stretch)",
    "keys": ["Ctrl", "S"],
    "os": ["Windows", "Linux"],
    "category": "media",
    "software": "obs",
    "difficulty": "Intermediate",
    "description": "Déforme la source pour remplir l'écran.",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "S"] }]
  },
  {
    "id": "media-obs-center",
    "action": "Centrer à l'écran",
    "keys": ["Ctrl", "D"],
    "os": ["Windows", "Linux"],
    "category": "media",
    "software": "obs",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "D"] }]
  },
  {
    "id": "media-obs-reset",
    "action": "Réinitialiser Transformation",
    "keys": ["Ctrl", "R"],
    "os": ["Windows", "Linux"],
    "category": "media",
    "software": "obs",
    "difficulty": "Intermediate",
    "description": "Remet la source à sa taille d'origine.",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "R"] }]
  },
  {
    "id": "media-obs-move-up",
    "action": "Monter la source (Ordre)",
    "keys": ["Ctrl", "Up"],
    "os": ["Windows", "Linux"],
    "category": "media",
    "software": "obs",
    "difficulty": "Advanced",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Up"] }]
  },
  {
    "id": "media-obs-move-down",
    "action": "Descendre la source (Ordre)",
    "keys": ["Ctrl", "Down"],
    "os": ["Windows", "Linux"],
    "category": "media",
    "software": "obs",
    "difficulty": "Advanced",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Down"] }]
  },

  // --- SPOTIFY ---
  {
    "id": "media-spotify-play",
    "action": "Lecture / Pause",
    "keys": ["Space"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "spotify",
    "difficulty": "Beginner"
  },
  {
    "id": "media-spotify-next",
    "action": "Titre Suivant",
    "keys": ["Ctrl", "Right"],
    "os": ["Windows", "Linux"],
    "category": "media",
    "software": "spotify",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Right"] }]
  },
  {
    "id": "media-spotify-prev",
    "action": "Titre Précédent",
    "keys": ["Ctrl", "Left"],
    "os": ["Windows", "Linux"],
    "category": "media",
    "software": "spotify",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Left"] }]
  },
  {
    "id": "media-spotify-seek-fwd",
    "action": "Avancer (Seek)",
    "keys": ["Shift", "Right"],
    "os": ["Windows", "Linux"],
    "category": "media",
    "software": "spotify",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Shift", "Right"] }]
  },
  {
    "id": "media-spotify-seek-back",
    "action": "Reculer (Seek)",
    "keys": ["Shift", "Left"],
    "os": ["Windows", "Linux"],
    "category": "media",
    "software": "spotify",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Shift", "Left"] }]
  },
  {
    "id": "media-spotify-search",
    "action": "Rechercher",
    "keys": ["Ctrl", "L"],
    "os": ["Windows", "Linux"],
    "category": "media",
    "software": "spotify",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "L"] }]
  },
  {
    "id": "media-spotify-vol-up",
    "action": "Volume +",
    "keys": ["Ctrl", "Up"],
    "os": ["Windows", "Linux"],
    "category": "media",
    "software": "spotify",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Up"] }]
  },
  {
    "id": "media-spotify-vol-down",
    "action": "Volume -",
    "keys": ["Ctrl", "Down"],
    "os": ["Windows", "Linux"],
    "category": "media",
    "software": "spotify",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Down"] }]
  },
  {
    "id": "media-spotify-shuffle",
    "action": "Aléatoire (Shuffle)",
    "keys": ["Ctrl", "S"],
    "os": ["Windows", "Linux"],
    "category": "media",
    "software": "spotify",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "S"] }]
  },
  {
    "id": "media-spotify-repeat",
    "action": "Répéter (Loop)",
    "keys": ["Ctrl", "R"],
    "os": ["Windows", "Linux"],
    "category": "media",
    "software": "spotify",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "R"] }]
  },
  
  // --- VLC ---
  {
    "id": "media-vlc-fullscreen",
    "action": "Plein Écran",
    "keys": ["F"],
    "os": ["Windows", "Linux"],
    "category": "media",
    "software": "vlc",
    "difficulty": "Beginner",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "F"] }]
  },
  {
    "id": "media-vlc-space",
    "action": "Lecture / Pause",
    "keys": ["Space"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "vlc",
    "difficulty": "Beginner"
  },
  {
    "id": "media-vlc-next-frame",
    "action": "Image Suivante",
    "keys": ["E"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "vlc",
    "difficulty": "Advanced",
    "description": "Avance image par image (Frame by Frame)."
  },
  {
    "id": "media-vlc-aspect",
    "action": "Ratio d'aspect",
    "keys": ["A"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "vlc",
    "difficulty": "Intermediate",
    "description": "Change le ratio (16:9, 4:3, etc)."
  },
  {
    "id": "media-vlc-stop",
    "action": "Arrêter",
    "keys": ["S"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "vlc",
    "difficulty": "Beginner"
  },
  {
    "id": "media-vlc-mute",
    "action": "Couper le son (Mute)",
    "keys": ["M"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "vlc",
    "difficulty": "Beginner"
  },
  {
    "id": "media-vlc-sync-subs-plus",
    "action": "Avancer Sous-titres",
    "keys": ["G"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "vlc",
    "difficulty": "Advanced",
    "description": "Réduit le délai (-50ms)"
  },
  {
    "id": "media-vlc-sync-subs-minus",
    "action": "Retarder Sous-titres",
    "keys": ["H"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "vlc",
    "difficulty": "Advanced",
    "description": "Augmente le délai (+50ms)"
  },
  {
    "id": "media-vlc-speed-up",
    "action": "Accélérer lecture",
    "keys": ["]"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "vlc",
    "difficulty": "Intermediate"
  },
  {
    "id": "media-vlc-snapshot",
    "action": "Capture d'écran",
    "keys": ["Shift", "S"],
    "os": ["Windows", "Linux"],
    "category": "media",
    "software": "vlc",
    "difficulty": "Intermediate",
    "alternatives": [{ "os": "macOS", "keys": ["Cmd", "Alt", "S"] }]
  },

  // --- YOUTUBE ---
  {
    "id": "media-yt-play",
    "action": "Lecture / Pause",
    "keys": ["K"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "youtube",
    "difficulty": "Beginner",
    "description": "Alternative : Espace (si le focus est sur la vidéo)."
  },
  {
    "id": "media-yt-rewind",
    "action": "Reculer 10s",
    "keys": ["J"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "youtube",
    "difficulty": "Beginner"
  },
  {
    "id": "media-yt-forward",
    "action": "Avancer 10s",
    "keys": ["L"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "youtube",
    "difficulty": "Beginner"
  },
  {
    "id": "media-yt-fullscreen",
    "action": "Plein Écran",
    "keys": ["F"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "youtube",
    "difficulty": "Beginner"
  },
  {
    "id": "media-yt-mute",
    "action": "Couper le son (Mute)",
    "keys": ["M"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "youtube",
    "difficulty": "Beginner"
  },
  {
    "id": "media-yt-captions",
    "action": "Sous-titres (On/Off)",
    "keys": ["C"],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "youtube",
    "difficulty": "Intermediate"
  },
  {
    "id": "media-yt-speed-dec",
    "action": "Ralentir Vitesse",
    "keys": ["Shift", ","],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "youtube",
    "difficulty": "Advanced"
  },
  {
    "id": "media-yt-speed-inc",
    "action": "Accélérer Vitesse",
    "keys": ["Shift", "."],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "youtube",
    "difficulty": "Advanced"
  },
  {
    "id": "media-yt-frame-next",
    "action": "Image Suivante (Pause)",
    "keys": ["."],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "youtube",
    "difficulty": "Advanced",
    "description": "Avance d'une frame (vidéo en pause)."
  },
  {
    "id": "media-yt-frame-prev",
    "action": "Image Précédente (Pause)",
    "keys": [","],
    "os": ["Windows", "Linux", "macOS"],
    "category": "media",
    "software": "youtube",
    "difficulty": "Advanced",
    "description": "Recule d'une frame (vidéo en pause)."
  }
];
