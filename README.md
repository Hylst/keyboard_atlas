
# Keyboard Atlas 🌍

**Keyboard Atlas** est une application web pédagogique et interactive conçue pour aider les utilisateurs à maîtriser les raccourcis clavier sur différents systèmes d'exploitation (Windows, macOS, Linux) et logiciels professionnels.

Elle gamifie l'apprentissage grâce à un système de répétition espacée (SRS) et un mode Arcade, rendant la productivité addictive.

![Version](https://img.shields.io/badge/version-1.0.0-indigo.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🌟 Fonctionnalités

### 🧠 Moteur d'Apprentissage
*   **Clavier Virtuel Interactif :** Visualise les raccourcis sur des dispositions physiques (AZERTY, QWERTY, DVORAK, COLEMAK).
*   **Moteur de Recherche :** Recherche floue instantanée par action, touche ou logiciel.
*   **Mode Quiz SRS :** Logique de répétition espacée pour réviser les raccourcis juste avant de les oublier.
*   **Arcade Speed Run :** Un défi de 60 secondes pour tester vos réflexes et battre votre meilleur score.

### 📚 Bibliothèque Complète
*   **Dev :** VS Code, IntelliJ, Terminal, Git, Docker.
*   **Créatif :** Figma, Photoshop, Illustrator, Premiere Pro, Blender, Lightroom.
*   **Productivité :** Notion, Obsidian, Trello, Excel, Outlook.
*   **Système :** Windows, macOS, Linux, Chrome.

### 🔒 Confidentialité & Offline First
*   **Zéro IA / Zéro API :** La logique est 100% déterministe et s'exécute dans le navigateur.
*   **Stockage Local :** Votre progression (Maîtrise, Favoris, Scores) reste sur votre appareil (`localStorage`).
*   **PWA Ready :** Installable comme une application native.

## 🛠 Stack Technique

*   **Core :** React 19, TypeScript
*   **Styling :** TailwindCSS
*   **State :** React Hooks (Architecture Custom)
*   **Build :** Vite

## 🏃‍♂️ Démarrage Rapide

1.  Cloner le dépôt.
2.  Installer les dépendances : `npm install`
3.  Lancer le serveur de développement : `npm run dev`
4.  Ouvrir `http://localhost:5173`

## 🚀 Mise en Production (Coolify / NGINX sur Hostinger)

L'application est configurée pour fonctionner comme un point de terminaison statique (PWA "Offline First" sans API dynamique), parfait pour un hébergement NGINX via Coolify.

1. **Construire les sources de production :**
   ```bash
   npm run build
   ```
   *Un dossier `dist/` contenant les fichiers purement front-end (HTML/CSS/JS) et les polices locales optimisées sera généré.*

2. **Déploiement sur le VPS :**
   - Transférez le contenu du dossier `dist/` vers votre volume NGINX (géré par Coolify sur votre VPS Hostinger).
   - Veillez à ce que le dossier de destination racine de ce projet NGINX s'appelle spécifiquement **`keyboard_atlas`** et soit exposé ainsi aux utilisateurs, ou configuré via un "alias/location" NGINX.
   - Exemple de reverse-proxy target minimal pour s'assurer que l'application soit correctement distribuée à l'URL `https://hylst.fr/keyboard_atlas/`.
   - L'application contient déjà le flag de "base URL" (`/keyboard_atlas/`) dans sa configuration Vite pour garantir que les images et scripts se lient parfaitement sur le domaine final.

## Crédits
Concept & Développement par **Geoffroy Streit (Hylst)**.
