
# Changelog

All notable changes to the **Keyboard Atlas** project will be documented here.

## [Unreleased]
*   **Source folder:** moved to `D:\0CODE\0FINAL\it\keyboard_atlas` (17/11/2026, platform reorganisation). No reference to the old path in the repository; the build is unchanged (identical to the published one).

## [v1.37.1] - 2026-11-14 : Legal notice and contact
*   **Legal notice:** the placeholders are filled in: non-professional publisher, host Hostinger International Limited (Larnaca, Cyprus; server in the United Kingdom), AI assistance, and a link to the legal notice of the hylst.fr platform.
*   **Privacy:** the policy no longer claims that no IP address reaches a server: the web server keeps technical logs for twelve months at most. The mailbox provider is named (Infomaniak, Switzerland).
*   **Contact:** address changed to `geoffroy.streit@ik.me` (footer, info and legal windows, ABOUT).
*   **index.html:** fixes previously applied by hand to the published build on hylst.fr are now in the source: canonical URL, Tailwind self-hosted by the platform (`/assets/vendor/tailwind/tailwind-3.4.17.js`), and the dead `/index.css` link removed.

## [v1.37.0] - Onboarding & UX Polish
### 🚀 New Features
*   **Interactive Onboarding:** Added a guided tour (`Onboarding.tsx`) for new users covering SRS, Quiz, and Arcade usage, persisting in `localStorage`.
*   **"Nouveautés" Tab:** Added a built-in changelog view directly inside the `InfoModal` for in-app release notes.
*   **Expanded Data:** Added new software shortcuts for Git (GitHub Desktop, SourceTree), IDEs (WebStorm, Android Studio), OS Terminals, and Browsers.

### ⚖️ UX Improvements
*   **Sidebar Truncation:** Softwares list is now cleanly truncated to the top 6 with a "Voir tous (+)" button to prevent visual overload.
*   **Responsive Buttons:** "Marquer comme maîtrisé" dynamically shortens to "Maîtrisé" on mobile breakpoints.
*   **Stable Build:** Rolled back erratic Tailwind local PostCSS build to a stable CDN configuration to ensure instant visual consistency.

## [v1.36.0] - Focus Mode & Gamification V3
### 🚀 New Features
*   **Typing Speed Game:** Added a Monkeytype-inspired minigame (`TypingGame.tsx`) with 3 specialized corpus modes (Prose, Code, Alien). High scores are persisted.
*   **Export/Import JSON:** Added the ability to backup and restore `localStorage` settings, including High Scores and mastered shortcuts, from a JSON file.
*   **Dark Mode Toggle:** Integrated class-based Dark Mode toggle within the header and configured Tailwind via CDN.

### ⚖️ UX & Empty States
*   **SRS Quick Review Button:** The progression due count badge in the Sidebar is now a direct CTA converting directly to a filtered Review Quiz session.
*   **Smart Empty States:** Refined placeholder screens when no shortcuts are matched by filters. Added a visual "Clear Filters" interactive button.
*   **Daily Shortcut:** Correctly seeded daily shortcut using a strict date string hash to avoid jittering on refresh.

### 🛠 Optimization & Accessibility
*   **Lazy Loading Modals:** The `ErgoModal`, `InfoModal`, and `LegalModal` are now split using `React.lazy` saving ~50kB parsed bundle footprint on initial load.
*   **Accessibility:** Added structured `aria-label` and `focus:ring` states across modals.
*   **SEO Automation:** Sitemap and robots.txt shipped globally in `/public`.

## [v1.0.0] - Gold Release 📀
### 🚀 New Features
*   **Arcade Mode (Speed Run):** A fast-paced, 60-second time trial to test muscle memory. Includes scoring, combos, and high-score persistence.
*   **Layout Support:** Added visual support for **AZERTY**, **QWERTY**, **DVORAK**, and **COLEMAK**.
*   **Productivity Pack:** Added shortcuts for **Notion**, **Obsidian**, and **Trello**.
*   **Photo & Dev:** Added **Adobe Lightroom** and **IntelliJ IDEA**.

### ⚖️ Legal & SEO
*   **Legal Compliance:** Added French Legal Notice (Mentions Légales), Privacy Policy (RGPD), and Terms of Use (CGU).
*   **SEO:** Optimized meta tags, Open Graph data, and accessibility attributes.

### 🛠 Improvements
*   **UI Polish:** Added an Arcade button to the sidebar.
*   **Feedback:** Added visual feedback for key presses in Arcade mode.
*   **Manifest:** Added PWA manifest for installation.

## [v0.8.0] - Phase 3: Creator Studio
### ✨ Added
*   **Video Editing:** Full shortcut support for **Adobe Premiere Pro**.
*   **3D Modeling:** Essential **Blender** shortcuts.
*   **Gamification V2:** Streak Counter & Confetti.

## [v0.1.0] - Initial Release
### ✨ Added
*   **Core Engine:** Virtual Keyboard, Search, Filtering.
*   **Gamification:** Quiz Mode, Mastery Tracking, Favorites.
*   **Base Categories:** Dev, Data, Creative, Media.
