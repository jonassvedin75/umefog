import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

export const metadata: Metadata = {
  title: 'Umefog - Fasadfogning & Brandtätning i Umeå | Professionell Fuktskydd',
  description: 'Umefog erbjuder professionell fasadfogning, brandtätning, ljudtätning och skydd mot värmeläckage i Umeå och norra Sverige. Kontakta oss för offert!',
  verification: {
    google: 'bueqUCwwZ6R8hpPNHQeWpZwxtH7xtXBUJfgRJ6MUHpA',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
