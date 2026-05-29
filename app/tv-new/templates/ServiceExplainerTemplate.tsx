'use client';

import type { TVSlide } from '../content';
import { Bullet, GlassPanel, TwoColumnSlideShell } from './shared';

export function ServiceExplainerTemplate({ slide, locale }: { slide: TVSlide; locale: 'de' | 'en' }) {
  return (
    <TwoColumnSlideShell slide={slide} compactHeadline>
      <div className="mt-8 grid max-w-[1200px] grid-cols-[1fr_0.78fr] gap-5">
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
    </TwoColumnSlideShell>
  );
}
