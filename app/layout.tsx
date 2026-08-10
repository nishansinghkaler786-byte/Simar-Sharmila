import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const geist = Geist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-geist-mono',
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
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
