# Production deployment — vayukah.com

This Next.js application is configured for static export to GitHub Pages.

## GitHub settings

1. Push this repository to the intended GitHub repository (the existing production repository, or migrate GitHub Pages custom domain to this one).
2. Under Settings > Pages, select **Deploy from a branch**, branch `gh-pages`, folder `/ (root)`.
3. Under Settings > Actions > General, grant GitHub Actions **Read and write permissions** for `GITHUB_TOKEN` (if not already granted).
4. Confirm the custom domain `vayukah.com` and DNS configuration. If moving between repositories, remove the custom domain from the old Pages site before adding it to the new one.
5. A push to `main` runs `.github/workflows/deploy.yml`.

## Remaining items to check

- The downloads and brochure links in `src/app/downloads/page.tsx`, `src/app/dronesharpgcs/page.tsx`, and `src/app/drone/page.tsx` still use `192.168.0.105:9000`, which is a private IP. Replace them with real public URLs or add actual binaries/PDFs under `public/files/`. No such files were present in the assets extracted for this update.
- `.env` contains placeholder API keys and analytics IDs. Configure real public environment values in GitHub Actions as needed; never commit private server keys.
- Run `npm ci && npm run build` before publishing; ensure generated `out/` works as expected.
- Any Next.js features requiring a server (API routes, server actions, runtime redirects) cannot run on GitHub Pages.
