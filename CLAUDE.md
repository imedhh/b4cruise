# CLAUDE.md — South Beach Hotels · Cruise Landing Page

## Project Overview
- **Type**: Static HTML single-page website (no framework, no build tool)
- **Stack**: HTML + CSS + JS inline dans index.html
- **Objectif**: Page de vente B2C + B2B pour packages pre/post-croisiere South Beach

## Design System
- Palette: --navy #0c1f3f, --ocean #1a4a7a, --gold #c4943a, --sand #f5efe6, --white #fdfaf6
- Fonts: Cormorant Garamond (titres/corps), Josefin Sans (nav/boutons)
- Toujours utiliser les variables CSS, jamais de couleurs hardcodees

## Conventions
- Tout dans index.html (CSS dans `<style>`, JS dans `<script>`)
- Classes BEM-like, animations via .reveal + IntersectionObserver
- Pas de framework, pas de lib externe
