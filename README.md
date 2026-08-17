# Mariage Violaine & Paul — site DIY

Site du mariage : compte à rebours, programme, hébergements, FAQ, RSVP,
galerie photo et playlist collaborative. Généré avec [Astro](https://astro.build)
en sortie 100% statique, pensé pour être hébergé sur GitHub Pages.

Voir `NOTES-SCAFFOLD.md` pour la liste des choses à finaliser avant la mise
en ligne (contenu, dates, liens de service externes...).

## Structure du projet

```text
/
├── src/
│   ├── pages/            # index, programme, faq, hebergements, rsvp, galerie
│   ├── components/       # Countdown, Map, Timeline, AddToCalendarButton, SpotifyEmbed, RSVPForm
│   ├── data/              # config.json, programme.json, faq.json, hebergements.json
│   ├── styles/tokens.css # palette / typo (à valider)
│   └── layouts/Base.astro
├── public/
│   ├── images/            # photos (galerie, hero...)
│   └── favicon.svg
├── .github/workflows/deploy.yml  # déploiement automatique sur GitHub Pages
└── astro.config.mjs
```

## Commandes

Toutes les commandes sont à lancer depuis la racine du projet :

| Commande                  | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`              | Installe les dépendances                          |
| `npm run dev`              | Démarre le serveur local sur `localhost:4321`     |
| `npm run build`            | Build de production dans `./dist/`               |
| `npm run preview`          | Prévisualise le build avant déploiement           |
| `npm run astro ...`        | Commandes CLI Astro (`astro add`, `astro check`) |

## Déploiement (GitHub Pages)

1. Créer le repo sur GitHub et pousser ce projet sur la branche `main`.
2. Dans **Settings → Pages**, choisir la source **GitHub Actions**.
3. Le workflow `.github/workflows/deploy.yml` build et publie le site à
   chaque push sur `main`.
4. Pour un domaine personnalisé : ajouter un fichier `public/CNAME`
   contenant le domaine, configurer le DNS chez le registrar, puis
   renseigner `site` (et éventuellement `base`) dans `astro.config.mjs`.

## À propos de ce squelette

Ce projet a été préparé via Cowork comme point de départ (structure de
dossiers, pages, composants, données d'exemple) avant reprise en main dans
VS Code avec Claude Code pour l'implémentation détaillée, le style visuel
définitif et le déploiement. Voir `NOTES-SCAFFOLD.md` pour le détail des
décisions en attente.
