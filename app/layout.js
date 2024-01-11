import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CompCalc',
  description: 'Caluladora de interés compuesto',
  manifest: '/manifest.json',
  keywords: [
    'interes compuesto',
    'calculadora interes compuesto',
    'compuound interest',
    'compuound interest calculator',
    'nextjs',
    'nextjs13',
    'next13',
    'pwa',
    'next-pwa',
  ],
  authors: [
    { name: 'Gabriel Mauas' },
    {
      name: 'Gabriel Mauas',
      url: 'https://www.linkedin.com/in/gabriel-mauas/',
    },
  ],
  icons: [
    { rel: 'apple-touch-icon', url: 'compcalclogo.svg' },
    { rel: 'icon', url: 'compcalclogo.svg' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/compcalclogo.svg" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}