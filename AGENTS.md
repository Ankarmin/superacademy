# Repository Notes

- Use `pnpm` here. The repo has `pnpm-lock.yaml`; `pnpm-workspace.yaml` exists only to ignore native build deps and does not define a real monorepo.
- Available root commands: `pnpm dev`, `pnpm lint`, `pnpm typecheck`, `pnpm build`.
- For focused checks, `pnpm lint -- app/path/file.tsx` works. `pnpm typecheck` runs `next typegen && tsc --noEmit`.
- Practical verification order for code changes: `pnpm lint` -> `pnpm exec tsc --noEmit` -> `pnpm build`.

# App Structure

- This is a single Next.js 16 App Router app. Root wiring lives in `app/layout.tsx`, `app/globals.css`, and `next.config.ts`.
- The shared marketing shell is `app/(public)/layout.tsx`; it mounts `components/layout/Header.tsx`, `Footer.tsx`, `WhatsAppWidget.tsx`, and `components/SocialWidget.tsx`.
- Public site routes live under `app/(public)/**`, including the dynamic page `app/(public)/ciclos/[slug]/page.tsx`.
- The app source is currently TypeScript/TSX only.

# Tooling Quirks

- Tailwind is v4-style: `app/globals.css` uses `@import "tailwindcss"` and `@theme`; PostCSS is configured in `postcss.config.mjs`. There is no `tailwind.config.*` file.
- ESLint uses flat config in `eslint.config.mjs` with `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.

# Current Gotchas

- There is no duplicate `/` route: the current home page lives in `app/(public)/page.tsx`.
- `app/(public)/institucional/page.tsx` is a permanent redirect to `/nosotros`; preserve it unless there is a deliberate URL consolidation decision.
- Current `pnpm build` completes successfully with the declared dependency set.
