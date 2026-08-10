import type { Metadata } from 'next';
import { Fraunces, Manrope, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Simranjeet Singh — Senior UX/UI Designer',
    template: '%s · Simranjeet Singh',
  },
  description:
    'Senior UX/UI Designer with 6+ years architecting scalable design systems and leading user-centered design across web and mobile. WCAG 2.2 accessibility, research-driven decisions, enterprise scale.',
  keywords: [
    'UX Designer',
    'UI Designer',
    'Senior UX/UI Designer',
    'Design Systems',
    'Accessibility',
    'WCAG',
    'Simranjeet Singh',
    'Bengaluru',
  ],
  authors: [{ name: 'Simranjeet Singh' }],
  creator: 'Simranjeet Singh',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${plexMono.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
