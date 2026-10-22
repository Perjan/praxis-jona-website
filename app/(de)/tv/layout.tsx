import { Metadata, Viewport } from 'next';
import TVLayoutClient from '../tv-legacy/TVLayoutClient';

export const viewport: Viewport = {
  colorScheme: 'only light',
};

export const metadata: Metadata = {
  alternates: {
    canonical: '/tv',
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

export default function TVNewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TVLayoutClient>{children}</TVLayoutClient>;
}
