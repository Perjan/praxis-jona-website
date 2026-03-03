'use client';

import Image from 'next/image';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';
import { TV_NEW_CONTENT as C } from './content';

const SLIDE_DURATION = 30000;
const ANIMATION_DURATION = 4000;

type SlideProps = {
  bg: string;
  children: ReactNode;
  overlay?: string;
};

function BackgroundSlide({ bg, children, overlay = 'bg-black/45' }: SlideProps) {
  return (
    <section className="relative h-full w-full overflow-hidden text-white">
      <Image src={bg} alt="Slide background" fill className="object-cover" priority />
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" />
      <div className="absolute inset-0">{children}</div>
    </section>
  );
}

function BrandTop() {
  return (
    <div className="inline-flex items-center gap-3 rounded-xl bg-white/90 px-4 py-2 text-[#123932] backdrop-blur-sm">
      <Image src="/images/praxis-jona-web-logo.png" alt="Praxis Jona" width={190} height={48} className="h-8 w-auto" />
    </div>
  );
}

function Headline({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-[980px]">
      {kicker && <p className="text-[24px] font-medium tracking-[0.18em] text-[#d6e3dc] uppercase">{kicker}</p>}
      <h1 className="mt-2 font-serif text-[88px] font-semibold leading-[0.95]">{title}</h1>
      {subtitle && <p className="mt-4 text-[34px] text-[#e5eeea]">{subtitle}</p>}
    </div>
  );
}

function GlassPanel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/20 bg-[#0f2e28]/60 p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}

function QrBlock({ src = '/tv-new/qr/qr-main.png', label = 'Mehr erfahren' }: { src?: string; label?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/20 bg-[#0f2e28]/65 p-4 backdrop-blur-sm">
      <Image src={src} alt="QR" width={170} height={170} className="h-[170px] w-[170px] rounded-xl bg-white p-2" />
      <p className="text-[20px] font-semibold text-[#dce9e3]">{label}</p>
    </div>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[28px] leading-[1.25] text-[#e9f1ed]">
      <FaCheckCircle className="mt-1 text-[18px] text-[#9dd1c3]" />
      <span>{children}</span>
    </li>
  );
}

function Slide1() {
  return (
    <BackgroundSlide bg={C.slide1.bg} overlay={C.slide1.overlay}>
      <div className="flex h-full flex-col justify-center px-14">
        <BrandTop />
        <Headline title={C.slide1.title} subtitle={C.slide1.subtitle} />
      </div>
    </BackgroundSlide>
  );
}

function Slide2() {
  return (
    <BackgroundSlide bg={C.slide2.bg} overlay={C.slide2.overlay}>
      <div className="grid h-full grid-cols-[1.1fr_0.9fr] gap-10 px-14 py-12">
        <div className="flex flex-col justify-between">
          <div>
            <BrandTop />
            <Headline kicker={C.slide2.kicker} title={C.slide2.title} subtitle={C.slide2.subtitle} />
            <GlassPanel className="mt-6 max-w-[860px]">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-serif text-[34px]">Medizinisch</p>
                  <ul className="mt-3 space-y-2">
                    {C.slide2.sections.medical.map((item) => (
                      <Bullet key={item}>{item}</Bullet>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-serif text-[34px]">Ästhetisch</p>
                  <ul className="mt-3 space-y-2">
                    {C.slide2.sections.aesthetics.map((item) => (
                      <Bullet key={item}>{item}</Bullet>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassPanel>
          </div>
          <p className="text-[24px] text-[#d8e6df]">{C.slide2.infoUrl}</p>
        </div>
        <div className="flex items-end justify-end pb-8">
          <QrBlock src={C.slide2.qr} label={C.slide2.qrLabel} />
        </div>
      </div>
    </BackgroundSlide>
  );
}

function Slide3() {
  return (
    <BackgroundSlide bg={C.slide3.bg} overlay={C.slide3.overlay}>
      <div className="grid h-full grid-cols-[1.1fr_0.9fr] items-center gap-10 px-14 py-12">
        <GlassPanel className="max-w-[820px] text-center">
          <BrandTop />
          <p className="mt-5 font-serif text-[64px]">{C.slide3.title}</p>
          <p className="mt-2 text-[52px] font-semibold">{C.slide3.handle}</p>
        </GlassPanel>
        <div className="flex justify-end">
          <QrBlock src={C.slide3.qr} label={C.slide3.qrLabel} />
        </div>
      </div>
    </BackgroundSlide>
  );
}

function Slide4() {
  return (
    <BackgroundSlide bg={C.slide4.bg} overlay={C.slide4.overlay}>
      <div className="grid h-full grid-cols-[1.15fr_0.85fr] gap-10 px-14 py-12">
        <div className="flex flex-col justify-between">
          <div>
            <BrandTop />
            <Headline kicker={C.slide4.kicker} title={C.slide4.title} subtitle={C.slide4.subtitle} />
            <div className="mt-6 grid max-w-[920px] grid-cols-2 gap-3">
              {C.slide4.items.map((item) => (
                <GlassPanel key={item} className="py-4">
                  <p className="text-[28px] font-semibold text-[#e8f0ec]">{item}</p>
                </GlassPanel>
              ))}
            </div>
          </div>
          <p className="text-[24px] text-[#d8e6df]">{C.slide4.infoUrl}</p>
        </div>
        <div className="flex items-end justify-end pb-8">
          <QrBlock src={C.slide4.qr} label={C.slide4.qrLabel} />
        </div>
      </div>
    </BackgroundSlide>
  );
}

function Slide5() {
  return (
    <BackgroundSlide bg={C.slide5.bg} overlay={C.slide5.overlay}>
      <div className="grid h-full grid-cols-[1.1fr_0.9fr] items-center gap-10 px-14 py-12">
        <GlassPanel className="max-w-[840px] text-center">
          <BrandTop />
          <div className="mt-4 flex justify-center gap-3 text-[40px] text-yellow-400">
            {Array.from({ length: 5 }).map((_, idx) => (
              <FaStar key={idx} />
            ))}
          </div>
          <p className="mt-5 font-serif text-[64px] leading-[1.02]">{C.slide5.title}</p>
        </GlassPanel>
        <div className="flex justify-end">
          <QrBlock src={C.slide5.qr} label={C.slide5.qrLabel} />
        </div>
      </div>
    </BackgroundSlide>
  );
}

function Slide6() {
  return (
    <BackgroundSlide bg={C.slide6.bg} overlay={C.slide6.overlay}>
      <div className="grid h-full grid-cols-[1.1fr_0.9fr] gap-10 px-14 py-12">
        <div className="flex flex-col justify-between">
          <div>
            <BrandTop />
            <Headline kicker={C.slide6.kicker} title={C.slide6.title} subtitle={C.slide6.subtitle} />
            <GlassPanel className="mt-6 max-w-[860px]">
              <ul className="space-y-3">
                {C.slide6.bullets.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>
            </GlassPanel>
          </div>
          <p className="text-[24px] text-[#d8e6df]">{C.slide6.infoUrl}</p>
        </div>
        <div className="flex items-end justify-end pb-8">
          <QrBlock src={C.slide6.qr} label={C.slide6.qrLabel} />
        </div>
      </div>
    </BackgroundSlide>
  );
}

function Slide7() {
  return (
    <BackgroundSlide bg={C.slide7.bg} overlay={C.slide7.overlay}>
      <div className="grid h-full grid-cols-[1fr_1fr] gap-10 px-14 py-12">
        <div>
          <BrandTop />
          <Headline kicker={C.slide7.kicker} title={C.slide7.title} subtitle={C.slide7.subtitle} />
          <p className="mt-5 max-w-[760px] text-[28px] leading-[1.3] text-[#e2ece8]">{C.slide7.note}</p>
        </div>
        <div className="relative">
          <GlassPanel className="absolute left-0 top-28 right-0">
            <div className="flex items-end justify-center gap-4">
              <Image src="/tv-new/assets/phone-1.png" alt="App 1" width={160} height={430} className="h-[430px] w-[160px]" />
              <Image src="/tv-new/assets/phone-2.png" alt="App 2" width={180} height={470} className="h-[470px] w-[180px]" />
              <Image src="/tv-new/assets/phone-3.png" alt="App 3" width={180} height={470} className="h-[470px] w-[180px]" />
            </div>
          </GlassPanel>
          <div className="absolute bottom-8 right-0 flex flex-col items-end gap-3">
            <QrBlock src={C.slide7.qr} label={C.slide7.qrLabel} />
            <Image src="/tv-new/assets/appstore-badge.png" alt="App Store" width={210} height={64} className="h-[64px] w-[210px]" />
          </div>
        </div>
      </div>
    </BackgroundSlide>
  );
}

function Slide8() {
  return (
    <BackgroundSlide bg={C.slide8.bg} overlay={C.slide8.overlay}>
      <div className="grid h-full grid-cols-[1.1fr_0.9fr] gap-10 px-14 py-12">
        <div className="flex flex-col justify-between">
          <div>
            <BrandTop />
            <Headline kicker={C.slide8.kicker} title={C.slide8.title} subtitle={C.slide8.subtitle} />
            <GlassPanel className="mt-6 max-w-[860px]">
              <div className="grid grid-cols-2 gap-6">
                <ul className="space-y-3">
                  {C.slide8.left.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
                <ul className="space-y-3">
                  {C.slide8.right.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
              </div>
            </GlassPanel>
          </div>
          <p className="text-[24px] text-[#d8e6df]">{C.slide8.infoUrl}</p>
        </div>
        <div className="flex items-end justify-end pb-8">
          <QrBlock src={C.slide8.qr} label={C.slide8.qrLabel} />
        </div>
      </div>
    </BackgroundSlide>
  );
}

function Slide9() {
  return (
    <BackgroundSlide bg={C.slide9.bg} overlay={C.slide9.overlay}>
      <div className="grid h-full grid-cols-[1.1fr_0.9fr] gap-10 px-14 py-12">
        <div className="flex flex-col justify-between">
          <div>
            <BrandTop />
            <Headline kicker={C.slide9.kicker} title={C.slide9.title} subtitle={C.slide9.subtitle} />
            <GlassPanel className="mt-6 max-w-[860px]">
              <ul className="space-y-3">
                {C.slide9.bullets.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>
            </GlassPanel>
          </div>
          <p className="text-[24px] text-[#d8e6df]">{C.slide9.infoUrl}</p>
        </div>
        <div className="flex items-end justify-end pb-8">
          <QrBlock src={C.slide9.qr} label={C.slide9.qrLabel} />
        </div>
      </div>
    </BackgroundSlide>
  );
}

function Slide10() {
  return (
    <BackgroundSlide bg={C.slide10.bg} overlay={C.slide10.overlay}>
      <div className="flex h-full flex-col justify-center px-14">
        <BrandTop />
        <Headline kicker={C.slide10.kicker} title={C.slide10.title} subtitle={C.slide10.subtitle} />
      </div>
      <div className="absolute bottom-10 right-14">
        <QrBlock src={C.slide10.qr} label={C.slide10.qrLabel} />
      </div>
    </BackgroundSlide>
  );
}

function Slide11() {
  return (
    <BackgroundSlide bg={C.slide11.bg} overlay={C.slide11.overlay}>
      <div className="grid h-full grid-cols-[1fr_1fr] gap-10 px-14 py-12">
        <div className="flex flex-col justify-center">
          <BrandTop />
          <Headline kicker={C.slide11.kicker} title={C.slide11.title} subtitle={C.slide11.subtitle} />
        </div>
        <div className="flex flex-col justify-center gap-4">
          {C.slide11.cards.map(([title, text]) => (
            <GlassPanel key={title}>
              <p className="font-serif text-[48px] leading-none">{title}</p>
              <p className="mt-2 text-[30px] text-[#d9e6e0]">{text}</p>
            </GlassPanel>
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 right-14">
        <QrBlock src={C.slide11.qr} label={C.slide11.qrLabel} />
      </div>
    </BackgroundSlide>
  );
}

function Slide12() {
  return (
    <BackgroundSlide bg={C.slide12.bg} overlay={C.slide12.overlay}>
      <div className="grid h-full grid-cols-[1fr_1fr] gap-10 px-14 py-12">
        <div className="flex flex-col justify-center">
          <BrandTop />
          <Headline kicker={C.slide12.kicker} title={C.slide12.title} subtitle={C.slide12.subtitle} />
        </div>
        <div className="flex flex-col justify-center gap-4">
          {C.slide12.steps.map(([num, title, text]) => (
            <GlassPanel key={title} className="flex items-start gap-4">
              <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-[#d1e2db] text-[20px] font-bold text-[#123932]">{num}</div>
              <div>
                <p className="font-serif text-[44px] leading-none">{title}</p>
                <p className="mt-2 text-[29px] text-[#d9e6e0]">{text}</p>
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 right-14">
        <QrBlock src={C.slide12.qr} label={C.slide12.qrLabel} />
      </div>
    </BackgroundSlide>
  );
}

function Slide13() {
  return (
    <BackgroundSlide bg={C.slide13.bg} overlay={C.slide13.overlay}>
      <div className="px-14 py-12">
        <BrandTop />
        <Headline kicker={C.slide13.kicker} title={C.slide13.title} subtitle={C.slide13.subtitle} />
      </div>
      <div className="absolute bottom-10 left-14 right-14 grid grid-cols-3 gap-5">
        {C.slide13.team.map((member) => (
          <GlassPanel key={member.name} className="flex items-center gap-4">
            <div className="h-[108px] w-[108px] overflow-hidden rounded-full border border-white/20">
              <Image src={member.image} alt={member.name} width={108} height={108} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="font-serif text-[33px] leading-none">{member.name}</p>
              <p className="mt-2 text-[24px] text-[#d8e5df]">{member.role}</p>
            </div>
          </GlassPanel>
        ))}
      </div>
    </BackgroundSlide>
  );
}

const slides = [
  { id: 'slide-1', component: Slide1 },
  { id: 'slide-2', component: Slide2 },
  { id: 'slide-3', component: Slide3 },
  { id: 'slide-4', component: Slide4 },
  { id: 'slide-5', component: Slide5 },
  { id: 'slide-6', component: Slide6 },
  { id: 'slide-7', component: Slide7 },
  { id: 'slide-8', component: Slide8 },
  { id: 'slide-9', component: Slide9 },
  { id: 'slide-10', component: Slide10 },
  { id: 'slide-11', component: Slide11 },
  { id: 'slide-12', component: Slide12 },
  { id: 'slide-13', component: Slide13 },
];

export default function TVNewPageClient() {
  const searchParams = useSearchParams();
  const forcedSlideIndex = useMemo(() => {
    const raw = searchParams.get('slide');
    if (!raw) return null;
    const parsed = Number.parseInt(raw, 10);
    if (!Number.isFinite(parsed) || parsed < 1 || parsed > slides.length) return null;
    return parsed - 1;
  }, [searchParams]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
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
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
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
    <main className="fixed inset-0 h-screen w-screen bg-black">
      <div className="relative h-full w-full overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentSlideIndex;
          const isExiting = index === previousSlideIndex;
          const SlideComponent = slide.component;

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
              <div
                className={`h-full w-full ${forcedSlideIndex === null && (isActive || isExiting) ? 'ken-burns' : ''}`}
                style={{ animationDuration: `${SLIDE_DURATION + ANIMATION_DURATION}ms` }}
              >
                <SlideComponent />
              </div>
            </div>
          );
        })}

        <style jsx>{`
          .ken-burns {
            animation: kenburns linear forwards;
            transform-origin: center center;
          }
          @keyframes kenburns {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.04);
            }
          }
        `}</style>

        {!isFullscreen && (
          <div className="absolute bottom-4 right-4 z-20">
            <button
              onClick={toggleFullscreen}
              className="rounded-lg bg-black/45 px-4 py-2 text-sm text-white transition hover:bg-black/65"
            >
              Enter Fullscreen
            </button>
          </div>
        )}

        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
          <div className="flex gap-1">
            {slides.map((slide, index) => (
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
