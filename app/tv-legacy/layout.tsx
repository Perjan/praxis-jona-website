import { Metadata } from 'next';
import TVLayoutClient from './TVLayoutClient';

export const metadata: Metadata = {
  alternates: {
    canonical: '/tv-legacy',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function TVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TVLayoutClient>
      {children}
    </TVLayoutClient>
  );
}
