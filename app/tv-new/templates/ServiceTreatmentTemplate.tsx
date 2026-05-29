'use client';

import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import type { TVSlide } from '../content';
import { BackgroundSlide, GlassPanel, Headline, QrBlock } from './shared';

export function ServiceTreatmentTemplate({ slide }: { slide: TVSlide }) {
  return (
    <BackgroundSlide slide={slide}>
      <div className="grid h-full grid-cols-[minmax(0,1fr)_660px] gap-12 px-16 py-14">
        <div className="flex min-w-0 flex-col">
          <div className="tv-enter tv-enter-1">
            <Headline slide={slide} compact />
          </div>

          <div className="tv-enter tv-enter-2 mt-10 grid w-full grid-cols-3 gap-5">
            {slide.features?.slice(0, 3).map((feature) => (
              <GlassPanel key={feature.title} className="min-h-[170px] bg-[#FFFDF8] p-6 shadow-[0_18px_45px_-34px_rgba(13,50,43,0.42)] backdrop-blur-0">
                <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#DDE4DF] text-[#59766E]">
                  <FaCheckCircle className="h-[27px] w-[27px]" aria-hidden="true" />
                </div>
                <p className="mt-5 text-[25px] font-bold uppercase leading-none tracking-[0.14em] text-[#5B746D]">{feature.title}</p>
                {feature.text && <p className="mt-4 font-serif text-[36px] leading-[1.03] text-[#0D322B]">{feature.text}</p>}
              </GlassPanel>
            ))}
          </div>
        </div>

        <div className="grid min-h-0 grid-rows-[minmax(0,1fr)_auto] gap-7">
          {slide.visualImage && (
            <div className="tv-enter tv-enter-2 relative min-h-0 overflow-hidden rounded-[8px] border border-[#0D322B]/12 bg-[#FFFDF8] shadow-[0_26px_80px_-42px_rgba(13,50,43,0.48)]">
              <Image
                src={slide.visualImage}
                alt=""
                fill
                sizes="660px"
                className="object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0D322B]/20 via-white/0 to-[#FBF6EE]/20" />
            </div>
          )}
          <div className="tv-enter tv-enter-3 flex justify-end pb-7">
            <QrBlock url={slide.qrUrl} label={slide.qrLabel} displayUrl={slide.displayUrl} />
          </div>
        </div>
      </div>
    </BackgroundSlide>
  );
}
