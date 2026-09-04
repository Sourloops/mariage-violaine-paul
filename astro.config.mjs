// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // En attendant l'achat d'un nom de domaine perso : adresse GitHub Pages.
  // Le jour où un domaine perso est branché, remettre `site` sur ce domaine,
  // retirer `base`, et ajouter public/CNAME (voir NOTES-SCAFFOLD.md).
  site: 'https://sourloops.github.io',
  base: '/mariage-violaine-paul/',
  output: 'static',
});
