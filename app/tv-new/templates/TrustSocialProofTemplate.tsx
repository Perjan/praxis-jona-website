'use client';

import Image from 'next/image';
import { FaGoogle, FaInstagram, FaStar } from 'react-icons/fa';
import type { TVSlide } from '../content';
import { BackgroundSlide, BrandTop, Bullet, GlassPanel, Headline, Kicker, QrBlock } from './shared';

export function TrustSocialProofTemplate({ slide }: { slide: TVSlide }) {
  if (slide.kind === 'team') {
    return <TeamTrustSlide slide={slide} />;
  }

  if (slide.kind === 'app') {
    return <AppTrustSlide slide={slide} />;
  }

  return <CenteredTrustSlide slide={slide} />;
}

function CenteredTrustSlide({ slide }: { slide: TVSlide }) {
  return (
    <BackgroundSlide slide={slide}>
      <div className="relative h-full px-16 py-12">
        <DynamicBackgroundIcon slide={slide} />
        <div className="tv-enter tv-enter-2 flex h-full items-center justify-center pb-20">
          <div className="max-w-[1240px] text-center">
            {slide.kind === 'review' ? (
              <div className="mb-7 flex justify-center gap-4 text-[58px] text-[#F9C74F]">
                {Array.from({ length: slide.reviewStars ?? 5 }).map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
            ) : (
              <div className="mb-7 flex justify-center text-[86px] text-[#0D322B]">
                <FaInstagram />
              </div>
            )}
            <Kicker>{slide.kicker}</Kicker>
            <h1 className="mx-auto mt-5 max-w-[1180px] whitespace-pre-line font-serif text-[82px] font-semibold leading-[1.02] text-[#0D322B]">
              {slide.title}
            </h1>
            {slide.subtitle && <p className="mx-auto mt-7 max-w-[980px] text-[31px] font-medium leading-[1.22] text-[#144D42]">{slide.subtitle}</p>}
            {slide.handle && <p className="mt-7 text-[58px] font-bold leading-none text-[#144D42]">{slide.handle}</p>}
          </div>
        </div>
        <div className="tv-enter tv-enter-4 absolute bottom-16 right-16">
          <QrBlock url={slide.qrUrl} label={slide.qrLabel} displayUrl={slide.displayUrl} />
        </div>
      </div>
    </BackgroundSlide>
  );
}

function DynamicBackgroundIcon({ slide }: { slide: TVSlide }) {
  if (!slide.backgroundIcon) {
    return null;
  }

  const Icon = slide.backgroundIcon === 'google' ? FaGoogle : FaInstagram;

  return (
    <Icon
      aria-hidden="true"
      className="pointer-events-none absolute right-[230px] top-[160px] text-[460px] text-[#0D322B]/[0.055]"
    />
  );
}

function AppTrustSlide({ slide }: { slide: TVSlide }) {
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
                    alt={`App Screenshot ${index + 1}`}
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

function TeamTrustSlide({ slide }: { slide: TVSlide }) {
  return (
    <BackgroundSlide slide={slide}>
      <div className="flex h-full flex-col px-16 py-12">
        <div className="tv-enter tv-enter-1">
          <BrandTop />
        </div>
        <div className="mt-9 grid grid-cols-[minmax(0,0.9fr)_360px] gap-10">
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
