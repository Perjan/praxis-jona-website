'use client';

import Image from 'next/image';
import { ReactNode } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import type { TVSlide } from '../content';
import { QRCodeCard } from './QRCodeCard';

export function BackgroundSlide({ slide, children }: { slide: TVSlide; children: ReactNode }) {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#F8EFE4] text-[#0D322B]">
      <Image
        src={slide.image}
        alt={slide.imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className={`absolute inset-0 ${slide.overlay ?? 'bg-[#FBF6EE]/70'}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(13,50,43,0.11),transparent_28%),linear-gradient(90deg,rgba(251,246,238,0.96)_0%,rgba(251,246,238,0.88)_48%,rgba(211,224,214,0.64)_100%)]" />
      <div
        className="absolute left-1/2 top-1/2 h-[1080px] w-[1920px] origin-center"
        style={{ transform: 'translate(-50%, -50%) scale(var(--tv-scale, 1))' }}
      >
        {children}
      </div>
    </section>
  );
}

export function BrandTop() {
  return (
    <div className="inline-flex h-[76px] w-fit items-center rounded-[8px] border border-[#0D322B]/10 bg-[#FFFDF8] px-7 shadow-[0_18px_45px_-30px_rgba(13,50,43,0.42)]">
      <Image src="/images/praxis-jona-web-logo.png" alt="Praxis Jona" width={310} height={76} className="h-12 w-auto" />
    </div>
  );
}

export function Kicker({ children }: { children?: ReactNode }) {
  if (!children) return null;

  return (
    <p className="text-[24px] font-bold uppercase leading-none tracking-[0.16em] text-[#144D42]">
      {children}
    </p>
  );
}

export function Headline({ slide, compact = false }: { slide: TVSlide; compact?: boolean }) {
  return (
    <div className="max-w-[1280px]">
      <Kicker>{slide.kicker}</Kicker>
      {slide.eyebrow && <p className="mt-6 text-[30px] font-semibold leading-tight text-[#7A5F48]">{slide.eyebrow}</p>}
      <h1 className={`mt-5 whitespace-pre-line font-serif font-semibold leading-[1.02] text-[#0D322B] ${compact ? 'text-[66px]' : 'text-[82px]'}`}>
        {slide.title}
      </h1>
      {slide.subtitle && <p className="mt-7 max-w-[1120px] text-[31px] font-medium leading-[1.22] text-[#144D42]">{slide.subtitle}</p>}
    </div>
  );
}

export function GlassPanel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[8px] border border-[#0D322B]/14 bg-[#FFF8EF]/88 shadow-[0_26px_80px_-44px_rgba(13,50,43,0.44)] backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}

export function QrBlock({ url, label }: { url: string; label: string; displayUrl?: string }) {
  return <QRCodeCard url={url} label={label} />;
}

export function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[27px] font-semibold leading-[1.18] text-[#123932]">
      <FaCheckCircle className="mt-[6px] shrink-0 text-[20px] text-[#0D322B]" />
      <span>{children}</span>
    </li>
  );
}

export function TwoColumnSlideShell({
  slide,
  children,
  compactHeadline = false,
}: {
  slide: TVSlide;
  children?: ReactNode;
  compactHeadline?: boolean;
}) {
  return (
    <BackgroundSlide slide={slide}>
      <div className="grid h-full grid-cols-[minmax(0,1fr)_360px] gap-10 px-16 py-12">
        <div className="flex min-w-0 flex-col">
          <div>
            <div className="tv-enter tv-enter-1">
              <Headline slide={slide} compact={compactHeadline} />
            </div>
            {children && <div className="tv-enter tv-enter-2">{children}</div>}
          </div>
        </div>
        <div className="tv-enter tv-enter-3 flex items-end justify-end pb-7">
          <QrBlock url={slide.qrUrl} label={slide.qrLabel} displayUrl={slide.displayUrl} />
        </div>
      </div>
    </BackgroundSlide>
  );
}
