# Portfolio website

[![Netlify Status](https://api.netlify.com/api/v1/badges/8633138d-0a59-424c-98a9-8f6e191b9a1a/deploy-status)](https://jonahgold.dev)

Code for [jonahgold.dev](https://jonahgold.dev)

## Created using

- [Svelte](https://svelte.dev)
- [TypeScript](https://typescriptlang.org)
- [Svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router)
- [Svelte-preprocess](https://github.com/sveltejs/svelte-preprocess)
- [Snowpack](https://www.snowpack.dev)
- Tender love and care

## Project structure

Following atomic design principles, components are structured in a hierarchy of sizes:

- atoms: Single use, single element components
- molecules: Combination of atoms, optionally adding logic
- organisms: Combinations of molecules and atoms, created when a molecule comes into play.
- templates: Page templates, never directly used in routing, but used to generate pages.
