'use client';

import { CSSProperties, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { TV_NEW_SLIDES, type TVSlide } from './content';
import {
  OverviewNavigationTemplate,
  ServiceExplainerTemplate,
  TrustSocialProofTemplate,
} from './templates';

const SLIDE_DURATION = 30000;
const ANIMATION_DURATION = 900;

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

function RenderSlide({ slide, locale }: { slide: TVSlide; locale: 'de' | 'en' }) {
  switch (slide.kind) {
    case 'hero':
      return <OverviewNavigationTemplate slide={slide} />;
    case 'service-price':
      return <ServiceExplainerTemplate slide={slide} locale={locale} />;
    case 'feature-grid':
      return <OverviewNavigationTemplate slide={slide} />;
    case 'app':
    case 'social':
    case 'review':
    case 'team':
      return <TrustSocialProofTemplate slide={slide} />;
    default:
      return <OverviewNavigationTemplate slide={slide} />;
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
