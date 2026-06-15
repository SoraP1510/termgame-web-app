# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project overview

`termgame-web-app` is a Next.js 16.2.9 (App Router) project bootstrapped with `create-next-app`, using React 19.2, TypeScript 5, ESLint 9, and Tailwind CSS 4 (via the `@tailwindcss/postcss` plugin). The current checked-in code is the unmodified `create-next-app` default starter — a single `app/` directory with a root layout, a home page, global CSS, and a favicon, plus stock SVGs in `public/`.

## Commands

All scripts are in `package.json` (npm, pnpm, yarn, or bun all work):

- `npm run dev` — start the Next.js dev server (Turbopack) on http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (uses the flat config in `eslint.config.mjs`, extending `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`)

There is no test runner configured. There is no `format` script.

## Codebase structure

- `app/layout.tsx` — root layout. Loads `Geist` and `Geist_Mono` via `next/font/google`, exposes them as `--font-geist-sans` / `--font-geist-mono` CSS variables on `<html>`, and renders `{children}` inside `<body className="min-h-full flex flex-col">`. The metadata is the create-next-app defaults (`title: "Create Next App"`).
- `app/page.tsx` — the `/` route. A server component (no `"use client"` directive) that renders a flex container with a Next.js logo `Image`, marketing copy, and two external links (Vercel deploy + Next.js docs).
- `app/globals.css` — single Tailwind entry point: `@import "tailwindcss";`, an `@theme inline` block mapping `--color-background` / `--color-foreground` / `--font-sans` / `--font-mono` to CSS variables, and a `prefers-color-scheme: dark` override. Body color/background are set here, not in the layout.
- `app/favicon.ico` — default favicon.
- `public/` — static assets served from `/`: `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`. Note: `next.svg` and `vercel.svg` are referenced by the home page.
- `next.config.ts` — empty `NextConfig` object, no custom config.
- `eslint.config.mjs` — flat ESLint config that spreads `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript` and explicitly ignores `.next/**`, `out/**`, `build/**`, `next-env.d.ts` (overriding the eslint-config-next defaults).
- `postcss.config.mjs` — registers the `@tailwindcss/postcss` plugin. Tailwind v4 is configured via CSS (`@import "tailwindcss"` and `@theme inline` in `globals.css`), not via a `tailwind.config.js`.
- `tsconfig.json` — strict mode, `moduleResolution: "bundler"`, `paths: { "@/*": ["./*"] }` (root alias, not `./src/*`).
- `.gitignore` — standard Next.js ignores; `next-env.d.ts` is git-ignored.

## Things to know before writing code

- **This is Next.js 16, not earlier major versions.** APIs, conventions, and file structure differ from training-data Next.js. Before touching any Next.js API (routing, data fetching, caching, params/searchParams, route handlers, etc.), read the relevant guide in `node_modules/next/dist/docs/`. The top-level entry is `node_modules/next/dist/docs/index.md`; the App Router docs are under `01-app/` (getting-started, guides, api-reference). The bundled docs mirror the Next.js website and are the source of truth.
- **React 19 + App Router.** Server Components are the default. The home page is a server component. Add `"use client"` only when a component needs browser APIs, state, effects, or event handlers.
- **Tailwind v4, configured in CSS.** There is no `tailwind.config.js`. Theme tokens live in `app/globals.css` under `@theme inline`. The Geist font CSS variables set up in the root layout (`--font-geist-sans`, `--font-geist-mono`) are consumed via `@theme inline` as `font-sans` / `font-mono` utilities.
- **No tests, no CI config, no Cursor/Copilot rules** are present in the repo.
- **`next-env.d.ts` is auto-generated and git-ignored** — do not edit it; do not commit changes to it.
- **Path alias:** `@/*` resolves to the project root, not to `src/`. Imports like `import x from "@/app/..."` work; there is no `src/` directory.
