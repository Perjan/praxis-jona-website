'use client';

import type { TVSlide } from '../content';
import { FaCheckCircle } from 'react-icons/fa';
import { Bullet, GlassPanel, TwoColumnSlideShell } from './shared';

export function OverviewNavigationTemplate({ slide }: { slide: TVSlide }) {
  const features = slide.features?.slice(0, 6);

  return (
    <TwoColumnSlideShell slide={slide} compactHeadline={Boolean(features?.length)}>
      {features?.length ? (
        <div className="mt-10 grid w-full grid-cols-2 gap-5">
          {features.map((feature) => (
            <GlassPanel key={feature.title} className="min-h-[178px] bg-[#FFFDF8] p-7 shadow-[0_18px_45px_-34px_rgba(13,50,43,0.42)] backdrop-blur-0">
              <div className="flex items-start gap-7">
                <div className="mt-1 flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-[#DDE4DF] text-[#59766E]">
                  <FaCheckCircle className="h-[34px] w-[34px]" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-[29px] font-bold uppercase leading-none tracking-[0.16em] text-[#5B746D]">{feature.title}</p>
                  {feature.text && <p className="mt-6 font-serif text-[42px] leading-[1.02] text-[#0D322B]">{feature.text}</p>}
                </div>
              </div>
            </GlassPanel>
          ))}
        </div>
      ) : (
        <GlassPanel className="mt-10 max-w-[860px] p-7">
          <ul className="space-y-5">
            {slide.bullets?.slice(0, 3).map((bullet) => (
              <Bullet key={bullet}>{bullet}</Bullet>
            ))}
          </ul>
        </GlassPanel>
      )}
    </TwoColumnSlideShell>
  );
}
