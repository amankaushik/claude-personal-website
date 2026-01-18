# Aman Kaushik - Personal Website

A modern, professional personal website built with Vite + React, showcasing my professional experience and skills.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Hosting**: Firebase Hosting
- **Domain**: amankaushik.com

## Development

### Prerequisites

- Node.js 18+ (recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Firebase Deployment

### First Time Setup

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase project:
```bash
firebase init hosting
```

Select:
- Use an existing project or create a new one
- Public directory: `dist`
- Configure as single-page app: `Yes`
- Set up automatic builds with GitHub: `No` (optional)

### Deploy to Firebase

1. Build the project:
```bash
npm run build
```

2. Deploy to Firebase:
```bash
firebase deploy
```

Your site will be live at your Firebase hosting URL and your custom domain (amankaushik.com).

### Custom Domain Setup

1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Enter `amankaushik.com`
4. Follow the verification steps
5. Update your DNS records as instructed

## Project Structure

```
.
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   └── Experience.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── vite.config.js
├── firebase.json
└── package.json
```

## License

© 2026 Aman Kaushik. All rights reserved.
