'use client';

import QRCode from 'qrcode';
import { useMemo } from 'react';

const QUIET_ZONE = 4;

export function QRCodeCard({ url, label }: { url: string; label: string }) {
  const qr = useMemo(() => {
    const { modules } = QRCode.create(url, { errorCorrectionLevel: 'M' });
    const segments: string[] = [];

    for (let row = 0; row < modules.size; row += 1) {
      for (let column = 0; column < modules.size; column += 1) {
        if (modules.get(row, column)) {
          segments.push(`M${column + QUIET_ZONE} ${row + QUIET_ZONE}h1v1h-1z`);
        }
      }
    }

    return { size: modules.size + QUIET_ZONE * 2, path: segments.join('') };
  }, [url]);

  return (
    <div className="flex w-[312px] flex-col items-center rounded-[8px] border border-[#0D322B]/16 bg-white p-5 text-[#0D322B] shadow-[0_24px_70px_-38px_rgba(13,50,43,0.56)]">
      <div className="flex h-[248px] w-[248px] items-center justify-center bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={`QR Code: ${label}`}
          viewBox={`0 0 ${qr.size} ${qr.size}`}
          width={248}
          height={248}
          shapeRendering="crispEdges"
          className="h-[248px] w-[248px]"
        >
          <rect width={qr.size} height={qr.size} fill="#FFFFFF" />
          <path d={qr.path} fill="#000000" />
        </svg>
      </div>
    </div>
  );
}
