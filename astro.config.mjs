// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: remplacer par l'URL finale (domaine perso ou https://<user>.github.io)
  site: 'https://violaine-et-paul.example',
  // TODO: si publié sur https://<user>.github.io/<repo>/ (site de projet, pas de domaine perso),
  // décommenter et adapter la ligne suivante avec le nom du repo GitHub :
  // base: '/mariage-violaine-paul',
  output: 'static',
});
