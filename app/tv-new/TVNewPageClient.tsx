'use client';

import Image from 'next/image';
import QRCode from 'qrcode';
import { CSSProperties, ReactNode, useEffect, useMemo, useState } from 'react';
import { FaCheckCircle, FaInstagram, FaQrcode, FaStar } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';
import { TV_NEW_SLIDES, type TVSlide } from './content';

const SLIDE_DURATION = 30000;
const ANIMATION_DURATION = 900;

const qrCache = new Map<string, string>();
const qrPending = new Map<string, Promise<string>>();

type TVNewPageClientProps = {
  forcedSlideId?: string;
  slides?: TVSlide[];
  locale?: 'de' | 'en';
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

function BrandTop() {
  return (
    <div className="inline-flex h-[76px] w-fit items-center rounded-[8px] border border-[#0D322B]/10 bg-[#FFFDF8] px-7 shadow-[0_18px_45px_-30px_rgba(13,50,43,0.42)]">
      <Image src="/images/praxis-jona-web-logo.png" alt="Praxis Jona" width={310} height={76} className="h-12 w-auto" />
    </div>
  );
}

function Kicker({ children }: { children?: ReactNode }) {
  if (!children) return null;

  return (
    <p className="text-[24px] font-bold uppercase leading-none tracking-[0.16em] text-[#144D42]">
      {children}
    </p>
  );
}

function Headline({ slide, compact = false }: { slide: TVSlide; compact?: boolean }) {
  return (
    <div className="max-w-[1050px]">
      <Kicker>{slide.kicker}</Kicker>
      {slide.eyebrow && <p className="mt-6 text-[30px] font-semibold leading-tight text-[#7A5F48]">{slide.eyebrow}</p>}
      <h1 className={`mt-5 whitespace-pre-line font-serif font-semibold leading-[1.02] text-[#0D322B] ${compact ? 'text-[66px]' : 'text-[82px]'}`}>
        {slide.title}
      </h1>
      {slide.subtitle && <p className="mt-7 max-w-[940px] text-[31px] font-medium leading-[1.22] text-[#144D42]">{slide.subtitle}</p>}
    </div>
  );
}

function GlassPanel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[8px] border border-[#0D322B]/14 bg-[#FFF8EF]/88 shadow-[0_26px_80px_-44px_rgba(13,50,43,0.44)] backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}

function QrBlock({ url, label, displayUrl }: { url: string; label: string; displayUrl?: string }) {
  const qrSvgUrl = useGeneratedQr(url);

  return (
    <div className="flex w-[250px] flex-col items-center rounded-[8px] border border-[#0D322B]/16 bg-[#FFFDF8] p-4 text-[#0D322B] shadow-[0_24px_70px_-38px_rgba(13,50,43,0.56)]">
      <div className="flex h-[198px] w-[198px] items-center justify-center rounded-[6px] border border-[#0D322B]/8 bg-white">
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
    <li className="flex items-start gap-3 text-[27px] font-semibold leading-[1.18] text-[#123932]">
      <FaCheckCircle className="mt-[6px] shrink-0 text-[20px] text-[#0D322B]" />
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
            <div className="tv-enter tv-enter-1">
              <BrandTop />
            </div>
            <div className="tv-enter tv-enter-2 mt-10">
              <Headline slide={slide} compact={compactHeadline} />
            </div>
            {children && <div className="tv-enter tv-enter-3">{children}</div>}
          </div>
        </div>
        <div className="tv-enter tv-enter-4 flex items-end justify-end pb-7">
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

function ServicePriceSlide({ slide, locale }: { slide: TVSlide; locale: 'de' | 'en' }) {
  return (
    <SlideShell slide={slide} compactHeadline>
      <div className="mt-8 grid max-w-[1060px] grid-cols-[1fr_0.78fr] gap-5">
        <GlassPanel className="p-5">
          <p className="text-[24px] font-bold uppercase tracking-[0.1em] text-[#144D42]">{locale === 'en' ? 'Current guide' : 'Aktuelle Orientierung'}</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {slide.prices?.map((item) => (
              <div key={`${item.label}-${item.price}`} className="min-h-[128px] rounded-[8px] border border-[#0D322B]/10 bg-white/72 p-4">
                <p className="hyphens-auto break-words text-[23px] font-semibold leading-[1.08] text-[#0D322B]">{item.label}</p>
                <p className="mt-2 font-serif text-[42px] leading-none text-[#144D42]">{item.price}</p>
                {item.note && <p className="mt-2 text-[17px] font-medium leading-tight text-[#5D6F66]">{item.note}</p>}
              </div>
            ))}
          </div>
        </GlassPanel>
        <GlassPanel className="p-5">
          <p className="text-[24px] font-bold uppercase tracking-[0.1em] text-[#144D42]">{locale === 'en' ? 'Suitable for' : 'Geeignet für'}</p>
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
            <p className="font-serif text-[34px] leading-none text-[#0D322B]">{feature.title}</p>
            {feature.text && <p className="mt-3 text-[22px] font-semibold leading-tight text-[#45665E]">{feature.text}</p>}
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
            <div className="tv-enter tv-enter-1">
              <BrandTop />
            </div>
            <div className="tv-enter tv-enter-2 mt-10">
              <Headline slide={slide} compact />
            </div>
            <GlassPanel className="tv-enter tv-enter-3 mt-8 max-w-[820px] p-6">
              <ul className="space-y-3">
                {slide.bullets?.slice(0, 4).map((bullet) => (
                  <Bullet key={bullet}>{bullet}</Bullet>
                ))}
              </ul>
            </GlassPanel>
          </div>
        </div>
        <div className="relative min-h-0">
          <div className="tv-enter tv-enter-3 absolute left-0 right-0 top-10">
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
          <div className="tv-enter tv-enter-4 absolute bottom-16 right-0 flex items-end gap-5">
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
        <GlassPanel className="tv-enter tv-enter-2 max-w-[980px] p-9 text-center">
          <div className="flex justify-center">
            <BrandTop />
          </div>
          <FaInstagram className="mx-auto mt-9 text-[86px] text-[#0D322B]" />
          <Headline slide={slide} />
          {slide.handle && <p className="mt-7 text-[58px] font-bold leading-none text-[#144D42]">{slide.handle}</p>}
        </GlassPanel>
        <div className="tv-enter tv-enter-4 flex justify-end">
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
        <GlassPanel className="tv-enter tv-enter-2 max-w-[980px] p-10 text-center">
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
        <div className="tv-enter tv-enter-4 flex justify-end">
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
        <div className="tv-enter tv-enter-1">
          <BrandTop />
        </div>
        <div className="mt-9 grid grid-cols-[minmax(0,0.9fr)_300px] gap-10">
          <div className="tv-enter tv-enter-2">
            <Headline slide={slide} compact />
          </div>
          <div className="tv-enter tv-enter-4 flex justify-end">
            <QrBlock url={slide.qrUrl} label={slide.qrLabel} displayUrl={slide.displayUrl} />
          </div>
        </div>
        <div className="tv-enter tv-enter-3 mt-auto grid grid-cols-4 gap-4 pb-6">
          {slide.team?.map((member) => (
            <GlassPanel key={member.name} className="flex min-h-[196px] flex-col justify-start p-5">
              <div className="h-[108px] w-[108px] shrink-0 overflow-hidden rounded-full border border-[#0D322B]/18">
                <Image src={member.image} alt={member.name} width={108} height={108} className="h-full w-full object-cover" />
              </div>
              <div className="mt-4 min-w-0">
                <p className="font-serif text-[30px] leading-[0.98] text-[#0D322B]">{member.name}</p>
                <p className="mt-3 text-[18px] font-semibold leading-tight text-[#45665E]">{member.role}</p>
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
    </BackgroundSlide>
  );
}

function RenderSlide({ slide, locale }: { slide: TVSlide; locale: 'de' | 'en' }) {
  switch (slide.kind) {
    case 'hero':
      return <HeroSlide slide={slide} />;
    case 'service-price':
      return <ServicePriceSlide slide={slide} locale={locale} />;
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

export default function TVNewPageClient({ forcedSlideId, slides = TV_NEW_SLIDES, locale = 'de' }: TVNewPageClientProps) {
  const searchParams = useSearchParams();
  const tvScale = useTVScale();
  const routeForcedSlideIndex = useMemo(() => {
    if (!forcedSlideId) return null;
    const index = slides.findIndex((slide) => slide.id === forcedSlideId);
    return index >= 0 ? index : null;
  }, [forcedSlideId, slides]);

  const queryForcedSlideIndex = useMemo(() => {
    const raw = searchParams.get('slide');
    if (!raw) return null;
    const parsed = Number.parseInt(raw, 10);
    if (!Number.isFinite(parsed) || parsed < 1 || parsed > slides.length) return null;
    return parsed - 1;
  }, [searchParams, slides.length]);

  const forcedSlideIndex = routeForcedSlideIndex;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(routeForcedSlideIndex ?? queryForcedSlideIndex ?? 0);
  const [previousSlideIndex, setPreviousSlideIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToSlide = (index: number) => {
    if (index === currentSlideIndex) return;

    const outgoingSlideIndex = currentSlideIndex;
    setPreviousSlideIndex(outgoingSlideIndex);
    setCurrentSlideIndex(index);
    setProgress(forcedSlideIndex !== null ? 100 : 0);
    window.history.replaceState(null, '', `/tv-new?slide=${index + 1}`);

    window.setTimeout(() => {
      setPreviousSlideIndex((previousIndex) => (previousIndex === outgoingSlideIndex ? null : previousIndex));
    }, ANIMATION_DURATION);
  };

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
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
      const fadeTimer = setTimeout(() => setPreviousSlideIndex(null), ANIMATION_DURATION);
      return () => clearTimeout(fadeTimer);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [currentSlideIndex, forcedSlideIndex, slides.length]);

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
        {slides.map((slide, index) => {
          const isActive = index === currentSlideIndex;
          const isExiting = index === previousSlideIndex;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity ease-in-out ${isActive ? 'tv-slide-active' : ''}`}
              style={{
                opacity: isActive ? 1 : 0,
                transitionDuration: forcedSlideIndex !== null ? '0ms' : `${ANIMATION_DURATION}ms`,
                zIndex: isActive ? 10 : isExiting ? 5 : 0,
              }}
            >
              <div className="h-full w-full">
                <RenderSlide slide={slide} locale={locale} />
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
              {locale === 'en' ? 'Enter Fullscreen' : 'Vollbild starten'}
            </button>
          </div>
        )}

        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
          <div className="flex gap-1">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Slide ${index + 1}: ${slide.title}`}
                aria-current={index === currentSlideIndex ? 'true' : undefined}
                onClick={() => goToSlide(index)}
                className={`flex h-5 w-5 items-center justify-center rounded-full transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0D322B]/50 ${index === currentSlideIndex ? 'scale-110' : ''}`}
              >
                <span className={`block h-2 w-2 rounded-full transition-all ${index === currentSlideIndex ? 'bg-[#0D322B]' : 'bg-[#0D322B]/35'}`} />
              </button>
            ))}
          </div>
          <div className="h-1 w-32 overflow-hidden rounded-full bg-[#0D322B]/18">
            <div className="h-full bg-[#0D322B] transition-all duration-100 ease-linear" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <style jsx global>{`
          .tv-slide-active .tv-enter {
            animation: tvContentEnter 520ms cubic-bezier(0.2, 0.72, 0.2, 1) both;
          }

          .tv-slide-active .tv-enter-1 {
            animation-delay: 50ms;
          }

          .tv-slide-active .tv-enter-2 {
            animation-delay: 110ms;
          }

          .tv-slide-active .tv-enter-3 {
            animation-delay: 170ms;
          }

          .tv-slide-active .tv-enter-4 {
            animation-delay: 230ms;
          }

          @keyframes tvContentEnter {
            from {
              opacity: 0;
              transform: translate3d(0, 18px, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .tv-slide-active .tv-enter {
              animation: none;
            }
          }
        `}</style>
      </div>
    </main>
  );
}
