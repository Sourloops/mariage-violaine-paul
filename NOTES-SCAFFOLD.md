# Notes de scaffolding — à traiter avant mise en ligne

Ce squelette a été généré rapidement pour poser la structure du projet.
Rien de ce qui suit n'est définitif : à revoir avec Claude Code en local.

## Contenu à confirmer / rédiger

- [ ] Date et heure exactes du mariage (`src/data/config.json` → `dateMariage`)
- [ ] Lieu et adresse de la cérémonie religieuse (`ceremonie`)
- [ ] Lieu et adresse de la réception (`reception` — nom "Château du Goutelas"
      déduit du nom des photos fournies, à confirmer)
- [ ] Texte "notre histoire" (`src/pages/index.astro`)
- [ ] Programme détaillé de la journée (`src/data/programme.json`)
- [ ] Contenu FAQ définitif (`src/data/faq.json`)
- [ ] Liste des hébergements suggérés (`src/data/hebergements.json`)
- [ ] Date limite de réponse RSVP (`config.rsvp.dateLimite`)
- [ ] Lien vers la cagnotte / liste de mariage MilleMercisMariage (page FAQ)

## Intégrations externes à brancher

- [ ] **RSVP** : créer un formulaire sur [Formspree](https://formspree.io)
      (gratuit jusqu'à 50 soumissions/mois) et remplacer
      `config.rsvp.formEndpoint` par l'endpoint réel.
- [ ] **Playlist Spotify** : remplacer `config.playlist.spotifyEmbedUrl` par
      l'URL d'embed de la playlist collaborative.
- [ ] **Calendrier (.ics)** : générer `public/mariage.ics` une fois la date
      et les lieux confirmés (voir commentaire dans
      `src/components/AddToCalendarButton.astro`).
- [ ] **Galerie** : remplacer les 2 photos d'exemple dans `public/images/`
      par la sélection définitive et mettre à jour `src/pages/galerie.astro`.

## Design

- [ ] Palette de couleurs / typographie à valider (`src/styles/tokens.css`
      contient des valeurs de départ neutres).
- [ ] Nom de domaine à choisir → mettre à jour `site` (et `base` si besoin)
      dans `astro.config.mjs`, et ajouter `public/CNAME` si domaine perso.

## Technique

- [ ] Lancer `npm install` puis `npm run dev` pour vérifier que tout
      fonctionne.
- [ ] Vérifier `astro.config.mjs` selon le mode de publication choisi
      (domaine perso vs `https://<user>.github.io/<repo>/`).
- [ ] Volume estimé de foyers invités, pour confirmer que le plan gratuit
      Formspree (50 soumissions/mois) est suffisant.
