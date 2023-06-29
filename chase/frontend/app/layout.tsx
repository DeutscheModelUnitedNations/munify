'use client';
import './globals.scss';
import { Inter } from 'next/font/google'; // TODO Remove Google Fonts and use local fonts (legal reasons)

//theme
import 'primereact/resources/themes/lara-light-indigo/theme.css';
//core
import 'primereact/resources/primereact.min.css';
//icons
import 'primeicons/primeicons.css';
import { detectLocale, navigatorDetector } from 'typesafe-i18n/detectors';
import { loadLocale } from '@/src/i18n/i18n-util.sync';
import { baseLocale, locales } from '@/src/i18n/i18n-util';
import TypesafeI18n from '@/src/i18n/i18n-react';
import { BackendProvider } from '@/contexts/backend';
import { AuthProvider, AuthProviderProps } from 'oidc-react';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const oidcConfig: AuthProviderProps = {
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  // onSignIn: async (response: any) => {
  //   alert(`You logged in :${response.profile.given_name} ${response.profile.family_name}`);
  //   window.location.hash = '';
  // },
  authority: 'http://localhost:7788', // TODO replace with your instance
  clientId: '220730319232368643@munify', // TODO replace with your client id
  // responseType: 'code',
  redirectUri: 'http://localhost:3000/participant/dashboard',
  // scope: 'openid profile email',
};

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: "Chase",
// }; // TODO find a way to add Metadata to the client side generated pages. static metadata does not work with nextjs https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // TODO inspect the way locale is detected and loaded.
  // The Problem was that the locale was not loaded on the client side. There was a build error because the navigator was not defined on the server side.
  // // https://github.com/ivanhofer/typesafe-i18n/tree/main/packages/detectors)
  // const locale = detectLocale(baseLocale, locales, navigatorDetector);
  // loadLocale(locale);

  // TadeSF 2023-06-14 suggested solution:
  let locale = baseLocale; // default to baseLocale
  if (typeof window !== 'undefined') {
    // Check if window is defined to ensure running on client side
    locale = detectLocale(baseLocale, locales, navigatorDetector);
    loadLocale(locale);
  }

  return (
    <TypesafeI18n locale={locale}>
      <AuthProvider {...oidcConfig}>
        <BackendProvider>
          <html lang="de">
            <body className={inter.className}>{children}</body>
          </html>
        </BackendProvider>
      </AuthProvider>
    </TypesafeI18n>
  );
}
