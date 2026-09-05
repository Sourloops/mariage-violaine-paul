# Notes de scaffolding — à traiter avant mise en ligne

Ce squelette a été généré rapidement pour poser la structure du projet.
Rien de ce qui suit n'est définitif : à revoir avec Claude Code en local.

## Contenu à confirmer / rédiger

- [x] Date et heure exactes du mariage : 19 juin 2027, 17h
      (`src/data/config.json` → `dateMariage`)
- [x] Cérémonie religieuse confirmée : Église du Pic de Montverdun
      (`ceremonie`) — [ ] adresse complète (rue, code postal) encore à ajouter
- [x] Réception confirmée : Château de Goutelas (`reception`) —
      [ ] adresse complète encore à ajouter
- [x] Texte "notre histoire" — histoire réelle du couple rédigée
      (`src/pages/index.astro`)
- [x] Programme provisoire cohérent (cérémonie 17h → cocktail 18h30 → dîner
      20h30 → soirée 23h, tous au Château de Goutelas) — horaires à ajuster si besoin
      (`src/data/programme.json`)
- [x] FAQ : dress code précisé ("aucun imposé, tenue élégante") — [ ] enfants
      bienvenus ou non encore à trancher, [ ] lien cagnotte à ajouter
      (`src/data/faq.json`)
- [ ] Liste des hébergements suggérés — pas encore choisis, placeholder en
      attente (`src/data/hebergements.json`)
- [x] Date limite de réponse RSVP : 1er décembre 2026 (`config.rsvp.dateLimite`)
- [ ] Lien vers la cagnotte / liste de mariage MilleMercisMariage — pas encore
      créée (page FAQ)

## Intégrations externes à brancher

- [x] **RSVP** : finalement branché sur un Google Form (hébergé sur le Drive
      de Paul) plutôt que Formspree — intégré en `<iframe>` dans
      `src/components/RSVPForm.astro` (`config.rsvp.googleFormEmbedUrl`).
      Réponses collectées automatiquement dans le Google Sheet lié au form.
- [ ] **Playlist Spotify** : pas encore créée. Une fois la playlist
      collaborative prête, remplacer `config.playlist.spotifyEmbedUrl` par
      son URL d'embed.
- [x] **Calendrier (.ics)** : plus besoin de fichier statique — généré à la
      volée par `src/pages/mariage.ics.ts` à partir de `config.json`
      (date, cérémonie, réception). Se met à jour automatiquement si les
      adresses changent.
- [x] **Galerie** : `src/pages/galerie.astro` liste automatiquement toutes
      les images de `public/images/` au build (plus besoin de les lister à
      la main) et les affiche en patchwork/masonry.

## Design

- [x] Palette de couleurs / typographie : charte "L'Astrée du Forez" reprise
      depuis l'export Claude Design (`charte_graphique_mariage.zip`) et
      appliquée dans `src/styles/tokens.css` (couleurs, polices Cormorant
      Garamond / EB Garamond / Cinzel, filets, pas d'ombres portées).
- [ ] Nom de domaine perso à acheter (décidé le 2026-09-04, pas encore fait).
      Une fois acheté : mettre `site` sur le nouveau domaine dans
      `astro.config.mjs`, **retirer** la ligne `base`, ajouter un fichier
      `public/CNAME` contenant le domaine, configurer les DNS chez le
      registrar (CNAME vers `sourloops.github.io`), puis activer "Enforce
      HTTPS" dans Settings → Pages du repo GitHub.

## Technique

- [x] `npm install` / `npm run dev` / `npm run build` vérifiés OK.
- [x] Déployé sur GitHub Pages via Actions (`.github/workflows/deploy.yml`),
      en attendant l'achat d'un domaine perso : `site` +
      `base: '/mariage-violaine-paul/'` dans `astro.config.mjs` pour que les
      liens internes fonctionnent sous `https://sourloops.github.io/mariage-violaine-paul/`.
- [x] Programme, Hébergements et FAQ retirés du menu de navigation
      (`src/layouts/Base.astro`) le temps d'en finaliser le contenu — les
      pages restent buildées et accessibles par URL directe.
