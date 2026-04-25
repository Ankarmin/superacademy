import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { getSiteUrl, siteConfig } from "@/lib/site";

const themeScript = `(() => {
  const root = document.documentElement;

  try {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (isDark) => {
      const theme = isDark ? "dark" : "light";

      root.dataset.theme = theme;
      root.style.colorScheme = theme;
    };

    applyTheme(mediaQuery.matches);

    const handleThemeChange = (event) => {
      applyTheme(event.matches);
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleThemeChange);
    } else {
      mediaQuery.addListener(handleThemeChange);
    }
  } catch {
    root.dataset.theme = "light";
    root.style.colorScheme = "light";
  }
})();`;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    url: "/",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.defaultTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body
        className={`${geistSans.variable} bg-[var(--page-bg)] text-[var(--page-fg)] antialiased transition-colors duration-300`}
      >
        <a
          href="#main-content"
          className="skip-link"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
