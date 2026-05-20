'use client';

import Image from 'next/image';
import QRCode from 'qrcode';
import { CSSProperties, ReactNode, useEffect, useMemo, useState } from 'react';
import { FaCheckCircle, FaInstagram, FaQrcode, FaStar } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';
import { TV_NEW_SLIDES, type TVSlide } from './content';

const SLIDE_DURATION = 30000;
const ANIMATION_DURATION = 4000;

const qrCache = new Map<string, string>();
const qrPending = new Map<string, Promise<string>>();

type TVNewPageClientProps = {
  forcedSlideId?: string;
};

type TVStyle = CSSProperties & {
  '--tv-scale'?: number;
};

function useTVScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      setScale(Math.min(window.innerWidth / 1920, window.innerHeight / 1080, 1));
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return scale;
}

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

function BackgroundSlide({ slide, children }: { slide: TVSlide; children: ReactNode }) {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#081F1A] text-white">
      <Image
        src={slide.image}
        alt={slide.imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className={`absolute inset-0 ${slide.overlay ?? 'bg-[#0D322B]/62'}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(211,224,214,0.24),transparent_24%),linear-gradient(90deg,rgba(8,31,26,0.92)_0%,rgba(8,31,26,0.72)_45%,rgba(8,31,26,0.34)_100%)]" />
      <div
        className="absolute left-1/2 top-1/2 h-[1080px] w-[1920px] origin-center"
        style={{ transform: 'translate(-50%, -50%) scale(var(--tv-scale, 1))' }}
      >
        {children}
      </div>
    </section>
  );
}

function BrandTop() {
  return (
    <div className="inline-flex h-[76px] w-fit items-center rounded-[8px] bg-white px-7 shadow-[0_18px_45px_-26px_rgba(0,0,0,0.9)]">
      <Image src="/images/praxis-jona-web-logo.png" alt="Praxis Jona" width={310} height={76} className="h-12 w-auto" />
    </div>
  );
}

function Kicker({ children }: { children?: ReactNode }) {
  if (!children) return null;

  return (
    <p className="text-[24px] font-semibold uppercase tracking-[0.16em] text-[#D3E0D6]">
      {children}
    </p>
  );
}

function Headline({ slide, compact = false }: { slide: TVSlide; compact?: boolean }) {
  return (
    <div className="max-w-[1050px]">
      <Kicker>{slide.kicker}</Kicker>
      {slide.eyebrow && <p className="mt-3 text-[30px] font-semibold text-[#F9EDDF]">{slide.eyebrow}</p>}
      <h1 className={`mt-3 whitespace-pre-line font-serif font-semibold leading-[0.98] text-white ${compact ? 'text-[66px]' : 'text-[82px]'}`}>
        {slide.title}
      </h1>
      {slide.subtitle && <p className="mt-5 max-w-[940px] text-[31px] leading-[1.18] text-[#EAF1EE]">{slide.subtitle}</p>}
    </div>
  );
}

function GlassPanel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[8px] border border-white/18 bg-[#0D322B]/72 shadow-[0_26px_80px_-36px_rgba(0,0,0,0.92)] backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}

function QrBlock({ url, label, displayUrl }: { url: string; label: string; displayUrl?: string }) {
  const qrSvgUrl = useGeneratedQr(url);

  return (
    <div className="flex w-[250px] flex-col items-center rounded-[8px] border border-white/20 bg-[#F9EDDF]/95 p-4 text-[#0D322B] shadow-[0_24px_70px_-34px_rgba(0,0,0,0.95)]">
      <div className="flex h-[198px] w-[198px] items-center justify-center rounded-[6px] bg-white">
        {qrSvgUrl ? (
          <Image src={qrSvgUrl} alt={`QR Code: ${label}`} width={186} height={186} unoptimized className="h-[186px] w-[186px]" />
        ) : (
          <FaQrcode className="text-[88px] text-[#0D322B]/35" />
        )}
      </div>
      <p className="mt-3 text-center text-[22px] font-bold leading-tight">{label}</p>
      {displayUrl && <p className="mt-1 max-w-full truncate text-[15px] font-semibold text-[#144D42]">{displayUrl}</p>}
    </div>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[27px] leading-[1.18] text-[#EEF5F1]">
      <FaCheckCircle className="mt-[6px] shrink-0 text-[20px] text-[#D3E0D6]" />
      <span>{children}</span>
    </li>
  );
}

function SlideShell({ slide, children, compactHeadline = false }: { slide: TVSlide; children?: ReactNode; compactHeadline?: boolean }) {
  return (
    <BackgroundSlide slide={slide}>
      <div className="grid h-full grid-cols-[minmax(0,1fr)_300px] gap-10 px-16 py-12">
        <div className="flex min-w-0 flex-col">
          <div>
            <BrandTop />
            <div className="mt-10">
              <Headline slide={slide} compact={compactHeadline} />
            </div>
            {children}
          </div>
        </div>
        <div className="flex items-end justify-end pb-7">
          <QrBlock url={slide.qrUrl} label={slide.qrLabel} displayUrl={slide.displayUrl} />
        </div>
      </div>
    </BackgroundSlide>
  );
}

function HeroSlide({ slide }: { slide: TVSlide }) {
  return (
    <SlideShell slide={slide}>
      <GlassPanel className="mt-9 max-w-[940px] p-6">
        <ul className="grid grid-cols-3 gap-4">
          {slide.bullets?.map((bullet) => (
            <Bullet key={bullet}>{bullet}</Bullet>
          ))}
        </ul>
      </GlassPanel>
    </SlideShell>
  );
}

function ServicePriceSlide({ slide }: { slide: TVSlide }) {
  return (
    <SlideShell slide={slide} compactHeadline>
      <div className="mt-8 grid max-w-[1060px] grid-cols-[1fr_0.78fr] gap-5">
        <GlassPanel className="p-5">
          <p className="text-[24px] font-semibold uppercase tracking-[0.1em] text-[#D3E0D6]">Aktuelle Orientierung</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {slide.prices?.map((item) => (
              <div key={`${item.label}-${item.price}`} className="min-h-[128px] rounded-[8px] bg-white/12 p-4">
                <p className="text-[25px] font-semibold leading-tight text-white">{item.label}</p>
                <p className="mt-2 font-serif text-[42px] leading-none text-[#F9EDDF]">{item.price}</p>
                {item.note && <p className="mt-2 text-[17px] leading-tight text-[#D3E0D6]">{item.note}</p>}
              </div>
            ))}
          </div>
        </GlassPanel>
        <GlassPanel className="p-5">
          <p className="text-[24px] font-semibold uppercase tracking-[0.1em] text-[#D3E0D6]">Geeignet für</p>
          <ul className="mt-4 space-y-3">
            {slide.bullets?.slice(0, 4).map((bullet) => (
              <Bullet key={bullet}>{bullet}</Bullet>
            ))}
          </ul>
        </GlassPanel>
      </div>
    </SlideShell>
  );
}

function FeatureGridSlide({ slide }: { slide: TVSlide }) {
  return (
    <SlideShell slide={slide} compactHeadline>
      <div className="mt-8 grid max-w-[1060px] grid-cols-3 gap-4">
        {slide.features?.map((feature) => (
          <GlassPanel key={feature.title} className="min-h-[142px] p-5">
            <p className="font-serif text-[34px] leading-none text-white">{feature.title}</p>
            {feature.text && <p className="mt-3 text-[22px] font-semibold leading-tight text-[#D3E0D6]">{feature.text}</p>}
          </GlassPanel>
        ))}
      </div>
    </SlideShell>
  );
}

function AppSlide({ slide }: { slide: TVSlide }) {
  return (
    <BackgroundSlide slide={slide}>
      <div className="grid h-full grid-cols-[minmax(0,0.95fr)_minmax(560px,1fr)] gap-10 px-16 py-12">
        <div className="flex min-w-0 flex-col justify-between">
          <div>
            <BrandTop />
            <div className="mt-10">
              <Headline slide={slide} compact />
            </div>
            <GlassPanel className="mt-8 max-w-[820px] p-6">
              <ul className="space-y-3">
                {slide.bullets?.slice(0, 4).map((bullet) => (
                  <Bullet key={bullet}>{bullet}</Bullet>
                ))}
              </ul>
            </GlassPanel>
          </div>
        </div>
        <div className="relative min-h-0">
          <div className="absolute left-0 right-0 top-10">
            <div className="flex h-[620px] items-end justify-center gap-5">
              {slide.appImages?.map((src, index) => {
                const width = index === 0 ? 225 : 260;
                const height = index === 0 ? 590 : 600;

                return (
                  <Image
                    key={src}
                    src={src}
                    alt={`Velto App Screenshot ${index + 1}`}
                    width={width}
                    height={height}
                    className="object-contain drop-shadow-[0_28px_42px_rgba(0,0,0,0.45)]"
                  />
                );
              })}
            </div>
          </div>
          <div className="absolute bottom-16 right-0 flex items-end gap-5">
            {slide.badgeImage && <Image src={slide.badgeImage} alt="App Store" width={220} height={67} className="mb-2 h-[67px] w-[220px]" />}
            <QrBlock url={slide.qrUrl} label={slide.qrLabel} displayUrl={slide.displayUrl} />
          </div>
        </div>
      </div>
    </BackgroundSlide>
  );
}

function SocialSlide({ slide }: { slide: TVSlide }) {
  return (
    <BackgroundSlide slide={slide}>
      <div className="grid h-full grid-cols-[1fr_330px] items-center gap-10 px-16 py-12">
        <GlassPanel className="max-w-[980px] p-9 text-center">
          <div className="flex justify-center">
            <BrandTop />
          </div>
          <FaInstagram className="mx-auto mt-9 text-[86px] text-[#F9EDDF]" />
          <Headline slide={slide} />
          {slide.handle && <p className="mt-7 text-[58px] font-bold leading-none text-[#D3E0D6]">{slide.handle}</p>}
        </GlassPanel>
        <div className="flex justify-end">
          <QrBlock url={slide.qrUrl} label={slide.qrLabel} displayUrl={slide.displayUrl} />
        </div>
      </div>
    </BackgroundSlide>
  );
}

function ReviewSlide({ slide }: { slide: TVSlide }) {
  return (
    <BackgroundSlide slide={slide}>
      <div className="grid h-full grid-cols-[1fr_330px] items-center gap-10 px-16 py-12">
        <GlassPanel className="max-w-[980px] p-10 text-center">
          <div className="flex justify-center">
            <BrandTop />
          </div>
          <div className="mt-9 flex justify-center gap-4 text-[54px] text-[#F9C74F]">
            {Array.from({ length: slide.reviewStars ?? 5 }).map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
          <Headline slide={slide} />
        </GlassPanel>
        <div className="flex justify-end">
          <QrBlock url={slide.qrUrl} label={slide.qrLabel} displayUrl={slide.displayUrl} />
        </div>
      </div>
    </BackgroundSlide>
  );
}

function TeamSlide({ slide }: { slide: TVSlide }) {
  return (
    <BackgroundSlide slide={slide}>
      <div className="flex h-full flex-col px-16 py-12">
        <BrandTop />
        <div className="mt-9 grid grid-cols-[minmax(0,0.9fr)_300px] gap-10">
          <Headline slide={slide} compact />
          <div className="flex justify-end">
            <QrBlock url={slide.qrUrl} label={slide.qrLabel} displayUrl={slide.displayUrl} />
          </div>
        </div>
        <div className="mt-auto grid grid-cols-3 gap-5 pb-6">
          {slide.team?.map((member) => (
            <GlassPanel key={member.name} className="flex min-h-[168px] items-center gap-5 p-5">
              <div className="h-[118px] w-[118px] shrink-0 overflow-hidden rounded-full border border-white/25">
                <Image src={member.image} alt={member.name} width={118} height={118} className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0">
                <p className="font-serif text-[34px] leading-none text-white">{member.name}</p>
                <p className="mt-3 text-[23px] font-semibold leading-tight text-[#D3E0D6]">{member.role}</p>
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
    </BackgroundSlide>
  );
}

function RenderSlide({ slide }: { slide: TVSlide }) {
  switch (slide.kind) {
    case 'hero':
      return <HeroSlide slide={slide} />;
    case 'service-price':
      return <ServicePriceSlide slide={slide} />;
    case 'feature-grid':
      return <FeatureGridSlide slide={slide} />;
    case 'app':
      return <AppSlide slide={slide} />;
    case 'social':
      return <SocialSlide slide={slide} />;
    case 'review':
      return <ReviewSlide slide={slide} />;
    case 'team':
      return <TeamSlide slide={slide} />;
    default:
      return <HeroSlide slide={slide} />;
  }
}

export default function TVNewPageClient({ forcedSlideId }: TVNewPageClientProps) {
  const searchParams = useSearchParams();
  const tvScale = useTVScale();
  const routeForcedSlideIndex = useMemo(() => {
    if (!forcedSlideId) return null;
    const index = TV_NEW_SLIDES.findIndex((slide) => slide.id === forcedSlideId);
    return index >= 0 ? index : null;
  }, [forcedSlideId]);

  const queryForcedSlideIndex = useMemo(() => {
    const raw = searchParams.get('slide');
    if (!raw) return null;
    const parsed = Number.parseInt(raw, 10);
    if (!Number.isFinite(parsed) || parsed < 1 || parsed > TV_NEW_SLIDES.length) return null;
    return parsed - 1;
  }, [searchParams]);

  const forcedSlideIndex = routeForcedSlideIndex ?? queryForcedSlideIndex;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(forcedSlideIndex ?? 0);
  const [previousSlideIndex, setPreviousSlideIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error('Fullscreen error:', error);
    }
  };

  useEffect(() => {
    if (forcedSlideIndex !== null) {
      setCurrentSlideIndex(forcedSlideIndex);
      setPreviousSlideIndex(null);
      setProgress(100);
      return;
    }

    const timer = setTimeout(() => {
      setPreviousSlideIndex(currentSlideIndex);
      setCurrentSlideIndex((prev) => (prev + 1) % TV_NEW_SLIDES.length);
      const fadeTimer = setTimeout(() => setPreviousSlideIndex(null), ANIMATION_DURATION);
      return () => clearTimeout(fadeTimer);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [currentSlideIndex, forcedSlideIndex]);

  useEffect(() => {
    if (forcedSlideIndex !== null) {
      setProgress(100);
      return;
    }

    setProgress(0);
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min(100, (elapsed / SLIDE_DURATION) * 100));
      if (elapsed >= SLIDE_DURATION) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [currentSlideIndex, forcedSlideIndex]);

  useEffect(() => {
    const onFullscreen = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onFullscreen);
    return () => document.removeEventListener('fullscreenchange', onFullscreen);
  }, []);

  return (
    <main className="fixed inset-0 h-screen w-screen bg-black" style={{ '--tv-scale': tvScale } as TVStyle}>
      <div className="relative h-full w-full overflow-hidden">
        {TV_NEW_SLIDES.map((slide, index) => {
          const isActive = index === currentSlideIndex;
          const isExiting = index === previousSlideIndex;

          return (
            <div
              key={slide.id}
              className="absolute inset-0 transition-opacity ease-in-out"
              style={{
                opacity: isActive ? 1 : 0,
                transitionDuration: forcedSlideIndex !== null ? '0ms' : `${ANIMATION_DURATION}ms`,
                zIndex: isActive ? 10 : isExiting ? 5 : 0,
              }}
            >
              <div className="h-full w-full">
                <RenderSlide slide={slide} />
              </div>
            </div>
          );
        })}

        {!isFullscreen && (
          <div className="absolute right-4 top-4 z-20">
            <button
              onClick={toggleFullscreen}
              className="rounded-[8px] bg-black/45 px-4 py-2 text-sm text-white transition hover:bg-black/65"
            >
              Enter Fullscreen
            </button>
          </div>
        )}

        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
          <div className="flex gap-1">
            {TV_NEW_SLIDES.map((slide, index) => (
              <div
                key={slide.id}
                className={`h-2 w-2 rounded-full transition-all ${index === currentSlideIndex ? 'scale-125 bg-white' : 'bg-white/45'}`}
              />
            ))}
          </div>
          <div className="h-1 w-32 overflow-hidden rounded-full bg-white/20">
            <div className="h-full bg-white transition-all duration-100 ease-linear" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </main>
  );
}
