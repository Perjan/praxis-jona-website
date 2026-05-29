'use client';

import type { TVSlide } from '../content';
import { Bullet, GlassPanel, TwoColumnSlideShell } from './shared';

export function OverviewNavigationTemplate({ slide }: { slide: TVSlide }) {
  const features = slide.features?.slice(0, 6);

  return (
    <TwoColumnSlideShell slide={slide} compactHeadline={Boolean(features?.length)}>
      {features?.length ? (
        <div className="mt-10 grid max-w-[1260px] grid-cols-3 gap-5">
          {features.map((feature) => (
            <GlassPanel key={feature.title} className="min-h-[168px] p-6">
              <p className="font-serif text-[42px] leading-[0.98] text-[#0D322B]">{feature.title}</p>
              {feature.text && <p className="mt-4 text-[29px] font-semibold leading-[1.08] text-[#45665E]">{feature.text}</p>}
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
