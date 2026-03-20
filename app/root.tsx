import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
// @ts-expect-error
import GlobalHeader from "@jetbrains/kotlin-web-site-ui/dist/header.js";
import "@jetbrains/kotlin-web-site-ui/dist/header.css";
// @ts-expect-error
import GlobalFooter from "@jetbrains/kotlin-web-site-ui/dist/footer.js";
import "@jetbrains/kotlin-web-site-ui/dist/footer.css";
import { ThemeProvider } from "@rescui/ui-contexts";

import type { Route } from "./+types/root";
import "./css/styles-v2.scss";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "preload",
    href: "/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2",
    as: "font",
  },
  {
    rel: "preload",
    href: "/fonts/JetBrainsMono/JetBrainsMono-Bold.woff2",
    as: "font",
  },
  {
    rel: "preload",
    href: "/fonts/JetBrainsMono/JetBrainsMono-Italic.woff2",
    as: "font",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="page__index-new page_restyled_v2">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="global-layout">
      <GlobalHeader />
      <div className="g-layout global-content">
        <Outlet />
      </div>
      <ThemeProvider theme="dark">
        <GlobalFooter />
      </ThemeProvider>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
