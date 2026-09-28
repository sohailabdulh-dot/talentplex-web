# TalentPlex

## Setup

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run start
```

Contact persistence uses TalentPlex-only environment variables:

```text
TALENTPLEX_DATABASE_URL=
TALENTPLEX_IP_HASH_SALT=
```

Apply the non-destructive contact table migration with:

```bash
npm run db:migrate
```

The API applies server-side validation, a hidden honeypot, salted IP hashing, and a process-local limit of five valid submissions per IP per fifteen minutes. The rate limiter is intentionally replaceable with shared infrastructure later; it is not globally consistent across multiple server instances.

## Production deployment

Required environment variables:

```text
TALENTPLEX_DATABASE_URL=
TALENTPLEX_IP_HASH_SALT=
NEXT_PUBLIC_SITE_URL=
```

`NEXT_PUBLIC_SITE_URL` should be the deployed HTTPS origin. Do not commit secrets or use NimbussOS environment variables in this application.

Build and start:

```bash
npm run build
npm run start
```

Apply the database migration before accepting contact submissions:

```bash
npm run db:migrate
```

Post-deployment checks:

- Homepage loads successfully.
- Contact form returns a controlled success or validation response.
- `/sitemap.xml` and `/robots.txt` are reachable.
- An unknown route returns the branded 404 page.
- Favicon, Open Graph asset, and public brand assets return HTTP 200.

Analytics and email notifications are intentionally not configured until providers and production destinations are selected. Contact persistence remains separate from those future integrations.
