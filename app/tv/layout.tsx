import TVLayoutClient from './TVLayoutClient';

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