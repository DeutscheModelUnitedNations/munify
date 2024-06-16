"use client";
import "./styles/global.scss";
import { Inter, Vollkorn, Noto_Sans_Mono } from "next/font/google"; // Even though Google Fonts are used – no requests are sent to Google (see NEXT.JS docs)
import "@/app/styles/themes/theme_light.scss";
import "@/app/styles/themes/theme_dark.scss";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import {
  detectLocale,
  navigatorDetector,
  localStorageDetector,
} from "typesafe-i18n/detectors";
import { loadLocale } from "@/app/i18n/i18n-util.sync";
import { baseLocale, locales } from "@/app/i18n/i18n-util";
import TypesafeI18n from "@/app/i18n/i18n-react";
import { ToastProvider } from "@/app/contexts/toast";
import CookieBanner from "@/app/components/cookie_banner";
import { PublicEnvScript } from "next-runtime-env";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Vollkorn({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const mono = Noto_Sans_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isBrowser = typeof window !== "undefined";
  let locale = baseLocale;

  if (isBrowser) {
    // Only run this code in a browser context.
    locale = detectLocale(
      baseLocale,
      locales,
      localStorageDetector,
      navigatorDetector,
    );
  }

  loadLocale(locale);

  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <head>
        <title>Chase</title>
        <script defer src="/fontawesome/js/fontawesome.min.js" />
        <script defer src="/fontawesome/js/brands.min.js" />
        <script defer src="/fontawesome/js/solid.min.js" />
        <script defer src="/fontawesome/js/regular.min.js" />
        <script defer src="/fontawesome/js/light.min.js" />
        <script defer src="/fontawesome/js/thin.min.js" />
        <script defer src="/fontawesome/js/duotone.min.js" />
        <script defer src="/fontawesome/js/sharp-solid.min.js" />
        <script defer src="/fontawesome/js/sharp-regular.min.js" />
        <script defer src="/fontawesome/js/sharp-light.min.js" />
        <script defer src="/fontawesome/js/sharp-thin.min.js" />
        <link href="/fontawesome/css/fontawesome.css" rel="stylesheet" />
        <link href="/fontawesome/css/brands.css" rel="stylesheet" />
        <link href="/fontawesome/css/solid.css" rel="stylesheet" />
        <PublicEnvScript />
      </head>

      <body>
        <TypesafeI18n locale={locale}>
          <PrimeReactProvider>
            <ToastProvider>
              <CookieBanner />
              {children}
            </ToastProvider>
          </PrimeReactProvider>
        </TypesafeI18n>
      </body>
    </html>
  );
}
