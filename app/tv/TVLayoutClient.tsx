'use client';

export default function TVLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-black">
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        #__next {
          height: 100vh;
          width: 100vw;
          overflow: hidden;
        }
        nav {
          display: none !important;
        }
        header {
          display: none !important;
        }
        footer {
          display: none !important;
        }
        .navbar {
          display: none !important;
        }
        .header {
          display: none !important;
        }
        .footer {
          display: none !important;
        }
      `}</style>
      {children}
    </div>
  );
} 