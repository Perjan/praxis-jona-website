'use client';

import Image from 'next/image';
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';
import { FaQrcode } from 'react-icons/fa';

const qrCache = new Map<string, string>();
const qrPending = new Map<string, Promise<string>>();

function useGeneratedQr(url: string): string | null {
  const [qrSvgUrl, setQrSvgUrl] = useState(() => qrCache.get(url) ?? null);

  useEffect(() => {
    let cancelled = false;
    const cached = qrCache.get(url);

    if (cached) {
      setQrSvgUrl(cached);
      return;
    }

    const pending =
      qrPending.get(url) ??
      QRCode.toString(url, {
        type: 'svg',
        errorCorrectionLevel: 'M',
        margin: 1,
        width: 240,
        color: {
          dark: '#0D322B',
          light: '#FFFFFF',
        },
      }).then((svg) => {
        const dataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
        qrCache.set(url, dataUrl);
        qrPending.delete(url);
        return dataUrl;
      });

    qrPending.set(url, pending);
    pending.then((dataUrl) => {
      if (!cancelled) {
        setQrSvgUrl(dataUrl);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [url]);

  return qrSvgUrl;
}

export function QRCodeCard({ url, label }: { url: string; label: string }) {
  const qrSvgUrl = useGeneratedQr(url);

  return (
    <div className="flex w-[312px] flex-col items-center rounded-[8px] border border-[#0D322B]/16 bg-[#FFFDF8] p-5 text-[#0D322B] shadow-[0_24px_70px_-38px_rgba(13,50,43,0.56)]">
      <div className="flex h-[248px] w-[248px] items-center justify-center rounded-[6px] border border-[#0D322B]/8 bg-white">
        {qrSvgUrl ? (
          <Image src={qrSvgUrl} alt={`QR Code: ${label}`} width={232} height={232} unoptimized className="h-[232px] w-[232px]" />
        ) : (
          <FaQrcode className="text-[110px] text-[#0D322B]/35" />
        )}
      </div>
    </div>
  );
}
