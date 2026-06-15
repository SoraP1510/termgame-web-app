# TermGame Web App

`termgame-web-app` is a modern web application for game top-ups and gift card services, built with Next.js 16 and React 19.

## Project Overview

This project provides a platform for users to:
- Browse and purchase game top-ups (e.g., Free Fire, Roblox, Genshin Impact).
- Buy game gift cards (e.g., Steam, Google Play, Razer Gold).
- View purchase history and promotions.

### Tech Stack
- **Framework:** [Next.js 16.2.9](https://nextjs.org/) (App Router)
- **UI Library:** [React 19.2.4](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (using `@tailwindcss/postcss`)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Linting:** [ESLint 9](https://eslint.org/) (Flat configuration)
- **Font:** Geist (Sans & Mono) via `next/font`

## Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm, yarn, pnpm, or bun

### Commands
- `npm run dev` — Start the development server (Turbopack) on http://localhost:3000
- `npm run build` — Create a production build
- `npm run start` — Run the production server
- `npm run lint` — Run ESLint check

## Project Structure

- `app/` — Main application logic (App Router).
  - `components/` — Shared UI components (TopBar, BottomNav, GameCard, etc.).
  - `lib/` — Utility functions and shared data (e.g., `mockData.ts`).
  - `(routes)/` — Page routes: `login`, `register`, `topup`, `history`, `cards`.
  - `globals.css` — Global styles and Tailwind v4 theme configuration.
- `public/` — Static assets (images, icons, SVGs).
- `UI/` — Design assets and screenshots.
- `AGENTS.md` — Specific instructions for AI agents regarding Next.js 16.
- `CLAUDE.md` — Guidance for Claude Code.

## Development Conventions

### 1. Next.js 16 & React 19
- **App Router:** Use the App Router convention.
- **Server Components:** Prioritize Server Components. Use `"use client"` only for interactivity (hooks, event handlers).
- **Metadata:** Define metadata in `layout.tsx` or `page.tsx` for SEO.

### 2. Styling (Tailwind CSS 4)
- **CSS-first Configuration:** Tailwind v4 is configured directly in `app/globals.css` using `@import "tailwindcss";` and `@theme inline`.
- **Custom Colors:** Primary colors (`--primary`, `--bar`) and layout colors (`--page`, `--background`) are defined in the CSS `:root`.
- **Icons:** Use inline SVGs or a standard library if introduced.

### 3. State & Data
- **Mock Data:** Use `app/lib/mockData.ts` for UI prototyping.
- **Path Aliases:** Use `@/*` to import from the project root (e.g., `import { GAMES } from "@/app/lib/mockData"`).

### 4. Code Quality
- **ESLint:** Follow the rules defined in `eslint.config.mjs`.
- **Strict TypeScript:** Maintain strict type safety.

## Important Note
This project uses **Next.js 16**, which may have significant differences from earlier versions. Refer to the bundled documentation in `node_modules/next/dist/docs/` for the most accurate API reference.
