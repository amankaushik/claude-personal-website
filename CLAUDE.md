# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Aman Kaushik, built as a single-page application using React and Vite. The site is deployed to Firebase Hosting and available at amankaushik.com.

## Tech Stack

- **Framework**: React 18 with JSX
- **Build Tool**: Vite 7.1.11
- **Hosting**: Firebase Hosting
- **Styling**: Plain CSS (App.css and index.css)

## Development Commands

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```
Starts Vite dev server at http://localhost:5173

### Build for production
```bash
npm run build
```
Creates optimized production build in the `dist/` directory

### Preview production build locally
```bash
npm run preview
```

## Deployment

### Deploy to Firebase Hosting
```bash
npm run build
firebase deploy
```

Firebase is configured to:
- Serve from the `dist/` directory
- Handle all routes as a SPA (rewrites to /index.html)
- Cache static assets (images, JS, CSS) for 1 year

## Architecture

### Application Structure

The app follows a simple component-based architecture:

- **Entry point**: `src/main.jsx` renders the root `<App />` component into `#root`
- **Main component**: `src/App.jsx` composes the page layout from section components
- **Section components**: Located in `src/components/`:
  - `Header.jsx` - Site header/navigation
  - `About.jsx` - About/bio section
  - `Skills.jsx` - Skills showcase
  - `Experience.jsx` - Professional experience timeline

### Component Pattern

All components are functional React components using the `.jsx` extension. The site is fully static with no client-side routing or state management - just a single-page layout composed of sections.

### Styling

- Global styles: `src/index.css`
- Component styles: `src/App.css`
- No CSS-in-JS or CSS modules - uses plain CSS with class-based styling

## Notes

- The site is configured as a single-page application (no routing library)
- Firebase hosting rewrites all requests to `/index.html` for SPA support
- Static assets are aggressively cached (1 year) via Firebase headers configuration
- The `resume.pdf` file in the root should be kept in sync with professional updates
