import type { Metadata } from 'next';
import localFont from 'next/font/local';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.scss';

import '@fortawesome/fontawesome-svg-core/styles.css';
import './lib/fontawesome';

import Header from './components/header';
import Footer from './components/footer';

// todo: remov this one later
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MeghanBytes",
  description: "MeghanBytes Software Development Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
