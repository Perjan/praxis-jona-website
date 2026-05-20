import TVLayoutClient from '../tv/TVLayoutClient';

export default function TVNewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TVLayoutClient>{children}</TVLayoutClient>;
}
