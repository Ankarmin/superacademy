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
- pnpm 9 o superior

## Inicio rapido

```bash
pnpm install
pnpm dev
```

Abre `http://localhost:3000`.

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
- Rutas principales listas: inicio, nosotros, ciclos, videoteca, recursos y contacto
- Paginas legales base incluidas
- Configuracion lista para iniciar repositorio y hacer primer commit
