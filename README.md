# Kotlin Website Homepage - React Router 7 Migration

This repository contains a migrated version of a legacy React project (a stripped-down version of the https://kotlinlang.org homepage) to **React Router 7 Framework Mode** with **Server-Side Rendering (SSR)**. This was completed as part of a test assignment.

## Overview & Achievements

- **React Router 7 Framework Mode**: Upgraded from the legacy setup to a modern architecture utilizing React Router 7 Framework Mode.
- **Server-Side Rendering (SSR)**: The page is fully rendered on the server, ensuring quick initial load times and comprehensive SEO support, and becomes fully interactive after client-side hydration.
- **Pixel-Perfect UI**: The original visual appearance of the Kotlin homepage has been carefully preserved.
- **Interactive Functionality**: All original interactive elements, such as tab switching, remain fully functional.
- **Component Library**: Maintained the continued use of `@rescui` components to ensure maintainability and structural consistency.

_Note: Since the source project contained only the homepage, navigation links are non-functional by design. This is expected behavior._

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm

### Installation

Clone the repository and install the dependencies. **Note:** Because the project uses React 19, which introduces peer dependency conflicts with the older `@rescui` and JetBrains UI libraries, please use the `--legacy-peer-deps` flag:

```bash
npm install --legacy-peer-deps
```

### Development

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Production Build

To test the Server-Side Rendering capabilities, create a production build and run the server:

```bash
npm run build
npm start
```

The application will be served from the built server files.

## Project Structure

- `app/` - Contains the React Router 7 application code.
  - `components/` - Reusable UI components organized by sections of the page.
  - `routes/` - Route definitions for Framework mode.
  - `css/` - Global styles, SCSS configurations, and localized styling variables.
  - `root.tsx` - The root layout and document shell for the SSR application.
  - `routes.ts` - Framework routing configuration.
- `public/` - Static assets including fonts and images.
- `react-router.config.ts` - React Router configuration.
- `vite.config.ts` - Vite bundler configuration.
