# SuperAcademy

Base web de SuperAcademy construida con Next.js 16, React 19, TypeScript y Tailwind CSS v4.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript estricto
- Tailwind CSS v4
- pnpm

## Requisitos

- Node.js 20 o superior
- pnpm 10 o superior

## Inicio rapido

```bash
pnpm install
pnpm dev
```

Abre `http://localhost:3000`.

## Gestor de paquetes

- Este proyecto está estandarizado para `pnpm`.
- Usa `pnpm-lock.yaml` como lockfile fuente.
- No se mantienen archivos ni flujos de `npm`, `yarn` o `bun`.

## Variables de entorno

- Copia `.env.example` a `.env.local` si quieres definir la URL canonica del sitio.
- `NEXT_PUBLIC_SITE_URL`: URL publica usada para metadata, `robots.txt` y `sitemap.xml`.

## Scripts

- `pnpm dev`: entorno local
- `pnpm lint`: revision con ESLint
- `pnpm typecheck`: genera tipos de rutas y verifica TypeScript
- `pnpm build`: build de produccion

## Estructura

- `app/`: rutas App Router
- `app/(public)/`: paginas publicas del sitio
- `components/`: componentes compartidos
- `lib/`: utilidades y helpers tipados
- `public/`: assets estaticos

## Estado base del repositorio

- Solo TypeScript/TSX en codigo de la app
- Rutas principales listas: inicio, nosotros, ciclos, docentes, videoteca y recursos
- `institucional` redirige permanentemente a `nosotros`
- Paginas legales base incluidas
- Configuracion lista para trabajar con `pnpm`, ESLint, TypeScript y build de Next.js
