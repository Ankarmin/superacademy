# Repository Notes

- Use `pnpm` here. The repo has `pnpm-lock.yaml`; `pnpm-workspace.yaml` exists only to ignore native build deps and does not define a real monorepo.
- Available root commands: `pnpm dev`, `pnpm lint`, `pnpm build`. There is no `test` or `typecheck` script.
- For focused checks, `pnpm lint -- app/path/file.tsx` works. For typechecking, use `pnpm exec tsc --noEmit`.
- Practical verification order for code changes: `pnpm lint` -> `pnpm exec tsc --noEmit` -> `pnpm build`.

# App Structure

- This is a single Next.js 16 App Router app. Root wiring lives in `app/layout.tsx`, `app/globals.css`, and `next.config.ts`.
- The shared marketing shell is `app/(public)/layout.tsx`; it mounts `components/layout/Header.jsx`, `Footer.jsx`, `WhatsAppWidget.jsx`, and `components/SocialWidget.jsx`.
- Public site routes live under `app/(public)/**`, including the dynamic page `app/(public)/ciclos/[slug]/page.jsx`.
- `app/admin/` and `app/api/` exist but are currently empty placeholders.
- The repo intentionally mixes TS/TSX and JS/JSX. `tsconfig.json` has `allowJs: true`; many route files and most reusable UI in `components/**` are `.jsx`.

# Tooling Quirks

- Tailwind is v4-style: `app/globals.css` uses `@import "tailwindcss"` and `@theme`; PostCSS is configured in `postcss.config.mjs`. There is no `tailwind.config.*` file.
- ESLint uses flat config in `eslint.config.mjs` with `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.

# Current Gotchas

- The repo currently contains both `app/page.tsx` (the default create-next-app starter) and `app/(public)/page.jsx` (the real marketing home). Route groups do not change URLs, so treat this as a duplicate `/` route when doing routing work.
- `pnpm build` is currently blocked by undeclared UI dependencies. Confirmed missing at build time: `framer-motion`, `react-countup`, `lucide-react`, and `react-icons`. Home components also import `swiper` and `react-simple-typewriter`, so reconcile dependencies before expecting a clean production build.
