"use client";
import "./globals.scss";
import { Inter } from "next/font/google"; // TODO Remove Google Fonts and use local fonts (legal reasons)

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";

import Head from "next/head";

import {
  detectLocale,
  navigatorDetector,
  localStorageDetector,
} from "typesafe-i18n/detectors";
import { loadLocale } from "@/i18n/i18n-util.sync";
import { baseLocale, locales } from "@/i18n/i18n-util";
import TypesafeI18n from "@/i18n/i18n-react";

const inter = Inter({ subsets: ["latin"] });

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
      navigatorDetector
    );
  }

  loadLocale(locale);

  return (
    <TypesafeI18n locale={locale}>
      <html lang="en">
        <Head>
          <title>Chase</title> {/* TODO Make title work */}
        </Head>
        <body className={inter.className}>{children}</body>
      </html>
    </TypesafeI18n>
  );
}
