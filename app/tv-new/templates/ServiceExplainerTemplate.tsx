'use client';

import type { TVSlide } from '../content';
import { Bullet, GlassPanel, TwoColumnSlideShell } from './shared';

export function ServiceExplainerTemplate({ slide, locale }: { slide: TVSlide; locale: 'de' | 'en' }) {
  return (
    <TwoColumnSlideShell slide={slide} compactHeadline>
      <div className="mt-9 grid max-w-[1230px] grid-cols-[1fr_0.82fr] gap-6">
        <GlassPanel className="p-6">
          <p className="text-[29px] font-bold uppercase leading-none tracking-[0.09em] text-[#144D42]">{locale === 'en' ? 'Current guide' : 'Aktuelle Orientierung'}</p>
          <div className="mt-5 grid grid-cols-2 gap-4">
            {slide.prices?.map((item) => (
              <div key={`${item.label}-${item.price}`} className="min-h-[150px] rounded-[8px] border border-[#0D322B]/10 bg-white/72 p-5">
                <p className="hyphens-auto break-words text-[27px] font-semibold leading-[1.05] text-[#0D322B]">{item.label}</p>
                <p className="mt-3 font-serif text-[52px] leading-none text-[#144D42]">{item.price}</p>
                {item.note && <p className="mt-3 text-[24px] font-medium leading-[1.08] text-[#5D6F66]">{item.note}</p>}
              </div>
            ))}
          </div>
        </GlassPanel>
        <GlassPanel className="p-6">
          <p className="text-[29px] font-bold uppercase leading-none tracking-[0.09em] text-[#144D42]">{locale === 'en' ? 'Suitable for' : 'Geeignet für'}</p>
          <ul className="mt-4 space-y-5">
            {slide.bullets?.slice(0, 4).map((bullet) => (
              <Bullet key={bullet}>{bullet}</Bullet>
            ))}
          </ul>
        </GlassPanel>
      </div>
    </TwoColumnSlideShell>
  );
}
