import React, { useRef, useState } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { CacheProvider } from '@emotion/react'; // Import CacheProvider from Emotion
import createCache from '@emotion/cache'; // Create cache from Emotion

// Create a custom Emotion cache instance
const cache = createCache({ key: 'css' }); // You can pass a key to identify the cache

export const links: LinksFunction = () => [
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
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Lora&display=swap"
  }
];

import Footer from "./shared/footer";

// Layout component that wraps children in an HTML structure
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const appointmentRef = useRef(null);
  const contactRef = useRef(null);

  const [exact, setExact] = useState<string>("Home");
  const [routeRef, setRouteRef] = useState({
    homeRef,
    aboutRef,
    appointmentRef,
    servicesRef,
    contactRef,
  });

  return (
    // Wrap your app with CacheProvider to apply Emotion cache
    <CacheProvider value={cache}>
      <Outlet context={{ routeRef, setRouteRef, exact, setExact }} />
    </CacheProvider>
  );
}
