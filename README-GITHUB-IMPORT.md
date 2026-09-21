# Solivia essential GitHub upload

This is the working site stripped to the files that matter for the current Solivia website and deployment. It stays below both limits discussed: fewer than 100 files and under 25 MB.

## Product-image fix included
- `public/assets-solivia/chg-applicators-full.webp` is the CHG Applicators & Swab Sticks image.
- `public/assets-solivia/or-turnaround.webp` is the OR Turnaround Kits image.
- `src/content/solivia.html` points each card to the correct image.

## Included
- All current routes/pages
- Core React/TanStack runtime files
- All live Solivia page content
- All public website assets referenced by the site
- Supabase integration/config
- Build config and dependency lockfile

## Intentionally omitted
These were not referenced by the live site and only inflate the upload count:
- `src/components/ui/*` unused generated UI components
- `src/assets/*` duplicate/design-time assets and metadata
- unused example/helper/hook files
- duplicate root-level `solivia.html` and product images
- lint/prettier/shadcn-only config files
- the real `.env` (use `.env.example` and configure secrets/environment variables separately)
