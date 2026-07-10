# Groom Side Invitation — Srinija & Brijesh

A standalone single-page wedding invite (Vite + React), deployed to GitHub Pages
as its own site, separate from the main invitation.

Content lives in the `CONFIG` object at the top of `src/App.jsx`.

## Local
    npm install
    npm run dev       # http://localhost:5173
    npm run build     # outputs static files to dist/
    npm run preview   # preview the production build

## Deploy
Uses a relative base (base: "./" in vite.config.js), so it works at any
repo name with no path changes.

1. Push to a GitHub repo on branch main.
2. Repo -> Settings -> Pages -> Source -> GitHub Actions.
3. The workflow in .github/workflows/deploy.yml builds and publishes on every push.

Live at https://<your-username>.github.io/<your-repo-name>/
