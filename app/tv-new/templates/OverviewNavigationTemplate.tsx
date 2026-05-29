'use client';

import type { TVSlide } from '../content';
import { Bullet, GlassPanel, TwoColumnSlideShell } from './shared';

export function OverviewNavigationTemplate({ slide }: { slide: TVSlide }) {
  const features = slide.features?.slice(0, 6);

  return (
    <TwoColumnSlideShell slide={slide} compactHeadline={Boolean(features?.length)}>
      {features?.length ? (
        <div className="mt-8 grid max-w-[1200px] grid-cols-3 gap-4">
          {features.map((feature) => (
            <GlassPanel key={feature.title} className="min-h-[142px] p-5">
              <p className="font-serif text-[34px] leading-none text-[#0D322B]">{feature.title}</p>
              {feature.text && <p className="mt-3 text-[22px] font-semibold leading-tight text-[#45665E]">{feature.text}</p>}
            </GlassPanel>
          ))}
        </div>
      ) : (
        <GlassPanel className="mt-9 max-w-[1100px] p-6">
          <ul className="grid grid-cols-3 gap-4">
            {slide.bullets?.slice(0, 3).map((bullet) => (
              <Bullet key={bullet}>{bullet}</Bullet>
            ))}
          </ul>
        </GlassPanel>
      )}
    </TwoColumnSlideShell>
  );
}
